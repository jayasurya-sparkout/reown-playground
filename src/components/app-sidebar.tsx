"use client";

import * as React from "react";
import {
  IconHome2,
  IconInnerShadowTop,
  IconBrandProducthunt,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isConnected } = useAccount();

  const navMain = [
    {
      title: "Home",
      url: "/dashboard",
      icon: IconHome2,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: IconBrandProducthunt,
    },
    ...(isConnected
      ? [
          {
            title: "Wallet Actions",
            url: "/walletactions",
            icon: IconBrandProducthunt,
          },
        ]
      : []),
  ];

  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');

    setUserEmail(email!);
    setUserName(name!);
  }, []);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
          name: userName,
          email: userEmail,
        }} />
      </SidebarFooter>
    </Sidebar>
  )
}
