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
      revenue: 1230000, // ₹12.3L
      roi: 250
    },
    {
      name: "Back to School",
      platform: "Social",
      clicks: 2000,
      conversions: 450,
      revenue: 1850000, // ₹18.5L
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
      regularPrice: "₹16,400",
      salePrice: "₹13,100",
      category: "Banking"
    }
  ]
};

export default function MarketingPromotionsPage() { //Renamed the page
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Marketing Promotions</h1> {/*Renamed the heading*/}
          <p className="text-muted-foreground">Manage your marketing campaigns and promotions</p>
        </div>
        <MarketingPromotions data={marketingPromotionsData} />
      </div>
    </DashboardLayout>
  );
}