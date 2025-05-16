import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  }
}

export function PerformanceAnalysis({ data }: PerformanceAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-medium mb-2">Top Performing Courses</p>
          <div className="space-y-2">
            {data.topCourses.map((course) => (
              <div key={course.name} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{course.name}</p>
                  <p className="text-sm text-muted-foreground">{course.students} students</p>
                </div>
                <p className="font-medium">₹{course.revenue}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Top Test Packages</p>
          <div className="space-y-2">
            {data.topTestPackages.map((pack) => (
              <div key={pack.name} className="flex justify-between items-center">
                <p className="font-medium">{pack.name}</p>
                <p className="text-sm text-muted-foreground">{pack.purchases} purchases</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}