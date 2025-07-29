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
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200 w-full max-w-[700px] mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        <User2 className="w-5 h-5 text-blue-600" /> Wallet Details
      </h2>

      <div className="space-y-3 text-sm text-gray-700 flex-nowrap">
        <p className="flex items-center gap-2">
          <CircleCheck className="w-4 h-4 text-green-600" />
          <span className="flex flex-wrap">
            <strong>Status : </strong><span className="">{status}</span>
          </span>
        </p>

        <p className="flex items-center gap-2 break-all flex-nowrap">
          <Wallet className="w-4 h-4 text-purple-600" />
          <span className="flex flex-wrap">
            <strong>Wallet Address : </strong> {address}
          </span>
        </p>

        <p className="flex items-center gap-2 break-all flex-nowrap">
          <LinkIcon className="w-4 h-4 text-blue-500" />
          <span className="flex flex-wrap">
            <strong>CAIP Address : </strong> {caipAddress}
          </span>
        </p>

        {connector?.name && (
          <p className="flex items-center gap-2 flex-nowrap">
            <PlugZap className="w-4 h-4 text-orange-500" />
            <span className="flex flex-wrap">
              <strong>Connected Through : </strong> {connector.name}
            </span>
          </p>
        )}

        {embeddedWalletInfo?.user?.username && (
          <p className="flex items-center gap-2 flex-nowrap">
            <Mail className="w-4 h-4 text-red-500" />
            <span className="flex flex-wrap">
              <strong>Username : </strong> {embeddedWalletInfo.user.username}
            </span>
          </p>
        )}

        {embeddedWalletInfo?.user?.email && (
          <>
            <p className="flex items-center gap-2 flex-nowrap">
              <Mail className="w-4 h-4 text-red-500" />
              <span className="flex flex-wrap">
                <strong>Email : </strong> {embeddedWalletInfo.user.email}
              </span>
            </p>
            <p className="flex items-center gap-2 flex-nowrap">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <span className="flex flex-wrap">
                <strong>Account Type : </strong> {embeddedWalletInfo.accountType}
              </span>
            </p>
            <p className="flex items-center gap-2 flex-nowrap">
              <KeyRound className="w-4 h-4 text-yellow-500" />
              <span className="flex flex-wrap">
                <strong>Auth Provider : </strong> {embeddedWalletInfo.authProvider}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
