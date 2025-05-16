import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserActivityProps {
  data: {
    currentActiveUsers: number;
    totalLoggedInUsers: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    purchasedUsers: number;
    nonPurchasedUsers: number;
    userEngagement: Array<{
      name: string;
      value: number;
      color: string;
    }>;
  }
}

export function UserActivity({ data }: UserActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Currently Active Users</p>
          <p className="text-2xl font-bold">{data.currentActiveUsers}</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Daily Logins</p>
            <p className="font-medium">{data.totalLoggedInUsers.daily}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Weekly Logins</p>
            <p className="font-medium">{data.totalLoggedInUsers.weekly}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Monthly Logins</p>
            <p className="font-medium">{data.totalLoggedInUsers.monthly}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-sm text-muted-foreground">Purchased Users</p>
            <p className="font-medium">{data.purchasedUsers}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Non-Purchased Users</p>
            <p className="font-medium">{data.nonPurchasedUsers}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}