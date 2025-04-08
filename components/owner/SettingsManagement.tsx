
"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Globe, CreditCard, Shield, Layout, Users, Settings } from "lucide-react";

export function SettingsManagement() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="global">
        <TabsList className="mb-4">
          <TabsTrigger value="global" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Global Settings
          </TabsTrigger>
          <TabsTrigger value="roles" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Role Management
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <Layout className="w-4 h-4" />
            Content & Theme
          </TabsTrigger>
        </TabsList>

        <TabsContent value="global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">General Settings</h3>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="Moct Platform" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Input
                    id="site-description"
                    defaultValue="A comprehensive platform for exam preparation"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" defaultValue="support@moctplatform.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="language">Default Language</Label>
                  <select
                    id="language"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <Switch id="maintenance-mode" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Payment Settings</h3>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="razorpay">Razorpay</Label>
                  <Switch id="razorpay" defaultChecked />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="razorpay-key">Razorpay API Key</Label>
                  <Input id="razorpay-key" type="password" defaultValue="rzp_test_*****" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="stripe">Stripe</Label>
                  <Switch id="stripe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="stripe-key">Stripe API Key</Label>
                  <Input id="stripe-key" type="password" placeholder="Enter Stripe API key" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="tax-enabled">Enable Tax</Label>
                  <Switch id="tax-enabled" defaultChecked />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                  <Input id="tax-rate" type="number" defaultValue="18" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-6">
            <h3 className="font-semibold mb-4">Course & Test Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-approve-courses">Auto-approve Courses</Label>
                  <Switch id="auto-approve-courses" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-approve-tests">Auto-approve Tests</Label>
                  <Switch id="auto-approve-tests" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="default-test-time">Default Test Time (minutes)</Label>
                  <Input id="default-test-time" type="number" defaultValue="180" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="max-attempts">Maximum Test Attempts</Label>
                  <Input id="max-attempts" type="number" defaultValue="3" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-answers">Show Answers After Test</Label>
                  <Switch id="show-answers" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-explanations">Show Explanations</Label>
                  <Switch id="show-explanations" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable-leaderboard">Enable Leaderboard</Label>
                  <Switch id="enable-leaderboard" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable-certificates">Enable Certificates</Label>
                  <Switch id="enable-certificates" defaultChecked />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Role-Based Access Control</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Student Role</h4>
                  <Button variant="outline" size="sm">Edit Permissions</Button>
                </div>
                <Separator className="my-2" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Content Access</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-courses" className="text-sm">Courses</Label>
                      <Switch id="student-courses" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-tests" className="text-sm">Tests</Label>
                      <Switch id="student-tests" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-pdfs" className="text-sm">PDF Materials</Label>
                      <Switch id="student-pdfs" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Features</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-calendar" className="text-sm">Calendar</Label>
                      <Switch id="student-calendar" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-performance" className="text-sm">Performance</Label>
                      <Switch id="student-performance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-forum" className="text-sm">Forum</Label>
                      <Switch id="student-forum" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Other</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-profile" className="text-sm">Profile Management</Label>
                      <Switch id="student-profile" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-payments" className="text-sm">Payment History</Label>
                      <Switch id="student-payments" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-support" className="text-sm">Support</Label>
                      <Switch id="student-support" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Employee Role</h4>
                  <Button variant="outline" size="sm">Edit Permissions</Button>
                </div>
                <Separator className="my-2" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Content Management</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-create" className="text-sm">Create Content</Label>
                      <Switch id="employee-create" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-edit" className="text-sm">Edit Content</Label>
                      <Switch id="employee-edit" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-delete" className="text-sm">Delete Content</Label>
                      <Switch id="employee-delete" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Student Management</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-view-students" className="text-sm">View Students</Label>
                      <Switch id="employee-view-students" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-message" className="text-sm">Message Students</Label>
                      <Switch id="employee-message" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-grades" className="text-sm">Manage Grades</Label>
                      <Switch id="employee-grades" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Analytics</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-analytics" className="text-sm">View Analytics</Label>
                      <Switch id="employee-analytics" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-reports" className="text-sm">Generate Reports</Label>
                      <Switch id="employee-reports" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employee-export" className="text-sm">Export Data</Label>
                      <Switch id="employee-export" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Admin Role</h4>
                  <Button variant="outline" size="sm">Edit Permissions</Button>
                </div>
                <Separator className="my-2" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">User Management</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-create-users" className="text-sm">Create Users</Label>
                      <Switch id="admin-create-users" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-edit-users" className="text-sm">Edit Users</Label>
                      <Switch id="admin-edit-users" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-delete-users" className="text-sm">Delete Users</Label>
                      <Switch id="admin-delete-users" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Content Approval</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-approve-courses" className="text-sm">Approve Courses</Label>
                      <Switch id="admin-approve-courses" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-approve-tests" className="text-sm">Approve Tests</Label>
                      <Switch id="admin-approve-tests" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-approve-pdfs" className="text-sm">Approve PDFs</Label>
                      <Switch id="admin-approve-pdfs" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">System</h5>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-settings" className="text-sm">Manage Settings</Label>
                      <Switch id="admin-settings" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-logs" className="text-sm">View Logs</Label>
                      <Switch id="admin-logs" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-backup" className="text-sm">Backup & Restore</Label>
                      <Switch id="admin-backup" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Theme Settings</h3>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input id="primary-color" type="color" defaultValue="#3b82f6" className="w-16" />
                    <Input defaultValue="#3b82f6" className="flex-1" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input id="secondary-color" type="color" defaultValue="#10b981" className="w-16" />
                    <Input defaultValue="#10b981" className="flex-1" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="font-family">Font Family</Label>
                  <select
                    id="font-family"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Inter</option>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Lato</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="theme-mode">Theme Mode</Label>
                  <select
                    id="theme-mode"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Layout Settings</h3>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="layout-type">Layout Type</Label>
                  <select
                    id="layout-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Default</option>
                    <option>Compact</option>
                    <option>Wide</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="fixed-header">Fixed Header</Label>
                  <Switch id="fixed-header" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="fixed-sidebar">Fixed Sidebar</Label>
                  <Switch id="fixed-sidebar" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="collapsed-sidebar">Collapsed Sidebar by Default</Label>
                  <Switch id="collapsed-sidebar" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="container-width">Container Width</Label>
                  <Input id="container-width" defaultValue="1280px" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-6">
            <h3 className="font-semibold mb-4">Content Management</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="homepage-layout">Homepage Layout</Label>
                <select
                  id="homepage-layout"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>Default</option>
                  <option>Featured Courses</option>
                  <option>Latest Tests</option>
                  <option>Custom</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="footer-content">Footer Content</Label>
                <textarea
                  id="footer-content"
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="© 2024 Moct Platform. All rights reserved."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="logo-upload">Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                    <Settings className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
