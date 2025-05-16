"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { UserBehavior } from "@/components/owner/UserBehavior";

const userBehaviorData = {
  newVsReturning: [
    { name: "New Users", value: 35, color: "#0088FE" },
    { name: "Returning Users", value: 65, color: "#00C49F" },
  ],
  leftWithoutBuying: 450,
  incompleteTests: 180,
  averageTimeOnPlatform: [
    { date: "Jun 1", minutes: 45 },
    { date: "Jun 2", minutes: 48 },
    { date: "Jun 3", minutes: 52 },
  ],
  mostUsedFeatures: [
    { feature: "Tests", usage: 450 },
    { feature: "Courses", usage: 380 },
    { feature: "Calendar", usage: 250 },
  ],
};

export default function UserBehaviorPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">User Behavior</h1>
          <p className="text-muted-foreground">Track and analyze user behavior patterns</p>
        </div>
        <UserBehavior data={userBehaviorData} />
      </div>
    </DashboardLayout>
  );
}