"use client";

import { Sidebar } from "@/components/layouts/Sidebar";
import { Bell, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OwnerSidebar } from "@/components/owner/LeftSidebar";

export function DashboardLayout({
  children,
  role = "student",
}: {
  children: React.ReactNode;
  role?: "student" | "admin" | "employee" | "owner";
}) {
  return (
    <div className="flex min-h-screen bg-background overflow-hidden">
      {/* Sidebar - fixed width */}
      <div className="fixed inset-y-0 left-0 w-64 z-30 hidden md:block">
        {role === "owner" ? <OwnerSidebar /> : <Sidebar role={role} />}
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden">
        {role === "owner" ? <OwnerSidebar /> : <Sidebar role={role} />}
      </div>

      {/* Main Content - expands to fill remaining space */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navigation - fixed at top */}
        <header className="fixed top-0 right-0 left-0 md:left-64 z-20 bg-card border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="hidden md:flex items-center">
              <h1 className="text-xl font-bold">Moct Platform</h1>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                <User className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium hidden md:inline-block">
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content - scrollable area with proper padding */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background pt-16">
          <div className="py-6 h-[calc(100vh-4rem)]">
            <div className="h-full px-4 sm:px-6 md:px-6">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
