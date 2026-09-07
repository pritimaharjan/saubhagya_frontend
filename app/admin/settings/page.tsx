"use client";

import { useState, useEffect } from "react";
import { useAdmin } from "@/contexts/admin-context";
import { useAuth } from "@/contexts/auth-context";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, CheckCircle } from "lucide-react";
import type { SiteSettings } from "@/lib/types";

export default function SettingsPage() {
  const { settings, updateSettings } = useAdmin();
  const { isAdmin } = useAuth();
  const [form, setForm] = useState<SiteSettings>(settings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setForm(settings);
  }, [settings]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const update = (updates: Partial<SiteSettings>) => {
    setForm((f) => ({ ...f, ...updates }));
  };

  const updateSocial = (updates: Partial<SiteSettings["socialLinks"]>) => {
    setForm((f) => ({
      ...f,
      socialLinks: { ...f.socialLinks, ...updates },
    }));
  };

  const updateSeo = (updates: Partial<SiteSettings["seo"]>) => {
    setForm((f) => ({
      ...f,
      seo: { ...f.seo, ...updates },
    }));
  };

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Manage your site configuration"
        actions={
          <Button
            type="submit"
            form="settings-form"
            disabled={!isAdmin || saved}
          >
            {saved ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Saved!
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        }
      />

      <form
        id="settings-form"
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {/* General */}
        <div className="rounded-xl border border-border/50 bg-card p-6">
          <h2 className="mb-4 font-heading text-base font-semibold text-foreground">
            General
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Site Name"
              value={form.siteName}
              onChange={(e) => update({ siteName: e.target.value })}
              disabled={!isAdmin}
            />
            <Input
              label="Contact Email"
              type="email"
              value={form.contactEmail}
              onChange={(e) => update({ contactEmail: e.target.value })}
              disabled={!isAdmin}
            />
          </div>
          <div className="mt-4">
            <Textarea
              label="Site Description"
              value={form.siteDescription}
              onChange={(e) => update({ siteDescription: e.target.value })}
              disabled={!isAdmin}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="rounded-xl border border-border/50 bg-card p-6">
          <h2 className="mb-4 font-heading text-base font-semibold text-foreground">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Phone Number"
              value={form.contactPhone}
              onChange={(e) => update({ contactPhone: e.target.value })}
              disabled={!isAdmin}
            />
            <Input
              label="WhatsApp Number"
              value={form.whatsappNumber}
              onChange={(e) => update({ whatsappNumber: e.target.value })}
              placeholder="1234567890"
              disabled={!isAdmin}
            />
          </div>
          <div className="mt-4">
            <Textarea
              label="Address"
              value={form.address}
              onChange={(e) => update({ address: e.target.value })}
              disabled={!isAdmin}
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="rounded-xl border border-border/50 bg-card p-6">
          <h2 className="mb-4 font-heading text-base font-semibold text-foreground">
            Social Media Links
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Input
              label="Instagram"
              value={form.socialLinks.instagram}
              onChange={(e) => updateSocial({ instagram: e.target.value })}
              placeholder="https://instagram.com/..."
              disabled={!isAdmin}
            />
            <Input
              label="Facebook"
              value={form.socialLinks.facebook}
              onChange={(e) => updateSocial({ facebook: e.target.value })}
              placeholder="https://facebook.com/..."
              disabled={!isAdmin}
            />
            <Input
              label="Twitter"
              value={form.socialLinks.twitter}
              onChange={(e) => updateSocial({ twitter: e.target.value })}
              placeholder="https://twitter.com/..."
              disabled={!isAdmin}
            />
          </div>
        </div>

        {/* SEO */}
        <div className="rounded-xl border border-border/50 bg-card p-6">
          <h2 className="mb-4 font-heading text-base font-semibold text-foreground">
            SEO Settings
          </h2>
          <div className="space-y-4">
            <Input
              label="Default Meta Title"
              value={form.seo.defaultTitle}
              onChange={(e) => updateSeo({ defaultTitle: e.target.value })}
              disabled={!isAdmin}
            />
            <Textarea
              label="Default Meta Description"
              value={form.seo.defaultDescription}
              onChange={(e) => updateSeo({ defaultDescription: e.target.value })}
              disabled={!isAdmin}
            />
            <Input
              label="Default OG Image URL"
              value={form.seo.ogImage}
              onChange={(e) => updateSeo({ ogImage: e.target.value })}
              disabled={!isAdmin}
            />
          </div>
        </div>

        {!isAdmin && (
          <p className="text-center text-sm text-muted-foreground">
            You are viewing as a Viewer. Contact an Admin to make changes.
          </p>
        )}
      </form>
    </div>
  );
}
