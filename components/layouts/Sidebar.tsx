import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Settings, LogOut } from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

type RoleBasedNavItems = {
  [key: string]: NavItem[];
};

export function Sidebar({
  role = "student",
}: {
  role?: "student" | "admin" | "employee" | "owner";
}) {
  const pathname = usePathname();

  const roleBasedNavItems: RoleBasedNavItems = {
    student: [
      {
        title: "Dashboard",
        href: "/dashboard/student",
        icon: <span className="h-4 w-4">📊</span>,
      },
      {
        title: "Courses",
        href: "/dashboard/student/courses",
        icon: <span className="h-4 w-4">📚</span>,
      },
      {
        title: "Tests",
        href: "/dashboard/student/tests",
        icon: <span className="h-4 w-4">📝</span>,
      },
      {
        title: "Calendar",
        href: "/dashboard/student/calendar",
        icon: <span className="h-4 w-4">📅</span>,
      },
      {
        title: "Performance",
        href: "/dashboard/student/performance",
        icon: <span className="h-4 w-4">📈</span>,
      },
      {
        title: "PDF Courses",
        href: "/dashboard/student/pdf-courses",
        icon: <span className="h-4 w-4">📄</span>,
      },
      {
        title: "Current Affairs",
        href: "/dashboard/student/current-affairs",
        icon: <span className="h-4 w-4">🌍</span>,
      },
      {
        title: "Speed Drill",
        href: "/dashboard/student/speed-drill",
        icon: <span className="h-4 w-4">⚡</span>,
      },
    ],
    admin: [
      {
        title: "Dashboard",
        href: "/dashboard/admin",
        icon: <span className="h-4 w-4">📊</span>,
      },
      {
        title: "Course Management",
        href: "/dashboard/admin/CourseManagement",
        icon: <span className="h-4 w-4">📚</span>,
      },
      {
        title: "Test Management",
        href: "/dashboard/admin/TestManagement",
        icon: <span className="h-4 w-4">📝</span>,
      },
      {
        title: "Student Management",
        href: "/dashboard/admin/StudentManagement",
        icon: <span className="h-4 w-4">👥</span>,
      },
      {
        title: "PDF Management",
        href: "/dashboard/admin/PDFManagement",
        icon: <span className="h-4 w-4">📄</span>,
      },
      {
        title: "Current Affairs",
        href: "/dashboard/admin/CurrentAffairsManagement",
        icon: <span className="h-4 w-4">🌍</span>,
      },
      {
        title: "Speed Drill",
        href: "/dashboard/admin/SpeedDrillManagement",
        icon: <span className="h-4 w-4">⚡</span>,
      },
      {
        title: "Task Management",
        href: "/dashboard/admin/TaskManagement",
        icon: <span className="h-4 w-4">⚙️</span>,
      },
      {
        title: "Analytics",
        href: "/dashboard/admin/analytics",
        icon: <span className="h-4 w-4">📈</span>,
      },
    ],
    employee: [
      {
        title: "Dashboard",
        href: "/dashboard/employee",
        icon: <span className="h-4 w-4">📊</span>,
      },
      {
        title: "Upload Content",
        href: "/dashboard/employee/upload",
        icon: <span className="h-4 w-4">📤</span>,
      },
      {
        title: "Manage Courses",
        href: "/dashboard/employee/courses",
        icon: <span className="h-4 w-4">📚</span>,
      },
      {
        title: "Analytics",
        href: "/dashboard/employee/analytics",
        icon: <span className="h-4 w-4">📈</span>,
      },
    ],
    owner: [
      {
        title: "Dashboard",
        href: "/dashboard/owner",
        icon: <span className="h-4 w-4">📊</span>,
      },
      {
        title: "Revenue",
        href: "/dashboard/owner/revenue",
        icon: <span className="h-4 w-4">💰</span>,
      },
      {
        title: "Users",
        href: "/dashboard/owner/users",
        icon: <span className="h-4 w-4">👥</span>,
      },
      {
        title: "Analytics",
        href: "/dashboard/owner/analytics",
        icon: <span className="h-4 w-4">📈</span>,
      },
    ],
  };

  const navItems = roleBasedNavItems[role] || roleBasedNavItems.student;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center h-16 border-b px-4">
        <h1 className="text-xl font-bold">Moct Platform</h1>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <div className="flex flex-col space-y-2">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}