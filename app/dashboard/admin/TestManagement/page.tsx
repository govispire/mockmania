"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Plus,
  FileUp,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
} from "lucide-react";

interface Test {
  id: string;
  title: string;
  category: string;
  type: "full" | "sectional" | "speed" | "previous";
  section?: string;
  status: "pending" | "approved" | "active";
  uploadDate: string;
}

const mockTests: Test[] = [
  {
    id: "1",
    title: "IBPS PO Prelims Full Test 1",
    category: "Banking",
    type: "full",
    status: "active",
    uploadDate: "2023-04-15",
  },
  {
    id: "2",
    title: "SSC CGL Reasoning Sectional Test",
    category: "SSC",
    type: "sectional",
    section: "Reasoning",
    status: "active",
    uploadDate: "2023-04-12",
  },
  {
    id: "3",
    title: "RBI Grade B Mains Full Test",
    category: "Banking",
    type: "full",
    status: "pending",
    uploadDate: "2023-04-10",
  },
  {
    id: "4",
    title: "SBI PO Quantitative Aptitude Speed Test",
    category: "Banking",
    type: "speed",
    section: "Quantitative Aptitude",
    status: "approved",
    uploadDate: "2023-04-08",
  },
  {
    id: "5",
    title: "IBPS Clerk Previous Year Paper 2022",
    category: "Banking",
    type: "previous",
    status: "active",
    uploadDate: "2023-04-05",
  },
];

export default function TestManagementPage() {
  const [tests, setTests] = useState<Test[]>(mockTests);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const getStatusIcon = (status: Test["status"]) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "approved":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status: Test["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "approved":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Test Management</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Test
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Test</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Test Title</Label>
                <Input id="title" placeholder="Enter test title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select category</option>
                    <option value="Banking">Banking</option>
                    <option value="SSC">SSC</option>
                    <option value="RRB">RRB</option>
                    <option value="RBI">RBI</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Test Type</Label>
                  <select
                    id="type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select type</option>
                    <option value="full">Full Test</option>
                    <option value="sectional">Sectional Test</option>
                    <option value="speed">Speed Test</option>
                    <option value="previous">Previous Year</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="section">Section (Optional)</Label>
                <Input
                  id="section"
                  placeholder="Enter section name if applicable"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="questions">Upload Questions</Label>
                <div className="flex items-center gap-2">
                  <Input id="questions" type="file" />
                  <Button variant="outline" size="icon">
                    <FileUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={() => setIsAddDialogOpen(false)}
                  className="mr-2"
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>
                  Add Test
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6">
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Tests</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
                <div className="col-span-4">Test Title</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Actions</div>
              </div>
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center"
                >
                  <div className="col-span-4">
                    <div className="font-medium">{test.title}</div>
                    <div className="text-sm text-muted-foreground">
                      Uploaded on {test.uploadDate}
                    </div>
                  </div>
                  <div className="col-span-2">{test.category}</div>
                  <div className="col-span-2">
                    <div className="capitalize">{test.type}</div>
                    {test.section && (
                      <div className="text-sm text-muted-foreground">
                        {test.section}
                      </div>
                    )}
                  </div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(test.status)}`}
                    >
                      {getStatusIcon(test.status)}
                      <span className="capitalize">{test.status}</span>
                    </span>
                  </div>
                  <div className="col-span-2 flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <FileText className="h-4 w-4" />
                    </Button>
                    {test.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-green-600"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-600"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Similar content for other tabs, filtered by status */}
          <TabsContent value="active" className="space-y-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
                <div className="col-span-4">Test Title</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Actions</div>
              </div>
              {tests
                .filter((test) => test.status === "active")
                .map((test) => (
                  <div
                    key={test.id}
                    className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center"
                  >
                    <div className="col-span-4">
                      <div className="font-medium">{test.title}</div>
                      <div className="text-sm text-muted-foreground">
                        Uploaded on {test.uploadDate}
                      </div>
                    </div>
                    <div className="col-span-2">{test.category}</div>
                    <div className="col-span-2">
                      <div className="capitalize">{test.type}</div>
                      {test.section && (
                        <div className="text-sm text-muted-foreground">
                          {test.section}
                        </div>
                      )}
                    </div>
                    <div className="col-span-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(test.status)}`}
                      >
                        {getStatusIcon(test.status)}
                        <span className="capitalize">{test.status}</span>
                      </span>
                    </div>
                    <div className="col-span-2 flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          {/* Add similar TabsContent for approved and pending */}
        </Tabs>
      </Card>
    </div>
  );
}
