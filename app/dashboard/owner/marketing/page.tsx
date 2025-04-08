
"use client";

import { MarketingPromotions } from "@/components/owner/MarketingPromotions";

const marketingData = {
  activePromotions: 12,
  totalCampaigns: 45,
  emailStats: {
    sent: 10000,
    opened: 7500,
    clicked: 3000,
  },
  conversionRate: 24.5,
  campaignPerformance: [
    {
      name: "Summer Sale",
      impressions: 12000,
      clicks: 3500,
      conversions: 850,
    },
    {
      name: "Back to School",
      impressions: 15000,
      clicks: 4200,
      conversions: 1100,
    },
  ],
  channelDistribution: [
    { name: "Email", value: 45, color: "#0088FE" },
    { name: "Social", value: 25, color: "#00C49F" },
    { name: "Display", value: 20, color: "#FFBB28" },
    { name: "Other", value: 10, color: "#FF8042" },
  ],
  upcomingCampaigns: [
    {
      id: "1",
      name: "Flash Sale",
      type: "Discount",
      startDate: "2024-02-15",
      status: "scheduled",
    },
    {
      id: "2",
      name: "New Course Launch",
      type: "Promotion",
      startDate: "2024-02-20",
      status: "draft",
    },
  ],
};

export default function MarketingPage() {
  return <MarketingPromotions data={marketingData} />;
}
