import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/parts/navbar';
import { BackUpButton } from '@/components/ui/back-up-button';

export const metadata: Metadata = {
  title: 'Kodie Sales | Portifolio',
  description: 'Portifolio de Kodie',
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
      <body className='theme-data-color flex min-h-full flex-col antialiased'>
        <Navbar />
        <main className='window-border mt-5 flex-1'>
          {children}
          <BackUpButton />
        </main>
      </body>
    </html>
  );
}
