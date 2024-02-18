import { reviewRouter } from "~/server/api/routers/review";
import { userRouter } from "~/server/api/routers/user";
import { createTRPCRouter } from "~/server/api/trpc";
import { albumRouter } from "~/server/api/routers/album";
import { playlistRouter } from "./routers/playlist";

import { generateOpenApiDocument } from "trpc-openapi";
import { env } from "~/env";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  review: reviewRouter,
  user: userRouter,
  album: albumRouter,
  playlist: playlistRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// generate OpenAPI document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "TunedIn API",
  version: "1.0.0",
  baseUrl: `${env.NEXTAUTH_URL}/api`,
});
