import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Providers } from './providers';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Investment Dashboard',
  description: 'ETF Investment Strategy Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={null}>
            <Header />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}