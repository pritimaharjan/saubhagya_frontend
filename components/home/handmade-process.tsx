import { Paintbrush, Heart, CheckCircle, Gift, Truck } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

const steps = [
  {
    number: "01",
    title: "Design",
    description:
      "Every creation starts with a thoughtful design inspired by nature and art.",
    icon: Paintbrush,
  },
  {
    number: "02",
    title: "Craft",
    description: "Skilled artisans bring designs to life using premium materials.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Quality Check",
    description: "Every product undergoes thorough quality inspection.",
    icon: CheckCircle,
  },
  {
    number: "04",
    title: "Gift Wrap",
    description: "Beautifully wrapped in premium eco-friendly packaging.",
    icon: Gift,
  },
  {
    number: "05",
    title: "Deliver",
    description: "Carefully delivered to bring joy to your doorstep.",
    icon: Truck,
  },
];

export function HandmadeProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">
            Our Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Heart to Hand
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-lg text-muted-foreground">
            Every creation follows our careful 5-step process to ensure
            perfection.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          staggerDelay={0.1}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step Icon */}
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/20 bg-card text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  {/* Step Number */}
                  <span className="mb-1 text-xs font-bold tracking-widest text-primary/60">
                    {step.number}
                  </span>

                  {/* Content */}
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="max-w-[200px] text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
