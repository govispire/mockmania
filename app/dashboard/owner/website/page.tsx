"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { WebsitePerformance } from "@/components/owner/WebsitePerformance";

// Mock data for WebsitePerformance component
const websitePerformanceData = {
  activeUsers: 0,
  loadSpeed: {
    current: 0,
    target: 0
  },
  uptime: 0,
  errors: [],
  databasePerformance: []
};

export default function WebsitePage() {
  return (
    <DashboardLayout>
      <WebsitePerformance data={websitePerformanceData} />
    </DashboardLayout>
  );
}