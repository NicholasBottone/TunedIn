import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { env } from "~/env";

export const albumRouter = createTRPCRouter({
  getAlbumBySearch: publicProcedure
  .input(z.object({ query: z.string() }))
  .query(async ({ ctx, input }) => {
    return ctx.db.album.findMany({
      where: { 
        name: {
          contains: input.query
        }

      }
    });
  }),

  getAlbumById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.album.findUniqueOrThrow({
        where: { id: input.id }
      });
    })
});
