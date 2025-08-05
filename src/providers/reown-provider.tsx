'use client'
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiAdapter } from '@/config'
import { mainnet, solana } from "@reown/appkit/networks"

const queryClient = new QueryClient()

createAppKit({
    adapters: [wagmiAdapter],
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    metadata: {
        name: 'Reown Play',
        description: 'Learning Web3 step-by-step',
        url: typeof window !== 'undefined' ? window.location.origin : '',
        icons: []
    },
    features: { analytics: true },
    networks: [ mainnet, solana ],
})

export function ReownProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
