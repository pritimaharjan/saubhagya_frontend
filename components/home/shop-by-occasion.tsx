import Link from "next/link";
import { occasions } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function ShopByOccasion() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">
            Find the Perfect Gift
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Shop by Occasion
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-lg text-muted-foreground">
            Whether it&apos;s a birthday, anniversary, or just because &mdash;
            we have the perfect handmade gift.
          </p>
        </AnimatedSection>

        {/* Occasions Grid */}
        <StaggerContainer
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          staggerDelay={0.06}
        >
          {occasions.map((occasion) => (
            <StaggerItem key={occasion.value}>
              <Link
                href={`/shop?occasion=${occasion.value}`}
                className="group flex flex-col items-center gap-3 border border-border/50 bg-card p-4 text-foreground sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-border hover:-translate-y-1"
              >
                <span className="text-3xl sm:text-4xl" aria-hidden="true">
                  {occasion.icon}
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {occasion.label}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
