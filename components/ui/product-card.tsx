"use client";

import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Heart, MessageCircle, Star } from "lucide-react";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  className?: string;
  onInquiry?: (product: Product) => void;
}

export function ProductCard({ product, className, onInquiry }: ProductCardProps) {
  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden bg-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-border",
        className
      )}
    >
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="4/3"
          text={product.name}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.isBestSeller && <Badge variant="best-seller">Best Seller</Badge>}
          {product.isLimitedEdition && <Badge variant="limited-edition">Limited Edition</Badge>}
          {hasDiscount && (
            <Badge variant="destructive">
              -{Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm backdrop-blur-sm hover:bg-white transition-colors"
            aria-label={`Add ${product.name} to wishlist`}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Category */}
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category.name}
        </p>

        {/* Name */}
        <Link
          href={`/products/${product.slug}`}
          className="mb-2 text-base font-semibold text-foreground transition-colors hover:text-primary line-clamp-1"
        >
          {product.name}
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="mb-3 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.floor(product.rating!)
                      ? "text-warning fill-warning"
                      : "text-muted fill-muted"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="mt-auto flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>

        {/* Inquiry Button */}
        <Button
          variant="secondary"
          size="sm"
          className="mt-3 w-full"
          onClick={(e) => {
            e.preventDefault();
            onInquiry?.(product);
          }}
          aria-label={`Inquire about ${product.name}`}
        >
          <MessageCircle className="h-4 w-4" />
          Quick Inquiry
        </Button>
      </div>
    </article>
  );
}
