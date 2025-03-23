'use client';

import { authClient } from '@/lib/auth.client';
import { api } from '@/utils/trpc/client';

export default function DashboardPage() {
  const { data: session, isPending, error } = authClient.useSession();

  const { data: userSession } = api.auth.session.useQuery();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>auth session: {JSON.stringify(session, null, 2)}</pre>
      <pre>trpc session: {JSON.stringify(userSession, null, 2)}</pre>
    </div>
  );
}
