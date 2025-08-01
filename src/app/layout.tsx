import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const inter = Inter({ subsets: ['latin'] })

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
  const cookies = headersObj.get('cookie')

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>
          <SidebarProvider className='relative max-h-screen'
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            <AppSidebar variant="inset" />
            <SidebarInset>
              <SiteHeader />
              <div className="flex flex-1 flex-col overflow-y-scroll thin-scrollbar">
                <div className="@container/main flex flex-1 flex-col gap-4 h-auto">
                  <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6 h-full">
                    {children}
                  </div>
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ContextProvider>
      </body>
    </html>
  )
}