
"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { SalesPerformance } from "@/components/owner/SalesPerformance";

const salesData = {
  todaySales: 2345,
  weeklySales: 12456,
  monthlySales: 45678,
  totalSales: 245890,
  mostActiveProduct: "IBPS Complete Course",
  mostPopularTest: "SBI PO Mock Test Series",
  mostPurchasedCourse: "Banking Foundation Course",
  salesTrend: Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    sales: Math.floor(Math.random() * 1000) + 500,
  })),
  recentTransactions: [
    {
      id: "1",
      course: "SBI PO Course",
      amount: 1999,
      date: "2024-01-15",
      status: "completed"
    }
  ]
};

export default function SalesPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Sales Overview</h1>
          <p className="text-muted-foreground">Monitor your sales performance and trends</p>
        </div>
        <SalesPerformance data={salesData} />
      </div>
    </DashboardLayout>
  );
}
