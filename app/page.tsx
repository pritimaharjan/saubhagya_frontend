import { FeaturedCategories } from "@/components/home/featured-categories";
import ProductSection from "@/components/home/featured-products";
import { ShopByOccasion } from "@/components/home/shop-by-occasion";
import StorySection from "@/components/home/story-section";
import { HandmadeProcess } from "@/components/home/handmade-process";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero-section";
import PromotionSection from "@/components/home/promotion-section";
import BlogSection from "@/components/home/blog-section";
import InstagramSection from "@/components/home/instagram";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      {/* <FeaturedCategories /> */}
      <ProductSection />
      <PromotionSection />
      {/* <ShopByOccasion /> */}
      <StorySection />
      <BlogSection />
      <InstagramSection />
      {/* <HandmadeProcess /> */}
      {/* <Testimonials /> */}
      <CTASection />
    </>
  );
}
