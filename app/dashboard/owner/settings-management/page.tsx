"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Save,
  RefreshCw,
  Shield,
  CreditCard,
  Mail,
  Bell,
  User,
  Lock,
  Globe,
} from "lucide-react";

interface SettingsManagementProps {
  data?: {
    // Optional data if needed
  };
}

export default function SettingsManagementPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Platform Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="Moct Platform" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="domain">Domain</Label>
                  <Input id="domain" defaultValue="moctplatform.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Platform Description</Label>
                <Textarea
                  id="description"
                  defaultValue="A comprehensive platform for exam preparation and online learning."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select defaultValue="IST">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IST">
                      Indian Standard Time (IST)
                    </SelectItem>
                    <SelectItem value="UTC">
                      Coordinated Universal Time (UTC)
                    </SelectItem>
                    <SelectItem value="EST">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="PST">
                      Pacific Standard Time (PST)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable to put the platform in maintenance mode
                  </p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  defaultValue="Moct Platform - Exam Preparation & Online Learning"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea
                  id="meta-description"
                  defaultValue="Prepare for competitive exams with Moct Platform's comprehensive courses, test series, and study materials."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta-keywords">Meta Keywords</Label>
                <Input
                  id="meta-keywords"
                  defaultValue="exam preparation, online learning, test series, competitive exams"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require 2FA for all admin accounts
                  </p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="password-policy">
                    Strong Password Policy
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enforce complex passwords for all users
                  </p>
                </div>
                <Switch id="password-policy" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out inactive users
                  </p>
                </div>
                <Switch id="session-timeout" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeout-duration">
                  Timeout Duration (minutes)
                </Label>
                <Input id="timeout-duration" type="number" defaultValue="30" />
              </div>
            </div>

            <Separator className="my-6" />

            <h4 className="font-medium mb-4">Login Attempts</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="login-limit">Limit Login Attempts</Label>
                  <p className="text-sm text-muted-foreground">
                    Lock accounts after multiple failed attempts
                  </p>
                </div>
                <Switch id="login-limit" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-attempts">Maximum Attempts</Label>
                <Input id="max-attempts" type="number" defaultValue="5" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lockout-duration">
                  Lockout Duration (minutes)
                </Label>
                <Input id="lockout-duration" type="number" defaultValue="15" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button>
                <Shield className="w-4 h-4 mr-2" />
                Update Security Settings
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Payment Gateway Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payment-gateway">Default Payment Gateway</Label>
                <Select defaultValue="razorpay">
                  <SelectTrigger id="payment-gateway">
                    <SelectValue placeholder="Select payment gateway" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="razorpay">Razorpay</SelectItem>
                    <SelectItem value="stripe">Stripe</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="paytm">Paytm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <Select defaultValue="inr">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inr">Indian Rupee (INR)</SelectItem>
                    <SelectItem value="usd">US Dollar (USD)</SelectItem>
                    <SelectItem value="eur">Euro (EUR)</SelectItem>
                    <SelectItem value="gbp">British Pound (GBP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="invoice-auto">
                    Automatic Invoice Generation
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Generate invoices automatically for all payments
                  </p>
                </div>
                <Switch id="invoice-auto" defaultChecked />
              </div>
            </div>

            <Separator className="my-6" />

            <h4 className="font-medium mb-4">Tax Settings</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="tax-enable">Enable Tax Calculation</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically calculate and add taxes to invoices
                  </p>
                </div>
                <Switch id="tax-enable" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                <Input id="tax-rate" type="number" defaultValue="18" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax-name">Tax Name</Label>
                <Input id="tax-name" defaultValue="GST" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button>
                <CreditCard className="w-4 h-4 mr-2" />
                Save Billing Settings
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Email Notification Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-from">From Email Address</Label>
                <Input
                  id="email-from"
                  defaultValue="no-reply@moctplatform.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-name">From Name</Label>
                <Input id="email-name" defaultValue="Moct Platform" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" defaultValue="smtp.moctplatform.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input id="smtp-port" defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-encryption">Encryption</Label>
                  <Select defaultValue="tls">
                    <SelectTrigger id="smtp-encryption">
                      <SelectValue placeholder="Select encryption" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tls">TLS</SelectItem>
                      <SelectItem value="ssl">SSL</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <h4 className="font-medium mb-4">Notification Events</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-registration">
                    New User Registration
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Send welcome email to new users
                  </p>
                </div>
                <Switch id="notify-registration" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-purchase">Course Purchase</Label>
                  <p className="text-sm text-muted-foreground">
                    Send confirmation email after purchase
                  </p>
                </div>
                <Switch id="notify-purchase" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-admin">Admin Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Notify admins about important events
                  </p>
                </div>
                <Switch id="notify-admin" defaultChecked />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button>
                <Mail className="w-4 h-4 mr-2" />
                Save Notification Settings
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">API Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="api-enable">Enable API Access</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow external applications to access the API
                  </p>
                </div>
                <Switch id="api-enable" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="api-key"
                    defaultValue="sk_live_51NzQjKSJDK38djfKDJF83jdkKJD83jdkKJD83"
                    type="password"
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Keep this key secret. Regenerate if compromised.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate-limit">
                  Rate Limit (requests per minute)
                </Label>
                <Input id="rate-limit" type="number" defaultValue="60" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="allowed-origins">Allowed Origins (CORS)</Label>
                <Textarea
                  id="allowed-origins"
                  defaultValue="https://moctplatform.com\nhttps://api.moctplatform.com"
                  rows={3}
                />
                <p className="text-sm text-muted-foreground">
                  One origin per line. Use * for all origins (not recommended).
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <h4 className="font-medium mb-4">Webhook Settings</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="webhook-enable">Enable Webhooks</Label>
                  <p className="text-sm text-muted-foreground">
                    Send event notifications to external URLs
                  </p>
                </div>
                <Switch id="webhook-enable" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input
                  id="webhook-url"
                  defaultValue="https://example.com/webhook"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-secret">Webhook Secret</Label>
                <Input
                  id="webhook-secret"
                  type="password"
                  defaultValue="whsec_12345abcdef"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button>
                <Globe className="w-4 h-4 mr-2" />
                Save API Settings
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}