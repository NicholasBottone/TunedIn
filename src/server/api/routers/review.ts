import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const reviewRouter = createTRPCRouter({
  getReviewById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.review.findUnique({
        where: { id: input.id },
      });
    }),

  getReviewsByAlbumId: publicProcedure
    .input(z.object({ albumId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.review.findMany({
        where: { albumId: input.albumId },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        albumId: z.string(),
        rating: z.number().min(1).max(10),
        message: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const album = await ctx.db.album.findUnique({
        where: { id: input.albumId },
      });
      if (!album) {
        throw new Error("Album not found");
      }

      return ctx.db.review.create({
        data: {
          albumId: input.albumId,
          rating: input.rating,
          message: input.message,
          createdById: ctx.session.user.id,
        },
      });
    }),
});
