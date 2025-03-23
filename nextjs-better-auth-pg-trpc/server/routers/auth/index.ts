import { createTRPCRouter, publicProcedure } from '@/server/trpc';

export const authRouter = createTRPCRouter({
  session: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
});
