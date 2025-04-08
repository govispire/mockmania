"use client";

import { Card } from "@/components/ui/card";
import { MarketingPromotions } from "@/components/owner/MarketingPromotions";

const marketingPromotionsData = {
  activePromotions: 8,
  totalCampaigns: 25,
  emailStats: {
    sent: 5000,
    opened: 3200,
    clicked: 1500,
  },
  conversionRate: 12.5,
  campaignPerformance: [
    {
      name: "Summer Sale",
      impressions: 15000,
      clicks: 4500,
      conversions: 750,
    },
    {
      name: "Back to School",
      impressions: 12000,
      clicks: 3800,
      conversions: 620,
    },
    {
      name: "Holiday Special",
      impressions: 18000,
      clicks: 5200,
      conversions: 890,
    },
  ],
  channelDistribution: [
    { name: "Email", value: 45, color: "#0088FE" },
    { name: "Social", value: 30, color: "#00C49F" },
    { name: "Display", value: 15, color: "#FFBB28" },
    { name: "Other", value: 10, color: "#FF8042" },
  ],
  upcomingCampaigns: [
    {
      id: "1",
      name: "Winter Sale",
      type: "Discount",
      startDate: "2024-01-15",
      status: "scheduled",
    },
    {
      id: "2",
      name: "New Course Launch",
      type: "Product",
      startDate: "2024-01-20",
      status: "draft",
    },
    {
      id: "3",
      name: "Flash Sale",
      type: "Promotion",
      startDate: "2024-01-10",
      status: "active",
    },
  ],
};

export default function MarketingPromotionPage() {
  return <MarketingPromotions data={marketingPromotionsData} />;
}