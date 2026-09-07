import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import Link from "next/link";
import { Sparkles, Globe, Users, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export const metadata = {
  title: "About Us",
  description:
    "Learn about our handcrafted gift brand and the story behind our premium handmade products.",
};

const values = [
  {
    icon: Sparkles,
    title: "Craftsmanship",
    description:
      "Every product is meticulously handcrafted with attention to detail and premium materials.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We use eco-friendly materials and sustainable packaging because we care about our planet.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Supporting local artisans and creating meaningful connections through handmade gifts.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <div className="flex flex-col items-center gap-3 text-muted-foreground/50">
              <ImagePlaceholder aspectRatio="16/9" text="About Hero Image" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Our Story
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Crafting Joy, One Stitch at a Time
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/90">
              What started as a passion project has blossomed into a beloved
              handmade gift brand. Every product is infused with love,
              creativity, and meticulous attention to detail.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
                Explore Our Collection
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our values guide everything we do, from the materials we choose to
              the way we interact with our community.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-3" staggerDelay={0.1}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-border h-full">
                    <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Behind the Scenes
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Meet the Maker
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Every piece begins with a spark of inspiration. Whether it&apos;s
                a flower seen in a garden or a color palette from a sunset, nature
                and art surround our creative process.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our workshop is a cozy space filled with colorful yarns, premium
                waxes, and the warm glow of creativity. Here, each product is
                carefully crafted by hand, ensuring that every detail meets our
                high standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We source our materials from trusted suppliers who share our
                commitment to quality and sustainability. From premium acrylic
                yarns to eco-friendly soy wax, every material is chosen with
                purpose.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <ImagePlaceholder
                aspectRatio="4/3"
                text="Our Workshop"
                className="rounded-2xl shadow-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary-dark px-6 py-12 text-center sm:px-12">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Ready to Find the Perfect Gift?
              </h2>
              <p className="mb-8 mx-auto max-w-xl text-white/90">
                Browse our collection or get in touch. We&apos;d love to help you
                find or create the perfect handmade gift.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link href="/shop">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full bg-white text-primary-dark hover:bg-white/90 sm:w-auto"
                  >
                    Shop Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
