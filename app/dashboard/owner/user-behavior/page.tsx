"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

interface UserBehaviorProps {
  data: {
    newVsReturning: {
      name: string;
      value: number;
      color: string;
    }[];
    leftWithoutBuying: number;
    incompleteTests: number;
    averageTimeOnPlatform: {
      date: string;
      minutes: number;
    }[];
    mostUsedFeatures: {
      feature: string;
      usage: number;
    }[];
  };
}

export function UserBehavior({ data }: UserBehaviorProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">New vs Returning Users</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.newVsReturning}
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
                  {data.newVsReturning.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}`, "Users"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">User Behavior Metrics</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">
                  Users Who Left Without Buying
                </span>
                <span className="text-primary">{data.leftWithoutBuying}</span>
              </div>
              <Progress value={data.leftWithoutBuying} max={1000} />
              <p className="text-sm text-muted-foreground">
                Out of last 1000 visitors
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Incomplete Tests</span>
                <span className="text-primary">{data.incompleteTests}</span>
              </div>
              <Progress value={data.incompleteTests} max={500} />
              <p className="text-sm text-muted-foreground">
                Out of last 500 test attempts
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Average Time on Platform</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.averageTimeOnPlatform}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`${value} mins`, "Average Time"]}
                />
                <Line
                  type="monotone"
                  dataKey="minutes"
                  stroke="hsl(var(--primary))"
                  name="Minutes"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Most Used Features</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.mostUsedFeatures} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="feature" type="category" width={100} />
                <Tooltip formatter={(value) => [`${value}`, "Usage Count"]} />
                <Bar dataKey="usage" fill="hsl(var(--primary))" name="Usage" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
