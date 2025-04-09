"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/MainLayout";
import { ExamButton } from "@/components/ExamButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Play, FileText, Clock, User } from "lucide-react";

export default function ExamPage({ params }: { params: { exam: string } }) {
  const [selectedTab, setSelectedTab] = useState("prelims");
  const [selectedTestType, setSelectedTestType] = useState("full");
  const progress = 70;
  const totalMarks = 140;

  const generateExamData = (examSlug: string) => {
    const examNames: Record<string, string> = {
      "ibps-po": "IBPS PO 2025",
      "ibps-clerk": "IBPS Clerk 2025",
      "ibps-so": "IBPS SO 2025",
      "sbi-po": "SBI PO 2025",
      "sbi-clerk": "SBI Clerk 2025",
      "rbi-grade-b": "RBI Grade B 2025",
      "rbi-assistant": "RBI Assistant 2025",
      "nabard-grade-a-b": "NABARD Grade A & B 2025",
      "idbi-executive": "IDBI Executive 2025",
      "rrb-officer": "RRB Officer 2025"
    };

    return {
      name: examNames[examSlug] || examSlug.toUpperCase().replace(/-/g, ' '),
      logo: `https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/${examSlug.split('-')[0]}_ygpzwj.webp`,
      progress: {
        prelims: Math.floor(Math.random() * 100),
        mains: Math.floor(Math.random() * 100)
      }
    };
  };

  const exam = generateExamData(params.exam);

  const mainTabs = [
    { id: "prelims", name: "Prelims" },
    { id: "mains", name: "Mains" },
    { id: "descriptive", name: "Descriptive" },
    { id: "interview", name: "Interview" }
  ];

  const testTypes = {
    prelims: [
      { id: "full", name: "Full Test" },
      { id: "sectional", name: "Sectional test" },
      { id: "previous", name: "Previous year" },
      { id: "speed", name: "Speed Test" }
    ],
    mains: [
      { id: "full", name: "Full Test" },
      { id: "sectional", name: "Sectional test" },
      { id: "previous", name: "Previous year" },
      { id: "speed", name: "Speed Test" }
    ],
    descriptive: [
      { id: "letter", name: "Letter Writing" },
      { id: "essay", name: "Essay Writing" },
      { id: "precis", name: "Precis Writing" }
    ]
  };

  const mockTests = [
    {
      id: 1,
      title: "IBPS PO Full Test 1",
      marks: 100,
      duration: 180,
      progress: 75,
      status: "free"
    },
    {
      id: 2,
      title: "IBPS PO Full Test 2",
      marks: 100,
      duration: 180,
      progress: 0,
      status: "available"
    },
    {
      id: 3,
      title: "IBPS PO Full Test 3",
      marks: 100,
      duration: 180,
      progress: 25,
      status: "free"
    }
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={exam.logo}
              alt={exam.name}
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{exam.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <Button size="sm" variant="default" className="gap-2">
                  <Play className="w-4 h-4" /> How to Start
                </Button>
                <Button size="sm" variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" /> Syllabus
                </Button>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                Total users
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Prelims Test completed</span>
              <span>{exam.progress.prelims}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${exam.progress.prelims}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Mains test completed</span>
              <span>{exam.progress.mains}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${exam.progress.mains}%` }}
              />
            </div>
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            {mainTabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(testTypes).map(([tabId, types]) => (
            <TabsContent key={tabId} value={tabId}>
              <div className="flex gap-2 mb-6">
                {types.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedTestType === type.id ? "default" : "outline"}
                    onClick={() => setSelectedTestType(type.id)}
                  >
                    {type.name}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                {mockTests.map((test) => (
                  <Card key={test.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center">
                          <span className="text-xl font-bold">{test.progress}%</span>
                        </div>
                        <div>
                          <h3 className="font-medium">{test.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" /> {test.duration} mins
                            </span>
                            <span>{test.marks} marks</span>
                          </div>
                        </div>
                      </div>
                      <ExamButton
                        examId={`${params.exam}-${test.id}`}
                        variant={test.progress > 0 ? "outline" : "default"}
                      >
                        {test.progress > 0 ? "Resume" : "Start"}
                      </ExamButton>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}