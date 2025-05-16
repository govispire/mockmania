
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RevenueBreakdownProps {
  data: {
    earnings: {
      courses: number;
      testSeries: number;
      subscriptions: number;
    };
    transactions: Array<{
      id: string;
      user: string;
      amount: string;
      type: string;
      date: string;
      status: string;
    }>;
    subscriptions: Array<{
      plan: string;
      activeUsers: number;
      revenue: string;
    }>;
    payouts: Array<{
      id: string;
      recipient: string;
      amount: string;
      status: string;
      date: string;
    }>;
  };
}

export function RevenueBreakdown({ data }: RevenueBreakdownProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Revenue Streams</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Courses</span>
              <span className="font-bold">₹{data.earnings.courses.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Test Series</span>
              <span className="font-bold">₹{data.earnings.testSeries.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Subscriptions</span>
              <span className="font-bold">₹{data.earnings.subscriptions.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.transactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{transaction.user}</p>
                  <p className="text-sm text-muted-foreground">{transaction.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{transaction.amount}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
