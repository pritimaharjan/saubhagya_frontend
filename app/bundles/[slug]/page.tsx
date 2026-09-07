"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatPrice, getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { ProductCard } from "@/components/ui/product-card";
import { bundles } from "@/lib/data";
import { Check, MessageCircle, Mail } from "lucide-react";

interface BundlePageProps {
  params: Promise<{ slug: string }>;
}

export default function BundlePage({ params }: BundlePageProps) {
  const { slug } = React.use(params);
  const bundle = bundles.find((b) => b.slug === slug);

  if (!bundle) {
    notFound();
  }

  const handleWhatsAppInquiry = () => {
    const message = `Hello! I'm interested in the "${bundle.name}" gift bundle. Please share the details and pricing. Thank you!`;
    const url = getWhatsAppUrl("1234567890", message);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/shop?category=gift-bundles" className="hover:text-primary transition-colors">
              Gift Bundles
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium" aria-current="page">
              {bundle.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Bundle Detail */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Cover Image */}
          <div>
            <div className="relative overflow-hidden border border-border/50 bg-card">
              <ImagePlaceholder
                aspectRatio="square"
                text={bundle.name}
                className="w-full"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge variant="featured">Gift Bundle</Badge>
                {bundle.includesGiftWrapping && (
                  <Badge variant="success">Gift Wrapping Included</Badge>
                )}
              </div>
            </div>
          </div>

          {/* Bundle Info */}
          <div className="flex flex-col">
            <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              {bundle.name}
            </h1>

            <p className="mb-6 text-lg font-semibold text-primary-dark">
              Starting from {formatPrice(bundle.startingPrice)}
            </p>

            <p className="mb-6 leading-relaxed text-muted-foreground">
              {bundle.description}
            </p>

            {/* What's Included */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                What&apos;s Included
              </h3>
              <ul className="space-y-2">
                {bundle.products.map((product) => (
                  <li key={product.id} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    {product.name}
                  </li>
                ))}
                {bundle.includesGiftWrapping && (
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    Premium Gift Wrapping
                  </li>
                )}
                {bundle.includesGreetingCard && (
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    Personalized Greeting Card
                  </li>
                )}
              </ul>
            </div>

            {/* Customization Options */}
            {bundle.customizationOptions && bundle.customizationOptions.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Customization Options
                </h3>
                <ul className="space-y-1.5">
                  {bundle.customizationOptions.map((option, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Occasions */}
            {bundle.occasions && bundle.occasions.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {bundle.occasions.map((occasion) => (
                    <Badge key={occasion} variant="outline" className="capitalize">
                      {occasion.replace("-", " ")}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full" onClick={handleWhatsAppInquiry}>
                <MessageCircle className="h-5 w-5" />
                Inquire via WhatsApp
              </Button>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full">
                  <Mail className="h-5 w-5" />
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Products in Bundle */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="mb-6 text-xl font-bold text-foreground">
            Products in This Bundle
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bundle.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
