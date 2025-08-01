'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

export default function ProviderWrapper({
    children
}: Readonly<{
    children: React.ReactNode
}>) {

    const pathname = usePathname();
    
    return (
        <SidebarProvider className='relative max-h-screen'
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            {pathname !== '/login' && (
                <AppSidebar variant="inset" />
            )}
            <SidebarInset className='overflow-hidden'>
                {pathname !== "/login" && <SiteHeader />}
                <div className="flex flex-1 flex-col overflow-y-scroll thin-scrollbar">
                    <div className="@container/main flex flex-1 flex-col gap-4 h-auto">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6 h-full">
                            {children}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )

}