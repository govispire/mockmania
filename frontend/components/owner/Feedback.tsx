"use client";

import { Card } from "@/components/ui/card";

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
  };
}

export function Feedback({ data }: FeedbackProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Test Ratings</h2>
        <div>
          <p>Average Rating: {data.testRatings.averageRating}</p>
          <p>Total Ratings: {data.testRatings.totalRatings}</p>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Course Ratings</h2>
        <div>
          <p>Average Rating: {data.courseRatings.averageRating}</p>
          <p>Total Ratings: {data.courseRatings.totalRatings}</p>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Reviews</h2>
        <div className="space-y-4">
          {data.reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex justify-between">
                <p className="font-semibold">{review.user}</p>
                <p>{review.date}</p>
              </div>
              <p>Rating: {review.rating}/5</p>
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">
                {review.type}: {review.itemName}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Common Complaints</h2>
        <div className="space-y-2">
          {data.commonComplaints.map((complaint, index) => (
            <div key={index} className="flex justify-between">
              <p>{complaint.issue}</p>
              <p>{complaint.count} reports</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}