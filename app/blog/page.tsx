"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  "All Articles",
  "Skincare Tips",
  "Ingredients",
  "Routines",
  "Wellness",
  "Brand Stories",
];

const articles = [
  {
    category: "INGREDIENTS",
    date: "OCT 24, 2023",
    time: "6 MIN READ",
    title: "The Science of Lavender: Why it's more than just a",
    description:
      "Exploring the therapeutic benefits of lavender oil in modern dermatological care.",
    image:
      "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=700&q=85",
  },
  {
    category: "ROUTINES",
    date: "OCT 20, 2023",
    time: "8 MIN READ",
    title: "5 Steps to a Sustainable Evening Skincare Ritual",
    description:
      "How to minimize waste while maximizing glow. A guide to eco-friendly products that work.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=85",
  },
  {
    category: "WELLNESS",
    date: "OCT 15, 2023",
    time: "5 MIN READ",
    title: "Mindful Beauty: The Connection Between Tea and",
    description:
      "The antioxidants in your herbal cup might be missing peace in your typical routine.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=85",
  },
  {
    category: "BRAND STORIES",
    date: "OCT 10, 2023",
    time: "12 MIN READ",
    title: "Inside the Lab: How We Source Our Botanical Actives",
    description:
      "A deep dive into our zero-waste extraction process and our partnership with local growers.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=85",
  },
  {
    category: "INGREDIENTS",
    date: "OCT 24, 2023",
    time: "6 MIN READ",
    title: "The Science of Lavender: Why it's more than just a",
    description:
      "Exploring the therapeutic benefits of lavender oil in modern dermatological care.",
    image:
      "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=700&q=85",
  },
  {
    category: "ROUTINES",
    date: "OCT 20, 2023",
    time: "8 MIN READ",
    title: "5 Steps to a Sustainable Evening Skincare Ritual",
    description:
      "How to minimize waste while maximizing glow. A guide to eco-friendly products that work.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=85",
  },
];

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="group">
      <div className="relative aspect-[1.35/1] overflow-hidden rounded-[12px] bg-gray-200">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[8px] font-semibold tracking-wide text-gray-700">
          {article.category}
        </span>
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2 text-[8px] text-gray-400">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.time}</span>
        </div>

        <h3 className="mt-2 text-[15px] font-bold leading-[1.25] text-[#20232b]">
          {article.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-[10px] leading-[1.5] text-gray-500">
          {article.description}
        </p>

        <button className="mt-4 flex items-center gap-1 text-[9px] font-semibold tracking-wide text-[#6268e8]">
          READ MORE
          <ArrowUpRight size={10} />
        </button>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [email, setEmail] = useState("");

  const filteredArticles =
    activeCategory === "All Articles"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory.toUpperCase(),
        );

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#20232b]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[430px] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(247,248,250,.97) 0%, rgba(247,248,250,.84) 35%, rgba(247,248,250,.25) 100%), url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=90')",
          }}
        >
          <div className="mx-auto flex min-h-[430px] max-w-[1280px] items-center px-5 lg:px-16">
            <div className="max-w-[530px]">
              <span className="inline-flex rounded-full bg-[#e9ebff] px-3 py-1 text-[8px] font-bold tracking-wide text-[#6268e8]">
                THE LE.NATURE JOURNAL
              </span>

              <h1 className="mt-5 text-[42px] font-extrabold leading-[.98] tracking-[-2px] sm:text-[58px]">
                Read what's
                <br />
                <span className="font-normal italic text-[#6268e8]">
                  new & natural.
                </span>
              </h1>

              <p className="mt-5 max-w-[410px] text-[11px] leading-[1.7] text-gray-600">
                Dive into our curated world of botanical wisdom, scientific
                breakthroughs in skincare, and holistic wellness designed for
                the modern lifestyle.
              </p>

              <div className="mt-7 flex max-w-[430px] flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <Search size={13} className="mr-2 text-gray-400" />

                  <input
                    placeholder="Search articles..."
                    className="w-full bg-transparent text-[10px] outline-none placeholder:text-gray-400"
                  />
                </div>

                <button className="rounded-full bg-[#6268e8] px-6 py-3 text-[9px] font-semibold text-white shadow-md transition hover:bg-[#5157d7]">
                  Subscribe for Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY BAR ================= */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between overflow-x-auto px-5 lg:px-16">
          <div className="flex min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`border-b-2 px-4 py-5 text-[9px] font-medium transition ${
                  activeCategory === category
                    ? "border-[#6268e8] text-[#6268e8]"
                    : "border-transparent text-gray-500 hover:text-[#6268e8]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button className="ml-6 hidden items-center gap-2 text-[9px] font-medium text-gray-600 md:flex">
            <SlidersHorizontal size={11} />
            FILTERS
          </button>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-[1050px] px-5 py-20 lg:px-0">
        {/* FEATURED TITLE */}
        <div className="mb-8 flex items-center gap-6">
          <h2 className="whitespace-nowrap text-[19px] font-bold">
            Featured Story
          </h2>

          <div className="h-px flex-1 bg-gray-200" />

          <button className="hidden text-[8px] font-bold tracking-widest text-[#6268e8] sm:block">
            VIEW SPOTLIGHT →
          </button>
        </div>

        {/* FEATURED CARD */}
        <article className="grid overflow-hidden rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_10px_30px_rgba(40,50,80,.08)] md:grid-cols-2 md:items-center md:gap-8 md:p-6">
          <div className="overflow-hidden rounded-[17px]">
            <img
              src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85"
              alt="Clean beauty skincare"
              className="aspect-[1.35/1] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="px-1 py-5 md:py-0">
            <span className="text-[8px] font-bold tracking-wider text-[#ef6d78]">
              EDITORIAL HIGHLIGHT
            </span>

            <h2 className="mt-3 text-[27px] font-extrabold leading-[1.08] tracking-[-1px]">
              The Future of
              <br />
              Clean Beauty:
              <br />
              Beyond
              <br className="hidden sm:block" />
              Organic Labels
            </h2>

            <p className="mt-4 text-[10px] leading-[1.6] text-gray-500">
              In an era of greenwashing, we define what truly “natural” means
              for the next generation of skincare. From bio-engineered
              botanicals to plastic-free packaging, discover the innovations
              shaping our industry.
            </p>

            <div className="mt-5 flex items-center gap-3 text-[8px] text-gray-400">
              <span>▣ OCT 28, 2023</span>
              <span>◷ 10 MIN READ</span>
            </div>

            <button className="mt-5 rounded-full bg-[#202126] px-7 py-3 text-[8px] font-semibold text-white transition hover:bg-[#6268e8]">
              READ FULL EDITORIAL
            </button>
          </div>
        </article>

        {/* ================= LATEST ================= */}
        <div className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-[19px] font-bold">Latest Discovery</h2>

              <p className="mt-2 max-w-[360px] text-[9px] leading-[1.5] text-gray-500">
                Fresh insights from our experts on skin health, sustainable
                living, and the art of self-care.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[8px] text-gray-400">
              SORT BY:
              <button className="rounded-full border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-600">
                NEWEST FIRST
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <ArticleCard
                key={`${article.title}-${index}`}
                article={article}
              />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-20 flex items-center justify-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400">
              <ChevronLeft size={13} />
            </button>

            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[9px] font-semibold ${
                  page === 1
                    ? "bg-[#6268e8] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="px-1 text-[10px] text-gray-400">...</span>

            <button className="flex h-8 w-8 items-center justify-center rounded-full text-[9px] text-gray-500">
              12
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400">
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#f7f8fa] px-5 pb-20">
        <div className="mx-auto max-w-[1050px] rounded-[26px] bg-gradient-to-br from-[#6268e8] to-[#5961d8] px-6 py-16 text-center text-white shadow-xl">
          <span className="rounded-full bg-white/15 px-4 py-1 text-[7px] font-semibold tracking-widest">
            WEEKLY WISDOM
          </span>

          <h2 className="mt-5 text-[30px] font-extrabold leading-tight sm:text-[38px]">
            Join our clean beauty
            <br />
            <span className="font-normal italic">collective.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[430px] text-[10px] leading-[1.6] text-white/80">
            Subscribe to receive editorial stories, exclusive early access to
            botanical drops, and skin-care secrets from our dermalogical
            experts.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Subscribed:", email);
            }}
            className="mx-auto mt-7 flex max-w-[430px] flex-col gap-2 sm:flex-row"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white/15 px-5 py-3 text-[9px] text-white outline-none placeholder:text-white/50"
            />

            <button
              type="submit"
              className="rounded-full bg-white px-7 py-3 text-[8px] font-bold text-[#6268e8] transition hover:bg-gray-100"
            >
              JOIN NOW
            </button>
          </form>

          <p className="mt-5 text-[6px] tracking-widest text-white/60">
            NO SPAM. ONLY BEAUTY. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#191e2a] text-white">
        <div className="mx-auto grid max-w-[1050px] gap-12 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
          <div>
            <h3 className="text-[10px] font-bold">About</h3>

            <div className="mt-5 space-y-3 text-[8px] text-gray-400">
              <a href="/" className="block hover:text-white">
                Home
              </a>

              <a href="/shop" className="block hover:text-white">
                Shop
              </a>

              <a href="/our-story" className="block hover:text-white">
                Our story
              </a>

              <a href="/blog" className="block hover:text-white">
                Blogs
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold">Help</h3>

            <div className="mt-5 space-y-3 text-[8px] text-gray-400">
              <a href="/shipping" className="block hover:text-white">
                Shipping & Returns
              </a>

              <a href="/track-order" className="block hover:text-white">
                Track Order
              </a>

              <a href="/faqs" className="block hover:text-white">
                FAQs
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold">Contact</h3>

            <div className="mt-5 space-y-3 text-[8px] text-gray-400">
              <p>
                PHONE
                <br />
                <span className="text-white">(+1) 123 456 7893</span>
              </p>

              <p>
                EMAIL
                <br />
                <span className="text-white">name@email.com</span>
              </p>

              {/* <div className="flex gap-3 pt-1">
                <Twitter size={11} />
                <Instagram size={11} />
                <Facebook size={11} />
                <Linkedin size={11} />
              </div> */}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold">Receive new promotions</h3>

            <p className="mt-5 text-[8px] leading-[1.6] text-gray-400">
              Join our community and receive exclusive news and promotions.
            </p>

            <form className="mt-4 flex rounded-full bg-white/10 p-1">
              <input
                placeholder="Input your email"
                className="min-w-0 flex-1 bg-transparent px-3 text-[8px] outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                className="rounded-full bg-[#6268e8] px-4 py-2 text-[7px] font-bold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto max-w-[1050px] border-t border-white/10 px-5 py-5 lg:px-0">
          <div className="flex flex-col justify-between gap-4 text-[7px] text-gray-500 sm:flex-row">
            <p>© 2022 Brand, Inc. · Privacy · Terms · Sitemap</p>

            <div className="flex gap-5">
              <span>English ◉</span>
              <span>Made with ♥ Visily</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
