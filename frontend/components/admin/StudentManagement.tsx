"use client";

import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

export function StudentManagement() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Student List</h2>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Table content will be populated with actual student data */}
          </tbody>
        </Table>
      </div>
    </Card>
  );
}