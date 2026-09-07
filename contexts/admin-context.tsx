"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  Product,
  Category,
  Bundle,
  Testimonial,
  FAQ,
  HeroBanner,
  SiteSettings,
  ActivityLog,
} from "@/lib/types";
import {
  products as seedProducts,
  categories as seedCategories,
  bundles as seedBundles,
  testimonials as seedTestimonials,
  faqs as seedFaqs,
  heroBanners as seedHeroBanners,
} from "@/lib/data";

const STORAGE_KEY = "saubhagya_admin_data";

const defaultSettings: SiteSettings = {
  siteName: "Saubhagya",
  siteDescription: "Good Fortune, Handcrafted with Love",
  contactEmail: "hello@saubhagya.com",
  contactPhone: "+1 (234) 567-890",
  whatsappNumber: "1234567890",
  address: "123 Handmade Lane, Craft City",
  socialLinks: {
    instagram: "https://instagram.com/saubhagya",
    facebook: "https://facebook.com/saubhagya",
    twitter: "https://twitter.com/saubhagya",
  },
  seo: {
    defaultTitle: "Saubhagya | Good Fortune, Handcrafted with Love",
    defaultDescription:
      "Discover unique handcrafted gifts at Saubhagya — premium crochet products, candles, gift bundles, and personalized gifts.",
    ogImage: "/images/og-default.jpg",
  },
};

interface AdminState {
  products: Product[];
  categories: Category[];
  bundles: Bundle[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  heroBanners: HeroBanner[];
  settings: SiteSettings;
  activityLog: ActivityLog[];
}

interface AdminContextValue extends AdminState {
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  addCategory: (category: Category) => void;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  deleteCategory: (id: string) => void;

  addBundle: (bundle: Bundle) => void;
  updateBundle: (id: string, updates: Partial<Bundle>) => void;
  deleteBundle: (id: string) => void;

  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, updates: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;

  addFaq: (faq: FAQ) => void;
  updateFaq: (id: string, updates: Partial<FAQ>) => void;
  deleteFaq: (id: string) => void;

  addHeroBanner: (banner: HeroBanner) => void;
  updateHeroBanner: (id: string, updates: Partial<HeroBanner>) => void;
  deleteHeroBanner: (id: string) => void;

  updateSettings: (updates: Partial<SiteSettings>) => void;
}

const AdminContext = createContext<AdminContextValue | null>(null);

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function loadState(): AdminState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as AdminState;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return null;
}

