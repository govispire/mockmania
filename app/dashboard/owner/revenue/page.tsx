
"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { RevenueBreakdown } from "@/components/owner/RevenueBreakdown";

const revenueBreakdownData = {
  earnings: {
    courses: 6150000, // ₹61.5L
    testSeries: 1230000, // ₹12.3L
    subscriptions: 2870000, // ₹28.7L
  },
  transactions: [
    {
      id: "TRX-001",
      user: "John Doe",
      amount: "₹24,900",
      type: "Course Purchase",
      date: "2024-01-15",
      status: "Completed"
    },
    {
      id: "TRX-002",
      user: "Jane Smith",
      amount: "₹12,400",
      type: "Test Series",
      date: "2024-01-14",
      status: "Pending"
    }
  ],
  subscriptions: [
    {
      plan: "Basic",
      activeUsers: 1245,
      revenue: "₹10,24,500"
    },
    {
      plan: "Premium",
      activeUsers: 845,
      revenue: "₹20,85,000"
    }
  ],
  payouts: [
    {
      id: "PAY-001",
      recipient: "Instructor A",
      amount: "₹98,800",
      status: "Completed",
      date: "2024-01-10"
    }
  ]
};

export default function RevenuePage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Revenue Overview</h1>
          <p className="text-muted-foreground">Monitor your platform's financial performance</p>
        </div>
        <RevenueBreakdown data={revenueBreakdownData} />
      </div>
    </DashboardLayout>
  );
}
