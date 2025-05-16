import { Card } from "@/components/ui/card";

interface SalesPerformanceData {
  todaySales: string;
  weeklySales: string;
  monthlySales: string;
  totalSales: string;
  mostActiveProduct: string;
  mostPopularTest: string;
  mostPurchasedCourse: string;
}

export function SalesPerformance({ data }: { data: SalesPerformanceData }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <h3 className="text-sm font-medium">Today&apos;s Sales</h3>
        <p className="mt-2 text-2xl font-bold">{data.todaySales}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium">Weekly Sales</h3>
        <p className="mt-2 text-2xl font-bold">{data.weeklySales}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium">Monthly Sales</h3>
        <p className="mt-2 text-2xl font-bold">{data.monthlySales}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium">Total Sales</h3>
        <p className="mt-2 text-2xl font-bold">{data.totalSales}</p>
      </Card>
      <Card className="p-6 md:col-span-2">
        <h3 className="text-sm font-medium">Most Active Products</h3>
        <div className="mt-4 space-y-2">
          <div>
            <p className="text-sm text-muted-foreground">Most Popular Course</p>
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
      </Card>
    </div>
  );
}