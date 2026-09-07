"use client";

import { useState } from "react";
import { useAdmin } from "@/contexts/admin-context";
import { useAuth } from "@/contexts/auth-context";
import { PageHeader } from "@/components/admin/page-header";
import { DataTable, type ColumnDef } from "@/components/admin/data-table";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { TestimonialForm } from "@/components/admin/admin-forms";
import { EmptyState } from "@/components/admin/empty-state";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, MessageSquareQuote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export default function TestimonialsPage() {
  const { testimonials, deleteTestimonial } = useAdmin();
  const { isAdmin } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [editTestimonial, setEditTestimonial] = useState<Testimonial | undefined>();
  const [deleteTarget, setDeleteTarget] = useState<Testimonial | undefined>();

  const columns: ColumnDef[] = [
    {
      key: "name",
      header: "Customer",
      sortable: true,
      render: (row) => (
        <p className="font-medium text-foreground">{String(row.name)}</p>
      ),
    },
    {
      key: "rating",
      header: "Rating",
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Number(row.rating)
                  ? "fill-warning text-warning"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      ),
    },
    {
      key: "comment",
      header: "Comment",
      render: (row) => (
        <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">
          {String(row.comment)}
        </p>
      ),
    },
    {
      key: "product",
      header: "Product",
      render: (row) => (
        <span className="text-sm text-muted-foreground">
          {String(row.product ?? "—")}
        </span>
      ),
    },
    {
      key: "date",
      header: "Date",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-muted-foreground">
          {new Date(String(row.date)).toLocaleDateString()}
        </span>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Testimonials"
        description={`Manage your ${testimonials.length} customer testimonials`}
        actions={
          isAdmin ? (
            <Button onClick={() => { setEditTestimonial(undefined); setFormOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Button>
          ) : undefined
        }
      />

      {testimonials.length === 0 ? (
        <EmptyState
          icon={<MessageSquareQuote className="h-16 w-16" strokeWidth={1} />}
          title="No testimonials yet"
          description="Add customer testimonials to build trust"
          action={
            isAdmin ? (
              <Button onClick={() => { setEditTestimonial(undefined); setFormOpen(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Testimonial
              </Button>
            ) : undefined
          }
        />
      ) : (
        <DataTable
          columns={columns}
          data={testimonials as unknown as Record<string, unknown>[]}
          searchKeys={["name", "product"]}
          searchPlaceholder="Search testimonials..."
          pageSize={10}
          actions={(row) => (
            <div className="flex items-center gap-1">
              {isAdmin && (
                <>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => {
                      setEditTestimonial(testimonials.find((t) => t.id === row.id));
                      setFormOpen(true);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setDeleteTarget(testimonials.find((t) => t.id === row.id))}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </>
              )}
            </div>
          )}
        />
      )}

      <TestimonialForm
        key={editTestimonial?.id ?? "new"}
        open={formOpen}
        onOpenChange={setFormOpen}
        testimonial={editTestimonial}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(undefined)}
        title="Delete Testimonial"
        description={`Are you sure you want to delete this testimonial from "${deleteTarget?.name}"?`}
        onConfirm={() => {
          if (deleteTarget) {
            deleteTestimonial(deleteTarget.id);
            setDeleteTarget(undefined);
          }
        }}
      />
    </div>
  );
}
