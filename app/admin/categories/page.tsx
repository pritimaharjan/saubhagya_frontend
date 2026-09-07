"use client";

import { useState } from "react";
import { useAdmin } from "@/contexts/admin-context";
import { useAuth } from "@/contexts/auth-context";
import { PageHeader } from "@/components/admin/page-header";
import { DataTable, type ColumnDef } from "@/components/admin/data-table";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { CategoryForm } from "@/components/admin/admin-forms";
import { EmptyState } from "@/components/admin/empty-state";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, FolderTree } from "lucide-react";
import type { Category } from "@/lib/types";

export default function CategoriesPage() {
  const { categories, deleteCategory } = useAdmin();
  const { isAdmin } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [editCategory, setEditCategory] = useState<Category | undefined>();
  const [deleteTarget, setDeleteTarget] = useState<Category | undefined>();

  const columns: ColumnDef[] = [
    {
      key: "name",
      header: "Name",
      sortable: true,
      render: (row) => (
        <div>
          <p className="font-medium text-foreground">{String(row.name)}</p>
          <p className="text-xs text-muted-foreground">{String(row.slug)}</p>
        </div>
      ),
    },
    {
      key: "parentName",
      header: "Parent",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-muted-foreground">
          {String(row.parentName) || "—"}
        </span>
      ),
    },
    {
      key: "description",
      header: "Description",
      render: (row) => (
        <span className="text-sm text-muted-foreground line-clamp-1">
          {String(row.description ?? "—")}
        </span>
      ),
    },
    {
      key: "productCount",
      header: "Products",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium">{String(row.productCount ?? 0)}</span>
      ),
    },
  ];

  const tableData = categories.map((c) => ({
    ...c,
    parentName: categories.find((p) => p.id === c.parentId)?.name ?? "",
  })) as unknown as Record<string, unknown>[];

  return (
    <div>
      <PageHeader
        title="Categories"
        description={`Manage your ${categories.length} categories`}
        actions={
          isAdmin ? (
            <Button onClick={() => { setEditCategory(undefined); setFormOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          ) : undefined
        }
      />

      {categories.length === 0 ? (
        <EmptyState
          icon={<FolderTree className="h-16 w-16" strokeWidth={1} />}
          title="No categories yet"
          description="Add your first category to organize products"
          action={
            isAdmin ? (
              <Button onClick={() => { setEditCategory(undefined); setFormOpen(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Category
              </Button>
            ) : undefined
          }
        />
      ) : (
        <DataTable
          columns={columns}
          data={tableData}
          searchKeys={["name", "parentName"]}
          searchPlaceholder="Search categories..."
          pageSize={10}
          actions={(row) => (
            <div className="flex items-center gap-1">
              {isAdmin && (
                <>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => {
                      setEditCategory(categories.find((c) => c.id === row.id));
                      setFormOpen(true);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setDeleteTarget(categories.find((c) => c.id === row.id))}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </>
              )}
            </div>
          )}
        />
      )}

      <CategoryForm
        key={editCategory?.id ?? "new"}
        open={formOpen}
        onOpenChange={setFormOpen}
        category={editCategory}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(undefined)}
        title="Delete Category"
        description={`Are you sure you want to delete "${deleteTarget?.name}"? This will not delete products in this category.`}
        onConfirm={() => {
          if (deleteTarget) {
            deleteCategory(deleteTarget.id);
            setDeleteTarget(undefined);
          }
        }}
      />
    </div>
  );
}
