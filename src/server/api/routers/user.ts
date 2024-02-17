import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const reviewRouter = createTRPCRouter({
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: { id: input.id },
        include: {
          reviews: true,
        },
      });
    }),

  getListenedToOverlap: protectedProcedure
    .input(z.object({ targetUserId: z.string() }))
    .query(async ({ ctx, input }) => {
      const targetUser = await ctx.db.user.findUnique({
        where: { id: input.targetUserId },
        include: {
          listenedTo: true,
        },
      });
      if (!targetUser) {
        throw new Error("User not found");
      }

      const currentUser = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
        include: {
          listenedTo: true,
        },
      });
      if (!currentUser) {
        throw new Error("Current user not found");
      }

      const listenedToOverlap = currentUser.listenedTo.filter((album) =>
        targetUser.listenedTo.includes(album),
      );

      return listenedToOverlap;
    }),

  followUser: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: input.userId },
      });
      if (!user) {
        throw new Error("User not found");
      }

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
      const user = await ctx.db.user.findUnique({
        where: { id: input.userId },
      });
      if (!user) {
        throw new Error("User not found");
      }

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
});
