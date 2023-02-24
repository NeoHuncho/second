import { createTRPCRouter, protectedProcedure } from "../trpc";
import date from "date-fns";

export const userRouter = createTRPCRouter({
  verifyEmail: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.update({
      where: { id: ctx.session.user.id },
      data: { emailVerified: date.format(new Date(), "dd/mm/YYYY") },
    });
    return user;
  }),
});
