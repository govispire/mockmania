"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download, Filter } from "lucide-react";

interface RevenueBreakdownProps {
  data: {
    earnings: {
      courses: number;
      testSeries: number;
      subscriptions: number;
    };
    transactions: {
      id: string;
      user: string;
      amount: string;
      type: string;
      date: string;
      status: string;
    }[];
    subscriptions: {
      plan: string;
      activeUsers: number;
      revenue: string;
    }[];
    payouts: {
      id: string;
      recipient: string;
      amount: string;
      status: string;
      date: string;
    }[];
  };
}

export function RevenueBreakdown({ data }: RevenueBreakdownProps) {
  const earningsData = [
    {
      name: "Courses",
      value: data.earnings.courses,
    },
    {
      name: "Test Series",
      value: data.earnings.testSeries,
    },
    {
      name: "Subscriptions",
      value: data.earnings.subscriptions,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Total Earnings Breakdown</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
              <Legend />
              <Bar dataKey="value" fill="hsl(var(--primary))" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Transaction History</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">ID</th>
                <th className="text-left py-3 px-4 font-medium">User</th>
                <th className="text-left py-3 px-4 font-medium">Amount</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">{transaction.id}</td>
                  <td className="py-3 px-4">{transaction.user}</td>
                  <td className="py-3 px-4">{transaction.amount}</td>
                  <td className="py-3 px-4">{transaction.type}</td>
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${transaction.status === "Completed" ? "bg-green-100 text-green-800" : transaction.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Subscription Plan Management</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Plan</th>
                  <th className="text-left py-3 px-4 font-medium">
                    Active Users
                  </th>
                  <th className="text-left py-3 px-4 font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {data.subscriptions.map((subscription, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{subscription.plan}</td>
                    <td className="py-3 px-4">{subscription.activeUsers}</td>
                    <td className="py-3 px-4">{subscription.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Payouts & Withdrawals</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">ID</th>
                  <th className="text-left py-3 px-4 font-medium">Recipient</th>
                  <th className="text-left py-3 px-4 font-medium">Amount</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.payouts.map((payout) => (
                  <tr key={payout.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{payout.id}</td>
                    <td className="py-3 px-4">{payout.recipient}</td>
                    <td className="py-3 px-4">{payout.amount}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${payout.status === "Completed" ? "bg-green-100 text-green-800" : payout.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                      >
                        {payout.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{payout.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
