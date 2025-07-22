'use client';

import { useAppKit } from "@reown/appkit/react";
import { useAccount, useDisconnect } from 'wagmi';
import { ArrowLeft, Wallet, Repeat, Send, LogOut, User } from 'lucide-react';
import Link from 'next/link';

export default function WalletActions() {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center relative px-4">

      <Link
        href="/"
        className="absolute top-2 left-2 flex items-center gap-2 text-gray-600 hover:text-black transition m-2.5"
      >
        <ArrowLeft size={20} />
        <span className="font-medium text-sm">Back</span>
      </Link>

      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl space-y-4 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
          {isConnected ? "Wallet Actions" : "Welcome"}
        </h2>

        {!isConnected ? (
          <button
            className="bg-black w-full flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            onClick={() => open({ view: 'Connect' })}
          >
            <Wallet size={18} /> Connect Wallet
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <button
              className="bg-blue-600 w-full flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              onClick={() => open({ view: 'Account' })}
            >
              <User size={18} /> View Account
            </button>

            <button
              className="bg-green-600 w-full flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
              onClick={() =>
                open({
                  view: 'Swap',
                  arguments: {
                    amount: '10',
                    fromToken: 'USDC',
                    toToken: 'ETH',
                  },
                })
              }
            >
              <Repeat size={18} /> Swap Tokens
            </button>

            <button
              className="bg-purple-600 w-full flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition cursor-pointer"
              onClick={() => open({ view: 'WalletSend' })}
            >
              <Send size={18} /> Send Tokens
            </button>

            <button
              className="bg-red-600 w-full flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
              onClick={() => disconnect()}
            >
              <LogOut size={18} /> Disconnect
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
