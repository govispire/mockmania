"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Plus,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
} from "lucide-react";

type TaskStatus = "pending" | "in-progress" | "completed" | "overdue";
type TaskPriority = "low" | "medium" | "high";

interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string | null;
  dueDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Upload Banking Exam PDFs",
    description:
      "Upload the latest Banking exam preparation PDFs to the platform",
    assignedTo: "Rahul Sharma",
    dueDate: "2023-04-20",
    status: "pending",
    priority: "high",
    createdAt: "2023-04-15",
  },
  {
    id: "2",
    title: "Create Current Affairs Quiz for April 15",
    description:
      "Prepare and upload the daily current affairs quiz for April 15",
    assignedTo: "Priya Patel",
    dueDate: "2023-04-15",
    status: "completed",
    priority: "high",
    createdAt: "2023-04-14",
  },
  {
    id: "3",
    title: "Review SSC Test Submissions",
    description: "Review and approve the pending SSC test submissions",
    assignedTo: null,
    dueDate: "2023-04-18",
    status: "pending",
    priority: "medium",
    createdAt: "2023-04-12",
  },
  {
    id: "4",
    title: "Update RRB Study Material",
    description:
      "Update the RRB study material with the latest syllabus changes",
    assignedTo: "Amit Kumar",
    dueDate: "2023-04-25",
    status: "in-progress",
    priority: "medium",
    createdAt: "2023-04-10",
  },
  {
    id: "5",
    title: "Fix Speed Drill Timer Issue",
    description:
      "Resolve the timer issue in the Quantitative Aptitude speed drill",
    assignedTo: "Sneha Gupta",
    dueDate: "2023-04-12",
    status: "overdue",
    priority: "high",
    createdAt: "2023-04-08",
  },
];

const mockEmployees = [
  { id: "1", name: "Rahul Sharma" },
  { id: "2", name: "Priya Patel" },
  { id: "3", name: "Amit Kumar" },
  { id: "4", name: "Sneha Gupta" },
  { id: "5", name: "Vikram Singh" },
];

export function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getStatusText = (status: TaskStatus) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "overdue":
        return "Overdue";
      default:
        return "Pending";
    }
  };

  const getStatusClass = (status: TaskStatus) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getPriorityClass = (priority: TaskPriority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Task Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Task Title</Label>
                <Input id="title" placeholder="Enter task title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter task description"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="assignedTo">Assigned To</Label>
                  <select
                    id="assignedTo"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select employee</option>
                    {mockEmployees.map((employee) => (
                      <option key={employee.id} value={employee.name}>
                        {employee.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <select
                    id="priority"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
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
                  Add Task
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
              <div className="col-span-4">Task</div>
              <div className="col-span-2">Assigned To</div>
              <div className="col-span-2">Due Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center"
              >
                <div className="col-span-4">
                  <div className="font-medium">{task.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {task.description.substring(0, 60)}...
                  </div>
                </div>
                <div className="col-span-2">
                  {task.assignedTo ? (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{task.assignedTo}</span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground">Unassigned</span>
                  )}
                </div>
                <div className="col-span-2">{task.dueDate}</div>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(task.status)}`}
                  >
                    {getStatusIcon(task.status)}
                    <span>{getStatusText(task.status)}</span>
                  </span>
                </div>
                <div className="col-span-2 flex space-x-2">
                  <Button size="sm" variant="ghost">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Clock className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
              <div className="col-span-4">Task</div>
              <div className="col-span-2">Assigned To</div>
              <div className="col-span-2">Due Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>
            {tasks
              .filter((task) => task.status === "pending")
              .map((task) => (
                <div
                  key={task.id}
                  className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center"
                >
                  <div className="col-span-4">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {task.description.substring(0, 60)}...
                    </div>
                  </div>
                  <div className="col-span-2">
                    {task.assignedTo ? (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{task.assignedTo}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Unassigned</span>
                    )}
                  </div>
                  <div className="col-span-2">{task.dueDate}</div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(task.status)}`}
                    >
                      {getStatusIcon(task.status)}
                      <span>{getStatusText(task.status)}</span>
                    </span>
                  </div>
                  <div className="col-span-2 flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
              <div className="col-span-4">Task</div>
              <div className="col-span-2">Assigned To</div>
              <div className="col-span-2">Due Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>
            {tasks
              .filter((task) => task.status === "in-progress")
              .map((task) => (
                <div
                  key={task.id}
                  className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center"
                >
                  <div className="col-span-4">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {task.description.substring(0, 60)}...
                    </div>
                  </div>
                  <div className="col-span-2">
                    {task.assignedTo ? (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{task.assignedTo}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Unassigned</span>
                    )}
                  </div>
                  <div className="col-span-2">{task.dueDate}</div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(task.status)}`}
                    >
                      {getStatusIcon(task.status)}
                      <span>{getStatusText(task.status)}</span>
                    </span>
                  </div>
                  <div className="col-span-2 flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
              <div className="col-span-4">Task</div>
              <div className="col-span-2">Assigned To</div>
              <div className="col-span-2">Due Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>
            {tasks
              .filter((task) => task.status === "completed")
              .map((task) => (
                <div
                  key={task.id}
                  className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center"
                >
                  <div className="col-span-4">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {task.description.substring(0, 60)}...
                    </div>
                  </div>
                  <div className="col-span-2">
                    {task.assignedTo ? (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{task.assignedTo}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Unassigned</span>
                    )}
                  </div>
                  <div className="col-span-2">{task.dueDate}</div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(task.status)}`}
                    >
                      {getStatusIcon(task.status)}
                      <span>{getStatusText(task.status)}</span>
                    </span>
                  </div>
                  <div className="col-span-2 flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b bg-muted/50">
              <div className="col-span-4">Task</div>
              <div className="col-span-2">Assigned To</div>
              <div className="col-span-2">Due Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>
            {tasks
              .filter((task) => task.status === "overdue")
              .map((task) => (
                <div
                  key={task.id}
                  className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center"
                >
                  <div className="col-span-4">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {task.description.substring(0, 60)}...
                    </div>
                  </div>
                  <div className="col-span-2">
                    {task.assignedTo ? (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{task.assignedTo}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Unassigned</span>
                    )}
                  </div>
                  <div className="col-span-2">{task.dueDate}</div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(task.status)}`}
                    >
                      {getStatusIcon(task.status)}
                      <span>{getStatusText(task.status)}</span>
                    </span>
                  </div>
                  <div className="col-span-2 flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
