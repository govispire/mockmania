"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="employee">{children}</DashboardLayout>;
}
