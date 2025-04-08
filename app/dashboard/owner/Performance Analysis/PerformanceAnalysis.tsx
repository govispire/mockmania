"use client";

import { Card } from "@/components/ui/card";
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
  LineChart,
  Line,
} from "recharts";

interface PerformanceAnalysisProps {
  data: {
    topCourses: {
      name: string;
      revenue: number;
      students: number;
    }[];
    topTestPackages: {
      name: string;
      purchases: number;
    }[];
    topExams: {
      name: string;
      interest: number;
    }[];
    examCategories: {
      name: string;
      signups: number;
      dropouts: number;
    }[];
    dailySignups: {
      date: string;
      signups: number;
      conversions: number;
    }[];
  };
}

export function PerformanceAnalysis({ data }: PerformanceAnalysisProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Top Revenue-Generating Courses</h3>
          <div className="space-y-4">
            {data.topCourses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{course.name}</span>
                  <span className="text-primary">${course.revenue}</span>
                </div>
                <Progress
                  value={
                    (course.revenue /
                      Math.max(...data.topCourses.map((c) => c.revenue))) *
                    100
                  }
                />
                <div className="text-sm text-muted-foreground">
                  {course.students} students enrolled
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Most Purchased Test Packages</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.topTestPackages}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="purchases"
                  fill="hsl(var(--primary))"
                  name="Purchases"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Most Demanding Tests/Exams</h3>
          <div className="space-y-4">
            {data.topExams.map((exam, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{exam.name}</span>
                  <span className="text-primary">{exam.interest} users</span>
                </div>
                <Progress
                  value={
                    (exam.interest /
                      Math.max(...data.topExams.map((e) => e.interest))) *
                    100
                  }
                />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Popular Exam Categories</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.examCategories}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="signups"
                  fill="hsl(var(--primary))"
                  name="Sign-ups"
                />
                <Bar
                  dataKey="dropouts"
                  fill="hsl(var(--destructive))"
                  name="Dropouts"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Daily Signups & Conversion Rates</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.dailySignups}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="signups"
                stroke="hsl(var(--primary))"
                name="Signups"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="conversions"
                stroke="hsl(var(--chart-2))"
                name="Conversions"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
