"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { DashboardStats } from "@/components/common/DashboardStats";
import { SalesPerformance } from "@/components/owner/SalesPerformance";
import { UserActivity } from "@/components/owner/UserActivity";
import { RevenueBreakdown } from "@/components/owner/RevenueBreakdown";
import { PerformanceAnalysis } from "@/components/owner/PerformanceAnalysis";
import { UserBehavior } from "@/components/owner/UserBehavior";
import { Feedback } from "@/components/owner/Feedback";
import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";

const mockStats = [
  {
    title: "Revenue",
    value: "$12,345",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Total Users",
    value: "1,234",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Growth",
    value: "+15%",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Active Now",
    value: "456",
    icon: <Activity className="w-6 h-6" />,
  },
];

export default function OwnerDashboard() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-muted-foreground">Track and manage your platform metrics</p>
        </div>

        <DashboardStats stats={mockStats} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SalesPerformance data={{
            todaySales: "₹24,500",
            weeklySales: "₹1,68,000",
            monthlySales: "₹7,45,000",
            totalSales: "₹85,24,000",
            mostActiveProduct: "IBPS Complete Course",
            mostPopularTest: "SBI PO Mock Tests",
            mostPurchasedCourse: "Banking Foundation"
          }} />
          <UserActivity />
          <RevenueBreakdown />
          <PerformanceAnalysis />
          <UserBehavior />
          <Feedback />
        </div>
      </div>
    </DashboardLayout>
  );
}