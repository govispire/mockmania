import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeedbackProps {
  data: {
    testRatings: {
      averageRating: number;
      totalRatings: number;
      distribution: number[];
    };
    courseRatings: {
      averageRating: number;
      totalRatings: number;
      distribution: number[];
    };
    reviews: Array<{
      id: string;
      user: string;
      rating: number;
      comment: string;
      date: string;
      type: string;
      itemName: string;
    }>;
    commonComplaints: Array<{
      issue: string;
      count: number;
    }>;
  }
}

export function Feedback({ data }: FeedbackProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback & Ratings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Test Average Rating</p>
            <p className="text-2xl font-bold">{data.testRatings.averageRating}</p>
            <p className="text-sm text-muted-foreground">{data.testRatings.totalRatings} ratings</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Course Average Rating</p>
            <p className="text-2xl font-bold">{data.courseRatings.averageRating}</p>
            <p className="text-sm text-muted-foreground">{data.courseRatings.totalRatings} ratings</p>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Recent Reviews</p>
          <div className="space-y-2">
            {data.reviews.map((review) => (
              <div key={review.id} className="space-y-1">
                <div className="flex justify-between">
                  <p className="font-medium">{review.user}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <p className="text-sm">{review.comment}</p>
                <p className="text-sm text-muted-foreground">{review.itemName} ({review.type})</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium mb-2">Common Issues</p>
          <div className="space-y-2">
            {data.commonComplaints.map((complaint) => (
              <div key={complaint.issue} className="flex justify-between items-center">
                <p className="font-medium">{complaint.issue}</p>
                <p className="text-sm text-muted-foreground">{complaint.count} reports</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}