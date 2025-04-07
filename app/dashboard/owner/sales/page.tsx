"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { SalesPerformance } from "../SalesPerformance";

// Mock data for SalesPerformance component
const salesPerformanceData = {
  todaySales: "$2,345",
  weeklySales: "$12,456",
  monthlySales: "$45,678",
  totalSales: "$245,890",
  mostActiveProduct: "IBPS Complete Course",
  mostPopularTest: "SBI PO Mock Test Series",
  mostPurchasedCourse: "Banking Foundation Course",
};

export default function SalesPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Sales Performance</h1>
          <p className="text-muted-foreground">
            Track sales metrics and top performing products
          </p>
        </div>

        <SalesPerformance data={salesPerformanceData} />
      </div>
    </DashboardLayout>
  );
}
