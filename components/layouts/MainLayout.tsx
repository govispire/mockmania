"use client";

import { memo } from "react";
import { Sidebar } from "@/components/layouts/Sidebar";
import { OwnerSidebar } from "@/components/owner/LeftSidebar";

export const DashboardLayout = memo(function DashboardLayout({
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
      <div className="flex-1 flex flex-col min-h-screen w-full md:pl-64">
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
});