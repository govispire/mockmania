import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SalesPerformanceProps {
  data: {
    todaySales: string;
    weeklySales: string;
    monthlySales: string;
    totalSales: string;
    mostActiveProduct: string;
    mostPopularTest: string;
    mostPurchasedCourse: string;
  }
}

export function SalesPerformance({ data }: SalesPerformanceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Today's Sales</p>
            <p className="text-2xl font-bold">{data.todaySales}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Weekly Sales</p>
            <p className="text-2xl font-bold">{data.weeklySales}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Monthly Sales</p>
            <p className="text-2xl font-bold">{data.monthlySales}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Sales</p>
            <p className="text-2xl font-bold">{data.totalSales}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-sm text-muted-foreground">Most Active Product</p>
            <p className="font-medium">{data.mostActiveProduct}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Most Popular Test</p>
            <p className="font-medium">{data.mostPopularTest}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Most Purchased Course</p>
            <p className="font-medium">{data.mostPurchasedCourse}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}