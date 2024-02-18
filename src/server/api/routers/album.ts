import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { z } from "zod";
import { env } from "~/env";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const albumRouter = createTRPCRouter({
  searchAlbum: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/search",
        summary: "Search for albums",
      },
    })
    .input(z.object({ query: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.album.findMany({
        where: {
          name: {
            contains: input.query,
          },
        },
      });
    }),

  getAlbumById: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/:id",
        summary: "Get an album by ID",
      },
    })
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      let album = await ctx.db.album.findUniqueOrThrow({
        where: { id: input.id },
      });

      if (album.tracks.length === 0) {
        // Fetch tracks if they are not already loaded
        const spotify = SpotifyApi.withClientCredentials(
          env.SPOTIFY_CLIENT_ID,
          env.SPOTIFY_CLIENT_SECRET,
        );

        const spotifyAlbum = await spotify.albums.get(album.id);
        const tracks = spotifyAlbum.tracks.items.map((track) => track.name);

        album = await ctx.db.album.update({
          where: { id: album.id },
          data: {
            tracks: tracks,
          },
        });
      }

      return album;
    }),
});
