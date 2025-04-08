"use client";

import { WebsitePerformance } from "@/components/owner/WebsitePerformance";
import { DashboardLayout } from "@/components/layouts/MainLayout";

const websitePerformanceData = {
  activeUsers: 450,
  loadSpeed: {
    current: 1.2,
    target: 0.8
  },
  uptime: 99.8,
  errors: [
    { type: "404 Not Found", count: 23, priority: "low" },
    { type: "500 Server Error", count: 5, priority: "high" },
    { type: "403 Forbidden", count: 12, priority: "medium" }
  ],
  databasePerformance: [
    { time: "00:00", queries: 150, responseTime: 45 },
    { time: "06:00", queries: 280, responseTime: 52 },
    { time: "12:00", queries: 420, responseTime: 63 },
    { time: "18:00", queries: 390, responseTime: 58 }
  ]
};

export default function WebsitePerformancePage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Website Performance</h1>
          <p className="text-muted-foreground">Monitor and analyze website metrics</p>
        </div>
        <WebsitePerformance data={websitePerformanceData} />
      </div>
    </DashboardLayout>
  );
}