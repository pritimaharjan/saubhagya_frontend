"use client";

import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-border h-full flex flex-col">
                {/* Rating */}
                <div className="mb-4 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < testimonial.rating
                          ? "text-warning fill-warning"
                          : "text-muted fill-muted"
                      )}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground flex-1">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    {testimonial.product && (
                      <p className="text-xs text-muted-foreground">
                        Purchased: {testimonial.product}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
