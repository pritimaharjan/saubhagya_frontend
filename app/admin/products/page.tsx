"use client";

import { useState } from "react";
import { useAdmin } from "@/contexts/admin-context";
import { useAuth } from "@/contexts/auth-context";
import { PageHeader } from "@/components/admin/page-header";
import { DataTable, type ColumnDef } from "@/components/admin/data-table";
import type { ReactNode } from "react";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { ProductForm } from "@/components/admin/admin-forms";
import { EmptyState } from "@/components/admin/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Package } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function ProductsPage() {
  const { products, deleteProduct } = useAdmin();
  const { isAdmin } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | undefined>();
  const [deleteTarget, setDeleteTarget] = useState<Product | undefined>();

  const columns: ColumnDef[] = [
    {
      key: "name",
      header: "Product",
      sortable: true,
      render: (row: Record<string, unknown>): ReactNode => (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-muted">
            {row.imageUrl ? (
              <img
                src={String(row.imageUrl)}
                alt={String(row.name)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Package className="h-4 w-4 text-muted-foreground/50" />
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-foreground">{String(row.name)}</p>
            <p className="text-xs text-muted-foreground">{String(row.slug)}</p>
          </div>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      sortable: true,
      render: (row: Record<string, unknown>) => (
        <Badge variant="secondary">{String(row.categoryName)}</Badge>
      ),
    },
    {
      key: "price",
      header: "Price",
      sortable: true,
      render: (row: Record<string, unknown>) => (
        <span className="font-medium">{formatPrice(Number(row.price))}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (row: Record<string, unknown>) => (
        <div className="flex gap-1.5">
          {row.isNew === true && <Badge variant="new">New</Badge>}
          {row.isBestSeller === true && <Badge variant="best-seller">Best Seller</Badge>}
          {row.isFeatured === true && <Badge variant="featured">Featured</Badge>}
          {row.inStock !== true && <Badge variant="destructive">Out of Stock</Badge>}
        </div>
      ),
    },
    {
      key: "rating",
      header: "Rating",
      sortable: true,
      render: (row: Record<string, unknown>) => (
        <span className="text-sm">
          {row.rating ? `${row.rating} ★ (${row.reviewCount})` : "—"}
        </span>
      ),
    },
  ];

  const tableData = products.map((p) => ({
    ...p,
    categoryName: p.category.name,
    imageUrl: p.images[0]?.src ?? "",
  })) as unknown as Record<string, unknown>[];

  return (
    <div>
      <PageHeader
        title="Products"
        description={`Manage your ${products.length} products`}
        actions={
          isAdmin ? (
            <Button onClick={() => { setEditProduct(undefined); setFormOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          ) : undefined
        }
      />

      {products.length === 0 ? (
        <EmptyState
          icon={<Package className="h-16 w-16" strokeWidth={1} />}
          title="No products yet"
          description="Add your first product to get started"
          action={
            isAdmin ? (
              <Button onClick={() => { setEditProduct(undefined); setFormOpen(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            ) : undefined
          }
        />
      ) : (
        <DataTable
          columns={columns}
          data={tableData}
          searchKeys={["name", "categoryName"]}
          searchPlaceholder="Search products..."
          pageSize={10}
          actions={(row: Record<string, unknown>) => (
            <div className="flex items-center gap-1">
              {isAdmin && (
                <>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => {
                      setEditProduct(products.find((p) => p.id === row.id) as Product);
                      setFormOpen(true);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setDeleteTarget(products.find((p) => p.id === row.id))}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </>
              )}
            </div>
          )}
        />
      )}

      <ProductForm
        key={editProduct?.id ?? "new"}
        open={formOpen}
        onOpenChange={setFormOpen}
        product={editProduct}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(undefined)}
        title="Delete Product"
        description={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        onConfirm={() => {
          if (deleteTarget) {
            deleteProduct(deleteTarget.id);
            setDeleteTarget(undefined);
          }
        }}
      />
    </div>
  );
}
