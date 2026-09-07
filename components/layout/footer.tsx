import { Heart, Mail, Phone, Globe, AtSign } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=crochet", label: "Crochet" },
    { href: "/shop?category=candles", label: "Candles" },
    { href: "/shop?category=gift-bundles", label: "Gift Bundles" },
    { href: "/shop?category=personalized", label: "Personalized" },
  ],
  occasions: [
    { href: "/shop?occasion=birthday", label: "Birthday" },
    { href: "/shop?occasion=anniversary", label: "Anniversary" },
    { href: "/shop?occasion=graduation", label: "Graduation" },
    { href: "/shop?occasion=corporate", label: "Corporate" },
    { href: "/shop?occasion=festival", label: "Festival" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1d2129] text-white">
      <div className="mx-auto max-w-[1140px] px-5 py-12 lg:px-0">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-[11px] font-semibold">About</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link className="text-[9px] text-gray-400" href="/">
                Home
              </Link>

              <Link className="text-[9px] text-gray-400" href="/shop">
                Shop
              </Link>

              <Link className="text-[9px] text-gray-400" href="/our-story">
                Our story
              </Link>

              <Link className="text-[9px] text-gray-400" href="/blog">
                Blogs
              </Link>
            </div>

            <select className="mt-5 rounded border border-gray-600 bg-transparent px-3 py-1.5 text-[9px] text-gray-300 outline-none">
              <option className="bg-[#1d2129]">English</option>
              <option className="bg-[#1d2129]">Nepali</option>
            </select>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[11px] font-semibold">Help</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link className="text-[9px] text-gray-400" href="/shipping">
                Shipping & Returns
              </Link>

              <Link className="text-[9px] text-gray-400" href="/track-order">
                Track Order
              </Link>

              <Link className="text-[9px] text-gray-400" href="/faqs">
                FAQs
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold">Contact</h3>

            <div className="mt-4 flex flex-col gap-3 text-[9px] text-gray-400">
              <p>Phone:</p>
              <p>(+1) 123 456 7893</p>
              <p>Email:</p>
              <p>name@email.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[11px] font-semibold">
              Receive new promotions
            </h3>

            <p className="mt-2 text-[9px] text-gray-400">
              Duis ea tempor commodo amet reprehendre
            </p>

            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Input your email"
                className="min-w-0 flex-1 rounded-l border border-gray-600 bg-transparent px-3 py-2 text-[9px] outline-none placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="rounded-r bg-[#6268e8] px-4 text-[9px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5">
          <div className="flex flex-col justify-between gap-3 text-[8px] text-gray-500 sm:flex-row">
            <p>© 2022 Brand, Inc.</p>

            <div className="flex gap-3">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
