import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import date from "date-fns";
//schema
// model Favorite {
//   id          Int      @id @default(autoincrement())
//   title       String
//   url         String
//   thumbUrl    String
//   imgUrl      String
//   price       Int
//   deliveryMethod String
//   searchTerm  String
//   ownerId     String
//   createdAt   DateTime @default(now())
//   owner       User     @relation(fields: [ownerId], references: [id])
//   @@index([ownerId])
// }

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
      })
    )
    .mutation(async (opts) => {
      const { ctx, input } = opts;
      await ctx.prisma.favorite.create({
        data: { ...input, ownerId: ctx.session.user.id },
      });
    }),
  deleteFavorite: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async (opts) => {
      const { ctx, input } = opts;
      await ctx.prisma.favorite.delete({
        where: { id: input.id },
      });
    }),
  //get favorites with pagination
  getFavorites: protectedProcedure
    .input(z.object({ page: z.number() }))
    .query(async (opts) => {
      const { ctx, input } = opts;
      const favorites = await ctx.prisma.favorite.findMany({
        where: { ownerId: ctx.session.user.id },
        orderBy: { createdAt: "desc" },
        skip: (input.page - 1) * 10,
        take: 10,
      });
      return favorites;
    }),
});
