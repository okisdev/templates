import * as schema from '@/drizzle/schema';
import { db } from '@/lib/database'; // your drizzle instance
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      ...schema,
      user: schema.user,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      clientId: process.env.GITHUB_CLIENT_ID!,
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
