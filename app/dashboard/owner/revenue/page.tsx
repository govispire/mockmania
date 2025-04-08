
"use client";

import { RevenueBreakdown } from "@/components/owner/RevenueBreakdown";

const revenueBreakdownData = {
  earnings: {
    courses: 75000,
    testSeries: 15000,
    subscriptions: 35000,
  },
  transactions: [
    {
      id: "TRX-001",
      user: "John Doe",
      amount: "$299.00",
      type: "Course Purchase",
      date: "2024-01-15",
      status: "Completed"
    },
    {
      id: "TRX-002",
      user: "Jane Smith",
      amount: "$149.00",
      type: "Test Series",
      date: "2024-01-14",
      status: "Pending"
    }
  ],
  subscriptions: [
    {
      plan: "Basic",
      activeUsers: 1245,
      revenue: "$12,450"
    },
    {
      plan: "Premium",
      activeUsers: 845,
      revenue: "$25,350"
    }
  ],
  payouts: [
    {
      id: "PAY-001",
      recipient: "Instructor A",
      amount: "$1,200",
      status: "Completed",
      date: "2024-01-10"
    }
  ]
};

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Revenue Overview</h1>
        <p className="text-muted-foreground">Monitor your platform's financial performance</p>
      </div>
      <RevenueBreakdown data={revenueBreakdownData} />
    </div>
  );
}
