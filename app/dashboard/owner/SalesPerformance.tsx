"use client";

import { Card } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";

interface SalesPerformanceProps {
  data: {
    todaySales: string;
    weeklySales: string;
    monthlySales: string;
    totalSales: string;
    mostActiveProduct: string;
    mostPopularTest: string;
    mostPurchasedCourse: string;
  };
}

export function SalesPerformance({ data }: SalesPerformanceProps) {
  const stats = [
    {
      title: "Today's Sales",
      value: data.todaySales,
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Weekly Sales",
      value: data.weeklySales,
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Monthly Sales",
      value: data.monthlySales,
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      title: "Total Sales",
      value: data.totalSales,
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">{stat.icon}</div>
              <div>
                <h3 className="font-semibold text-muted-foreground">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Most Active Product</h3>
          <p className="text-xl font-medium">{data.mostActiveProduct}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Highest engagement and sales this month
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Most Popular Test</h3>
          <p className="text-xl font-medium">{data.mostPopularTest}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Based on user enrollments
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Most Purchased Course</h3>
          <p className="text-xl font-medium">{data.mostPurchasedCourse}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Highest number of purchases
          </p>
        </Card>
      </div>
    </div>
  );
}
