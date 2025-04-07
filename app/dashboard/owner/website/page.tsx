"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { WebsitePerformance } from "../WebsitePerformance";

// Mock data for WebsitePerformance component
const websitePerformanceData = {
  activeUsers: 245,
  loadSpeed: {
    current: 2.4,
    target: 1.5,
  },
  uptime: 99.7,
  errors: [
    {
      type: "404 Not Found",
      count: 45,
      priority: "medium" as const,
    },
    {
      type: "500 Server Error",
      count: 12,
      priority: "high" as const,
    },
    {
      type: "403 Forbidden",
      count: 8,
      priority: "low" as const,
    },
  ],
  databasePerformance: [
    { time: "00:00", queries: 120, responseTime: 45 },
    { time: "04:00", queries: 80, responseTime: 40 },
    { time: "08:00", queries: 250, responseTime: 60 },
    { time: "12:00", queries: 350, responseTime: 75 },
    { time: "16:00", queries: 280, responseTime: 65 },
    { time: "20:00", queries: 180, responseTime: 50 },
  ],
};

export default function WebsitePerformancePage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Website Performance</h1>
          <p className="text-muted-foreground">
            Monitor website metrics, errors, and database performance
          </p>
        </div>

        <WebsitePerformance data={websitePerformanceData} />
      </div>
    </DashboardLayout>
  );
}
