"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Offers", href: "/offers" },
  { name: "Our story", href: "/our-story" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1140px] items-center justify-between px-5 lg:px-0">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-[22px] tracking-[-0.5px] text-[#5d65db]"
        >
          Lé.nature
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] text-gray-600 transition hover:text-[#5d65db]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden h-[30px] w-[150px] items-center rounded-md border border-gray-100 px-3 md:flex">
            <input
              type="text"
              placeholder="Search product"
              className="w-full bg-transparent text-[10px] outline-none placeholder:text-gray-300"
            />
          </div>

          <Link
            href="/cart"
            className="flex items-center gap-1.5 text-[11px] text-gray-700"
          >
            <ShoppingCart size={14} strokeWidth={1.7} />
            <span className="hidden sm:inline">Cart (0)</span>
          </Link>

          <Link href="/account" className="text-gray-700">
            <User size={14} strokeWidth={1.7} />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-700"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
