"use client";

import { useState, useMemo } from "react";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ProductCard } from "@/components/ui/product-card";
import { Badge } from "@/components/ui/badge";
import { products, categories, occasions } from "@/lib/data";
import {
  ArrowDown,
  SlidersHorizontal,
  X,
  Search,
  ImageOff,
} from "lucide-react";

type SortOption =
  | "featured"
  | "newest"
  | "price-low"
  | "price-high"
  | "best-seller";

const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "best-seller", label: "Best Sellers" },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.category.name.toLowerCase().includes(searchLower),
      );
    }

    if (selectedCategory) {
      result = result.filter(
        (p) =>
          p.category.slug === selectedCategory ||
          p.category.slug.startsWith(selectedCategory),
      );
    }

    switch (sortBy) {
      case "newest":
        result = result
          .filter((p) => p.isNew)
          .concat(result.filter((p) => !p.isNew));
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "best-seller":
        result = result
          .filter((p) => p.isBestSeller)
          .concat(result.filter((p) => !p.isBestSeller));
        break;
      case "featured":
      default:
        result = result
          .filter((p) => p.isFeatured)
          .concat(result.filter((p) => !p.isFeatured));
        break;
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  const activeFilters: Array<{
    key: string;
    label: string;
    clear: () => void;
  }> = [];
  if (selectedCategory) {
    activeFilters.push({
      key: "category",
      label:
        categories.find((c) => c.slug === selectedCategory)?.name ||
        selectedCategory,
      clear: () => setSelectedCategory(""),
    });
  }
  if (selectedOccasion) {
    activeFilters.push({
      key: "occasion",
      label:
        occasions.find((o) => o.value === selectedOccasion)?.label ||
        selectedOccasion,
      clear: () => setSelectedOccasion(""),
    });
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
              <ImageOff className="h-16 w-16" strokeWidth={1} />
              <span className="text-xs font-medium">Shop Hero Image</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Shop All Products
          </h1>
          <p className="mb-6 max-w-xl text-lg text-white/90">
            Browse our curated collection of handcrafted gifts. Find the perfect
            piece for every occasion.
          </p>
          <a href="#products">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90"
            >
              Browse Collection
              <ArrowDown className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 space-y-6">
              <div>
                <Input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search products"
                />
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Categories
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={cn(
                      "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                      !selectedCategory
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        selectedCategory === category.slug
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Price Range
                </h3>
                <p className="text-sm text-muted-foreground">
                  {formatPrice(Math.min(...products.map((p) => p.price)))}{" "}
                  &ndash;{" "}
                  {formatPrice(Math.max(...products.map((p) => p.price)))}
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-4">
              {/* Mobile Search & Filter Toggle */}
              <div className="flex gap-2 lg:hidden">
                <Input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1"
                  aria-label="Search products"
                />
                <Button
                  variant="secondary"
                  onClick={() => setShowFilters(!showFilters)}
                  aria-expanded={showFilters}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </div>

              {/* Mobile Filters Panel */}
              {showFilters && (
                <div className="rounded-lg border border-border bg-card p-4 lg:hidden">
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedCategory("")}
                          className={cn(
                            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                            !selectedCategory
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80",
                          )}
                        >
                          All
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.slug)}
                            className={cn(
                              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                              selectedCategory === category.slug
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80",
                            )}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Results Count & Sort */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-medium text-foreground">
                    {filteredProducts.length}
                  </span>{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </p>

                <Select
                  options={sortOptions}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-48"
                  aria-label="Sort products"
                />
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    Active filters:
                  </span>
                  {activeFilters.map((filter) => (
                    <Badge key={filter.key} variant="outline" className="gap-1">
                      {filter.label}
                      <button
                        onClick={filter.clear}
                        className="ml-1 rounded-full p-0.5 hover:bg-muted"
                        aria-label={`Remove ${filter.label} filter`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  <button
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedOccasion("");
                      setSearch("");
                    }}
                    className="text-xs text-primary-dark hover:underline"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Search
                  className="mb-4 h-16 w-16 text-muted-foreground/50"
                  strokeWidth={1}
                />
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  No products found
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("");
                    setSelectedOccasion("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
