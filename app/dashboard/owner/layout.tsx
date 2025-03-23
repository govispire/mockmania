"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="owner">{children}</DashboardLayout>;
}
