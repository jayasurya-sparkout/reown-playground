'use client'

import UserInfoCard from '@/components/UserInfoCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="p-10 flex flex-col gap-4 relative">
      <h1 className="text-xl font-bold">Wallet Control Panel</h1>
      <appkit-button />
      <UserInfoCard />
    </div>
  )
}
