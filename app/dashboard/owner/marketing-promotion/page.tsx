"use client";

import { MarketingPromotions } from "@/components/owner/MarketingPromotions";
import { DashboardLayout } from "@/components/layouts/MainLayout";

const marketingData = {
  activePromotions: 5,
  totalBudget: 50000,
  spentBudget: 35000,
  campaigns: [
    { name: "Early Bird Offer", status: "active", conversion: 15.2 },
    { name: "Referral Program", status: "active", conversion: 22.8 },
    { name: "Holiday Special", status: "scheduled", conversion: 0 }
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