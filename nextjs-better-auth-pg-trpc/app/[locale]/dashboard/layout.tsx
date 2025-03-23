'use client';

import { authClient } from '@/lib/auth.client';
import { redirect } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = authClient.useSession();

  if (!session && isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect('/');
  }

  return <div>{children}</div>;
}
