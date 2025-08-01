import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ProviderWrapper from '@/components/ProviderWrapper';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

import { headers } from 'next/headers';
import ContextProvider from '@/context';

export const metadata: Metadata = {
  title: 'Wallet Control Panel',
  description: 'A developer-friendly playground to explore wallet features with Reown AppKit',
  icons: {
    icon: '/favicon.svg',
  },
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const headersObj = await headers();
  const cookies = headersObj.get('cookie');

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <ContextProvider cookies={cookies}>
          <ProviderWrapper>
            {children}
          </ProviderWrapper>
        </ContextProvider>
      </body>
    </html>
  )
}