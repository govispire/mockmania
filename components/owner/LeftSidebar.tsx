"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  MessageSquare,
  Server,
  Tag,
  Settings,
  UserCog,
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

function SidebarLink({
  href,
  icon,
  title,
  isActive,
  onClick,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent",
      )}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

export function OwnerSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Dashboard Overview",
      href: "/dashboard/owner",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      title: "User Activity",
      href: "/dashboard/owner/user-activity",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Revenue & Payments",
      href: "/dashboard/owner/revenue",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: "Sales Analysis",
      href: "/dashboard/owner/sales",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "User Behavior",
      href: "/dashboard/owner/user-behavior",
      icon: <Activity className="h-4 w-4" />,
    },
    {
      title: "Feedback & Reviews",
      href: "/dashboard/owner/feedback",
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      title: "Website Performance",
      href: "/dashboard/owner/website",
      icon: <Server className="h-4 w-4" />,
    },
    {
      title: "Marketing & Promotions",
      href: "/dashboard/owner/marketing",
      icon: <Tag className="h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/owner/settings",
      icon: <Settings className="h-4 w-4" />,
    },
    {
      title: "User Management",
      href: "/dashboard/owner/users",
      icon: <UserCog className="h-4 w-4" />,
    },
  ];

  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">Owner Portal</h2>
        <div className="space-y-1">
          {navItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              title={item.title}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
