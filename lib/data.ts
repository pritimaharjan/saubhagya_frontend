import type {
  Category,
  Product,
  Bundle,
  Testimonial,
  HeroBanner,
  FAQ,
  OccasionOption,
} from "./types";

export const occasions: OccasionOption[] = [
  { value: "birthday", label: "Birthday", icon: "🎂" },
  { value: "anniversary", label: "Anniversary", icon: "💕" },
  { value: "graduation", label: "Graduation", icon: "🎓" },
  { value: "corporate", label: "Corporate", icon: "💼" },
  { value: "festival", label: "Festival", icon: "🎉" },
  { value: "thank-you", label: "Thank You", icon: "🙏" },
  { value: "housewarming", label: "Housewarming", icon: "🏠" },
  { value: "other", label: "Other", icon: "✨" },
];

export const categories: Category[] = [
  {
    id: "crochet",
    name: "Crochet",
    slug: "crochet",
    description:
      "Handcrafted crochet creations made with love, care, and premium yarn",
    image:
      "https://images.unsplash.com/photo-1603905179139-db12ab535bca?auto=format&fit=crop&w=1000&q=85",
    productCount: 24,

    children: [
      {
        id: "crochet-flowers",
        name: "Flowers",
        slug: "crochet-flowers",
        description: "Beautiful handmade crochet flowers that never wilt",
        parentId: "crochet",
        productCount: 8,
      },
      {
        id: "crochet-bouquets",
        name: "Bouquets",
        slug: "crochet-bouquets",
        description: "Beautiful crochet flower arrangements for every occasion",
        parentId: "crochet",
        productCount: 5,
      },
      {
        id: "crochet-keychains",
        name: "Keychains",
        slug: "crochet-keychains",
        description: "Cute and unique handmade crochet keychains",
        parentId: "crochet",
        productCount: 6,
      },
      {
        id: "crochet-home-decor",
        name: "Home Decor",
        slug: "crochet-home-decor",
        description: "Charming handmade crochet pieces for your home",
        parentId: "crochet",
        productCount: 5,
      },
      {
        id: "crochet-bookmarks",
        name: "Bookmarks",
        slug: "crochet-bookmarks",
        description: "Handmade crochet bookmarks for book lovers",
        parentId: "crochet",
        productCount: 4,
      },
    ],
  },

  {
    id: "candles",
    name: "Candles",
    slug: "candles",
    description:
      "Hand-poured candles designed to bring warmth, fragrance, and beauty to your space",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
    productCount: 16,

    children: [
      {
        id: "candles-flower",
        name: "Flower Candles",
        slug: "candles-flower",
        description: "Beautiful flower-shaped candles for gifting and décor",
        parentId: "candles",
        productCount: 4,
      },
      {
        id: "candles-scented",
        name: "Scented Candles",
        slug: "candles-scented",
        description: "Beautifully scented candles for cozy moments",
        parentId: "candles",
        productCount: 5,
      },
      {
        id: "candles-decorative",
        name: "Decorative Candles",
        slug: "candles-decorative",
        description: "Artistic candles designed to complement your home",
        parentId: "candles",
        productCount: 4,
      },
      {
        id: "candles-soy",
        name: "Soy Candles",
        slug: "candles-soy",
        description: "Eco-friendly candles made with natural soy wax",
        parentId: "candles",
        productCount: 3,
      },
    ],
  },

  {
    id: "gift-bundles",
    name: "Gift Bundles",
    slug: "gift-bundles",
    description:
      "Thoughtfully curated handmade gift sets for every special occasion",
    image:
      "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?auto=format&fit=crop&w=1000&q=85",
    productCount: 8,

    children: [
      {
        id: "bundles-birthday",
        name: "Birthday",
        slug: "bundles-birthday",
        description: "Thoughtful handmade gifts for birthdays",
        parentId: "gift-bundles",
        productCount: 2,
      },
      {
        id: "bundles-anniversary",
        name: "Anniversary",
        slug: "bundles-anniversary",
        description: "Romantic handmade gift sets for anniversaries",
        parentId: "gift-bundles",
        productCount: 2,
      },
      {
        id: "bundles-graduation",
        name: "Graduation",
        slug: "bundles-graduation",
        description: "Celebrate achievements with meaningful handmade gifts",
        parentId: "gift-bundles",
        productCount: 1,
      },
      {
        id: "bundles-corporate",
        name: "Corporate",
        slug: "bundles-corporate",
        description: "Thoughtful handmade gifts for teams and clients",
        parentId: "gift-bundles",
        productCount: 1,
      },
      {
        id: "bundles-festival",
        name: "Festival",
        slug: "bundles-festival",
        description: "Special handmade collections for festive celebrations",
        parentId: "gift-bundles",
        productCount: 2,
      },
    ],
  },

  {
    id: "personalized",
    name: "Personalized",
    slug: "personalized",
    description: "Custom-made handmade gifts created especially for you",
    image:
      "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?auto=format&fit=crop&w=1000&q=85",
    productCount: 10,
  },
];

