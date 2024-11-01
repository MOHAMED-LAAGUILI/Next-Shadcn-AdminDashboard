'use client';

import React, { useState, useEffect } from "react";
import { Nav } from "./ui/nav";
import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from '@react-hook/window-size';

const SideBar = () => {
  const [isClosed, setIsClosed] = useState(true);
  const windowWidth = useWindowWidth();

  // Track mobile width based on window width, only on client side to avoid hydration issues
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(windowWidth < 768);
  }, [windowWidth]);

  function toggleSidebar() {
    setIsClosed(!isClosed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24 ">
      {/* Sidebar toggle button, only visible on larger screens */}
      {!isMobile && (
        <div className="absolute right-[-20px] top-8"> 
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="border rounded-full shadow-xl p-3 size-12"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      {/* Navigation links with dynamic collapse based on screen size */}
      <Nav
        isCollapsed={isMobile ? true : isClosed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingBag,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default SideBar;
