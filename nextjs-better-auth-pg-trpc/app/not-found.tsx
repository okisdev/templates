import RootLayout from '@/components/root/layout';
import { Button } from '@/components/ui/button';
import { routing } from '@/i18n/routing';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <RootLayout params={{ locale: routing.defaultLocale }}>
      <main className='flex min-h-screen flex-col items-center justify-center p-8'>
        <div className='mx-auto flex max-w-xl flex-col items-center justify-center text-center'>
          <div className='mb-8 text-center'>
            <h1 className='bg-gradient-to-r from-primary to-primary/50 bg-clip-text font-bold text-8xl text-transparent'>404</h1>
            <p className='mt-4 font-semibold text-2xl text-foreground'>Page not found</p>
            <p className='mt-2 text-muted-foreground'>Oops! The page you're looking for seems to have wandered off. Let's help you find your way back.</p>
          </div>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <Button variant='outline' asChild>
              <Link href='/'>
                <Home className='mr-2 h-4 w-4' />
                Back to Home
              </Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='javascript:history.back()'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
