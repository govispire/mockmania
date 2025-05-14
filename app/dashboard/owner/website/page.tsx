"use client";

import { WebsitePerformance } from "@/components/owner/WebsitePerformance";
import { DashboardLayout } from "@/components/layouts/MainLayout";

const websiteData = {
  activeUsers: 245,
  loadSpeed: {
    current: 1.2,
    target: 1.0
  },
  uptime: 99.9,
  errors: [
    {
      type: "404 Not Found",
      count: 23,
      priority: "low"
    },
    {
      type: "500 Server Error",
      count: 2,
      priority: "high"
    }
  ],
  databasePerformance: Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    queries: Math.floor(Math.random() * 1000) + 500,
    responseTime: Math.random() * 100 + 50
  }))
};

export default function WebsitePage() {
  return (
    <DashboardLayout role="owner">
      <WebsitePerformance data={websiteData} />
    </DashboardLayout>
  );
}