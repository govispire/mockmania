"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Play, FileText, Clock, User, LayoutGrid, List } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExamPage({ params }: { params: { exam: string } }) {
  const [selectedTab, setSelectedTab] = useState("prelims");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const router = useRouter();

  const getExamData = (examSlug: string) => {
    const examConfig: Record<string, any> = {
      "ibps-po": {
        name: "IBPS PO 2025",
        logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/ibps_ygpzwj.webp",
      },
      "sbi-po": {
        name: "SBI PO 2025",
        logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/sbi_po_enyflu.webp",
      },
      "rbi-grade-b": {
        name: "RBI Grade B 2025",
        logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125087/reservebank_of_india_jlgv5o.webp",
      }
    };

    return examConfig[examSlug] || { name: examSlug.toUpperCase().replace(/-/g, ' '), logo: `/logos/${examSlug.split('-')[0]}.png` };
  };

  const exam = getExamData(params.exam);

  const mainTabs = [
    { id: "prelims", name: "Prelims", tests: Array(6).fill(null).map((_, i) => ({
      id: `prelims-${i + 1}`,
      title: `${exam.name} Prelims Test ${i + 1}`,
      marks: 100,
      duration: 180,
      progress: Math.floor(Math.random() * 100),
      status: Math.random() > 0.5 ? "free" : "premium"
    }))},
    { id: "mains", name: "Mains", tests: Array(4).fill(null).map((_, i) => ({
      id: `mains-${i + 1}`,
      title: `${exam.name} Mains Test ${i + 1}`,
      marks: 200,
      duration: 180,
      progress: Math.floor(Math.random() * 100),
      status: Math.random() > 0.5 ? "free" : "premium"
    }))},
    { id: "previous", name: "Previous Year", tests: Array(5).fill(null).map((_, i) => ({
      id: `previous-${i + 1}`,
      title: `${exam.name} ${2024 - i} Paper`,
      marks: 100,
      duration: 180,
      progress: Math.floor(Math.random() * 100),
      status: "premium"
    }))},
    { id: "sectional", name: "Sectional", tests: Array(8).fill(null).map((_, i) => ({
      id: `sectional-${i + 1}`,
      title: `${exam.name} Sectional Test ${i + 1}`,
      marks: 50,
      duration: 60,
      progress: Math.floor(Math.random() * 100),
      status: Math.random() > 0.7 ? "free" : "premium"
    }))}
  ];

  const currentTab = mainTabs.find(tab => tab.id === selectedTab) || mainTabs[0];

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

        <div className="flex items-center justify-between mb-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="flex-1">
            <TabsList>
              {mainTabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex gap-2">
            <Button
              variant={viewType === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewType("grid")}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewType === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewType("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className={cn("space-y-4", {
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4": viewType === "grid"
        })}>
          {currentTab.tests.map((test) => (
            <Card key={test.id} className={cn("p-4", {
              "hover:shadow-lg transition-all": viewType === "grid",
              "mb-4": viewType === "list"
            })}>
              <div className={cn("flex items-center", {
                "flex-col text-center": viewType === "grid",
                "justify-between": viewType === "list"
              })}>
                <div className={cn("flex items-center gap-4", {
                  "flex-col": viewType === "grid"
                })}>
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
                      <span className={cn("px-2 py-1 rounded text-xs", {
                        "bg-green-100 text-green-700": test.status === "free",
                        "bg-blue-100 text-blue-700": test.status === "premium"
                      })}>
                        {test.status}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => router.push(`/exam/${params.exam}-${test.id}`)}
                  variant={test.progress > 0 ? "outline" : "default"}
                  className={cn("mt-4", { "mt-0": viewType === "list" })}
                >
                  {test.progress > 0 ? "Resume" : "Start"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}