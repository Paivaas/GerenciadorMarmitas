import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gerenciador de Marmitas',
  description: 'Projeto desenvolvido para aprendizado do Zustand | Julia Paiva',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className={`${geistSans.className} min-h-full flex flex-col`}>
        {' '}
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
