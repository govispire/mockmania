"use client";

import { RevenueBreakdown } from "@/components/owner/RevenueBreakdown";

const revenueBreakdownData = {
  totalRevenue: 125000,
  subscriptionRevenue: 75000,
  courseRevenue: 35000,
  testSeriesRevenue: 15000,
  monthlyGrowth: 15,
  revenueByProduct: [
    { name: "Premium Subscription", value: 75000 },
    { name: "Course Sales", value: 35000 },
    { name: "Test Series", value: 15000 },
  ],
  monthlyTrend: Array.from({ length: 6 }, (_, i) => ({
    month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
    revenue: Math.floor(Math.random() * 50000) + 70000,
  })),
};

export default function RevenuePage() {
  return <RevenueBreakdown data={revenueBreakdownData} />;
}