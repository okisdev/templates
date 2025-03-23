import BodyProvider from '@/components/root/provider';
import { cn } from '@/lib/utils';
import font from '@/styles/font';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';

type Props = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export default async function RootLayout(props: Props) {
  const { params, children } = props;

  const { locale } = params;

  const messages = await getMessages();

  const dev = process.env.NODE_ENV === 'development';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name='apple-mobile-web-app-title' content='Portal' />
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='white' />
        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='black' />
        {dev && <script src='https://unpkg.com/react-scan/dist/auto.global.js' crossOrigin='anonymous' />}
        <Script src='https://unpkg.com/react-scan/dist/install-hook.global.js' strategy='beforeInteractive' />
      </head>
      <body className={cn(font.geistSans.className, 'antialiased')}>
        <NextIntlClientProvider messages={messages}>
          <BodyProvider>{children}</BodyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