export const products: Product[] = [
  {
    id: "rose-bouquet",
    name: "Crochet Rose Bouquet",
    slug: "crochet-rose-bouquet",
    description:
      "A beautiful handcrafted crochet rose bouquet featuring detailed roses made with premium yarn. Each flower is carefully crocheted and arranged by hand, creating a timeless bouquet that never wilts.",
    shortDescription: "Handcrafted crochet rose bouquet that never fades",
    price: 45.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
        alt: "Beautiful flower bouquet",
      },
      {
        src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
        alt: "Colorful flower arrangement",
      },
      {
        src: "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?auto=format&fit=crop&w=1000&q=85",
        alt: "Decorative flower bouquet",
      },
    ],

    category: {
      id: "crochet-bouquets",
      name: "Bouquets",
      slug: "crochet-bouquets",
    },

    tags: ["best-seller", "featured"],

    materials: ["Premium acrylic yarn", "Floral wire", "Green floral tape"],

    dimensions: "30cm height, 20cm width",

    features: [
      "100% handmade",
      "Never wilts",
      "Premium quality yarn",
      "Long-lasting keepsake",
      "Elegant floral arrangement",
    ],

    customizationOptions: [
      "Choose flower colors",
      "Choose bouquet size",
      "Add a greeting card",
      "Add personalized message",
    ],

    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 47,
    inStock: true,
  },

  {
    id: "lavender-bouquet",
    name: "Crochet Lavender Bouquet",
    slug: "crochet-lavender-bouquet",
    description:
      "A delicate handmade crochet lavender bouquet designed to bring soft colors and everlasting beauty to any space.",
    shortDescription: "Elegant crochet lavender bouquet that lasts forever",
    price: 38.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=1000&q=85",
        alt: "Purple flowers",
      },
      {
        src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
        alt: "Lavender style flower arrangement",
      },
    ],

    category: {
      id: "crochet-bouquets",
      name: "Bouquets",
      slug: "crochet-bouquets",
    },

    tags: ["new", "featured"],

    materials: ["Soft acrylic yarn", "Floral wire", "Green floral tape"],

    dimensions: "35cm height, 18cm width",

    features: [
      "Handmade lavender flowers",
      "Soft calming colors",
      "Never wilts",
      "Long-lasting decoration",
    ],

    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 23,
    inStock: true,
  },

  {
    id: "sunflower-keychain",
    name: "Crochet Sunflower Keychain",
    slug: "crochet-sunflower-keychain",
    description:
      "A cheerful little handmade keychain inspired by a bright sunflower. Lightweight, cute, and perfect for bags, backpacks, keys, or gifting.",
    shortDescription: "Cheerful handmade sunflower keychain",
    price: 8.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=85",
        alt: "Bright yellow sunflower",
      },
      {
        src: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=1000&q=85",
        alt: "Sunflower close-up",
      },
    ],

    category: {
      id: "crochet-keychains",
      name: "Keychains",
      slug: "crochet-keychains",
    },

    tags: ["best-seller"],

    materials: ["Cotton yarn", "Keychain ring", "Polyester filling"],

    dimensions: "5cm diameter",

    features: [
      "100% handmade",
      "Compact and lightweight",
      "Bright colors",
      "Durable keyring",
      "Perfect small gift",
    ],

    isBestSeller: true,
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
  },

  {
    id: "tulip-keychain",
    name: "Crochet Tulip Keychain",
    slug: "crochet-tulip-keychain",
    description:
      "A cute tulip-inspired handmade keychain available in soft and beautiful colors. Perfect for attaching to keys, bags, backpacks, and purses.",
    shortDescription: "Cute pastel crochet tulip keychain",
    price: 7.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1000&q=85",
        alt: "Colorful tulip flowers",
      },
      {
        src: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1000&q=85",
        alt: "Pink tulip flowers",
      },
    ],

    category: {
      id: "crochet-keychains",
      name: "Keychains",
      slug: "crochet-keychains",
    },

    tags: ["new"],

    materials: ["Cotton yarn", "Keychain ring", "Polyester filling"],

    dimensions: "6cm height",

    features: ["Pastel colors", "Lightweight", "Handmade", "Gift-ready"],

    isNew: true,
    rating: 4.6,
    reviewCount: 34,
    inStock: true,
  },

  {
    id: "flower-candle-rose",
    name: "Rose Flower Candle",
    slug: "rose-flower-candle",
    description:
      "A beautiful flower-inspired candle designed to bring warmth and elegance to your home. Perfect for birthdays, anniversaries, romantic gifts, and home décor.",
    shortDescription: "Beautiful handmade rose-inspired candle",
    price: 22.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
        alt: "Handmade decorative candle",
      },
      {
        src: "https://images.unsplash.com/photo-1602874801006-e26c3b7b4a5c?auto=format&fit=crop&w=1000&q=85",
        alt: "Decorative candle",
      },
      {
        src: "https://images.unsplash.com/photo-1603905179139-db12ab535bca?auto=format&fit=crop&w=1000&q=85",
        alt: "Candle and handmade decor",
      },
    ],

    category: {
      id: "candles-flower",
      name: "Flower Candles",
      slug: "candles-flower",
    },

    tags: ["featured", "best-seller"],

    materials: ["Soy wax", "Cotton wick", "Fragrance oil"],

    dimensions: "8cm height, 7cm diameter",

    features: [
      "Hand-poured",
      "Beautiful floral design",
      "Decorative and functional",
      "Premium wax",
      "Perfect for gifting",
    ],

    isFeatured: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 62,
    inStock: true,
  },

  {
    id: "lavender-scented-candle",
    name: "Lavender Dreams Candle",
    slug: "lavender-dreams-candle",
    description:
      "A beautifully scented lavender-inspired candle created for cozy evenings, thoughtful gifts, and peaceful moments at home.",
    shortDescription: "Calming lavender scented handmade candle",
    price: 18.0,
    compareAtPrice: 24.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1608181831718-c9c2a9a3b4c7?auto=format&fit=crop&w=1000&q=85",
        alt: "Lavender scented candle",
      },
      {
        src: "https://images.unsplash.com/photo-1602607205870-3f2f8c4c0a47?auto=format&fit=crop&w=1000&q=85",
        alt: "Candle for relaxation",
      },
    ],

    category: {
      id: "candles-scented",
      name: "Scented Candles",
      slug: "candles-scented",
    },

    tags: ["featured"],

    materials: ["Natural wax", "Lavender fragrance", "Cotton wick"],

    dimensions: "10cm height, 8cm diameter",

    features: [
      "Calming lavender fragrance",
      "Hand-poured",
      "Long burn time",
      "Reusable container",
      "Beautiful gift option",
    ],

    isFeatured: true,
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
  },

  {
    id: "honey-candle",
    name: "Honey & Vanilla Candle",
    slug: "honey-vanilla-candle",
    description:
      "A warm and comforting handmade candle with sweet honey and vanilla-inspired fragrance. Designed to create a cozy atmosphere in any room.",
    shortDescription: "Warm honey and vanilla scented candle",
    price: 16.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=1000&q=85",
        alt: "Warm scented candle",
      },
      {
        src: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
        alt: "Decorative candle",
      },
    ],

    category: {
      id: "candles-scented",
      name: "Scented Candles",
      slug: "candles-scented",
    },

    tags: ["new"],

    materials: ["Soy wax blend", "Honey vanilla fragrance", "Cotton wick"],

    dimensions: "9cm height, 7cm diameter",

    features: [
      "Warm cozy fragrance",
      "Hand-poured",
      "Long-lasting scent",
      "Gift-ready",
    ],

    isNew: true,
    rating: 4.7,
    reviewCount: 28,
    inStock: true,
  },

  {
    id: "crochet-heart",
    name: "Mini Crochet Heart",
    slug: "mini-crochet-heart",
    description:
      "A sweet handmade crochet heart that can be used as a small decoration, keepsake, bag charm, or thoughtful little gift.",
    shortDescription: "Sweet handmade crochet heart keepsake",
    price: 5.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=85",
        alt: "Red heart decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=85",
        alt: "Romantic heart decoration",
      },
    ],

    category: {
      id: "crochet-home-decor",
      name: "Home Decor",
      slug: "crochet-home-decor",
    },

    tags: ["best-seller"],

    materials: ["Cotton yarn", "Polyester filling"],

    dimensions: "4cm x 4cm",

    features: [
      "Handmade",
      "Available in multiple colors",
      "Lightweight",
      "Multi-purpose",
      "Perfect little gift",
    ],

    isBestSeller: true,
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
  },

  {
    id: "cozy-bookmark",
    name: "Crochet Bookmark Set",
    slug: "crochet-bookmark-set",
    description:
      "A charming set of handmade crochet bookmarks designed especially for book lovers. Each bookmark features a unique handmade pattern and decorative detail.",
    shortDescription: "Handmade crochet bookmarks for book lovers",
    price: 12.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=1000&q=85",
        alt: "Book and bookmark",
      },
      {
        src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1000&q=85",
        alt: "Books and reading accessories",
      },
    ],

    category: {
      id: "crochet-bookmarks",
      name: "Bookmarks",
      slug: "crochet-bookmarks",
    },

    tags: ["new"],

    materials: ["Cotton yarn", "Decorative thread"],

    dimensions: "15cm length",

    features: [
      "Set of 3",
      "Handmade",
      "Unique patterns",
      "Lightweight",
      "Perfect gift for readers",
    ],

    isNew: true,
    rating: 4.5,
    reviewCount: 18,
    inStock: true,
  },

  {
    id: "crochet-wall-hanging",
    name: "Crochet Wall Hanging",
    slug: "crochet-wall-hanging",
    description:
      "An elegant handmade crochet-inspired wall decoration designed to add warmth and character to bedrooms, living spaces, nurseries, and cozy corners.",
    shortDescription: "Elegant handmade crochet wall decoration",
    price: 35.0,

    images: [
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85",
        alt: "Beautiful home interior",
      },
      {
        src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85",
        alt: "Cozy home decoration",
      },
    ],

    category: {
      id: "crochet-home-decor",
      name: "Home Decor",
      slug: "crochet-home-decor",
    },

    tags: ["featured"],

    materials: ["Cotton yarn", "Wooden dowel"],

    dimensions: "40cm width, 60cm length",

    features: [
      "Handmade",
      "Bohemian-inspired design",
      "Natural materials",
      "Lightweight",
      "Unique home décor piece",
    ],

    isFeatured: true,
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
  },
];

