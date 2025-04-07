"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { MarketingPromotions } from "../MarketingPromotions";

// Mock data for MarketingPromotions component
const marketingPromotionsData = {
  activePromotions: 8,
  totalCampaigns: 24,
  emailStats: {
    sent: 5000,
    opened: 3200,
    clicked: 1800,
  },
  conversionRate: 4.5,
  campaignPerformance: [
    {
      name: "Summer Sale",
      impressions: 12000,
      clicks: 3500,
      conversions: 850,
    },
    {
      name: "New Course Launch",
      impressions: 8500,
      clicks: 2200,
      conversions: 650,
    },
    {
      name: "Exam Special",
      impressions: 10000,
      clicks: 2800,
      conversions: 720,
    },
    {
      name: "Referral Program",
      impressions: 6500,
      clicks: 1800,
      conversions: 450,
    },
  ],
  channelDistribution: [
    { name: "Email", value: 35, color: "#0088FE" },
    { name: "Social Media", value: 25, color: "#00C49F" },
    { name: "Search", value: 20, color: "#FFBB28" },
    { name: "Direct", value: 15, color: "#FF8042" },
    { name: "Affiliates", value: 5, color: "#8884D8" },
  ],
  upcomingCampaigns: [
    {
      id: "camp-001",
      name: "Diwali Special Offer",
      type: "Discount",
      startDate: "2023-10-15",
      status: "scheduled" as const,
    },
    {
      id: "camp-002",
      name: "End of Year Sale",
      type: "Bundle",
      startDate: "2023-12-20",
      status: "draft" as const,
    },
    {
      id: "camp-003",
      name: "Summer Course Promotion",
      type: "Email",
      startDate: "2023-06-01",
      status: "active" as const,
    },
    {
      id: "camp-004",
      name: "Referral Bonus",
      type: "Reward",
      startDate: "2023-07-10",
      status: "active" as const,
    },
  ],
};

export default function MarketingPromotionsPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Marketing & Promotions</h1>
          <p className="text-muted-foreground">
            Manage marketing campaigns and track promotional performance
          </p>
        </div>

        <MarketingPromotions data={marketingPromotionsData} />
      </div>
    </DashboardLayout>
  );
}
