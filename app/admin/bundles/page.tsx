"use client";

import { useState } from "react";
import { useAdmin } from "@/contexts/admin-context";
import { useAuth } from "@/contexts/auth-context";
import { PageHeader } from "@/components/admin/page-header";
import { DataTable, type ColumnDef } from "@/components/admin/data-table";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { BundleForm } from "@/components/admin/admin-forms";
import { EmptyState } from "@/components/admin/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Gift } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Bundle } from "@/lib/types";

export default function BundlesPage() {
  const { bundles, deleteBundle } = useAdmin();
  const { isAdmin } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [editBundle, setEditBundle] = useState<Bundle | undefined>();
  const [deleteTarget, setDeleteTarget] = useState<Bundle | undefined>();

  const columns: ColumnDef[] = [
    {
      key: "name",
      header: "Bundle",
      sortable: true,
      render: (row) => (
        <div>
          <p className="font-medium text-foreground">{String(row.name)}</p>
          <p className="text-xs text-muted-foreground">{String(row.slug)}</p>
        </div>
      ),
    },
    {
      key: "productCount",
      header: "Products",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium">{String(row.productCount)} items</span>
      ),
    },
    {
      key: "startingPrice",
      header: "Starting Price",
      sortable: true,
      render: (row) => (
        <span className="font-medium">{formatPrice(Number(row.startingPrice))}</span>
      ),
    },
    {
      key: "features",
      header: "Features",
      render: (row) => (
        <div className="flex gap-1.5">
          {row.includesGiftWrapping === true && <Badge variant="secondary">Gift Wrap</Badge>}
          {row.includesGreetingCard === true && <Badge variant="secondary">Card</Badge>}
          {row.isFeatured === true && <Badge variant="featured">Featured</Badge>}
        </div>
      ),
    },
  ];

  const tableData = bundles.map((b) => ({
    ...b,
    productCount: b.products.length,
  })) as unknown as Record<string, unknown>[];

  return (
    <div>
      <PageHeader
        title="Bundles"
        description={`Manage your ${bundles.length} gift bundles`}
        actions={
          isAdmin ? (
            <Button onClick={() => { setEditBundle(undefined); setFormOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" />
              Add Bundle
            </Button>
          ) : undefined
        }
      />

      {bundles.length === 0 ? (
        <EmptyState
          icon={<Gift className="h-16 w-16" strokeWidth={1} />}
          title="No bundles yet"
          description="Create gift bundles by grouping multiple products together"
          action={
            isAdmin ? (
              <Button onClick={() => { setEditBundle(undefined); setFormOpen(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Bundle
              </Button>
            ) : undefined
          }
        />
      ) : (
        <DataTable
          columns={columns}
          data={tableData}
          searchKeys={["name"]}
          searchPlaceholder="Search bundles..."
          pageSize={10}
          actions={(row) => (
            <div className="flex items-center gap-1">
              {isAdmin && (
                <>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => {
                      setEditBundle(bundles.find((b) => b.id === row.id));
                      setFormOpen(true);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setDeleteTarget(bundles.find((b) => b.id === row.id))}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </>
              )}
            </div>
          )}
        />
      )}

      <BundleForm key={editBundle?.id ?? "new"} open={formOpen} onOpenChange={setFormOpen} bundle={editBundle} />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(undefined)}
        title="Delete Bundle"
        description={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        onConfirm={() => {
          if (deleteTarget) {
            deleteBundle(deleteTarget.id);
            setDeleteTarget(undefined);
          }
        }}
      />
    </div>
  );
}
