import type { ReactNode } from 'react';
import '@/styles/globals.css';
import RootProvider from '@/app/provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'NextJS + BetterAuth + Postgres + TRPC',
    template: '%s | NextJS + BetterAuth + Postgres + TRPC',
  },
  description: 'NextJS + BetterAuth + Postgres + TRPC',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <RootProvider>{children}</RootProvider>;
}
