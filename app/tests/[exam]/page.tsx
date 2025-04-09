"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExamButton } from "@/components/ExamButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Play, FileText, Clock, User, Crown, Star } from "lucide-react";

export default function ExamPage({ params }: { params: { exam: string } }) {
  const [selectedTab, setSelectedTab] = useState("prelims");
  const [selectedTestType, setSelectedTestType] = useState("full");

  const examData = {
    "ibps-po": {
      name: "IBPS PO 2025",
      logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/ibps_ygpzwj.webp",
      tabs: ["prelims", "mains", "descriptive", "interview"],
      types: {
        prelims: ["full", "sectional", "previous", "speed"],
        mains: ["full", "sectional", "previous", "speed"],
        descriptive: ["letter", "essay", "precis"],
        interview: ["mock", "hr", "technical"]
      }
    },
    "sbi-po": {
      name: "SBI PO 2025",
      logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/sbi_po_enyflu.webp",
      tabs: ["prelims", "mains", "descriptive", "interview"],
      types: {
        prelims: ["full", "sectional", "previous", "speed"],
        mains: ["full", "sectional", "previous", "speed"],
        descriptive: ["letter", "essay", "precis"],
        interview: ["mock", "hr", "technical"]
      }
    },
    "ibps-clerk": {
      name: "IBPS Clerk 2025",
      logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/ibps_ygpzwj.webp",
      tabs: ["prelims", "mains"],
      types: {
        prelims: ["full", "sectional", "previous", "speed"],
        mains: ["full", "sectional", "previous", "speed"]
      }
    }
  };

  const typeLabels = {
    full: "Full Length Tests",
    sectional: "Sectional Tests",
    previous: "Previous Year Papers",
    speed: "Speed Tests",
    letter: "Letter Writing",
    essay: "Essay Writing",
    precis: "Precis Writing",
    mock: "Mock Interview",
    hr: "HR Interview",
    technical: "Technical Interview"
  };

  const exam = examData[params.exam as keyof typeof examData] || examData["ibps-po"];

  const generateTests = (tab: string, type: string) => {
    const baseTests = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `${exam.name} ${tab.charAt(0).toUpperCase() + tab.slice(1)} ${typeLabels[type as keyof typeof typeLabels]} ${i + 1}`,
      duration: tab === "descriptive" ? 60 : 180,
      questions: tab === "descriptive" ? 2 : 100,
      progress: Math.random() > 0.7 ? Math.floor(Math.random() * 100) : 0,
      status: Math.random() > 0.6 ? "premium" : "free"
    }));

    return baseTests;
  };

  const tests = generateTests(selectedTab, selectedTestType);

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
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid grid-cols-4">
            {exam.tabs.map((tab) => (
              <TabsTrigger key={tab} value={tab} className="capitalize">
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {exam.tabs.map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="flex gap-2 mb-6">
                {exam.types[tab].map((type) => (
                  <Button
                    key={type}
                    variant={selectedTestType === type ? "default" : "outline"}
                    onClick={() => setSelectedTestType(type)}
                    className="capitalize"
                  >
                    {typeLabels[type as keyof typeof typeLabels]}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tests.map((test) => (
                  <Card key={test.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center">
                          {test.progress > 0 ? (
                            <span className="text-xl font-bold text-green-600">{test.progress}%</span>
                          ) : (
                            <span className="text-xl font-bold text-gray-400">New</span>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{test.title}</h3>
                            {test.status === "premium" && (
                              <Crown className="w-4 h-4 text-yellow-500" />
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" /> {test.duration} mins
                            </span>
                            <span>{test.questions} questions</span>
                            <span className={cn(
                              "px-2 py-0.5 rounded-full text-xs",
                              test.status === "premium" 
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                            )}>
                              {test.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ExamButton
                        examId={`${params.exam}-${selectedTab}-${selectedTestType}-${test.id}`}
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