'use client'

import { useAppKitAccount } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { useEffect } from "react";

import { Mail, Wallet, ShieldCheck, Link as LinkIcon, KeyRound, User2, CircleCheck, PlugZap } from "lucide-react";

export default function UserInfoCard() {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount();

  const { connector } = useAccount();

  useEffect(() => {
    console.log('User Info:', embeddedWalletInfo)
    if (connector) {
      console.log('Connected with:', connector.name);
    }
  }, [connector]);

  if (!isConnected) return <p className="text-red-500">Please connect your wallet or login</p>
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200 w-full max-w-[600px] mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        <User2 className="w-5 h-5 text-blue-600" /> Wallet Details
      </h2>

      <div className="space-y-3 text-sm text-gray-700">
        <p className="flex items-center gap-2">
          <CircleCheck className="w-4 h-4 text-green-600" />
          <p><strong>Status :</strong> {status}</p>
        </p>

        <p className="flex items-center gap-2 break-all">
          <Wallet className="w-4 h-4 text-purple-600" />
          <strong>Wallet Address :</strong> {address}
        </p>

        <p className="flex items-center gap-2 break-all">
          <LinkIcon className="w-4 h-4 text-blue-500" />
          <strong>CAIP Address :</strong> {caipAddress}
        </p>

        {connector?.name && (
          <p className="flex items-center gap-2">
            <PlugZap className="w-4 h-4 text-orange-500" />
            <strong>Connected Through :</strong> {connector.name}
          </p>
        )}

        {embeddedWalletInfo?.user?.username && (
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-red-500" />
            <strong>Username :</strong> {embeddedWalletInfo.user.username}
          </p>
        )}

        {embeddedWalletInfo?.user?.email && (
          <>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" />
              <strong>Email:</strong> {embeddedWalletInfo.user.email}
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <strong>Account Type:</strong> {embeddedWalletInfo.accountType}
            </p>
            <p className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-yellow-500" />
              <strong>Auth Provider:</strong> {embeddedWalletInfo.authProvider}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
