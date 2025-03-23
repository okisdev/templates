'use client';

// import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
// import { Monitoring } from 'react-scan/monitoring/next';

export default function BodyProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' value={{ light: 'light', dark: 'dark' }} disableTransitionOnChange>
      {children}

      {/* <Toaster richColors />

      <Monitoring
        url='https://monitoring.react-scan.com/api/v1/ingest'
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        apiKey={process.env.NEXT_PUBLIC_REACT_SCAN_API_KEY!}
        commit={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
        branch={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}
      /> */}
    </ThemeProvider>
  );
}
