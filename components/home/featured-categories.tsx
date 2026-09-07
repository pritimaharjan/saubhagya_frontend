import { categories } from "@/lib/data";
import { CategoryCard } from "@/components/ui/category-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function FeaturedCategories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">
            Browse by Category
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our Collections
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            From handcrafted crochet pieces to premium candles, find the perfect
            gift for every occasion.
          </p>
        </AnimatedSection>

        {/* Categories Grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {categories.map((category) => (
            <StaggerItem key={category.id}>
              <CategoryCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
