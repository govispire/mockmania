"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { Feedback } from "@/frontend/components/owner/Feedback";

// Mock data for Feedback component
const feedbackData = {
  testRatings: {
    averageRating: 4.2,
    totalRatings: 850,
    distribution: [500, 200, 100, 30, 20], // 5 stars to 1 star
  },
  courseRatings: {
    averageRating: 4.5,
    totalRatings: 1200,
    distribution: [800, 250, 100, 30, 20], // 5 stars to 1 star
  },
  reviews: [
    {
      id: "REV-001",
      user: "Rahul Sharma",
      rating: 5,
      comment:
        "Excellent course material and teaching methodology. Helped me clear my exam in the first attempt.",
      date: "2023-06-10",
      type: "course",
      itemName: "Banking Foundation Course",
    },
    {
      id: "REV-002",
      user: "Priya Singh",
      rating: 4,
      comment:
        "Very good test series with detailed explanations. Would recommend to others.",
      date: "2023-06-08",
      type: "test",
      itemName: "SBI PO Mock Test Series",
    },
    {
      id: "REV-003",
      user: "Amit Kumar",
      rating: 3,
      comment:
        "Good content but could use more practice questions and examples.",
      date: "2023-06-05",
      type: "course",
      itemName: "IBPS Clerk Course",
    },
    {
      id: "REV-004",
      user: "Neha Gupta",
      rating: 5,
      comment:
        "The test series is very close to the actual exam pattern. Very helpful!",
      date: "2023-06-02",
      type: "test",
      itemName: "SSC CGL Test Series",
    },
    {
      id: "REV-005",
      user: "Vikram Patel",
      rating: 4,
      comment:
        "Comprehensive course material. The video lectures are very engaging.",
      date: "2023-05-30",
      type: "course",
      itemName: "RBI Assistant Course",
    },
  ],
  commonComplaints: [
    { issue: "Video buffering issues", count: 45 },
    { issue: "Need more practice questions", count: 38 },
    { issue: "Test timer issues", count: 25 },
    { issue: "Payment gateway problems", count: 18 },
    { issue: "Mobile app crashes", count: 12 },
  ],
};

export default function FeedbackPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">User Feedback & Reviews</h1>
          <p className="text-muted-foreground">
            Monitor user ratings, reviews, and common issues
          </p>
        </div>

        <Feedback data={feedbackData} />
      </div>
    </DashboardLayout>
  );
}