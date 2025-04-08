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
    <div className="flex min-h-screen bg-background overflow-x-hidden">
      {/* Sidebar - fixed width on desktop, drawer on mobile */}
      <div className="fixed inset-y-0 left-0 w-64 z-30 transform transition-transform duration-200 ease-in-out md:translate-x-0 -translate-x-full md:block">
        {role === "owner" ? <OwnerSidebar /> : <Sidebar role={role} />}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:pl-64">
        {/* Top Navigation */}
        <header className="sticky top-0 z-20 bg-card border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center space-x-4">
              <button className="md:hidden p-2 hover:bg-accent rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-bold">Moct Platform</h1>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 border rounded-full px-2 md:px-3 py-1">
                <User className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium hidden sm:inline-block">
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="p-4 min-h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
