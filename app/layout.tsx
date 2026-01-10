import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/parts/navbar';
import { BackUpButton } from '@/components/ui/back-up-button';

export const metadata: Metadata = {
  title: {
    template: 'Kodie Sales | %s',
    default: 'Portifolio'
  },
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
      <head>
        <meta
          name='robots'
          content='noai, index, follow, noimageindex'
        />
        <meta
          name='googlebot'
          content='noai, index, follow, noimageindex'
        />
        <meta
          name='bingbot'
          content='noai'
        />
        <meta
          name='anthropic-ai'
          content='noai'
        />
        <meta
          name='openai'
          content='noai'
        />
        <meta
          name='perplexity-ai'
          content='noai'
        />
        <meta
          name='google-site-verification'
          content='eqg9h5KM_WmTBnO1lsSGfFGIpqTRw32FHZJeRJeFDj8'
        />
      </head>
      <body className='theme-data-color flex min-h-full flex-col antialiased'>
        <Navbar />
        <main className='window-border @container mt-5 flex-1'>
          {children}
          <BackUpButton />
        </main>
      </body>
    </html>
  );
}
