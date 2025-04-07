"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { RevenueBreakdown } from "../RevenueBreakdown";

// Mock data for RevenueBreakdown component
const revenueBreakdownData = {
  earnings: {
    courses: 45000,
    testSeries: 32000,
    subscriptions: 28000,
  },
  transactions: [
    {
      id: "TRX-001",
      user: "Rahul Sharma",
      amount: "$99.00",
      type: "Course Purchase",
      date: "2023-06-15",
      status: "Completed",
    },
    {
      id: "TRX-002",
      user: "Priya Singh",
      amount: "$49.00",
      type: "Test Series",
      date: "2023-06-14",
      status: "Completed",
    },
    {
      id: "TRX-003",
      user: "Amit Kumar",
      amount: "$149.00",
      type: "Subscription",
      date: "2023-06-14",
      status: "Pending",
    },
    {
      id: "TRX-004",
      user: "Neha Gupta",
      amount: "$79.00",
      type: "Course Purchase",
      date: "2023-06-13",
      status: "Completed",
    },
    {
      id: "TRX-005",
      user: "Vikram Patel",
      amount: "$29.00",
      type: "Test Series",
      date: "2023-06-12",
      status: "Failed",
    },
  ],
  subscriptions: [
    {
      plan: "Basic",
      activeUsers: 1245,
      revenue: "$12,450",
    },
    {
      plan: "Premium",
      activeUsers: 845,
      revenue: "$25,350",
    },
    {
      plan: "Enterprise",
      activeUsers: 156,
      revenue: "$15,600",
    },
  ],
  payouts: [
    {
      id: "PAY-001",
      recipient: "Instructor A",
      amount: "$1,200",
      status: "Completed",
      date: "2023-06-10",
    },
    {
      id: "PAY-002",
      recipient: "Instructor B",
      amount: "$950",
      status: "Pending",
      date: "2023-06-15",
    },
    {
      id: "PAY-003",
      recipient: "Instructor C",
      amount: "$750",
      status: "Completed",
      date: "2023-06-05",
    },
  ],
};

export default function RevenuePage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Revenue & Payment Management</h1>
          <p className="text-muted-foreground">
            Track financial metrics and manage payments
          </p>
        </div>

        <RevenueBreakdown data={revenueBreakdownData} />
      </div>
    </DashboardLayout>
  );
}
