"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/lib/data";
import {
  Search,
  ShoppingBag,
  Menu,
  ChevronDown,
  Heart,
  Sparkles,
  Package,
  Flame,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop", hasMegaMenu: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categoryImages: Record<string, string> = {
  crochet: "/single-products/ChatGPT Image Aug 4, 2026, 11_40_00 AM.png",
  candles: "",
  "gift-bundles":
    "/bundle-products/lDbPBEZAhpfvJh32xYbvGur3vB-Af04XKvh9Dc3GGq40syHZ9O439BsAgPkzaILthvD0xA05osk6H3sxtL1O_OheR5_rCBHcvjsQhxLMKTXII28gsgpkgbX5HQhzz0CHQF8CIx-Jw8PiCEZ2GlRQJ65UyexLrsIc5bW8vGQyjTV4jf4B06YyqArNzCgvfnhr.jpeg",
  personalized: "/single-products/ChatGPT Image Aug 4, 2026, 11_48_21 PM.png",
};

const categoryIcons: Record<string, React.ReactNode> = {
  crochet: <Heart className="h-6 w-6" strokeWidth={1.5} />,
  candles: <Flame className="h-6 w-6" strokeWidth={1.5} />,
  "gift-bundles": <Package className="h-6 w-6" strokeWidth={1.5} />,
  personalized: <Sparkles className="h-6 w-6" strokeWidth={1.5} />,
};

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<
    string | null
  >(null);
  const prevPathnameRef = useRef(pathname);
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setMobileOpen(false);
      setMegaMenuOpen(false);
      setMobileExpandedCategory(null);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  const openMegaMenu = useCallback(() => {
    clearTimeout(megaMenuTimeoutRef.current);
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(true);
    }, 150);
  }, []);

  const closeMegaMenu = useCallback(() => {
    clearTimeout(megaMenuTimeoutRef.current);
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  }, []);

  const cancelCloseMegaMenu = useCallback(() => {
    clearTimeout(megaMenuTimeoutRef.current);
  }, []);

  useEffect(() => {
    return () => clearTimeout(megaMenuTimeoutRef.current);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuOpen &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && megaMenuOpen) {
        setMegaMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [megaMenuOpen]);

  const isShopActive = pathname === "/shop" || pathname.startsWith("/shop");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background",
      )}
    >
      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
              <Heart className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">
                Saubhagya
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Good Fortune, Handcrafted with Love
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={closeMegaMenu}
                >
                  <button
                    ref={triggerRef}
                    onClick={() => setMegaMenuOpen((prev) => !prev)}
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                    className={cn(
                      "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200",
                      isShopActive || megaMenuOpen
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:text-primary hover:bg-muted",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        megaMenuOpen && "rotate-180",
                      )}
                    />
                    {(isShopActive || megaMenuOpen) && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </button>

                  {/* Mega Menu Panel */}
                  <div
                    ref={megaMenuRef}
                    role="menu"
                    aria-label="Shop categories"
                    className={cn(
                      "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2",
                      "transition-all duration-200 ease-in-out",
                      megaMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none",
                    )}
                    onMouseEnter={cancelCloseMegaMenu}
                    onMouseLeave={closeMegaMenu}
                  >
                    <div className="w-[800px] rounded-xl border border-border bg-card shadow-xl overflow-hidden">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                        {categories.map((category, index) => (
                          <div
                            key={category.id}
                            role="menuitem"
                            className={cn(
                              "group/cat relative flex flex-col transition-all duration-200",
                              "hover:bg-muted/50",
                              index < categories.length - 1 &&
                                "border-r border-border",
                            )}
                          >
                            {/* Category Image - clickable */}
                            <Link
                              href={`/shop?category=${category.slug}`}
                              className="relative block aspect-[4/3] w-full overflow-hidden bg-muted"
                            >
                              {categoryImages[category.id] ? (
                                <img
                                  src={categoryImages[category.id]}
                                  alt={category.name}
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover/cat:scale-105"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-muted text-primary transition-colors duration-200 group-hover/cat:bg-muted/80">
                                  {categoryIcons[category.id]}
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-200 group-hover/cat:opacity-100" />
                            </Link>

                            {/* Category Info */}
                            <div className="flex flex-col p-3">
                              <Link
                                href={`/shop?category=${category.slug}`}
                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200"
                              >
                                {category.name}
                              </Link>
                              {category.children &&
                                category.children.length > 0 && (
                                  <ul className="mt-1.5 space-y-0.5">
                                    {category.children.map((child) => (
                                      <li key={child.id}>
                                        <Link
                                          href={`/shop?category=${child.slug}`}
                                          className="text-xs text-muted-foreground hover:text-primary transition-colors duration-150"
                                        >
                                          {child.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              <Link
                                href={`/shop?category=${category.slug}`}
                                className="mt-2 text-xs font-medium text-primary opacity-0 translate-y-1 transition-all duration-200 group-hover/cat:opacity-100 group-hover/cat:translate-y-0"
                              >
                                View All &rarr;
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-muted",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              ),
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <Button variant="ghost" size="icon" aria-label="Search products">
              <Search className="h-5 w-5" />
            </Button>

            {/* Inquiry Cart */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Inquiry cart"
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </Button>

            {/* Mobile Menu - Sheet */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                }
              />
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
                        pathname === link.href
                          ? "bg-primary/5 text-primary"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="px-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Categories
                  </p>
                  <div className="flex flex-col gap-1">
                    {categories.map((category) => {
                      const isExpanded = mobileExpandedCategory === category.id;
                      const hasChildren =
                        category.children && category.children.length > 0;

                      return (
                        <div key={category.id}>
                          <div className="flex items-center gap-3 rounded-lg transition-colors duration-200 hover:bg-muted">
                            {/* Category Image */}
                            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                              {categoryImages[category.id] ? (
                                <img
                                  src={categoryImages[category.id]}
                                  alt={category.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-muted text-primary">
                                  {categoryIcons[category.id]}
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link
                                href={`/shop?category=${category.slug}`}
                                className="block text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                              >
                                {category.name}
                              </Link>
                            </div>
                            {hasChildren && (
                              <button
                                onClick={() =>
                                  setMobileExpandedCategory(
                                    isExpanded ? null : category.id,
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted transition-colors duration-200"
                                aria-expanded={isExpanded}
                                aria-label={`Show ${category.name} subcategories`}
                              >
                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 transition-transform duration-200",
                                    isExpanded && "rotate-180",
                                  )}
                                />
                              </button>
                            )}
                          </div>

                          {/* Subcategories */}
                          {hasChildren && (
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                isExpanded
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0",
                              )}
                            >
                              <div className="ml-12 mt-1 space-y-1 pb-2">
                                {category.children!.map((child) => (
                                  <Link
                                    key={child.id}
                                    href={`/shop?category=${child.slug}`}
                                    className="block rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-150"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="px-4">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-[#25D366] hover:bg-muted transition-colors duration-200"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
