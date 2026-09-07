"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Heart,
  ChevronDown,
  ChevronUp,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react";

const gallery = [
  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1608571423539-e951a1b7e5f6?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1000&q=85",
];

const relatedProducts = [
  {
    name: "Pain Relief Cream",
    slug: "pain-relief-cream",
    subtitle: "Soothing natural formula",
    price: "$22",
    oldPrice: "$28",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=85",
    badge: "BEST-SELLER",
  },
  {
    name: "Night Serum",
    slug: "night-serum",
    subtitle: "A restorative night complex",
    price: "$18",
    oldPrice: "$26",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85",
    badge: "BEST-SELLER",
  },
  {
    name: "Hydrating Cleanser",
    slug: "hydrating-cleanser",
    subtitle: "Daily gentle wash",
    price: "$48",
    oldPrice: "$56",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85",
    badge: "BEST-SELLER",
  },
  {
    name: "Facial Toner",
    slug: "facial-toner",
    subtitle: "A clean aesthetic mist",
    price: "$24",
    oldPrice: "",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
    badge: "",
  },
];

const benefits = [
  { icon: "✦", text: "Reduces stress and anxiety" },
  { icon: "◌", text: "Improves sleep quality" },
  { icon: "♧", text: "Anti-inflammatory properties" },
  { icon: "◇", text: "100% Organic & Vegan" },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("story");
  const [notice, setNotice] = useState("");

  const addToBag = () => {
    setNotice(`${quantity} item${quantity > 1 ? "s" : ""} added to your bag.`);
    setTimeout(() => setNotice(""), 2200);
  };

  return (
    <main className="min-h-screen bg-white">
      {notice && (
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-lg bg-[#292d35] px-6 py-3 text-sm text-white shadow-lg">
          {notice}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-4 lg:px-0">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#292d35]"
          >
            Lé.nature
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#shop"
              className="text-xs font-medium text-gray-600 hover:text-[#292d35]"
            >
              Shop
            </a>
            <a
              href="#story"
              className="text-xs font-medium text-gray-600 hover:text-[#292d35]"
            >
              Our Story
            </a>
            <a
              href="#"
              className="text-xs font-medium text-gray-600 hover:text-[#292d35]"
            >
              Blog
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-400 sm:flex">
              <span>⌕</span>
              <span>Search product...</span>
            </div>
            <button className="text-sm font-medium text-[#292d35]">♙</button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1140px] px-5 py-4 lg:px-0">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400">
          <Link href="/" className="hover:text-[#292d35]">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#292d35]">
            Shop
          </Link>
          <span>/</span>
          <span className="text-[#292d35]">Premium CBD Restorative Oil</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="mx-auto max-w-[1140px] px-5 pb-16 lg:px-0">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f7f7f7]">
              <Image
                src={gallery[activeImage]}
                alt="Premium CBD Restorative Oil"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                    i === activeImage
                      ? "border-[#6268e8]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Product view ${i + 1}`}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#ec5c92] px-3 py-1 text-[10px] font-semibold text-white">
                BEST-SELLER
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Wellness &amp; Recovery
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#292d35]">
              Premium CBD
              <br />
              Restorative Oil
            </h1>

            <p className="text-sm text-gray-500">
              Full-spectrum hemp extract for daily restoration.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-gray-500">4.8 (124 Reviews)</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#292d35]">$32</span>
              <span className="text-sm text-gray-400 line-through">$42</span>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              Our Premium CBD Oil is meticulously crafted using organic, non-GMO
              hemp. Each drop delivers a potent dose of wellness, designed to
              harmonize your body&apos;s natural systems and promote a sense of
              calm and clarity throughout your day.
            </p>

            {/* Quantity */}
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Select Quantity
              </p>
              <div className="inline-flex items-center rounded-lg border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="min-w-[48px] text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={addToBag}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#6268e8] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#5157d7]"
              >
                <ShoppingCart size={14} />
                ADD TO BAG
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border transition ${
                  wishlisted
                    ? "border-[#ec5c92] bg-[#ec5c92]/10 text-[#ec5c92]"
                    : "border-gray-200 text-gray-400 hover:border-[#ec5c92] hover:text-[#ec5c92]"
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            <button className="w-full rounded-lg border border-[#6268e8] py-3 text-xs font-semibold text-[#6268e8] transition hover:bg-[#6268e8] hover:text-white">
              PURCHASE NOW
            </button>

            {/* Shipping */}
            <div className="flex gap-6 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef0ff]">
                  <Truck size={16} className="text-[#6268e8]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#292d35]">
                    FREE SHIPPING
                  </p>
                  <p className="text-[10px] text-gray-400">Orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef0ff]">
                  <RotateCcw size={16} className="text-[#6268e8]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#292d35]">
                    EASY RETURNS
                  </p>
                  <p className="text-[10px] text-gray-400">30-day window</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="border-t border-gray-100 pt-4">
              <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Product Benefits
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b.text} className="flex items-center gap-2">
                    <span className="text-sm text-[#6268e8]">{b.icon}</span>
                    <p className="text-xs text-gray-600">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="divide-y divide-gray-100 border-t border-gray-100">
              <AccordionItem
                title="FULL INGREDIENTS"
                isOpen={open === "ingredients"}
                onToggle={() =>
                  setOpen(open === "ingredients" ? null : "ingredients")
                }
              >
                Organic full-spectrum hemp extract, MCT oil, natural botanical
                ingredients and vitamin E.
              </AccordionItem>
              <AccordionItem
                title="HOW TO USE"
                isOpen={open === "use"}
                onToggle={() => setOpen(open === "use" ? null : "use")}
              >
                Place the recommended serving under your tongue, hold briefly,
                then swallow. Follow the product label and your local
                regulations.
              </AccordionItem>
              <AccordionItem
                title="SHIPPING & RETURNS"
                isOpen={open === "shipping"}
                onToggle={() =>
                  setOpen(open === "shipping" ? null : "shipping")
                }
              >
                Orders are prepared within 1–2 business days. Returns are
                accepted according to your store return policy.
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Tabs Section */}
      <section
        className="border-t border-gray-100 bg-[#f7f7f7] py-16"
        id="story"
      >
        <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
          <div className="mb-8 flex justify-center gap-2">
            {(["story", "application", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-2 text-[10px] font-semibold uppercase tracking-wider transition ${
                  activeTab === tab
                    ? "bg-[#6268e8] text-white"
                    : "bg-white text-gray-500 hover:text-[#292d35]"
                }`}
              >
                {tab === "story" && "The Story"}
                {tab === "application" && "Application"}
                {tab === "reviews" && "Reviews (124)"}
              </button>
            ))}
          </div>

          {activeTab === "story" && (
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold leading-tight text-[#292d35]">
                  Natural power,
                  <br />
                  scientific precision.
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  Lé.nature was born from the belief that skincare should be as
                  pure as nature it comes from. Our CBD Oil is extracted using
                  state-of-the-art CO2 technology, ensuring that every
                  therapeutic terpene and cannabinoid remains intact and
                  effective.
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  We partner with family-owned organic farms to source the
                  highest quality hemp, guaranteeing transparency from seed to
                  shelf. Each batch is third-party lab tested to ensure it meets
                  our rigorous standards for purity and potency.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=85"
                  alt="Natural skincare ritual"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === "application" && (
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-[#292d35]">
                A simple daily ritual.
              </h2>
              <p className="text-sm leading-relaxed text-gray-500">
                Use consistently as part of your wellness routine. Start with
                the serving suggested on your product packaging and adjust only
                according to the label instructions.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-[#292d35]">
                What customers say.
              </h2>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-2 flex justify-center text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-1 text-lg font-bold text-[#292d35]">4.8 / 5</p>
                <p className="text-sm italic text-gray-500">
                  &ldquo;Beautiful packaging, simple routine, and a premium
                  feel.&rdquo;
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16" id="shop">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#292d35]">
                Complete the Ritual
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Explore other essentials for your wellness routine.
              </p>
            </div>
            <a
              href="#"
              className="text-xs font-semibold text-[#6268e8] hover:underline"
            >
              EXPLORE ALL →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {relatedProducts.map((product) => (
              <article key={product.name} className="group">
                <Link href={`/products/${product.slug}`}>
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f7f7f7]">
                    {product.badge && (
                      <span className="absolute right-2 top-2 z-10 rounded-full bg-[#ec5c92] px-2.5 py-1 text-[8px] font-medium text-white">
                        {product.badge}
                      </span>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[12px] font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="mt-1 truncate text-[10px] text-gray-500">
                      {product.subtitle}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[17px] font-bold">
                          {product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-[11px] text-gray-400 line-through">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                      <button
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#bfc3ff] text-[#6268e8] transition hover:bg-[#6268e8] hover:text-white"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <ShoppingCart size={13} />
                      </button>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-gray-100 bg-[#f7f7f7] py-16">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-5 sm:grid-cols-3 lg:px-0">
          <ValueCard icon="♧" title="PLANT-BASED">
            We use only clean, non-toxic ingredients from ethical, organic
            sources.
          </ValueCard>
          <ValueCard icon="♢" title="LAB TESTED">
            Every single batch is verified for potency and purity by independent
            labs.
          </ValueCard>
          <ValueCard icon="✦" title="EFFECTIVE">
            Optimized formulations designed to deliver visible and felt results.
          </ValueCard>
        </div>
      </section>
    </main>
  );
}

function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="py-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-xs font-semibold text-[#292d35]">{title}</span>
        {isOpen ? (
          <ChevronUp size={16} className="text-gray-400" />
        ) : (
          <ChevronDown size={16} className="text-gray-400" />
        )}
      </button>
      {isOpen && (
        <p className="mt-3 text-sm leading-relaxed text-gray-500">{children}</p>
      )}
    </div>
  );
}

function ValueCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef0ff] text-lg text-[#6268e8]">
        {icon}
      </span>
      <h3 className="mb-2 text-sm font-bold text-[#292d35]">{title}</h3>
      <p className="text-xs leading-relaxed text-gray-500">{children}</p>
    </div>
  );
}
