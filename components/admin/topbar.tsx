"use client";

import { useAuth } from "@/contexts/auth-context";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  Bell,
  ChevronRight,
} from "lucide-react";

const routeLabels: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/products": "Products",
  "/admin/categories": "Categories",
  "/admin/bundles": "Bundles",
  "/admin/testimonials": "Testimonials",
  "/admin/faqs": "FAQs",
  "/admin/hero-banners": "Hero Banners",
  "/admin/settings": "Settings",
};

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const { user, isAdmin } = useAuth();
  const pathname = usePathname();

  const label = routeLabels[pathname] ?? "Admin";

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center border-b border-border bg-card/95 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
      {/* Mobile menu */}
      <Button
        variant="ghost"
        size="icon"
        className="mr-3 lg:hidden"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Admin</span>
        {pathname !== "/admin" && (
          <>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="font-medium text-foreground">{label}</span>
          </>
        )}
        {pathname === "/admin" && (
          <span className="font-medium text-foreground">Dashboard</span>
        )}
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-3">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-foreground">{user?.name}</p>
            <Badge variant={isAdmin ? "default" : "secondary"} className="text-[10px]">
              {isAdmin ? "Admin" : "Viewer"}
            </Badge>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {user?.name?.charAt(0) ?? "U"}
          </div>
        </div>
      </div>
    </header>
  );
}
