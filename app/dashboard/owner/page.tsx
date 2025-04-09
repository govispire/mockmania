"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { DashboardStats } from "@/components/common/DashboardStats";
import { SalesPerformance } from "@/components/owner/SalesPerformance";
import { UserActivity } from "@/components/owner/UserActivity";
import { RevenueBreakdown } from "@/components/owner/RevenueBreakdown";
import { PerformanceAnalysis } from "@/components/owner/PerformanceAnalysis";
import { UserBehavior } from "@/components/owner/UserBehavior";
import { Feedback } from "@/components/owner/Feedback";
import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";

const mockStats = [
  {
    title: "Revenue",
    value: "$12,345",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Total Users",
    value: "1,234",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Growth",
    value: "+15%",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Active Now",
    value: "456",
    icon: <Activity className="w-6 h-6" />,
  },
];

export default function OwnerDashboard() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-muted-foreground">Track and manage your platform metrics</p>
        </div>

        <DashboardStats stats={mockStats} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SalesPerformance data={{
            todaySales: "₹24,500",
            weeklySales: "₹1,68,000",
            monthlySales: "₹7,45,000",
            totalSales: "₹85,24,000",
            mostActiveProduct: "IBPS Complete Course",
            mostPopularTest: "SBI PO Mock Tests",
            mostPurchasedCourse: "Banking Foundation"
          }} />
          <UserActivity data={{
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
          }} />
          <RevenueBreakdown data={{
            earnings: {
              courses: 6150000,
              testSeries: 1230000,
              subscriptions: 2870000
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
          }} />
          <PerformanceAnalysis data={{
            topCourses: [
              { name: "IBPS Complete Course", revenue: 45000, students: 150 },
              { name: "SBI PO Course", revenue: 38000, students: 120 },
              { name: "Banking Foundation", revenue: 32000, students: 95 }
            ],
            topTestPackages: [
              { name: "Mock Test Series A", purchases: 250 },
              { name: "Practice Pack Plus", purchases: 180 }
            ],
            topExams: [
              { name: "Bank PO", interest: 1200 },
              { name: "SSC", interest: 980 }
            ],
            examCategories: [
              { name: "Banking", signups: 450, dropouts: 30 },
              { name: "Railway", signups: 380, dropouts: 25 }
            ],
            dailySignups: [
              { date: "2024-01-01", signups: 45, conversions: 12 },
              { date: "2024-01-02", signups: 52, conversions: 15 },
              { date: "2024-01-03", signups: 48, conversions: 18 },
              { date: "2024-01-04", signups: 60, conversions: 22 },
              { date: "2024-01-05", signups: 55, conversions: 20 }
            ]
          }} />
          <UserBehavior data={{
            newVsReturning: [
              { name: "New Users", value: 35, color: "#0088FE" },
              { name: "Returning Users", value: 65, color: "#00C49F" }
            ],
            leftWithoutBuying: 450,
            incompleteTests: 180,
            averageTimeOnPlatform: [
              { date: "2024-01-01", minutes: 45 },
              { date: "2024-01-02", minutes: 48 },
              { date: "2024-01-03", minutes: 52 }
            ],
            mostUsedFeatures: [
              { feature: "Tests", usage: 450 },
              { feature: "Courses", usage: 380 },
              { feature: "Calendar", usage: 250 }
            ]
          }} />
          <Feedback />
        </div>
      </div>
    </DashboardLayout>
  );
}