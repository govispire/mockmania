
"use client";

import { SalesPerformance } from "@/components/owner/SalesPerformance";

const salesPerformanceData = {
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
};

export default function SalesPage() {
  return <SalesPerformance data={salesPerformanceData} />;
}
