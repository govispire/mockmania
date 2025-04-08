"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { MarketingPromotions } from "@/components/owner/MarketingPromotions";

// Mock data for MarketingPromotions component
const marketingPromotionsData = {
  campaigns: [],
  promotions: [],
  coupons: [],
  courseFees: []
};

export default function MarketingPage() {
  return (
    <DashboardLayout>
      <MarketingPromotions data={marketingPromotionsData} />
    </DashboardLayout>
  );
}