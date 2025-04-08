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