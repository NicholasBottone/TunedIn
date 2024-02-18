import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { env } from "~/env";

export const userRouter = createTRPCRouter({
  getSelf: protectedProcedure
    .meta({
      openapi: { method: "GET", path: "/me", summary: "Get the current user" },
    })
    .query(async ({ ctx }) => {
      const lastSync = await ctx.db.user.findUniqueOrThrow({
        where: { id: ctx.session.user.id },
        select: {
          lastSpotifySync: true,
        },
      });

      if (
        !lastSync.lastSpotifySync ||
        lastSync.lastSpotifySync?.getDate() < Date.now() - 1000 * 60 * 60 * 24
      ) {
        const account = await ctx.db.account.findFirstOrThrow({
          where: { userId: ctx.session.user.id },
        });

        const spotify = SpotifyApi.withAccessToken(env.SPOTIFY_CLIENT_ID, {
          access_token: account.access_token!,
          refresh_token: account.refresh_token!,
          expires_in: account.expires_at! * 1000 - Date.now(),
          token_type: "Bearer",
        });

        let topTracks;
        try {
          topTracks = await spotify.currentUser.topItems("tracks");
        } catch (error) {
          // Token is expired, need to delete the account and re-authenticate
          await ctx.db.account.delete({
            where: { id: account.id },
          });

          throw new Error("Token expired, please re-authenticate");
        }

        await ctx.db.user.update({
          where: { id: ctx.session.user.id },
          data: {
            listenedTo: {
              connectOrCreate: topTracks.items.map((track) => {
                return {
                  where: { id: track.album.id },
                  create: {
                    id: track.album.id,
                    genres: track.album.genres ?? [],
                    image: track.album.images[0]?.url,
                    name: track.album.name,
                    popularity: track.album.popularity ?? track.popularity,
                    releaseDate: track.album.release_date,
                    artist: track.album.artists[0]!.name,
                    tracks: [],
                  },
                };
              }),
            },
            lastSpotifySync: new Date(),
          },
        });
      }

      return ctx.db.user.findUniqueOrThrow({
        where: { id: ctx.session.user.id },
        include: {
          listenedTo: true,
          reviews: true,
        },
      });
    }),

  getUserById: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/user/:id",
        summary: "Get a user by their id",
      },
    })
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
    .meta({
      openapi: {
        method: "GET",
        path: "/user/:id/overlap",
        summary: "Get albums that both users have listened to",
      },
    })
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
    .meta({
      openapi: {
        method: "POST",
        path: "/user/:id/follow",
        summary: "Follow a user",
      },
    })
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
    .meta({
      openapi: {
        method: "POST",
        path: "/user/:id/unfollow",
        summary: "Unfollow a user",
      },
    })
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

  getSocialReviewsFeed: protectedProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/feed",
        summary: "Get reviews from users you are following",
      },
    })
    .query(async ({ ctx }) => {
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
});
