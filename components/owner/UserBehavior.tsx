
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface UserBehaviorProps {
  data: {
    newVsReturning: Array<{
      name: string;
      value: number;
      color: string;
    }>;
    leftWithoutBuying: number;
    incompleteTests: number;
    averageTimeOnPlatform: Array<{
      date: string;
      minutes: number;
    }>;
    mostUsedFeatures: Array<{
      feature: string;
      usage: number;
    }>;
  };
}

export function UserBehavior({ data }: UserBehaviorProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>New vs Returning Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.newVsReturning}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.newVsReturning.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Behavior Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Left Without Buying</p>
              <h3 className="text-2xl font-bold">{data.leftWithoutBuying}</h3>
            </div>
            <div>
              <p className="text-sm font-medium">Incomplete Tests</p>
              <h3 className="text-2xl font-bold">{data.incompleteTests}</h3>
            </div>
            <div>
              <p className="text-sm font-medium">Most Used Features</p>
              <div className="space-y-2 mt-2">
                {data.mostUsedFeatures.map((feature, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{feature.feature}</span>
                    <span className="font-bold">{feature.usage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
