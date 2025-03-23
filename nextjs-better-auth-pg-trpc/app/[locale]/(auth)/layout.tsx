'use client';

import { authClient } from '@/lib/auth.client';
import { redirect } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = authClient.useSession();

  console.log('session', session);

  if (!session && isPending) {
    return <div>Loading...</div>;
  }

  if (session && !isPending) {
    redirect('/dashboard');
  }

  return <>{children}</>;
}
