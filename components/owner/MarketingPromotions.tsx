
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";

interface MarketingData {
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
}

export function MarketingPromotions({ data }: { data: MarketingData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Campaigns</h3>
          <div className="space-y-4">
            {data.campaigns.map((campaign, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{campaign.name}</span>
                  <span className="text-muted-foreground">{campaign.platform}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Clicks: {campaign.clicks}</div>
                  <div>Conversions: {campaign.conversions}</div>
                  <div>Revenue: ₹{(campaign.revenue / 100000).toFixed(1)}L</div>
                  <div>ROI: {campaign.roi}%</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Promotions</h3>
          <div className="space-y-4">
            {data.promotions.map((promotion) => (
              <div key={promotion.id} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{promotion.name}</span>
                  <span className="text-green-600">{promotion.discount}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {promotion.startDate} - {promotion.endDate}
                </div>
                <div className="text-sm">
                  Redemptions: {promotion.redemptions}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Course Pricing</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Course</th>
                <th className="text-left py-2">Category</th>
                <th className="text-left py-2">Regular Price</th>
                <th className="text-left py-2">Sale Price</th>
              </tr>
            </thead>
            <tbody>
              {data.courseFees.map((course, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{course.course}</td>
                  <td className="py-2">{course.category}</td>
                  <td className="py-2">{course.regularPrice}</td>
                  <td className="py-2">{course.salePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
