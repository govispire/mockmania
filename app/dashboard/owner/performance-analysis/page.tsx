
"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { PerformanceAnalysis } from "@/components/owner/PerformanceAnalysis";

const performanceData = {
  topCourses: [
    { name: "IBPS Complete Course", revenue: 45000, students: 150 },
    { name: "SBI PO Course", revenue: 38000, students: 120 }
  ],
  topTestPackages: [
    { name: "Mock Test Series A", purchases: 250 },
    { name: "Practice Pack Plus", purchases: 180 }
  ],
  topExams: [
    { name: "Bank PO", interest: 1200 },
    { name: "SSC", interest: 980 }
  ],
  examCategories: [
    { name: "Banking", signups: 450, dropouts: 30 },
    { name: "Railway", signups: 380, dropouts: 25 }
  ],
  dailySignups: [
    { date: "2024-01-01", signups: 45, conversions: 12 },
    { date: "2024-01-02", signups: 52, conversions: 15 }
  ]
};

export default function PerformanceAnalysisPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Performance Analysis</h1>
          <p className="text-muted-foreground">Track and analyze platform performance metrics</p>
        </div>
        <PerformanceAnalysis data={performanceData} />
      </div>
    </DashboardLayout>
  );
}
