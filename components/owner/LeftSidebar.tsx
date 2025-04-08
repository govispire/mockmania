"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const ownerNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/owner",
    icon: <span className="h-4 w-4">📊</span>,
  },
  {
    title: "Marketing",
    href: "/dashboard/owner/marketing",
    icon: <span className="h-4 w-4">📢</span>,
  },
  {
    title: "Revenue",
    href: "/dashboard/owner/revenue",
    icon: <span className="h-4 w-4">💰</span>,
  },
  {
    title: "Sales",
    href: "/dashboard/owner/sales",
    icon: <span className="h-4 w-4">💹</span>,
  },
  {
    title: "User Activity",
    href: "/dashboard/owner/user-activity",
    icon: <span className="h-4 w-4">👥</span>,
  },
  {
    title: "User Behavior",
    href: "/dashboard/owner/user-behavior",
    icon: <span className="h-4 w-4">📊</span>,
  },
];

export function OwnerSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-40 w-64 bg-background border-r">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b px-4">
          <h1 className="text-xl font-bold">Moct Platform</h1>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-2">
            {ownerNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t">
          <div className="flex flex-col space-y-2">
            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
            <Link
              href="/logout"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}