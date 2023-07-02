import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const favoritesRouter = createTRPCRouter({
  createFavorite: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        url: z.string(),
        thumbUrl: z.string(),
        imgUrl: z.string(),
        price: z.number(),
        deliveryMethod: z.string(),
        searchTerm: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { ctx, input } = opts;
      const res = await ctx.prisma.favorite.create({
        data: { ...input, ownerId: ctx.session.user.id },
      });
      return res;
    }),
  deleteFavorite: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async (opts) => {
      const { ctx, input } = opts;
      await ctx.prisma.favorite.delete({
        where: { id: input.id },
      });
    }),
  getFavorites: protectedProcedure
    .input(z.object({ cursor: z.number().nullish(), take: z.number() }))
    .query(async (opts) => {
      const { ctx, input } = opts;
      const items = await ctx.prisma.favorite.findMany({
        where: { ownerId: ctx.session.user.id },
        orderBy: { createdAt: "desc" },
        cursor: input.cursor ? { id: input.cursor } : undefined,
        take: input.take,
      });
      let nextCursor = undefined;
      const nextItem = items.pop(); // return the last item from the array
      nextCursor = nextItem?.id;
      return {
        items,
        nextCursor,
      };
    }),
});
