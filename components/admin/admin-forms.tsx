"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { useAdmin } from "@/contexts/admin-context";
import type {
  Product,
  Category,
  Bundle,
  Testimonial,
  FAQ,
  HeroBanner,
} from "@/lib/types";

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// ─── Product Form ────────────────────────────────────────────────────────────

interface ProductFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Product;
}

function getInitialProductState(product?: Product) {
  if (product) {
    return {
      name: product.name,
      slug: product.slug,
      description: product.description,
      shortDescription: product.shortDescription ?? "",
      price: String(product.price),
      compareAtPrice: product.compareAtPrice ? String(product.compareAtPrice) : "",
      categorySlug: product.category.slug,
      tags: product.tags.join(", "),
      materials: product.materials?.join(", ") ?? "",
      dimensions: product.dimensions ?? "",
      features: product.features?.join(", ") ?? "",
      customizationOptions: product.customizationOptions?.join(", ") ?? "",
      imageUrl: product.images[0]?.src ?? "",
      isNew: product.isNew ?? false,
      isBestSeller: product.isBestSeller ?? false,
      isFeatured: product.isFeatured ?? false,
      isLimitedEdition: product.isLimitedEdition ?? false,
      inStock: product.inStock ?? true,
      rating: String(product.rating ?? 4.5),
      reviewCount: String(product.reviewCount ?? 0),
    };
  }
  return {
    name: "",
    slug: "",
    description: "",
    shortDescription: "",
    price: "",
    compareAtPrice: "",
    categorySlug: "",
    tags: "",
    materials: "",
    dimensions: "",
    features: "",
    customizationOptions: "",
    imageUrl: "",
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    isLimitedEdition: false,
    inStock: true,
    rating: "4.5",
    reviewCount: "0",
  };
}

