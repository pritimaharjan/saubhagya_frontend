import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden  px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/20" />
            </div>

            <div className="relative flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ready to Find the Perfect Gift?
              </h2>
              <p className="mb-8 max-w-xl text-base text-white/90 sm:text-lg">
                Browse our collection of handcrafted gifts or tell us what
                you&apos;re looking for. We&apos;ll help you find or create the
                perfect piece.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/shop">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full bg-white text-primary-dark hover:bg-white/90 sm:w-auto"
                  >
                    Browse Collection
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/1234567890?text=Hello!%20I'm%20looking%20for%20a%20gift%20recommendation."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
