
"use client";

import { Card } from "@/components/ui/card";
import { Activity, AlertTriangle, Server } from "lucide-react";

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
      priority: string;
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Activity className="h-8 w-8 text-blue-500" />
          <div>
            <h3 className="text-sm font-medium">Active Users</h3>
            <p className="mt-2 text-2xl font-bold">{data.activeUsers}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Server className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="text-sm font-medium">Load Speed</h3>
            <p className="mt-2 text-2xl font-bold">{data.loadSpeed.current}s</p>
            <p className="text-sm text-muted-foreground">Target: {data.loadSpeed.target}s</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Activity className="h-8 w-8 text-purple-500" />
          <div>
            <h3 className="text-sm font-medium">Uptime</h3>
            <p className="mt-2 text-2xl font-bold">{data.uptime}%</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-yellow-500" />
          <div>
            <h3 className="text-sm font-medium">Recent Errors</h3>
            <p className="mt-2 text-2xl font-bold">{data.errors.reduce((acc, curr) => acc + curr.count, 0)}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
