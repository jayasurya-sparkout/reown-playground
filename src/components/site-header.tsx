'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export function SiteHeader() {
  const pathname = usePathname();

  const segments = pathname
    .split('/')
    .filter(Boolean);

  const last = segments[segments.length - 1] || 'Home';

  const pageTitle = last
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 lg:px-6 transition-[width,height]">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />
      <h1 className="text-base font-medium">{pageTitle}</h1>
    </header>
  );
}
