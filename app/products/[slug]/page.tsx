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
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
];

const relatedProducts = [
  {
    name: "Crochet Rose",
    slug: "crochet-rose",
    subtitle: "A handmade flower that never fades",
    price: "$12",
    oldPrice: "$15",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=85",
    badge: "BEST-SELLER",
  },
  {
    name: "Crochet Flower Bouquet",
    slug: "crochet-flower-bouquet",
    subtitle: "A timeless handmade bouquet",
    price: "$35",
    oldPrice: "$42",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=85",
    badge: "POPULAR",
  },
  {
    name: "Crochet Keyring",
    slug: "crochet-keyring",
    subtitle: "A cute handmade everyday accessory",
    price: "$8",
    oldPrice: "$10",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85",
    badge: "BEST-SELLER",
  },
  {
    name: "Handmade Scented Candle",
    slug: "handmade-scented-candle",
    subtitle: "A warm fragrance for cozy moments",
    price: "$18",
    oldPrice: "$22",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85",
    badge: "NEW",
  },
];

const benefits = [
  { icon: "✦", text: "Handmade with love" },
  { icon: "◌", text: "Flowers that never fade" },
  { icon: "♧", text: "Perfect for gifting" },
  { icon: "◇", text: "Thoughtfully crafted" },
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

          <span className="text-[#292d35]">
            Crochet Flower & Scented Candle
          </span>
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
                alt="Handmade crochet flower and candle"
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
                Crochet & Candles
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#292d35]">
              Handmade Crochet
              <br />
              Flower & Candle
            </h1>

            <p className="text-sm text-gray-500">
              A beautiful handmade gift combining a forever crochet flower with
              a warm scented candle.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <span className="text-xs text-gray-500">4.9 (86 Reviews)</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#292d35]">$32</span>

              <span className="text-sm text-gray-400 line-through">$40</span>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              Carefully handmade with soft premium yarn and finished with
              beautiful details, this crochet flower is designed to stay
              beautiful for years. Paired with a hand-poured scented candle, it
              creates a thoughtful gift for birthdays, anniversaries,
              celebrations, or simply making someone's day special.
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
                title="MATERIALS & DETAILS"
                isOpen={open === "ingredients"}
                onToggle={() =>
                  setOpen(open === "ingredients" ? null : "ingredients")
                }
              >
                The crochet flower is made with soft, durable yarn and carefully
                stitched by hand. The candle is hand-poured using quality wax
                and a beautifully balanced fragrance.
              </AccordionItem>

              <AccordionItem
                title="CARE INSTRUCTIONS"
                isOpen={open === "use"}
                onToggle={() => setOpen(open === "use" ? null : "use")}
              >
                Keep crochet flowers away from excessive moisture and direct
                sunlight for long-lasting beauty. For candles, trim the wick
                before each use and never leave a burning candle unattended.
              </AccordionItem>

              <AccordionItem
                title="SHIPPING & RETURNS"
                isOpen={open === "shipping"}
                onToggle={() =>
                  setOpen(open === "shipping" ? null : "shipping")
                }
              >
                Orders are carefully packed and prepared within 1–2 business
                days. Returns are accepted according to our store return policy.
                Personalized handmade items may have different return
                conditions.
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
                {tab === "story" && "Our Story"}
                {tab === "application" && "Care Guide"}
                {tab === "reviews" && "Reviews (86)"}
              </button>
            ))}
          </div>

          {activeTab === "story" && (
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold leading-tight text-[#292d35]">
                  Handmade with love,
                  <br />
                  made to last.
                </h2>

                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  Every crochet flower begins with a simple strand of yarn and
                  is transformed into something meaningful by hand. Unlike fresh
                  flowers, our crochet blooms never wilt, making them a
                  beautiful reminder of special moments.
                </p>

                <p className="text-sm leading-relaxed text-gray-500">
                  We pair our handmade crochet pieces with carefully selected
                  candles to create warm, thoughtful gifts. Each piece is
                  crafted with patience and attention to detail, making every
                  order feel personal and unique.
                </p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85"
                  alt="Handmade candle and floral decor"
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
                Simple care for lasting beauty.
              </h2>

              <p className="text-sm leading-relaxed text-gray-500">
                Keep your crochet flowers in a dry, clean place and gently dust
                them when needed. To enjoy your candle, always place it on a
                stable heat-resistant surface, trim the wick before lighting,
                and never leave it unattended. With simple care, your handmade
                pieces can be enjoyed for a long time.
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

                <p className="mb-1 text-lg font-bold text-[#292d35]">4.9 / 5</p>

                <p className="text-sm italic text-gray-500">
                  “The crochet flower is beautiful and the candle smells
                  amazing. It made such a thoughtful gift.”
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
                More Handmade Favorites
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Discover more crochet pieces and cozy candle gifts.
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
          <ValueCard icon="♧" title="HANDMADE">
            Every crochet piece is carefully handmade with patience, creativity,
            and attention to detail.
          </ValueCard>

          <ValueCard icon="♢" title="TIMELESS GIFTS">
            Crochet flowers never fade, making them meaningful gifts that can be
            enjoyed for years.
          </ValueCard>

          <ValueCard icon="✦" title="COZY MOMENTS">
            Hand-poured candles add warmth, fragrance, and a relaxing touch to
            everyday spaces.
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
