import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  }
}

export function UserBehavior({ data }: UserBehaviorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Behavior</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-medium mb-2">User Type Distribution</p>
          <div className="flex gap-4">
            {data.newVsReturning.map((type) => (
              <div key={type.name}>
                <p className="text-sm text-muted-foreground">{type.name}</p>
                <p className="font-medium">{type.value}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Left Without Buying</p>
            <p className="font-medium">{data.leftWithoutBuying}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Incomplete Tests</p>
            <p className="font-medium">{data.incompleteTests}</p>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Most Used Features</p>
          <div className="space-y-2">
            {data.mostUsedFeatures.map((feature) => (
              <div key={feature.feature} className="flex justify-between items-center">
                <p className="font-medium">{feature.feature}</p>
                <p className="text-sm text-muted-foreground">{feature.usage} uses</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}