export const bundles: Bundle[] = [
  {
    id: "birthday-joy-bundle",
    name: "Birthday Joy Bundle",
    slug: "birthday-joy-bundle",
    description:
      "A thoughtfully curated birthday gift featuring a beautiful crochet bouquet, handmade candle, and personalized greeting card.",
    shortDescription: "A beautiful handmade birthday gift set",

    coverImage: {
      src: "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?auto=format&fit=crop&w=1200&q=85",
      alt: "Birthday flower gift bundle",
    },

    products: [products[0], products[5], products[7]],

    startingPrice: 65.0,
    includesGiftWrapping: true,
    includesGreetingCard: true,

    customizationOptions: [
      "Choose bouquet color",
      "Choose candle scent",
      "Add personalized message",
      "Choose gift wrapping style",
    ],

    occasions: ["birthday"],
    isFeatured: true,
  },

  {
    id: "anniversary-love-bundle",
    name: "Anniversary Love Bundle",
    slug: "anniversary-love-bundle",
    description:
      "A romantic handmade anniversary gift set featuring a crochet rose bouquet, flower candle, and sweet crochet heart keepsake.",
    shortDescription: "Romantic handmade anniversary gift set",

    coverImage: {
      src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=85",
      alt: "Romantic anniversary gift",
    },

    products: [products[0], products[4], products[7]],

    startingPrice: 72.0,
    includesGiftWrapping: true,
    includesGreetingCard: true,

    customizationOptions: [
      "Choose bouquet color",
      "Choose candle style",
      "Add personalized message",
      "Add a love note",
    ],

    occasions: ["anniversary"],
    isFeatured: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah M.",
    rating: 5,
    comment:
      "The crochet bouquet I ordered for my mom's birthday was absolutely beautiful! She loved it and couldn't believe every flower was handmade.",
    date: "2024-12-15",
    product: "Crochet Rose Bouquet",
  },

  {
    id: "testimonial-2",
    name: "James K.",
    rating: 5,
    comment:
      "I ordered the anniversary bundle for my wife and she absolutely loved it. The crochet flowers are beautiful and the presentation was perfect.",
    date: "2024-11-28",
    product: "Anniversary Love Bundle",
  },

  {
    id: "testimonial-3",
    name: "Priya R.",
    rating: 5,
    comment:
      "The flower candle is so beautiful! It looks amazing as part of my room décor and makes such a thoughtful gift.",
    date: "2024-12-01",
    product: "Rose Flower Candle",
  },

  {
    id: "testimonial-4",
    name: "Emma L.",
    rating: 4,
    comment:
      "The crochet bookmark set is adorable. I bought one for myself and then ordered more as gifts for my friends.",
    date: "2024-12-10",
    product: "Crochet Bookmark Set",
  },

  {
    id: "testimonial-5",
    name: "David C.",
    rating: 5,
    comment:
      "We ordered handmade gift sets for our team and everyone loved them. The products were beautifully packed and felt much more personal than typical gifts.",
    date: "2024-11-20",
    product: "Birthday Joy Bundle",
  },
];

