"use client";

import { Card } from "@/components/ui/card";

interface MarketingPromotionsProps {
  data: {
    campaigns: Array<{
      name: string;
      platform: string;
      clicks: number;
      conversions: number;
      revenue: number;
      roi: number;
    }>;
    promotions: Array<{
      id: string;
      name: string;
      discount: string;
      startDate: string;
      endDate: string;
      status: string;
      redemptions: number;
    }>;
    coupons: Array<{
      code: string;
      discount: string;
      usageLimit: number;
      used: number;
      status: string;
    }>;
    courseFees: Array<{
      course: string;
      regularPrice: string;
      salePrice: string;
      category: string;
    }>;
  };
}

export function MarketingPromotions({ data }: MarketingPromotionsProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Active Campaigns</h2>
        <div className="space-y-4">
          {data.campaigns.map((campaign, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{campaign.name}</h3>
                <p>{campaign.platform}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <p>Clicks: {campaign.clicks}</p>
                <p>Conversions: {campaign.conversions}</p>
                <p>Revenue: ₹{(campaign.revenue / 100000).toFixed(1)}L</p>
                <p>ROI: {campaign.roi}%</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Active Promotions</h2>
        <div className="space-y-4">
          {data.promotions.map((promotion) => (
            <div key={promotion.id} className="border-b pb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{promotion.name}</h3>
                <p>{promotion.discount}</p>
              </div>
              <p>Valid: {promotion.startDate} to {promotion.endDate}</p>
              <p>Redemptions: {promotion.redemptions}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Active Coupons</h2>
        <div className="space-y-4">
          {data.coupons.map((coupon, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{coupon.code}</h3>
                <p>{coupon.discount}</p>
              </div>
              <p>Usage: {coupon.used}/{coupon.usageLimit}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Course Pricing</h2>
        <div className="space-y-4">
          {data.courseFees.map((course, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{course.course}</h3>
                <p>{course.category}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Regular: {course.regularPrice}</p>
                <p>Sale: {course.salePrice}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}