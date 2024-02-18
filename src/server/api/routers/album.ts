import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const albumRouter = createTRPCRouter({
  searchAlbum: publicProcedure
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
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.album.findUnique({
        where: { id: input.id },
      });
    }),
});