export function ProductForm({ open, onOpenChange, product }: ProductFormProps) {
  const { addProduct, updateProduct, categories } = useAdmin();
  const isEdit = !!product;

  const [form, setForm] = useState(() => getInitialProductState(product));

  const categoryOptions = categories.map((c) => ({
    value: c.slug,
    label: c.name,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const category =
      categories.find((c) => c.slug === form.categorySlug) ?? categories[0];
    const data: Product = {
      id: product?.id ?? generateId(),
      name: form.name,
      slug: form.slug || slugify(form.name),
      description: form.description,
      shortDescription: form.shortDescription || undefined,
      price: parseFloat(form.price) || 0,
      compareAtPrice: form.compareAtPrice ? parseFloat(form.compareAtPrice) : undefined,
      images: form.imageUrl
        ? [{ src: form.imageUrl, alt: form.name }]
        : product?.images ?? [],
      category: { id: category.id, name: category.name, slug: category.slug },
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      materials: form.materials
        ? form.materials.split(",").map((m) => m.trim()).filter(Boolean)
        : undefined,
      dimensions: form.dimensions || undefined,
      features: form.features
        ? form.features.split(",").map((f) => f.trim()).filter(Boolean)
        : undefined,
      customizationOptions: form.customizationOptions
        ? form.customizationOptions.split(",").map((c) => c.trim()).filter(Boolean)
        : undefined,
      isNew: form.isNew,
      isBestSeller: form.isBestSeller,
      isFeatured: form.isFeatured,
      isLimitedEdition: form.isLimitedEdition,
      inStock: form.inStock,
      rating: parseFloat(form.rating) || undefined,
      reviewCount: parseInt(form.reviewCount) || undefined,
    };

    if (isEdit) {
      updateProduct(product.id, data);
    } else {
      addProduct(data);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Product" : "Add Product"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
            />
            <Input
              label="Slug"
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
              placeholder="auto-generated"
            />
          </div>
          <Textarea
            label="Description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            required
          />
          <Textarea
            label="Short Description"
            value={form.shortDescription}
            onChange={(e) =>
              setForm((f) => ({ ...f, shortDescription: e.target.value }))
            }
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Input
              label="Price"
              type="number"
              step="0.01"
              value={form.price}
              onChange={(e) =>
                setForm((f) => ({ ...f, price: e.target.value }))
              }
              required
            />
            <Input
              label="Compare At Price"
              type="number"
              step="0.01"
              value={form.compareAtPrice}
              onChange={(e) =>
                setForm((f) => ({ ...f, compareAtPrice: e.target.value }))
              }
            />
            <Select
              label="Category"
              options={categoryOptions}
              value={form.categorySlug}
              onChange={(e) =>
                setForm((f) => ({ ...f, categorySlug: e.target.value }))
              }
              required
            />
          </div>
          <Input
            label="Image URL"
            value={form.imageUrl}
            onChange={(e) =>
              setForm((f) => ({ ...f, imageUrl: e.target.value }))
            }
            placeholder="/images/products/..."
          />
          <Input
            label="Tags"
            value={form.tags}
            onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
            placeholder="comma-separated"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Materials"
              value={form.materials}
              onChange={(e) =>
                setForm((f) => ({ ...f, materials: e.target.value }))
              }
              placeholder="comma-separated"
            />
            <Input
              label="Dimensions"
              value={form.dimensions}
              onChange={(e) =>
                setForm((f) => ({ ...f, dimensions: e.target.value }))
              }
            />
          </div>
          <Input
            label="Features"
            value={form.features}
            onChange={(e) =>
              setForm((f) => ({ ...f, features: e.target.value }))
            }
            placeholder="comma-separated"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {(
              [
                ["isNew", "New"],
                ["isBestSeller", "Best Seller"],
                ["isFeatured", "Featured"],
                ["isLimitedEdition", "Limited Edition"],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form[key]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [key]: e.target.checked }))
                  }
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
                />
                {label}
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Input
              label="Rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={form.rating}
              onChange={(e) =>
                setForm((f) => ({ ...f, rating: e.target.value }))
              }
            />
            <Input
              label="Review Count"
              type="number"
              value={form.reviewCount}
              onChange={(e) =>
                setForm((f) => ({ ...f, reviewCount: e.target.value }))
              }
            />
            <label className="flex items-center gap-2 text-sm pt-6">
              <input
                type="checkbox"
                checked={form.inStock}
                onChange={(e) =>
                  setForm((f) => ({ ...f, inStock: e.target.checked }))
                }
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
              />
              In Stock
            </label>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">{isEdit ? "Save Changes" : "Add Product"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Category Form ───────────────────────────────────────────────────────────

interface CategoryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category?: Category;
}

function getInitialCategoryState(category?: Category) {
  if (category) {
    return {
      name: category.name,
      slug: category.slug,
      description: category.description ?? "",
      parentId: category.parentId ?? "",
      image: category.image ?? "",
    };
  }
  return { name: "", slug: "", description: "", parentId: "", image: "" };
}

export function CategoryForm({
  open,
  onOpenChange,
  category,
}: CategoryFormProps) {
  const { addCategory, updateCategory, categories } = useAdmin();
  const isEdit = !!category;

  const [form, setForm] = useState(() => getInitialCategoryState(category));

  const parentOptions = [
    { value: "", label: "None (Top Level)" },
    ...categories.map((c) => ({ value: c.id, label: c.name })),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: Category = {
      id: category?.id ?? generateId(),
      name: form.name,
      slug: form.slug || slugify(form.name),
      description: form.description || undefined,
      parentId: form.parentId || null,
      image: form.image || undefined,
    };
    if (isEdit) {
      updateCategory(category.id, data);
    } else {
      addCategory(data);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Category" : "Add Category"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            value={form.name}
            onChange={(e) =>
              setForm((f) => ({ ...f, name: e.target.value }))
            }
            required
          />
          <Input
            label="Slug"
            value={form.slug}
            onChange={(e) =>
              setForm((f) => ({ ...f, slug: e.target.value }))
            }
            placeholder="auto-generated"
          />
          <Textarea
            label="Description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />
          <Select
            label="Parent Category"
            options={parentOptions}
            value={form.parentId}
            onChange={(e) =>
              setForm((f) => ({ ...f, parentId: e.target.value }))
            }
          />
          <Input
            label="Image URL"
            value={form.image}
            onChange={(e) =>
              setForm((f) => ({ ...f, image: e.target.value }))
            }
          />
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {isEdit ? "Save Changes" : "Add Category"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Bundle Form ─────────────────────────────────────────────────────────────

interface BundleFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bundle?: Bundle;
}

function getInitialBundleState(bundle?: Bundle) {
  if (bundle) {
    return {
      name: bundle.name,
      slug: bundle.slug,
      description: bundle.description,
      shortDescription: bundle.shortDescription ?? "",
      coverImage: bundle.coverImage?.src ?? "",
      selectedProducts: bundle.products.map((p) => p.id),
      startingPrice: String(bundle.startingPrice),
      includesGiftWrapping: bundle.includesGiftWrapping ?? true,
      includesGreetingCard: bundle.includesGreetingCard ?? true,
      isFeatured: bundle.isFeatured ?? false,
      customizationOptions: bundle.customizationOptions?.join(", ") ?? "",
      occasions: bundle.occasions?.join(", ") ?? "",
    };
  }
  return {
    name: "",
    slug: "",
    description: "",
    shortDescription: "",
    coverImage: "",
    selectedProducts: [] as string[],
    startingPrice: "",
    includesGiftWrapping: true,
    includesGreetingCard: true,
    isFeatured: false,
    customizationOptions: "",
    occasions: "",
  };
}

export function BundleForm({ open, onOpenChange, bundle }: BundleFormProps) {
  const { addBundle, updateBundle, products } = useAdmin();
  const isEdit = !!bundle;

  const [form, setForm] = useState(() => getInitialBundleState(bundle));

  const productOptions = products.map((p) => ({
    value: p.id,
    label: `${p.name} ($${p.price})`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = products.filter((p) =>
      form.selectedProducts.includes(p.id)
    );
    const data: Bundle = {
      id: bundle?.id ?? generateId(),
      name: form.name,
      slug: form.slug || slugify(form.name),
      description: form.description,
      shortDescription: form.shortDescription || undefined,
      coverImage: {
        src: form.coverImage || "/images/bundles/default.jpg",
        alt: form.name,
      },
      products: selected,
      startingPrice: parseFloat(form.startingPrice) || 0,
      includesGiftWrapping: form.includesGiftWrapping,
      includesGreetingCard: form.includesGreetingCard,
      isFeatured: form.isFeatured,
      customizationOptions: form.customizationOptions
        ? form.customizationOptions.split(",").map((c) => c.trim()).filter(Boolean)
        : undefined,
      occasions: form.occasions
        ? form.occasions.split(",").map((o) => o.trim()).filter(Boolean)
        : undefined,
    };
    if (isEdit) {
      updateBundle(bundle.id, data);
    } else {
      addBundle(data);
    }
    onOpenChange(false);
  };

  const toggleProduct = (id: string) => {
    setForm((f) => ({
      ...f,
      selectedProducts: f.selectedProducts.includes(id)
        ? f.selectedProducts.filter((p) => p !== id)
        : [...f.selectedProducts, id],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Bundle" : "Add Bundle"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Name"
              value={form.name}
              onChange={(e) =>
                setForm((f) => ({ ...f, name: e.target.value }))
              }
              required
            />
            <Input
              label="Slug"
              value={form.slug}
              onChange={(e) =>
                setForm((f) => ({ ...f, slug: e.target.value }))
              }
              placeholder="auto-generated"
            />
          </div>
          <Textarea
            label="Description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            required
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Starting Price"
              type="number"
              step="0.01"
              value={form.startingPrice}
              onChange={(e) =>
                setForm((f) => ({ ...f, startingPrice: e.target.value }))
              }
            />
            <Input
              label="Cover Image URL"
              value={form.coverImage}
              onChange={(e) =>
                setForm((f) => ({ ...f, coverImage: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Products in Bundle
            </label>
            <div className="max-h-48 space-y-2 overflow-y-auto rounded-lg border border-border p-3">
              {productOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={form.selectedProducts.includes(opt.value)}
                    onChange={() => toggleProduct(opt.value)}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.includesGiftWrapping}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    includesGiftWrapping: e.target.checked,
                  }))
                }
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
              />
              Gift Wrapping
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.includesGreetingCard}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    includesGreetingCard: e.target.checked,
                  }))
                }
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
              />
              Greeting Card
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.isFeatured}
                onChange={(e) =>
                  setForm((f) => ({ ...f, isFeatured: e.target.checked }))
                }
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
              />
              Featured
            </label>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {isEdit ? "Save Changes" : "Add Bundle"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Testimonial Form ────────────────────────────────────────────────────────

interface TestimonialFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  testimonial?: Testimonial;
}

function getInitialTestimonialState(testimonial?: Testimonial) {
  if (testimonial) {
    return {
      name: testimonial.name,
      rating: String(testimonial.rating),
      comment: testimonial.comment,
      date: testimonial.date,
      product: testimonial.product ?? "",
    };
  }
  return {
    name: "",
    rating: "5",
    comment: "",
    date: new Date().toISOString().split("T")[0],
    product: "",
  };
}

export function TestimonialForm({
  open,
  onOpenChange,
  testimonial,
}: TestimonialFormProps) {
  const { addTestimonial, updateTestimonial } = useAdmin();
  const isEdit = !!testimonial;

  const [form, setForm] = useState(() => getInitialTestimonialState(testimonial));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: Testimonial = {
      id: testimonial?.id ?? generateId(),
      name: form.name,
      rating: parseInt(form.rating) || 5,
      comment: form.comment,
      date: form.date,
      product: form.product || undefined,
    };
    if (isEdit) {
      updateTestimonial(testimonial.id, data);
    } else {
      addTestimonial(data);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Testimonial" : "Add Testimonial"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Customer Name"
            value={form.name}
            onChange={(e) =>
              setForm((f) => ({ ...f, name: e.target.value }))
            }
            required
          />
          <Select
            label="Rating"
            options={[
              { value: "5", label: "5 Stars" },
              { value: "4", label: "4 Stars" },
              { value: "3", label: "3 Stars" },
              { value: "2", label: "2 Stars" },
              { value: "1", label: "1 Star" },
            ]}
            value={form.rating}
            onChange={(e) =>
              setForm((f) => ({ ...f, rating: e.target.value }))
            }
          />
          <Textarea
            label="Comment"
            value={form.comment}
            onChange={(e) =>
              setForm((f) => ({ ...f, comment: e.target.value }))
            }
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Date"
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm((f) => ({ ...f, date: e.target.value }))
              }
            />
            <Input
              label="Product"
              value={form.product}
              onChange={(e) =>
                setForm((f) => ({ ...f, product: e.target.value }))
              }
              placeholder="optional"
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {isEdit ? "Save Changes" : "Add Testimonial"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── FAQ Form ────────────────────────────────────────────────────────────────

interface FaqFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  faq?: FAQ;
}

function getInitialFaqState(faq?: FAQ) {
  if (faq) {
    return {
      question: faq.question,
      answer: faq.answer,
      category: faq.category ?? "",
    };
  }
  return { question: "", answer: "", category: "" };
}

export function FaqForm({ open, onOpenChange, faq }: FaqFormProps) {
  const { addFaq, updateFaq } = useAdmin();
  const isEdit = !!faq;

  const [form, setForm] = useState(() => getInitialFaqState(faq));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: FAQ = {
      id: faq?.id ?? generateId(),
      question: form.question,
      answer: form.answer,
      category: form.category || undefined,
    };
    if (isEdit) {
      updateFaq(faq.id, data);
    } else {
      addFaq(data);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Question"
            value={form.question}
            onChange={(e) =>
              setForm((f) => ({ ...f, question: e.target.value }))
            }
            required
          />
          <Textarea
            label="Answer"
            value={form.answer}
            onChange={(e) =>
              setForm((f) => ({ ...f, answer: e.target.value }))
            }
            required
          />
          <Input
            label="Category"
            value={form.category}
            onChange={(e) =>
              setForm((f) => ({ ...f, category: e.target.value }))
            }
            placeholder="e.g. General, Orders, Shipping"
          />
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {isEdit ? "Save Changes" : "Add FAQ"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Hero Banner Form ────────────────────────────────────────────────────────

interface HeroBannerFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  banner?: HeroBanner;
}

function getInitialHeroBannerState(banner?: HeroBanner) {
  if (banner) {
    return {
      title: banner.title,
      subtitle: banner.subtitle ?? "",
      image: banner.image,
      ctaText: banner.ctaText ?? "",
      ctaLink: banner.ctaLink ?? "",
    };
  }
  return { title: "", subtitle: "", image: "", ctaText: "", ctaLink: "" };
}

export function HeroBannerForm({
  open,
  onOpenChange,
  banner,
}: HeroBannerFormProps) {
  const { addHeroBanner, updateHeroBanner } = useAdmin();
  const isEdit = !!banner;

  const [form, setForm] = useState(() => getInitialHeroBannerState(banner));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: HeroBanner = {
      id: banner?.id ?? generateId(),
      title: form.title,
      subtitle: form.subtitle || undefined,
      image: form.image,
      ctaText: form.ctaText || undefined,
      ctaLink: form.ctaLink || undefined,
    };
    if (isEdit) {
      updateHeroBanner(banner.id, data);
    } else {
      addHeroBanner(data);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Hero Banner" : "Add Hero Banner"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Title"
            value={form.title}
            onChange={(e) =>
              setForm((f) => ({ ...f, title: e.target.value }))
            }
            required
          />
          <Textarea
            label="Subtitle"
            value={form.subtitle}
            onChange={(e) =>
              setForm((f) => ({ ...f, subtitle: e.target.value }))
            }
          />
          <Input
            label="Image URL"
            value={form.image}
            onChange={(e) =>
              setForm((f) => ({ ...f, image: e.target.value }))
            }
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="CTA Text"
              value={form.ctaText}
              onChange={(e) =>
                setForm((f) => ({ ...f, ctaText: e.target.value }))
              }
              placeholder="Explore Collection"
            />
            <Input
              label="CTA Link"
              value={form.ctaLink}
              onChange={(e) =>
                setForm((f) => ({ ...f, ctaLink: e.target.value }))
              }
              placeholder="/shop"
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {isEdit ? "Save Changes" : "Add Banner"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
