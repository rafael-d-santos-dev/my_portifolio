import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rafael-douglas.vercel.app'),
  title: 'Rafael Douglas | Freelance Web Designer & Developer',
  description:
    'Explore the portfolio of Rafael Douglas, an aspiring freelance web designer and developer building modern, responsive websites and digital experiences for small businesses. Available for remote projects worldwide.',
  keywords: [
    'web designer',
    'freelance developer',
    'small business websites',
    'responsive web design',
    'Rafael Douglas',
  ],
  openGraph: {
    title: 'Rafael Douglas | Freelance Web Designer & Developer',
    description:
      'Aspiring freelance web designer and developer building modern, responsive websites for small businesses. Available for remote projects worldwide.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Douglas | Freelance Web Designer & Developer',
    description:
      'Aspiring freelance web designer and developer building modern, responsive websites for small businesses. Available for remote projects worldwide.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
