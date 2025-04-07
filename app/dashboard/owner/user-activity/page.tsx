"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { UserActivity } from "../UserActivity";

// Mock data for UserActivity component
const userActivityData = {
  currentActiveUsers: 245,
  totalLoggedInUsers: {
    daily: 1250,
    weekly: 5670,
    monthly: 12450,
  },
  purchasedUsers: 3456,
  nonPurchasedUsers: 2345,
  userEngagement: [
    { name: "Active Users", value: 45, color: "#0088FE" },
    { name: "Occasional Users", value: 30, color: "#00C49F" },
    { name: "Inactive Users", value: 15, color: "#FFBB28" },
    { name: "New Users", value: 10, color: "#FF8042" },
  ],
};

export default function UserActivityPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">User Activity & Purchases</h1>
          <p className="text-muted-foreground">
            Track user engagement and purchase behavior
          </p>
        </div>

        <UserActivity data={userActivityData} />
      </div>
    </DashboardLayout>
  );
}
