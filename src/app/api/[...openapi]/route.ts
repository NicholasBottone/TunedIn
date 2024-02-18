import { createOpenApiNextHandler } from "trpc-openapi";

import { appRouter } from "~/server/api/root";
import { createContext } from "~/trpc/server";

export default createOpenApiNextHandler({
  router: appRouter,
  createContext,
});
