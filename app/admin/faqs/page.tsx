"use client";

import { useState } from "react";
import { useAdmin } from "@/contexts/admin-context";
import { useAuth } from "@/contexts/auth-context";
import { PageHeader } from "@/components/admin/page-header";
import { DataTable, type ColumnDef } from "@/components/admin/data-table";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { FaqForm } from "@/components/admin/admin-forms";
import { EmptyState } from "@/components/admin/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, HelpCircle } from "lucide-react";
import type { FAQ } from "@/lib/types";

export default function FaqsPage() {
  const { faqs, deleteFaq } = useAdmin();
  const { isAdmin } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [editFaq, setEditFaq] = useState<FAQ | undefined>();
  const [deleteTarget, setDeleteTarget] = useState<FAQ | undefined>();

  const columns: ColumnDef[] = [
    {
      key: "question",
      header: "Question",
      sortable: true,
      render: (row) => (
        <p className="font-medium text-foreground">{String(row.question)}</p>
      ),
    },
    {
      key: "answer",
      header: "Answer",
      render: (row) => (
        <p className="text-sm text-muted-foreground line-clamp-2 max-w-lg">
          {String(row.answer)}
        </p>
      ),
    },
    {
      key: "category",
      header: "Category",
      sortable: true,
      render: (row) =>
        row.category ? (
          <Badge variant="secondary">{String(row.category)}</Badge>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="FAQs"
        description={`Manage your ${faqs.length} frequently asked questions`}
        actions={
          isAdmin ? (
            <Button onClick={() => { setEditFaq(undefined); setFormOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" />
              Add FAQ
            </Button>
          ) : undefined
        }
      />

      {faqs.length === 0 ? (
        <EmptyState
          icon={<HelpCircle className="h-16 w-16" strokeWidth={1} />}
          title="No FAQs yet"
          description="Add frequently asked questions to help your customers"
          action={
            isAdmin ? (
              <Button onClick={() => { setEditFaq(undefined); setFormOpen(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add FAQ
              </Button>
            ) : undefined
          }
        />
      ) : (
        <DataTable
          columns={columns}
          data={faqs as unknown as Record<string, unknown>[]}
          searchKeys={["question", "category"]}
          searchPlaceholder="Search FAQs..."
          pageSize={10}
          actions={(row) => (
            <div className="flex items-center gap-1">
              {isAdmin && (
                <>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => {
                      setEditFaq(faqs.find((f) => f.id === row.id));
                      setFormOpen(true);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setDeleteTarget(faqs.find((f) => f.id === row.id))}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </>
              )}
            </div>
          )}
        />
      )}

      <FaqForm key={editFaq?.id ?? "new"} open={formOpen} onOpenChange={setFormOpen} faq={editFaq} />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(undefined)}
        title="Delete FAQ"
        description="Are you sure you want to delete this FAQ? This action cannot be undone."
        onConfirm={() => {
          if (deleteTarget) {
            deleteFaq(deleteTarget.id);
            setDeleteTarget(undefined);
          }
        }}
      />
    </div>
  );
}
