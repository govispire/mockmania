"use client";

import { RevenueBreakdown } from "@/components/owner/RevenueBreakdown";

const revenueBreakdownData = {
  earnings: {
    courses: 6150000,
    testSeries: 1230000,
    subscriptions: 2870000,
  },
  transactions: [
    {
      id: "TRX-001",
      user: "John Doe",
      amount: "₹24,900",
      type: "Course Purchase",
      date: "2024-01-15",
      status: "Completed"
    }
  ],
  subscriptions: [
    {
      plan: "Basic",
      activeUsers: 1245,
      revenue: "₹10,24,500"
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

export default function RevenueBreakdownPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Revenue Breakdown</h1>
        <p className="text-muted-foreground">Analyze revenue streams and financial metrics</p>
      </div>
      <RevenueBreakdown data={revenueBreakdownData} />
    </div>
  );
}