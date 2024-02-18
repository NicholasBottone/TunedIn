import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { z } from "zod";
import { env } from "~/env";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const playlistRouter = createTRPCRouter({
  getPlaylistById: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/:id",
        summary: "Get a playlist by ID",
      },
    })
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      let playlist = await ctx.db.playlist.findUniqueOrThrow({
        where: { id: input.id },
        include: {
          albums: true,
        },
      });

      if (playlist.lastUpdated.getTime() < Date.now() - 1000 * 60 * 60 * 24) {
        const spotify = SpotifyApi.withClientCredentials(
          env.SPOTIFY_CLIENT_ID,
          env.SPOTIFY_CLIENT_SECRET,
        );

        const spotifyPlaylist = await spotify.playlists.getPlaylistItems(
          playlist.id,
        );
        const albums = spotifyPlaylist.items.map((item) => {
          const album = item.track.album;
          album.popularity ??= item.track.popularity;
          return album;
        });

        playlist = await ctx.db.playlist.update({
          where: { id: playlist.id },
          data: {
            albums: {
              set: [],
            },
          },
          include: {
            albums: true,
          },
        });

        playlist = await ctx.db.playlist.update({
          where: { id: playlist.id },
          data: {
            albums: {
              connectOrCreate: albums.map((album) => ({
                where: { id: album.id },
                create: {
                  id: album.id,
                  genres: album.genres ?? [],
                  image: album.images[0]?.url,
                  name: album.name,
                  popularity: album.popularity,
                  artist: album.artists[0]!.name,
                  tracks: [],
                  releaseDate: album.release_date,
                },
              })),
            },
            lastUpdated: new Date(),
          },
          include: {
            albums: true,
          },
        });
      }

      return playlist;
    }),
});
