"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { UserBehavior } from "../UserBehavior";

// Mock data for UserBehavior component
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
    { date: "Jun 4", minutes: 55 },
    { date: "Jun 5", minutes: 58 },
    { date: "Jun 6", minutes: 62 },
    { date: "Jun 7", minutes: 65 },
  ],
  mostUsedFeatures: [
    { feature: "Tests", usage: 450 },
    { feature: "Courses", usage: 380 },
    { feature: "Calendar", usage: 250 },
    { feature: "Leaderboard", usage: 180 },
    { feature: "Forum", usage: 120 },
  ],
};

export default function UserBehaviorPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">User Behavior Analysis</h1>
          <p className="text-muted-foreground">
            Track user engagement patterns and platform usage
          </p>
        </div>

        <UserBehavior data={userBehaviorData} />
      </div>
    </DashboardLayout>
  );
}
