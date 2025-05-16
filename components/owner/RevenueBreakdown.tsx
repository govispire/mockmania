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
  }
}

export function RevenueBreakdown({ data }: RevenueBreakdownProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Courses Revenue</p>
            <p className="text-2xl font-bold">₹{(data.earnings.courses / 100000).toFixed(2)}L</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Test Series Revenue</p>
            <p className="text-2xl font-bold">₹{(data.earnings.testSeries / 100000).toFixed(2)}L</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Subscriptions Revenue</p>
            <p className="text-2xl font-bold">₹{(data.earnings.subscriptions / 100000).toFixed(2)}L</p>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Recent Transactions</p>
          <div className="space-y-2">
            {data.transactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{transaction.user}</p>
                  <p className="text-sm text-muted-foreground">{transaction.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}