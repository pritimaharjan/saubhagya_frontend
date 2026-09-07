"use client";

import { useAdmin } from "@/contexts/admin-context";
import { PageHeader } from "@/components/admin/page-header";
import { StatCard } from "@/components/admin/stat-card";
import {
  CategoryBarChart,
  CategoryPieChart,
  MonthlyTrendsChart,
  TopProductsChart,
} from "@/components/admin/analytics-charts";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  FolderTree,
  Gift,
  MessageSquareQuote,
  Clock,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const activityIcons: Record<string, React.ReactNode> = {
  created: <Plus className="h-3.5 w-3.5 text-success" />,
  updated: <Pencil className="h-3.5 w-3.5 text-warning" />,
  deleted: <Trash2 className="h-3.5 w-3.5 text-destructive" />,
};

const activityColors: Record<string, string> = {
  created: "bg-success/10 text-success",
  updated: "bg-warning/10 text-warning",
  deleted: "bg-destructive/10 text-destructive",
};

export default function AdminDashboardPage() {
  const {
    products,
    categories,
    bundles,
    testimonials,
    activityLog,
  } = useAdmin();

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of your store and recent activity"
      />

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Products"
          value={products.length}
          icon={Package}
          color="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Categories"
          value={categories.length}
          icon={FolderTree}
          color="success"
        />
        <StatCard
          title="Bundles"
          value={bundles.length}
          icon={Gift}
          color="warning"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Testimonials"
          value={testimonials.length}
          icon={MessageSquareQuote}
          color="primary"
        />
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="mb-4 font-heading text-base font-semibold text-foreground">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/products">
            <Badge variant="outline" className="cursor-pointer px-3 py-1.5 text-sm hover:bg-muted">
              <Package className="mr-1.5 h-3.5 w-3.5" />
              Manage Products
            </Badge>
          </Link>
          <Link href="/admin/categories">
            <Badge variant="outline" className="cursor-pointer px-3 py-1.5 text-sm hover:bg-muted">
              <FolderTree className="mr-1.5 h-3.5 w-3.5" />
              Manage Categories
            </Badge>
          </Link>
          <Link href="/admin/bundles">
            <Badge variant="outline" className="cursor-pointer px-3 py-1.5 text-sm hover:bg-muted">
              <Gift className="mr-1.5 h-3.5 w-3.5" />
              Manage Bundles
            </Badge>
          </Link>
          <Link href="/admin/settings">
            <Badge variant="outline" className="cursor-pointer px-3 py-1.5 text-sm hover:bg-muted">
              Site Settings
            </Badge>
          </Link>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CategoryBarChart />
        <CategoryPieChart />
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <MonthlyTrendsChart />
        <TopProductsChart />
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <h2 className="mb-4 font-heading text-base font-semibold text-foreground">
          Recent Activity
        </h2>
        {activityLog.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No recent activity. Start managing your store to see changes here.
          </p>
        ) : (
          <div className="space-y-3">
            {activityLog.slice(0, 10).map((log) => (
              <div
                key={log.id}
                className="flex items-center gap-3 rounded-lg border border-border/50 px-4 py-3"
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${activityColors[log.action]}`}
                >
                  {activityIcons[log.action]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{log.entityName}</span>{" "}
                    was{" "}
                    <span className="font-medium">{log.action}</span> in{" "}
                    <span className="font-medium">{log.entity}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {new Date(log.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
