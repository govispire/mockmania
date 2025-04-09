
"use client";

import { Sidebar } from "@/components/layouts/Sidebar";
import { Bell, User } from "lucide-react";
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
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-200 ease-in-out -translate-x-full md:translate-x-0">
        {role === "owner" ? <OwnerSidebar /> : <Sidebar role={role} />}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen w-full md:pl-32">
        {/* Top Navigation */}
        <header className="sticky top-0 z-20 bg-card border-b">
          <div className="flex h-16 items-center justify-between px-4">
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
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 border rounded-full px-2 md:px-3 py-1">
                <User className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium hidden sm:inline-block">
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 w-full bg-background">
          <div className="p-4">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
