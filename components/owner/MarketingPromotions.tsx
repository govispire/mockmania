"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Plus, Edit, Trash, Tag, Percent, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MarketingPromotionsProps {
  data: {
    campaigns: {
      name: string;
      platform: string;
      clicks: number;
      conversions: number;
      revenue: number;
      roi: number;
    }[];
    promotions: {
      id: string;
      name: string;
      discount: string;
      startDate: string;
      endDate: string;
      status: "active" | "scheduled" | "expired";
      redemptions: number;
    }[];
    coupons: {
      code: string;
      discount: string;
      usageLimit: number;
      used: number;
      status: "active" | "expired";
    }[];
    courseFees: {
      course: string;
      regularPrice: string;
      salePrice: string | null;
      category: string;
    }[];
  };
}

export function MarketingPromotions({ data }: MarketingPromotionsProps) {
  const campaignData = data.campaigns.map((campaign) => ({
    name: campaign.name,
    clicks: campaign.clicks,
    conversions: campaign.conversions,
    revenue: campaign.revenue,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const couponUsageData = data.coupons.map((coupon) => ({
    name: coupon.code,
    value: coupon.used,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Campaign Tracking</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="clicks" fill="hsl(var(--primary))" name="Clicks" />
              <Bar
                dataKey="conversions"
                fill="hsl(var(--chart-2))"
                name="Conversions"
              />
              <Bar
                dataKey="revenue"
                fill="hsl(var(--chart-3))"
                name="Revenue ($)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Ongoing Offers & Promotions</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Promotion
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Promotion</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="promo-name">Promotion Name</Label>
                    <Input id="promo-name" placeholder="Enter promotion name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="discount">Discount</Label>
                      <div className="flex">
                        <Input id="discount" placeholder="Enter amount" />
                        <select className="ml-2 border rounded-md px-2">
                          <option>%</option>
                          <option>$</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="promo-type">Type</Label>
                      <select
                        id="promo-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option>Site-wide</option>
                        <option>Course-specific</option>
                        <option>Test-specific</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Promotion</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Name</th>
                  <th className="text-left py-3 px-4 font-medium">Discount</th>
                  <th className="text-left py-3 px-4 font-medium">Period</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.promotions.map((promotion) => (
                  <tr key={promotion.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{promotion.name}</td>
                    <td className="py-3 px-4">{promotion.discount}</td>
                    <td className="py-3 px-4">
                      {promotion.startDate} - {promotion.endDate}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${promotion.status === "active" ? "bg-green-100 text-green-800" : promotion.status === "scheduled" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
                      >
                        {promotion.status.charAt(0).toUpperCase() +
                          promotion.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Coupon Code Management</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Coupon
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Coupon</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="coupon-code">Coupon Code</Label>
                    <Input id="coupon-code" placeholder="Enter coupon code" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="coupon-discount">Discount</Label>
                      <div className="flex">
                        <Input
                          id="coupon-discount"
                          placeholder="Enter amount"
                        />
                        <select className="ml-2 border rounded-md px-2">
                          <option>%</option>
                          <option>$</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="usage-limit">Usage Limit</Label>
                      <Input
                        id="usage-limit"
                        type="number"
                        placeholder="Enter limit"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="coupon-start">Start Date</Label>
                      <Input id="coupon-start" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="coupon-end">End Date</Label>
                      <Input id="coupon-end" type="date" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Coupon</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Code</th>
                    <th className="text-left py-3 px-4 font-medium">
                      Discount
                    </th>
                    <th className="text-left py-3 px-4 font-medium">Usage</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.coupons.map((coupon, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">{coupon.code}</td>
                      <td className="py-3 px-4">{coupon.discount}</td>
                      <td className="py-3 px-4">
                        {coupon.used}/{coupon.usageLimit}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${coupon.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                        >
                          {coupon.status.charAt(0).toUpperCase() +
                            coupon.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={couponUsageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {couponUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}`, "Redemptions"]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Course Fee Management</h3>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Course
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="ssc">SSC</TabsTrigger>
            <TabsTrigger value="rrb">RRB</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Course</th>
                    <th className="text-left py-3 px-4 font-medium">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 font-medium">
                      Regular Price
                    </th>
                    <th className="text-left py-3 px-4 font-medium">
                      Sale Price
                    </th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.courseFees.map((course, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">{course.course}</td>
                      <td className="py-3 px-4">{course.category}</td>
                      <td className="py-3 px-4">{course.regularPrice}</td>
                      <td className="py-3 px-4">
                        {course.salePrice ? (
                          <span className="text-green-600">
                            {course.salePrice}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Tag className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Percent className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Similar content for other tabs */}
        </Tabs>
      </Card>
    </div>
  );
}
