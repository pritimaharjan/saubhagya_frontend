"use client";

import { useState } from "react";
import { useAdmin } from "@/contexts/admin-context";
import { useAuth } from "@/contexts/auth-context";
import { PageHeader } from "@/components/admin/page-header";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { HeroBannerForm } from "@/components/admin/admin-forms";
import { EmptyState } from "@/components/admin/empty-state";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Image, ExternalLink } from "lucide-react";
import type { HeroBanner } from "@/lib/types";

export default function HeroBannersPage() {
  const { heroBanners, deleteHeroBanner } = useAdmin();
  const { isAdmin } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [editBanner, setEditBanner] = useState<HeroBanner | undefined>();
  const [deleteTarget, setDeleteTarget] = useState<HeroBanner | undefined>();

  return (
    <div>
      <PageHeader
        title="Hero Banners"
        description={`Manage your ${heroBanners.length} hero banners`}
        actions={
          isAdmin ? (
            <Button onClick={() => { setEditBanner(undefined); setFormOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" />
              Add Banner
            </Button>
          ) : undefined
        }
      />

      {heroBanners.length === 0 ? (
        <EmptyState
          icon={<Image className="h-16 w-16" strokeWidth={1} aria-hidden="true" />}
          title="No hero banners yet"
          description="Add hero banners to showcase on your homepage"
          action={
            isAdmin ? (
              <Button onClick={() => { setEditBanner(undefined); setFormOpen(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Banner
              </Button>
            ) : undefined
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroBanners.map((banner) => (
            <div
              key={banner.id}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-shadow hover:shadow-md"
            >
              {/* Preview Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <Image className="h-12 w-12 text-muted-foreground/30" strokeWidth={1} aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {banner.title}
                </h3>
                {banner.subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {banner.subtitle}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  {banner.ctaText && (
                    <span className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      {banner.ctaText}
                    </span>
                  )}
                  {banner.ctaLink && (
                    <span className="text-primary">{banner.ctaLink}</span>
                  )}
                </div>
              </div>

              {/* Actions */}
              {isAdmin && (
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="icon-sm"
                    onClick={() => {
                      setEditBanner(banner);
                      setFormOpen(true);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon-sm"
                    onClick={() => setDeleteTarget(banner)}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <HeroBannerForm
        key={editBanner?.id ?? "new"}
        open={formOpen}
        onOpenChange={setFormOpen}
        banner={editBanner}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(undefined)}
        title="Delete Hero Banner"
        description={`Are you sure you want to delete "${deleteTarget?.title}"?`}
        onConfirm={() => {
          if (deleteTarget) {
            deleteHeroBanner(deleteTarget.id);
            setDeleteTarget(undefined);
          }
        }}
      />
    </div>
  );
}
