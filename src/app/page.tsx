'use client'
import { useAccount } from 'wagmi';

export default function Home() {
  const { address, isConnected } = useAccount()
  return (
    <main className="p-10 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Reown Playground</h1>
      <appkit-button />
      {isConnected && <p>Connected: {address}</p>}
    </main>
  )
}
