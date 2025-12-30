import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/parts/navbar';
import { BackUpButton } from '@/components/ui/back-up-button';

export const metadata: Metadata = {
  title: "Kodie's Portifolio",
  description: 'Portifolio de jogos de Kodie',
  icons: [
    {
      rel: 'icon',
      url: '/images/seo/favicon-light.png',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'icon',
      url: '/images/seo/favicon-dark.png',
      media: '(prefers-color-scheme: dark)'
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-BR'
      className='h-full'>
      <body className='antialiased h-full flex flex-col theme-color-love'>
        <Navbar />
        <main className='window-border mt-5 flex-1'>
          <p className='window-title'>Main</p>
          {children}
          <BackUpButton />
        </main>
      </body>
    </html>
  );
}