export const heroBanners: HeroBanner[] = [
  {
    id: "hero-1",
    title: "Handmade Gifts That Last",
    subtitle:
      "Discover beautiful crochet flowers, charming keyrings, handcrafted candles, and thoughtful gift bundles made with love.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=90",
    ctaText: "Explore Collection",
    ctaLink: "/shop",
  },

  {
    id: "hero-2",
    title: "Flowers That Never Fade",
    subtitle:
      "Give someone special a bouquet they can treasure for years. Our handmade flowers are crafted petal by petal.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=90",
    ctaText: "Shop Crochet Flowers",
    ctaLink: "/shop?category=crochet-flowers",
  },

  {
    id: "hero-3",
    title: "Thoughtful Gifts, Made by Hand",
    subtitle:
      "From tiny keyrings to beautiful bouquets, find something special for every person and every occasion.",
    image:
      "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?auto=format&fit=crop&w=1800&q=90",
    ctaText: "Find a Gift",
    ctaLink: "/shop",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How are your products made?",
    answer:
      "Our products are handcrafted with care using quality materials. Crochet flowers, keyrings, home décor pieces, and gift items are individually made by hand, giving every piece its own character.",
    category: "General",
  },

  {
    id: "faq-2",
    question: "Do crochet flowers really last?",
    answer:
      "Yes. Unlike fresh flowers, crochet flowers do not wilt or require water. With proper care, they can remain beautiful for years, making them a meaningful long-lasting gift.",
    category: "Crochet",
  },

  {
    id: "faq-3",
    question: "Can I customize my order?",
    answer:
      "Yes! Many of our products can be customized. You can choose colors, bouquet combinations, candle options, gift messages, and other details depending on the product.",
    category: "Orders",
  },

  {
    id: "faq-4",
    question: "How do I place an inquiry?",
    answer:
      "Simply add your favorite products to the inquiry cart and submit your request. You can also contact us through WhatsApp. We'll get back to you with availability, customization options, and pricing.",
    category: "Orders",
  },

  {
    id: "faq-5",
    question: "Do you offer gift wrapping?",
    answer:
      "Yes! Gift wrapping is available for our products, and selected gift bundles include gift wrapping as part of the package.",
    category: "Shipping",
  },

  {
    id: "faq-6",
    question: "How long does a custom order take?",
    answer:
      "Most ready-made products can be prepared within 3–5 business days. Custom crochet orders may take 5–7 business days depending on the size and complexity of the order.",
    category: "Orders",
  },

  {
    id: "faq-7",
    question: "How should I care for crochet flowers?",
    answer:
      "Keep crochet flowers away from excessive moisture and direct sunlight. Gently dust them when needed and store them in a clean, dry place to keep them looking beautiful.",
    category: "Crochet",
  },

  {
    id: "faq-8",
    question: "Are the candles suitable for gifting?",
    answer:
      "Absolutely. Our candles are designed to be both decorative and giftable. They can be included in birthday, anniversary, thank-you, housewarming, and self-care gift sets.",
    category: "Candles",
  },
];
