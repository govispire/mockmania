"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="student">{children}</DashboardLayout>;
}
