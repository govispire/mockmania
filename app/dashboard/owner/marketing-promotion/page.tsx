
"use client";

import { MarketingPromotions } from "@/components/owner/MarketingPromotions";
import { DashboardLayout } from "@/components/layouts/MainLayout";

const marketingData = {
  campaigns: [
    {
      name: "Early Bird Offer",
      platform: "Email",
      clicks: 1200,
      conversions: 180,
      revenue: 450000,
      roi: 320
    },
    {
      name: "Referral Program",
      platform: "Social",
      clicks: 2500,
      conversions: 420,
      revenue: 840000,
      roi: 280
    }
  ],
  promotions: [
    {
      id: "1",
      name: "Summer Special",
      discount: "25% OFF",
      startDate: "2024-02-01",
      endDate: "2024-02-28",
      status: "active",
      redemptions: 145
    }
  ],
  coupons: [
    {
      code: "SUMMER25",
      discount: "25%",
      usageLimit: 200,
      used: 145,
      status: "active"
    }
  ],
  courseFees: [
    {
      course: "Banking Foundation",
      regularPrice: "₹12,999",
      salePrice: "₹9,999",
      category: "Banking"
    }
  ]
};

export default function MarketingPromotionsPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Marketing Promotions</h1>
          <p className="text-muted-foreground">Track and manage marketing campaigns</p>
        </div>
        <MarketingPromotions data={marketingData} />
      </div>
    </DashboardLayout>
  );
}
