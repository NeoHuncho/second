import { createTRPCRouter } from "./trpc";
import { userRouter } from "./routers/user";
import { favoritesRouter } from "./routers/favorites";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  favorites: favoritesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
