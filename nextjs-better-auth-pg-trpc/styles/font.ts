import { Geist, Geist_Mono, Golos_Text, Public_Sans } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const golosText = Golos_Text({
  variable: '--font-golos-text',
  subsets: ['latin'],
});

export const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export default { geistSans, geistMono, golosText, publicSans };
