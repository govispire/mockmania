
"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { MarketingPromotions } from "@/components/owner/MarketingPromotions";

const marketingPromotionsData = {
  campaigns: [
    {
      name: "Summer Sale",
      platform: "Email",
      clicks: 1500,
      conversions: 300,
      revenue: 15000,
      roi: 250
    },
    {
      name: "Back to School",
      platform: "Social",
      clicks: 2000,
      conversions: 450,
      revenue: 22500,
      roi: 300
    }
  ],
  promotions: [
    {
      id: "1",
      name: "Early Bird Special",
      discount: "20% OFF",
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      status: "active",
      redemptions: 150
    }
  ],
  coupons: [
    {
      code: "EARLYBIRD20",
      discount: "20%",
      usageLimit: 200,
      used: 150,
      status: "active"
    }
  ],
  courseFees: [
    {
      course: "Banking Foundation",
      regularPrice: "$199",
      salePrice: "$159",
      category: "Banking"
    }
  ]
};

export default function MarketingPage() {
  return (
    <DashboardLayout>
      <MarketingPromotions data={marketingPromotionsData} />
    </DashboardLayout>
  );
}
