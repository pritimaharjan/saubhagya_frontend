export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string | null;
  children?: Category[];
  productCount?: number;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  category: Category;
  tags: string[];
  materials?: string[];
  dimensions?: string;
  features?: string[];
  customizationOptions?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isLimitedEdition?: boolean;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  sku?: string;
}

export interface Bundle {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  coverImage: ProductImage;
  products: Product[];
  startingPrice: number;
  includesGiftWrapping?: boolean;
  includesGreetingCard?: boolean;
  customizationOptions?: string[];
  occasions?: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
  product?: string;
}

export interface HeroBanner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface InquiryCartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact: "email" | "whatsapp" | "phone";
}

export type Occasion =
  | "birthday"
  | "anniversary"
  | "graduation"
  | "corporate"
  | "festival"
  | "thank-you"
  | "housewarming"
  | "other";

export interface OccasionOption {
  value: Occasion;
  label: string;
  icon: string;
}

export type UserRole = "admin" | "viewer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  address: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export interface ActivityLog {
  id: string;
  action: "created" | "updated" | "deleted";
  entity: string;
  entityName: string;
  timestamp: string;
  user: string;
}
