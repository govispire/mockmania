"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { UserActivity } from "@/components/owner/UserActivity";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Users, UserCheck, UserX } from "lucide-react";

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
    userEngagement: {
      name: string;
      value: number;
      color: string;
    }[];
  };
}

export function UserActivity({ data }: UserActivityProps) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const stats = [
    {
      title: "Current Active Users",
      value: data.currentActiveUsers,
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Purchased Students",
      value: data.purchasedUsers,
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Non-Purchased Students",
      value: data.nonPurchasedUsers,
      icon: <UserX className="w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">{stat.icon}</div>
              <div>
                <h3 className="font-semibold text-muted-foreground">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Total Logged-In Users</h3>
          <Tabs defaultValue="daily">
            <TabsList className="mb-4">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>

            <TabsContent
              value="daily"
              className="h-[300px] flex items-center justify-center"
            >
              <div className="text-4xl font-bold">
                {data.totalLoggedInUsers.daily}
              </div>
            </TabsContent>

            <TabsContent
              value="weekly"
              className="h-[300px] flex items-center justify-center"
            >
              <div className="text-4xl font-bold">
                {data.totalLoggedInUsers.weekly}
              </div>
            </TabsContent>

            <TabsContent
              value="monthly"
              className="h-[300px] flex items-center justify-center"
            >
              <div className="text-4xl font-bold">
                {data.totalLoggedInUsers.monthly}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">User Engagement Breakdown</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.userEngagement}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.userEngagement.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}`, "Users"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}


const userData = {
  currentActiveUsers: 245,
  totalLoggedInUsers: {
    daily: 1200,
    weekly: 5600,
    monthly: 18000
  },
  purchasedUsers: 850,
  nonPurchasedUsers: 350,
  userEngagement: [
    { name: "High", value: 35, color: "#0088FE" },
    { name: "Medium", value: 45, color: "#00C49F" },
    { name: "Low", value: 20, color: "#FFBB28" }
  ]
};

export default function UserActivityPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">User Activity</h1>
          <p className="text-muted-foreground">Monitor user engagement and activity</p>
        </div>
        <UserActivity data={userData} />
      </div>
    </DashboardLayout>
  );
}