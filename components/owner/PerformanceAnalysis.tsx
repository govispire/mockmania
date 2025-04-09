
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PerformanceAnalysisProps {
  data: {
    topCourses: Array<{
      name: string;
      revenue: number;
      students: number;
    }>;
    topTestPackages: Array<{
      name: string;
      purchases: number;
    }>;
    topExams: Array<{
      name: string;
      interest: number;
    }>;
    examCategories: Array<{
      name: string;
      signups: number;
      dropouts: number;
    }>;
    dailySignups: Array<{
      date: string;
      signups: number;
      conversions: number;
    }>;
  };
}

export function PerformanceAnalysis({ data }: PerformanceAnalysisProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.topCourses.map((course, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{course.name}</p>
                  <p className="text-sm text-muted-foreground">{course.students} students</p>
                </div>
                <span className="font-bold">₹{course.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Signups & Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.dailySignups}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="signups" stroke="#8884d8" />
                <Line type="monotone" dataKey="conversions" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
