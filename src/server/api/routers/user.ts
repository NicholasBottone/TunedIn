import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { env } from "~/env";

export const userRouter = createTRPCRouter({
  getSelf: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findUniqueOrThrow({
      where: { id: ctx.session.user.id },
      include: {
        listenedTo: true,
        reviews: true,
      },
    });
  }),

  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: { id: input.id },
        include: {
          reviews: true,
          listenedTo: true,
        },
      });
    }),

  getListenedToOverlap: protectedProcedure
    .input(z.object({ targetUserId: z.string() }))
    .query(async ({ ctx, input }) => {
      const targetUser = await ctx.db.user.findUniqueOrThrow({
        where: { id: input.targetUserId },
        include: {
          listenedTo: true,
        },
      });

      const currentUser = await ctx.db.user.findUniqueOrThrow({
        where: { id: ctx.session.user.id },
        include: {
          listenedTo: true,
        },
      });

      const listenedToOverlap = currentUser.listenedTo.filter((album) =>
        targetUser.listenedTo.includes(album),
      );

      return listenedToOverlap;
    }),

  followUser: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.findUniqueOrThrow({
        where: { id: input.userId },
      });

      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          following: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
    }),

  unfollowUser: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.findUniqueOrThrow({
        where: { id: input.userId },
      });

      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          following: {
            disconnect: {
              id: input.userId,
            },
          },
        },
      });
    }),

  getSocialReviewsFeed: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUniqueOrThrow({
      where: { id: ctx.session.user.id },
      include: {
        following: true,
      },
    });

    const followingIds = user.following.map((user) => user.id);

    return ctx.db.review.findMany({
      where: {
        createdById: {
          in: followingIds,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        album: true,
        createdBy: true,
      },
    });
  }),

  refreshTopTracks: protectedProcedure.mutation(async ({ ctx }) => {
    const account = await ctx.db.account.findFirstOrThrow({
      where: { userId: ctx.session.user.id },
    });

    console.log(account);

    const spotify = SpotifyApi.withAccessToken(env.SPOTIFY_CLIENT_ID, {
      access_token: account.access_token!,
      refresh_token: account.refresh_token!,
      expires_in: account.expires_at!,
      token_type: "Bearer",
    });

    const topTracks = await spotify.currentUser.topItems("tracks");

    await ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: {
        listenedTo: {
          connectOrCreate: topTracks.items.map((track) => {
            return {
              where: { id: track.album.id },
              create: {
                id: track.album.id,
                genres: track.album.genres,
                image: track.album.images[0]?.url,
                name: track.album.name,
                popularity: track.album.popularity,
                releaseDate: track.album.release_date,
                artist: track.album.artists[0]!.name,
                tracksCount: track.album.total_tracks,
              },
            };
          }),
        },
      },
    });
  }),
});