function saveState(state: AdminState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AdminState>(() => {
    const saved = loadState();
    if (saved) return saved;
    return {
      products: seedProducts,
      categories: seedCategories,
      bundles: seedBundles,
      testimonials: seedTestimonials,
      faqs: seedFaqs,
      heroBanners: seedHeroBanners,
      settings: defaultSettings,
      activityLog: [],
    };
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  const logActivity = useCallback(
    (action: ActivityLog["action"], entity: string, entityName: string) => {
      setState((prev) => ({
        ...prev,
        activityLog: [
          {
            id: generateId(),
            action,
            entity,
            entityName,
            timestamp: new Date().toISOString(),
            user: "Admin User",
          },
          ...prev.activityLog,
        ].slice(0, 50),
      }));
    },
    []
  );

  const addProduct = useCallback(
    (product: Product) => {
      setState((prev) => ({ ...prev, products: [...prev.products, product] }));
      logActivity("created", "Product", product.name);
    },
    [logActivity]
  );

  const updateProduct = useCallback(
    (id: string, updates: Partial<Product>) => {
      setState((prev) => ({
        ...prev,
        products: prev.products.map((p) =>
          p.id === id ? { ...p, ...updates } : p
        ),
      }));
      logActivity("updated", "Product", updates.name ?? id);
    },
    [logActivity]
  );

  const deleteProduct = useCallback(
    (id: string) => {
      const product = state.products.find((p) => p.id === id);
      setState((prev) => ({
        ...prev,
        products: prev.products.filter((p) => p.id !== id),
      }));
      logActivity("deleted", "Product", product?.name ?? id);
    },
    [state.products, logActivity]
  );

  const addCategory = useCallback(
    (category: Category) => {
      setState((prev) => ({
        ...prev,
        categories: [...prev.categories, category],
      }));
      logActivity("created", "Category", category.name);
    },
    [logActivity]
  );

  const updateCategory = useCallback(
    (id: string, updates: Partial<Category>) => {
      setState((prev) => ({
        ...prev,
        categories: prev.categories.map((c) =>
          c.id === id ? { ...c, ...updates } : c
        ),
      }));
      logActivity("updated", "Category", updates.name ?? id);
    },
    [logActivity]
  );

  const deleteCategory = useCallback(
    (id: string) => {
      const cat = state.categories.find((c) => c.id === id);
      setState((prev) => ({
        ...prev,
        categories: prev.categories.filter((c) => c.id !== id),
      }));
      logActivity("deleted", "Category", cat?.name ?? id);
    },
    [state.categories, logActivity]
  );

  const addBundle = useCallback(
    (bundle: Bundle) => {
      setState((prev) => ({ ...prev, bundles: [...prev.bundles, bundle] }));
      logActivity("created", "Bundle", bundle.name);
    },
    [logActivity]
  );

  const updateBundle = useCallback(
    (id: string, updates: Partial<Bundle>) => {
      setState((prev) => ({
        ...prev,
        bundles: prev.bundles.map((b) =>
          b.id === id ? { ...b, ...updates } : b
        ),
      }));
      logActivity("updated", "Bundle", updates.name ?? id);
    },
    [logActivity]
  );

  const deleteBundle = useCallback(
    (id: string) => {
      const bundle = state.bundles.find((b) => b.id === id);
      setState((prev) => ({
        ...prev,
        bundles: prev.bundles.filter((b) => b.id !== id),
      }));
      logActivity("deleted", "Bundle", bundle?.name ?? id);
    },
    [state.bundles, logActivity]
  );

  const addTestimonial = useCallback(
    (testimonial: Testimonial) => {
      setState((prev) => ({
        ...prev,
        testimonials: [...prev.testimonials, testimonial],
      }));
      logActivity("created", "Testimonial", testimonial.name);
    },
    [logActivity]
  );

  const updateTestimonial = useCallback(
    (id: string, updates: Partial<Testimonial>) => {
      setState((prev) => ({
        ...prev,
        testimonials: prev.testimonials.map((t) =>
          t.id === id ? { ...t, ...updates } : t
        ),
      }));
      logActivity("updated", "Testimonial", updates.name ?? id);
    },
    [logActivity]
  );

  const deleteTestimonial = useCallback(
    (id: string) => {
      const t = state.testimonials.find((t) => t.id === id);
      setState((prev) => ({
        ...prev,
        testimonials: prev.testimonials.filter((t) => t.id !== id),
      }));
      logActivity("deleted", "Testimonial", t?.name ?? id);
    },
    [state.testimonials, logActivity]
  );

  const addFaq = useCallback(
    (faq: FAQ) => {
      setState((prev) => ({ ...prev, faqs: [...prev.faqs, faq] }));
      logActivity("created", "FAQ", faq.question);
    },
    [logActivity]
  );

  const updateFaq = useCallback(
    (id: string, updates: Partial<FAQ>) => {
      setState((prev) => ({
        ...prev,
        faqs: prev.faqs.map((f) => (f.id === id ? { ...f, ...updates } : f)),
      }));
      logActivity("updated", "FAQ", updates.question ?? id);
    },
    [logActivity]
  );

  const deleteFaq = useCallback(
    (id: string) => {
      const faq = state.faqs.find((f) => f.id === id);
      setState((prev) => ({
        ...prev,
        faqs: prev.faqs.filter((f) => f.id !== id),
      }));
      logActivity("deleted", "FAQ", faq?.question ?? id);
    },
    [state.faqs, logActivity]
  );

  const addHeroBanner = useCallback(
    (banner: HeroBanner) => {
      setState((prev) => ({
        ...prev,
        heroBanners: [...prev.heroBanners, banner],
      }));
      logActivity("created", "Hero Banner", banner.title);
    },
    [logActivity]
  );

  const updateHeroBanner = useCallback(
    (id: string, updates: Partial<HeroBanner>) => {
      setState((prev) => ({
        ...prev,
        heroBanners: prev.heroBanners.map((b) =>
          b.id === id ? { ...b, ...updates } : b
        ),
      }));
      logActivity("updated", "Hero Banner", updates.title ?? id);
    },
    [logActivity]
  );

  const deleteHeroBanner = useCallback(
    (id: string) => {
      const banner = state.heroBanners.find((b) => b.id === id);
      setState((prev) => ({
        ...prev,
        heroBanners: prev.heroBanners.filter((b) => b.id !== id),
      }));
      logActivity("deleted", "Hero Banner", banner?.title ?? id);
    },
    [state.heroBanners, logActivity]
  );

  const updateSettings = useCallback(
    (updates: Partial<SiteSettings>) => {
      setState((prev) => ({
        ...prev,
        settings: { ...prev.settings, ...updates },
      }));
      logActivity("updated", "Settings", "Site Settings");
    },
    [logActivity]
  );

  const value = useMemo(
    () => ({
      ...state,
      addProduct,
      updateProduct,
      deleteProduct,
      addCategory,
      updateCategory,
      deleteCategory,
      addBundle,
      updateBundle,
      deleteBundle,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addFaq,
      updateFaq,
      deleteFaq,
      addHeroBanner,
      updateHeroBanner,
      deleteHeroBanner,
      updateSettings,
    }),
    [
      state,
      addProduct,
      updateProduct,
      deleteProduct,
      addCategory,
      updateCategory,
      deleteCategory,
      addBundle,
      updateBundle,
      deleteBundle,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addFaq,
      updateFaq,
      deleteFaq,
      addHeroBanner,
      updateHeroBanner,
      deleteHeroBanner,
      updateSettings,
    ]
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
