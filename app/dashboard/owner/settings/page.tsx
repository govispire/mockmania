"use client";

import { DashboardLayout } from "@/components/layouts/MainLayout";
import { SettingsManagement } from "../SettingsManagement";

export default function SettingsPage() {
  return (
    <DashboardLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Platform Settings</h1>
          <p className="text-muted-foreground">
            Configure platform settings, security, and integrations
          </p>
        </div>

        <SettingsManagement />
      </div>
    </DashboardLayout>
  );
}
"use client";

import { SettingsManagement } from "@/components/owner/SettingsManagement";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings & Management</h1>
        <p className="text-muted-foreground">
          Configure platform settings, security, and integrations
        </p>
      </div>
      <SettingsManagement />
    </div>
  );
}
