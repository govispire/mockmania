"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  BookOpen,
  GraduationCap,
  Train,
  Building2,
  School,
  Briefcase,
  Shield,
  Users,
  Search,
} from "lucide-react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layouts/MainLayout";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  totalTests: number;
  lastUpdated: string;
}

const categories: Category[] = [
  {
    id: "banking",
    name: "Banking & Insurance",
    icon: <Building2 className="w-6 h-6" />,
    description: "Prepare for IBPS, SBI, RBI and Insurance exams",
    totalTests: 250,
    lastUpdated: "2024-03-20",
  },
  {
    id: "ssc",
    name: "SSC",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Complete preparation for SSC CGL, CHSL, and more",
    totalTests: 180,
    lastUpdated: "2024-03-19",
  },
  {
    id: "upsc",
    name: "UPSC",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Comprehensive coverage for Civil Services exams",
    totalTests: 150,
    lastUpdated: "2024-03-18",
  },
  {
    id: "railways",
    name: "Railways",
    icon: <Train className="w-6 h-6" />,
    description: "Practice tests for all Railway recruitment exams",
    totalTests: 120,
    lastUpdated: "2024-03-17",
  },
  {
    id: "teaching",
    name: "Teaching Exams",
    icon: <School className="w-6 h-6" />,
    description: "Prepare for CTET, TET, and other teaching exams",
    totalTests: 90,
    lastUpdated: "2024-03-16",
  },
  {
    id: "defense",
    name: "Defense Exams",
    icon: <Shield className="w-6 h-6" />,
    description: "Tests for CDS, AFCAT, and other defense exams",
    totalTests: 80,
    lastUpdated: "2024-03-15",
  },
  {
    id: "mba",
    name: "MBA",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Practice for CAT, XAT, and other MBA entrance exams",
    totalTests: 100,
    lastUpdated: "2024-03-14",
  },
  {
    id: "tnpsc",
    name: "TNPSC",
    icon: <Users className="w-6 h-6" />,
    description: "Complete preparation for Tamil Nadu PSC exams",
    totalTests: 70,
    lastUpdated: "2024-03-13",
  },
];

// Exam Categories with Logos
const examCategories = [
  {
    category: "Banking Exams",
    exams: [
      { name: "IBPS PO", slug: "ibps-po", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/ibps_ygpzwj.webp" },
      { name: "IBPS Clerk", slug: "ibps-clerk", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/ibps_ygpzwj.webp" },
      { name: "IBPS SO", slug: "ibps-so", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/ibps_ygpzwj.webp" },
      { name: "SBI PO", slug: "sbi-po", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/sbi_po_enyflu.webp" },
      { name: "SBI Clerk", slug: "sbi-clerk", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/sbi_po_enyflu.webp" },
      { name: "RBI Grade B", slug: "rbi-grade-b", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125087/reservebank_of_india_jlgv5o.webp" },
      { name: "RBI Assistant", slug: "rbi-assistant", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125087/reservebank_of_india_jlgv5o.webp" },
      { name: "NABARD Grade A & B", slug: "nabard-grade-a-b", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125083/nabard-bank_xsbsvi.webp" },
      { name: "IDBI Bank Executive", slug: "idbi-executive", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125078/idbi.png_lyvlvv.webp" },
      { name: "Regional Rural Banks Officer (RRB)", slug: "rrb-officer", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/ibps_ygpzwj.webp" },
    ],
  },
  {
    category: "SSC Exams",
    exams: [
      { name: "SSC CGL", slug: "ssc-cgl", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/ssc_zj7lsj.webp" },
      { name: "SSC CHSL", slug: "ssc-chsl", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/ssc_zj7lsj.webp" },
      { name: "SSC JE", slug: "ssc-je", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/ssc_zj7lsj.webp" },
      { name: "SSC GD Constable", slug: "ssc-gd", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/ssc_zj7lsj.webp" },
      { name: "SSC CPO", slug: "ssc-cpo", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/ssc_zj7lsj.webp" },
      { name: "SSC Stenographer", slug: "ssc-steno", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/ssc_zj7lsj.webp" },
      { name: "SSC MTS", slug: "ssc-mts", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/ssc_zj7lsj.webp" },
    ],
  },
  {
    category: "Insurance Exams",
    exams: [
      { name: "LIC AAO", slug: "lic-aao", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125079/lic_vcrcdi.webp" },
      { name: "NIACL AO", slug: "niacl-ao", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125084/niacl_urpsxx.webp" },
      { name: "UIIC AO", slug: "uiic-ao", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125090/uiic_jqfppl.webp" },
      { name: "OICL AO", slug: "oicl-ao", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125084/oicl_pwhxla.webp" },
      {
        name: "GIC Scale I Officer",
        slug: "gic-scale-1",
        logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125077/gic_nwzyvt.webp",
      },
      {
        name: "Rural Insurance Exams",
        slug: "rural-insurance",
        logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125087/rural_rwbkqj.webp",
      },
    ],
  },
  {
    category: "Railways",
    exams: [
      { name: "RRB NTPC", slug: "rrb-ntpc", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/RRB-NTPC_scjv3q.webp" },
      { name: "RRB ALP", slug: "rrb-alp", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/RRB-NTPC_scjv3q.webp" },
      { name: "RRB JE", slug: "rrb-je", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/RRB-NTPC_scjv3q.webp" },
      { name: "RRB Group D", slug: "rrb-group-d", logo: "https://res.cloudinary.com/dsyxrhbwb/image/upload/v1744125088/RRB-NTPC_scjv3q.webp" },
    ],
  },
];

export default function TestsPage() {
  const router = useRouter();

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Available Exams</h1>
          <p className="text-muted-foreground">
            Choose an exam to explore available tests.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search exams..." />
          </div>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/tests/${category.id}`}>
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                      <span>{category.totalTests} tests</span>
                      <span className="text-muted-foreground">
                        Updated: {category.lastUpdated}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Popular Exams Section */}
        <div>
          <h2 className="text-2xl font-bold mt-10 mb-6">Popular Exams</h2>
          {examCategories.map((category, index) => (
            <div key={category.category} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {category.exams.slice(0, 5).map((exam) => (
                  <Card
                    key={exam.slug}
                    className="p-4 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center"
                    onClick={() => router.push(`/tests/${exam.slug}`)}
                  >
                    <div className="w-12 h-12 mb-3 relative flex items-center justify-center">
                      <Image 
                        src={exam.logo}
                        alt={exam.name}
                        width={48}
                        height={48}
                        className="object-contain"
                        priority
                        loading="eager"
                        sizes="48px"
                      />
                    </div>
                    <span className="font-medium">{exam.name}</span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}