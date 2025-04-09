"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { DashboardStats } from "@/components/common/DashboardStats";
import { PerformanceChart } from "@/components/common/PerformanceChart";
import { SalesPerformance } from "@/components/owner/SalesPerformance";
import { UserActivity } from "@/components/owner/UserActivity";
import { RevenueBreakdown } from "@/components/owner/RevenueBreakdown";
import dynamic from 'next/dynamic';

const PerformanceAnalysis = dynamic(() => import("@/components/owner/PerformanceAnalysis"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const UserBehavior = dynamic(() => import("@/components/owner/UserBehavior"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
import { Feedback } from "@/components/owner/Feedback";
import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

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

const mockRevenueData = [
  { date: "Jan", value: 5000 },
  { date: "Feb", value: 7500 },
  { date: "Mar", value: 8900 },
  { date: "Apr", value: 12000 },
  { date: "May", value: 15000 },
];

// Mock data for SalesPerformance component
const salesPerformanceData = {
  todaySales: "$2,345",
  weeklySales: "$12,456",
  monthlySales: "$45,678",
  totalSales: "$245,890",
  mostActiveProduct: "IBPS Complete Course",
  mostPopularTest: "SBI PO Mock Test Series",
  mostPurchasedCourse: "Banking Foundation Course",
};

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

// Mock data for RevenueBreakdown component
const revenueBreakdownData = {
  earnings: {
    courses: 45000,
    testSeries: 32000,
    subscriptions: 28000,
  },
  transactions: [
    {
      id: "TRX-001",
      user: "Rahul Sharma",
      amount: "$99.00",
      type: "Course Purchase",
      date: "2023-06-15",
      status: "Completed",
    },
    {
      id: "TRX-002",
      user: "Priya Singh",
      amount: "$49.00",
      type: "Test Series",
      date: "2023-06-14",
      status: "Completed",
    },
    {
      id: "TRX-003",
      user: "Amit Kumar",
      amount: "$149.00",
      type: "Subscription",
      date: "2023-06-14",
      status: "Pending",
    },
  ],
  subscriptions: [
    {
      plan: "Basic",
      activeUsers: 1245,
      revenue: "$12,450",
    },
    {
      plan: "Premium",
      activeUsers: 845,
      revenue: "$25,350",
    },
    {
      plan: "Enterprise",
      activeUsers: 156,
      revenue: "$15,600",
    },
  ],
  payouts: [
    {
      id: "PAY-001",
      recipient: "Instructor A",
      amount: "$1,200",
      status: "Completed",
      date: "2023-06-10",
    },
    {
      id: "PAY-002",
      recipient: "Instructor B",
      amount: "$950",
      status: "Pending",
      date: "2023-06-15",
    },
  ],
};

// Mock data for other components
const performanceAnalysisData = {
  topCourses: [
    { name: "Banking Foundation", revenue: 15000, students: 450 },
    { name: "SBI PO Complete", revenue: 12000, students: 380 },
    { name: "IBPS Clerk", revenue: 9500, students: 320 },
  ],
  topTestPackages: [
    { name: "SBI PO Mock Tests", purchases: 350 },
    { name: "IBPS PO Series", purchases: 280 },
    { name: "SSC CHSL Package", purchases: 220 },
  ],
  topExams: [
    { name: "SBI PO", interest: 1200 },
    { name: "IBPS PO", interest: 950 },
    { name: "SSC CGL", interest: 850 },
  ],
  examCategories: [
    { name: "Banking", signups: 2500, dropouts: 450 },
    { name: "SSC", signups: 1800, dropouts: 380 },
    { name: "Railways", signups: 1200, dropouts: 250 },
  ],
  dailySignups: [
    { date: "Jun 1", signups: 120, conversions: 45 },
    { date: "Jun 2", signups: 132, conversions: 52 },
    { date: "Jun 3", signups: 145, conversions: 58 },
  ],
};

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

const feedbackData = {
  testRatings: {
    averageRating: 4.2,
    totalRatings: 850,
    distribution: [500, 200, 100, 30, 20],
  },
  courseRatings: {
    averageRating: 4.5,
    totalRatings: 1200,
    distribution: [800, 250, 100, 30, 20],
  },
  reviews: [
    {
      id: "REV-001",
      user: "Rahul Sharma",
      rating: 5,
      comment: "Excellent course material and teaching methodology.",
      date: "2023-06-10",
      type: "course",
      itemName: "Banking Foundation Course",
    },
    {
      id: "REV-002",
      user: "Priya Singh",
      rating: 4,
      comment: "Very good test series with detailed explanations.",
      date: "2023-06-08",
      type: "test",
      itemName: "SBI PO Mock Test Series",
    },
  ],
  commonComplaints: [
    { issue: "Video buffering issues", count: 45 },
    { issue: "Need more practice questions", count: 38 },
    { issue: "Test timer issues", count: 25 },
  ],
};

export default function OwnerDashboard() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor platform performance and growth
          </p>
        </div>

        <DashboardStats stats={mockStats} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceChart data={mockRevenueData} title="Revenue Growth" />

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <p className="font-medium">New Premium Subscription</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <span className="text-green-600">+$99.00</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Sales Performance</h2>
          <SalesPerformance data={salesPerformanceData} />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">User Activity & Purchases</h2>
          <UserActivity data={userActivityData} />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Revenue & Payment Management
          </h2>
          <RevenueBreakdown data={revenueBreakdownData} />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Sales & Performance Analysis
          </h2>
          <PerformanceAnalysis data={performanceAnalysisData} />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">User Behavior Tracking</h2>
          <UserBehavior data={userBehaviorData} />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Test & Course Feedback</h2>
          <Feedback data={feedbackData} />
        </div>
      </div>
    </DashboardLayout>
  );
}
