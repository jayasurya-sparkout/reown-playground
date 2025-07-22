'use client'

import UserInfoCard from '@/components/UserInfoCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {

  return (
    <div className="p-10 flex flex-col gap-4 relative">
      <Link href="/walletactions" className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black absolute top-4 right-4 m-2.5">
        <span className="text-sm font-medium">Wallet Actions</span>
        <ArrowRight size={20} />
      </Link>
      <h1 className="text-xl font-bold">Wallet Control Panel</h1>
      <appkit-button />
      <UserInfoCard />
    </div>
  )
}
