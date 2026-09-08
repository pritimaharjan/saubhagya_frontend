"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const heroSlides = [
  {
    id: 1,
    title: "Unique Gifts That Tell a Story",
    subtitle: "Handcrafted with Love",
    description:
      "Discover premium handmade gifts crafted with care. From crochet bouquets to scented candles, every piece is made to celebrate your special moments.",
    ctaText: "Explore Collection",
    ctaLink: "/shop",
    image: "/bundle-products/product1.jpeg",
  },
  {
    id: 2,
    title: "Beautiful Crochet Bouquets",
    subtitle: "Everlasting Flowers",
    description:
      "Handcrafted crochet flowers that never wilt. Perfect for birthdays, anniversaries, or just because.",
    ctaText: "Shop Bouquets",
    ctaLink: "/shop?category=crochet-bouquets",
    image: "/bundle-products/product2.jpeg",
  },
  {
    id: 3,
    title: "Premium Scented Candles",
    subtitle: "Ambiance & Fragrance",
    description:
      "Hand-poured candles with luxurious scents. Create the perfect atmosphere for any occasion.",
    ctaText: "Shop Candles",
    ctaLink: "/shop?category=candles",
    image: "/bundle-products/product3.jpeg",
  },
];

function HeroContent({ slide }: { slide: (typeof heroSlides)[0] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="max-w-2xl">
        <motion.span
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
        >
          {slide.subtitle}
        </motion.span>
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {slide.title}
        </motion.h1>
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-lg text-lg leading-relaxed text-white/90"
        >
          {slide.description}
        </motion.p>
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link href={slide.ctaLink}>
            <Button
              size="lg"
              className="w-full bg-white text-foreground hover:bg-white/90 sm:w-auto"
            >
              {slide.ctaText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a
            href="https://wa.me/1234567890?text=Hello!%20I'm%20looking%20for%20a%20gift."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5]">
      <div className="relative mx-auto min-h-[450px] w-full">
        <Image
          src="/hero-image/home-hero.png"
          alt="Natural skincare products"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 flex min-h-[450px] items-center">
          <div className="mx-auto w-full max-w-[1140px] px-5 lg:px-0">
            <div className="max-w-[400px]">
              <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-1.5px] text-[#292d35] sm:text-[48px]">
                Handcrafted Gifts Made to Last
              </h1>

              <p className="mt-4 max-w-[320px] text-[13px] leading-5 text-gray-600">
                Discover beautiful crochet flowers, cozy creations, and scented
                candles crafted with love. Perfect for birthdays, anniversaries,
                or simply making someone&apos;s day special.
              </p>

              <Link
                href="/shop"
                className="mt-5 inline-flex rounded-lg bg-[#6268e8] px-6 py-3 text-[12px] font-medium text-white transition hover:bg-[#5157d7]"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
