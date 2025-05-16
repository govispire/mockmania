
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface UserActivityProps {
  data: {
    currentActiveUsers: number;
    totalLoggedInUsers: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    purchasedUsers: number;
    nonPurchasedUsers: number;
    userEngagement: Array<{
      name: string;
      value: number;
      color: string;
    }>;
  };
}

export function UserActivity({ data }: UserActivityProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>User Activity Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Current Active Users</p>
              <h3 className="text-2xl font-bold">{data.currentActiveUsers}</h3>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Total Logged In Users</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-muted p-2">
                  <p className="text-xs">Daily</p>
                  <p className="text-lg font-bold">{data.totalLoggedInUsers.daily}</p>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <p className="text-xs">Weekly</p>
                  <p className="text-lg font-bold">{data.totalLoggedInUsers.weekly}</p>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <p className="text-xs">Monthly</p>
                  <p className="text-lg font-bold">{data.totalLoggedInUsers.monthly}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.userEngagement}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.userEngagement.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
