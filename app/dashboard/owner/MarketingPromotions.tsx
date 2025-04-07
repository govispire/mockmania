"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Tag, Mail, Share2, Megaphone, Edit, Trash2 } from "lucide-react";

interface MarketingPromotionsProps {
  data: {
    activePromotions: number;
    totalCampaigns: number;
    emailStats: {
      sent: number;
      opened: number;
      clicked: number;
    };
    conversionRate: number;
    campaignPerformance: {
      name: string;
      impressions: number;
      clicks: number;
      conversions: number;
    }[];
    channelDistribution: {
      name: string;
      value: number;
      color: string;
    }[];
    upcomingCampaigns: {
      id: string;
      name: string;
      type: string;
      startDate: string;
      status: "scheduled" | "draft" | "active";
    }[];
  };
}

export function MarketingPromotions({ data }: MarketingPromotionsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">
                Active Promotions
              </h3>
              <p className="text-3xl font-bold">{data.activePromotions}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">
                Total Campaigns
              </h3>
              <p className="text-3xl font-bold">{data.totalCampaigns}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">
                Email Open Rate
              </h3>
              <p className="text-3xl font-bold">
                {(
                  (data.emailStats.opened / data.emailStats.sent) *
                  100
                ).toFixed(1)}
                %
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Share2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">
                Conversion Rate
              </h3>
              <p className="text-3xl font-bold">{data.conversionRate}%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Campaign Performance</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.campaignPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="impressions"
                  fill="hsl(var(--primary))"
                  name="Impressions"
                />
                <Bar
                  dataKey="clicks"
                  fill="hsl(var(--chart-2))"
                  name="Clicks"
                />
                <Bar
                  dataKey="conversions"
                  fill="hsl(var(--chart-3))"
                  name="Conversions"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Marketing Channel Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.channelDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.channelDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Upcoming & Active Campaigns</h3>
          <Button size="sm">
            <Tag className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Campaign</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Start Date</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.upcomingCampaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">{campaign.name}</td>
                  <td className="py-3 px-4">{campaign.type}</td>
                  <td className="py-3 px-4">{campaign.startDate}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${campaign.status === "active" ? "bg-green-100 text-green-800" : campaign.status === "scheduled" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
                    >
                      {campaign.status.charAt(0).toUpperCase() +
                        campaign.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4" />
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
        <h3 className="font-semibold mb-4">Email Campaign Analytics</h3>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="opens">Opens</TabsTrigger>
            <TabsTrigger value="clicks">Clicks</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Sent</span>
                    <span className="text-sm">{data.emailStats.sent}</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Opened</span>
                    <span className="text-sm">
                      {data.emailStats.opened} (
                      {(
                        (data.emailStats.opened / data.emailStats.sent) *
                        100
                      ).toFixed(1)}
                      %)
                    </span>
                  </div>
                  <Progress
                    value={
                      (data.emailStats.opened / data.emailStats.sent) * 100
                    }
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Clicked</span>
                    <span className="text-sm">
                      {data.emailStats.clicked} (
                      {(
                        (data.emailStats.clicked / data.emailStats.sent) *
                        100
                      ).toFixed(1)}
                      %)
                    </span>
                  </div>
                  <Progress
                    value={
                      (data.emailStats.clicked / data.emailStats.sent) * 100
                    }
                    className="h-2"
                  />
                </div>
              </div>

              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { date: "Mon", sent: 1200, opened: 800, clicked: 400 },
                      { date: "Tue", sent: 1500, opened: 950, clicked: 500 },
                      { date: "Wed", sent: 1800, opened: 1100, clicked: 600 },
                      { date: "Thu", sent: 1200, opened: 750, clicked: 350 },
                      { date: "Fri", sent: 1600, opened: 1000, clicked: 550 },
                      { date: "Sat", sent: 800, opened: 500, clicked: 250 },
                      { date: "Sun", sent: 600, opened: 350, clicked: 150 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sent"
                      stroke="hsl(var(--primary))"
                      name="Sent"
                    />
                    <Line
                      type="monotone"
                      dataKey="opened"
                      stroke="hsl(var(--chart-2))"
                      name="Opened"
                    />
                    <Line
                      type="monotone"
                      dataKey="clicked"
                      stroke="hsl(var(--chart-3))"
                      name="Clicked"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="opens">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { time: "6am", opens: 50 },
                    { time: "8am", opens: 120 },
                    { time: "10am", opens: 200 },
                    { time: "12pm", opens: 180 },
                    { time: "2pm", opens: 150 },
                    { time: "4pm", opens: 170 },
                    { time: "6pm", opens: 190 },
                    { time: "8pm", opens: 120 },
                    { time: "10pm", opens: 80 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="opens"
                    stroke="hsl(var(--chart-2))"
                    name="Opens"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="clicks">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { time: "6am", clicks: 20 },
                    { time: "8am", clicks: 60 },
                    { time: "10am", clicks: 100 },
                    { time: "12pm", clicks: 90 },
                    { time: "2pm", clicks: 75 },
                    { time: "4pm", clicks: 85 },
                    { time: "6pm", clicks: 95 },
                    { time: "8pm", clicks: 60 },
                    { time: "10pm", clicks: 40 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="hsl(var(--chart-3))"
                    name="Clicks"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
