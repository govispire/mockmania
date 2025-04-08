"use client";

import { WebsitePerformance } from "@/components/owner/WebsitePerformance";
import { DashboardLayout } from "@/components/layouts/MainLayout";

const websitePerformanceData = {
  activeUsers: 450,
  loadSpeed: {
    current: 1.2,
    target: 0.8,
  },
  uptime: 99.8,
  errors: [
    { type: "404 Not Found", count: 23, priority: "low" },
    { type: "500 Server Error", count: 5, priority: "high" },
    { type: "403 Forbidden", count: 12, priority: "medium" }
  ],
  databasePerformance: [
    { time: "00:00", queries: 150, responseTime: 45 },
    { time: "06:00", queries: 280, responseTime: 52 },
    { time: "12:00", queries: 420, responseTime: 63 },
    { time: "18:00", queries: 390, responseTime: 58 }
  ]
};

export default function WebsitePerformancePage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Website Performance</h1>
          <p className="text-muted-foreground">Monitor and analyze website metrics</p>
        </div>
        <WebsitePerformance data={websitePerformanceData} />
      </div>
    </DashboardLayout>
  );
}

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Users, Clock, AlertTriangle, Database } from "lucide-react";

interface WebsitePerformanceProps {
  data: {
    activeUsers: number;
    loadSpeed: {
      current: number;
      target: number;
    };
    uptime: number;
    errors: {
      type: string;
      count: number;
      priority: "high" | "medium" | "low";
    }[];
    databasePerformance: {
      time: string;
      queries: number;
      responseTime: number;
    }[];
  };
}

export function WebsitePerformance({ data }: WebsitePerformanceProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">
                Active Users
              </h3>
              <p className="text-3xl font-bold">{data.activeUsers}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">
                Load Speed
              </h3>
              <p className="text-3xl font-bold">{data.loadSpeed.current}s</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current</span>
              <span>Target: {data.loadSpeed.target}s</span>
            </div>
            <Progress
              value={(data.loadSpeed.target / data.loadSpeed.current) * 100}
              className="h-2"
            />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">Uptime</h3>
              <p className="text-3xl font-bold">{data.uptime}%</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current</span>
              <span>Target: 99.9%</span>
            </div>
            <Progress value={data.uptime} className="h-2" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-muted-foreground">
                DB Queries
              </h3>
              <p className="text-3xl font-bold">
                {
                  data.databasePerformance[data.databasePerformance.length - 1]
                    .queries
                }
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Avg. Response Time:{" "}
            {
              data.databasePerformance[data.databasePerformance.length - 1]
                .responseTime
            }
            ms
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Error Logs & Bug Reports</h3>
          <div className="space-y-4">
            {data.errors.map((error, index) => (
              <div
                key={index}
                className="border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex justify-between">
                  <div className="font-medium">{error.type}</div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs ${error.priority === "high" ? "bg-red-100 text-red-800" : error.priority === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                  >
                    {error.priority}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {error.count} occurrences in the last 24 hours
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Database Performance</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.databasePerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="queries"
                  stroke="hsl(var(--primary))"
                  name="Queries"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="responseTime"
                  stroke="hsl(var(--chart-2))"
                  name="Response Time (ms)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Active Users Over Time</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={[
                { time: "00:00", users: 120 },
                { time: "02:00", users: 80 },
                { time: "04:00", users: 50 },
                { time: "06:00", users: 70 },
                { time: "08:00", users: 150 },
                { time: "10:00", users: 280 },
                { time: "12:00", users: 350 },
                { time: "14:00", users: 420 },
                { time: "16:00", users: 380 },
                { time: "18:00", users: 290 },
                { time: "20:00", users: 210 },
                { time: "22:00", users: 180 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary)/0.2)"
                name="Active Users"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}