"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  BookOpen,
  Trophy,
  Target,
  BarChart,
  Search,
  Calendar,
  Users,
  Check,
  Star,
} from "lucide-react";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [stats] = useState({
    users: 12000,
    testsToday: 500,
    liveQuizzes: 150,
    successRate: 85,
  });

  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-primary" />,
      title: "Task Management",
      description: "Track and monitor your progress with our smart calendar system",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Personalized Mentorship",
      description: "Get tailored guidance from experienced mentors",
    },
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Fast Results",
      description: "Achieve your goals faster with structured preparation",
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Focus Learning",
      description: "Distraction-free environment for better concentration",
    },
  ];

  const examCategories = [
    { name: "Banking", exams: ["IBPS PO", "SBI PO", "RBI Grade B"] },
    { name: "SSC", exams: ["CGL", "CHSL", "MTS"] },
    { name: "Railways", exams: ["RRB NTPC", "RRB Group D", "RRB JE"] },
    { name: "Teaching", exams: ["CTET", "UPTET", "REET"] },
  ];

  const testimonials = [
    {
      name: "Priya Singh",
      role: "IBPS PO Selected",
      content: "The focused approach helped me crack my exam in first attempt",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      role: "SSC CGL Selected",
      content: "Task management feature was a game changer in my preparation",
      rating: 5,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">GovIspire</h1>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center space-x-8">
                {["Courses", "Test Series", "Blog", "About"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[14px] font-medium hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
                <div className="flex items-center gap-3">
                  <Link href="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button className="bg-[#4C51BF] hover:bg-[#434190]">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Prepare for Government Exams{" "}
                <span className="text-primary">Without Distractions&quot;!</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                GovIspire offers personalized mentorship and task tracking to ensure
                students stay focused and improve exam scores faster.
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#4C51BF] hover:bg-[#434190] h-12 px-6">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="h-12 px-6">
                  Try Free Test
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6">
                  {[stats.users, stats.testsToday, stats.liveQuizzes, stats.successRate].map(
                    (stat, index) => (
                      <Card
                        key={index}
                        className="p-6 text-center backdrop-blur-sm bg-white/10"
                      >
                        <div className="text-3xl font-bold">{stat}+</div>
                        <div className="text-sm text-muted-foreground">
                          {index === 0
                            ? "Students"
                            : index === 1
                            ? "Daily Tests"
                            : index === 2
                            ? "Live Quizzes"
                            : "Success Rate"}
                        </div>
                      </Card>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose GovIspire?</h2>
            <p className="text-muted-foreground">
              Everything you need to crack your dream government job
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Exam Categories</h2>
            <p className="text-muted-foreground">
              Choose from our wide range of exam preparations
            </p>
          </div>
          <Tabs defaultValue={examCategories[0].name} className="w-full">
            <TabsList className="mb-8">
              {examCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {examCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.exams.map((exam) => (
                    <Card key={exam} className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{exam}</h3>
                      <Button className="w-full">Take Test</Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Success Stories&quot;</h2>
            <p className="text-muted-foreground">
              See what our students have to say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg mb-4">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 GovIspire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}