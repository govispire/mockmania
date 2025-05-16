"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";

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
    reviews: {
      id: string;
      user: string;
      rating: number;
      comment: string;
      date: string;
      type: "course" | "test";
      itemName: string;
    }[];
    commonComplaints: {
      issue: string;
      count: number;
    }[];
  };
}

export function Feedback({ data }: FeedbackProps) {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <Tabs defaultValue="tests">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Ratings Overview</h3>
              <TabsList>
                <TabsTrigger value="tests">Tests</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tests">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold">
                  {data.testRatings.averageRating.toFixed(1)}
                </div>
                <div>
                  <div className="flex">
                    {renderStars(Math.round(data.testRatings.averageRating))}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Based on {data.testRatings.totalRatings} ratings
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {data.testRatings.distribution.map((count, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-12 text-sm">{5 - index} stars</div>
                    <Progress
                      value={(count / data.testRatings.totalRatings) * 100}
                      className="flex-1"
                    />
                    <div className="w-12 text-sm text-right">
                      {((count / data.testRatings.totalRatings) * 100).toFixed(
                        0,
                      )}
                      %
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold">
                  {data.courseRatings.averageRating.toFixed(1)}
                </div>
                <div>
                  <div className="flex">
                    {renderStars(Math.round(data.courseRatings.averageRating))}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Based on {data.courseRatings.totalRatings} ratings
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {data.courseRatings.distribution.map((count, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-12 text-sm">{5 - index} stars</div>
                    <Progress
                      value={(count / data.courseRatings.totalRatings) * 100}
                      className="flex-1"
                    />
                    <div className="w-12 text-sm text-right">
                      {(
                        (count / data.courseRatings.totalRatings) *
                        100
                      ).toFixed(0)}
                      %
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">
            Common Complaints & Improvement Areas
          </h3>
          <div className="space-y-4">
            {data.commonComplaints.map((complaint, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{complaint.issue}</span>
                  <span className="text-primary">
                    {complaint.count} mentions
                  </span>
                </div>
                <Progress
                  value={
                    (complaint.count /
                      Math.max(...data.commonComplaints.map((c) => c.count))) *
                    100
                  }
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">User Reviews & Comments</h3>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Reviews</TabsTrigger>
            <TabsTrigger value="courses">Course Reviews</TabsTrigger>
            <TabsTrigger value="tests">Test Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-4">
              {data.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{review.user}</div>
                      <div className="text-sm text-muted-foreground">
                        {review.type === "course" ? "Course: " : "Test: "}
                        {review.itemName}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {review.date}
                    </div>
                  </div>
                  <div className="flex my-2">{renderStars(review.rating)}</div>
                  <p className="text-sm">{review.comment}</p>
                  <div className="flex gap-4 mt-2">
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Reply
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="space-y-4">
              {data.reviews
                .filter((review) => review.type === "course")
                .map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium">{review.user}</div>
                        <div className="text-sm text-muted-foreground">
                          Course: {review.itemName}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {review.date}
                      </div>
                    </div>
                    <div className="flex my-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                    <div className="flex gap-4 mt-2">
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="tests">
            <div className="space-y-4">
              {data.reviews
                .filter((review) => review.type === "test")
                .map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium">{review.user}</div>
                        <div className="text-sm text-muted-foreground">
                          Test: {review.itemName}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {review.date}
                      </div>
                    </div>
                    <div className="flex my-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                    <div className="flex gap-4 mt-2">
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
