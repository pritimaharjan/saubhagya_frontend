"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { Category } from "@/lib/types";

const categoryImages: Record<string, string> = {
  crochet: "/single-products/prod3.png",
  "gift-bundles": "/bundle-products/product5.jpeg",
  candles: "/single-products/prod1.png",
  personalized: "/single-products/prod2.png",
};

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const imageSrc = categoryImages[category.id];

  return (
    <Link
      href={`/shop?category=${category.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden bg-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-border",
        className,
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={category.name}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder
            aspectRatio="4/3"
            text={category.name}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3 className="text-lg font-semibold text-white mb-1">
            {category.name}
          </h3>
          {category.productCount !== undefined && (
            <p className="text-sm text-white/80">
              {category.productCount} products
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
