"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { SalesPerformance } from "@/components/owner/SalesPerformance";

const salesPerformanceData = {
  todaySales: "₹24,500",
  weeklySales: "₹1,68,000",
  monthlySales: "₹7,45,000",
  totalSales: "₹85,24,000",
  mostActiveProduct: "IBPS Complete Course",
  mostPopularTest: "SBI PO Mock Tests",
  mostPurchasedCourse: "Banking Foundation"
};

export default function SalesPerformancePage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Sales Performance</h1>
          <p className="text-muted-foreground">Track sales metrics and performance</p>
        </div>
        <SalesPerformance data={salesPerformanceData} />
      </div>
    </DashboardLayout>
  );
}