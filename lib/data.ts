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
    description: "Handcrafted crochet items made with love and premium yarn",
    image: "/single-products/prod1.png",
    productCount: 24,
    children: [
      {
        id: "crochet-flowers",

        name: "Flowers",
        slug: "crochet-flowers",
        description: "Beautiful crochet flowers that never wilt",
        parentId: "crochet",
        productCount: 8,
      },
      {
        id: "crochet-bouquets",
        name: "Bouquets",
        slug: "crochet-bouquets",
        description: "Stunning crochet flower arrangements",
        parentId: "crochet",
        productCount: 5,
      },
      {
        id: "crochet-keychains",
        name: "Keychains",
        slug: "crochet-keychains",
        description: "Cute and unique crochet keychains",
        parentId: "crochet",
        productCount: 6,
      },
      {
        id: "crochet-home-decor",
        name: "Home Decor",
        slug: "crochet-home-decor",
        description: "Elegant crochet pieces for your home",
        parentId: "crochet",
        productCount: 5,
      },
      {
        id: "crochet-bookmarks",
        name: "Bookmarks",
        slug: "crochet-bookmarks",
        description: "Charming crochet bookmarks for book lovers",
        parentId: "crochet",
        productCount: 4,
      },
    ],
  },
  {
    id: "candles",
    name: "Candles",
    slug: "candles",
    description: "Hand-poured candles with premium scents and unique designs",
    image: "/single-products/prod1.png",
    productCount: 16,
    children: [
      {
        id: "candles-flower",
        name: "Flower Candles",
        slug: "candles-flower",
        description: "Candles shaped like beautiful flowers",
        parentId: "candles",
        productCount: 4,
      },
      {
        id: "candles-scented",
        name: "Scented Candles",
        slug: "candles-scented",
        description: "Aromatherapy candles with essential oils",
        parentId: "candles",
        productCount: 5,
      },
      {
        id: "candles-decorative",
        name: "Decorative Candles",
        slug: "candles-decorative",
        description: "Artistic candles for home décor",
        parentId: "candles",
        productCount: 4,
      },
      {
        id: "candles-soy",
        name: "Soy Candles",
        slug: "candles-soy",
        description: "Eco-friendly soy wax candles",
        parentId: "candles",
        productCount: 3,
      },
    ],
  },
  {
    id: "gift-bundles",
    name: "Gift Bundles",
    slug: "gift-bundles",
    description: "Curated gift sets for every occasion",
    image: "/single-products/prod2.png",
    productCount: 8,
    children: [
      {
        id: "bundles-birthday",
        name: "Birthday",
        slug: "bundles-birthday",
        description: "Perfect birthday gift combinations",
        parentId: "gift-bundles",
        productCount: 2,
      },
      {
        id: "bundles-anniversary",
        name: "Anniversary",
        slug: "bundles-anniversary",
        description: "Romantic anniversary gift sets",
        parentId: "gift-bundles",
        productCount: 2,
      },
      {
        id: "bundles-graduation",
        name: "Graduation",
        slug: "bundles-graduation",
        description: "Celebrate achievements with style",
        parentId: "gift-bundles",
        productCount: 1,
      },
      {
        id: "bundles-corporate",
        name: "Corporate",
        slug: "bundles-corporate",
        description: "Professional gift sets for businesses",
        parentId: "gift-bundles",
        productCount: 1,
      },
      {
        id: "bundles-festival",
        name: "Festival",
        slug: "bundles-festival",
        description: "Festive gift collections",
        parentId: "gift-bundles",
        productCount: 2,
      },
    ],
  },
  {
    id: "personalized",
    name: "Personalized",
    slug: "personalized",
    description: "Custom-made gifts tailored just for you",
    image: "public/single-products/prod4.png",
    productCount: 10,
  },
];

export const products: Product[] = [
  {
    id: "rose-bouquet",
    name: "Rose Bouquet - Red",
    slug: "rose-bouquet-red",
    description:
      "A stunning handcrafted crochet rose bouquet featuring 12 beautifully detailed red roses. Each rose is individually made with premium yarn and arranged in an elegant bouquet. Perfect for anniversaries, Valentine's Day, or as a timeless gift that will never wilt.",
    shortDescription: "Handcrafted crochet rose bouquet with 12 red roses",
    price: 45.0,
    images: [
      {
        src: "/images/products/rose-bouquet-1.jpg",
        alt: "Red crochet rose bouquet front view",
      },
      {
        src: "/images/products/rose-bouquet-2.jpg",
        alt: "Red crochet rose bouquet detail",
      },
      {
        src: "/images/products/rose-bouquet-3.jpg",
        alt: "Red crochet rose bouquet in vase",
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
      "Handcrafted with love",
      "Never wilts",
      "Premium quality yarn",
      "Elegant arrangement",
    ],
    customizationOptions: [
      "Color options: Red, Pink, White, Yellow",
      "Add a greeting card",
    ],
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 47,
    inStock: true,
  },
  {
    id: "lavender-bouquet",
    name: "Lavender Bouquet",
    slug: "lavender-bouquet",
    description:
      "A dreamy crochet lavender bouquet that brings the calming essence of Provence to any room. Each stem is carefully crafted with soft purple and green yarn, creating a realistic and elegant arrangement.",
    shortDescription: "Calming crochet lavender bouquet arrangement",
    price: 38.0,
    images: [
      {
        src: "/images/products/lavender-bouquet-1.jpg",
        alt: "Lavender crochet bouquet front view",
      },
      {
        src: "/images/products/lavender-bouquet-2.jpg",
        alt: "Lavender crochet bouquet detail",
      },
    ],
    category: {
      id: "crochet-bouquets",
      name: "Bouquets",
      slug: "crochet-bouquets",
    },
    tags: ["new", "featured"],
    materials: ["Soft acrylic yarn", "Floral wire"],
    dimensions: "35cm height, 18cm width",
    features: ["Realistic lavender design", "Calming colors", "Long-lasting"],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 23,
    inStock: true,
  },
  {
    id: "sunflower-keychain",
    name: "Sunflower Keychain",
    slug: "sunflower-keychain",
    description:
      "A cheerful little sunflower keychain that adds a pop of sunshine to your everyday. Hand-crocheted with vibrant yellow and brown yarn, this keychain is the perfect small gift or treat for yourself.",
    shortDescription: "Cheerful crochet sunflower keychain",
    price: 8.0,
    images: [
      {
        src: "/images/products/sunflower-keychain-1.jpg",
        alt: "Sunflower crochet keychain front",
      },
      {
        src: "/images/products/sunflower-keychain-2.jpg",
        alt: "Sunflower crochet keychain detail",
      },
    ],
    category: {
      id: "crochet-keychains",
      name: "Keychains",
      slug: "crochet-keychains",
    },
    tags: ["best-seller"],
    materials: ["Cotton yarn", "Keychain ring"],
    dimensions: "5cm diameter",
    features: ["Compact and lightweight", "Vibrant colors", "Durable"],
    isBestSeller: true,
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "tulip-keychain",
    name: "Tulip Keychain",
    slug: "tulip-keychain",
    description:
      "A delicate tulip-shaped keychain in pastel colors. Perfect for spring lovers and flower enthusiasts. Each tulip is handcrafted with attention to detail.",
    shortDescription: "Delicate pastel tulip crochet keychain",
    price: 7.0,
    images: [
      {
        src: "/images/products/tulip-keychain-1.jpg",
        alt: "Tulip crochet keychain front",
      },
    ],
    category: {
      id: "crochet-keychains",
      name: "Keychains",
      slug: "crochet-keychains",
    },
    tags: ["new"],
    materials: ["Cotton yarn", "Keychain ring"],
    dimensions: "6cm height",
    features: ["Pastel color palette", "Lightweight", "Gift-ready"],
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
      "A beautifully crafted candle shaped like a blooming rose. When lit, it creates a warm, romantic ambiance. Made with premium soy wax and infused with a delicate rose fragrance.",
    shortDescription: "Rose-shaped candle with romantic rose scent",
    price: 22.0,
    images: [
      {
        src: "/images/products/rose-candle-1.jpg",
        alt: "Rose flower candle front view",
      },
      {
        src: "/images/products/rose-candle-2.jpg",
        alt: "Rose flower candle lit",
      },
    ],
    category: {
      id: "candles-flower",
      name: "Flower Candles",
      slug: "candles-flower",
    },
    tags: ["featured", "best-seller"],
    materials: ["100% soy wax", "Cotton wick", "Rose essential oil"],
    dimensions: "8cm height, 7cm diameter",
    features: [
      "Hand-poured",
      "Rose scented",
      "Eco-friendly soy wax",
      "Burns up to 20 hours",
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
      "A premium scented candle with calming lavender essential oil. Perfect for relaxation and creating a peaceful atmosphere. Hand-poured with natural soy wax in a reusable glass jar.",
    shortDescription: "Calming lavender soy candle for relaxation",
    price: 18.0,
    compareAtPrice: 24.0,
    images: [
      {
        src: "/images/products/lavender-candle-1.jpg",
        alt: "Lavender scented candle front",
      },
      {
        src: "/images/products/lavender-candle-2.jpg",
        alt: "Lavender scented candle detail",
      },
    ],
    category: {
      id: "candles-scented",
      name: "Scented Candles",
      slug: "candles-scented",
    },
    tags: ["featured"],
    materials: ["Natural soy wax", "Lavender essential oil", "Cotton wick"],
    dimensions: "10cm height, 8cm diameter",
    features: [
      "Calming lavender scent",
      "30+ hour burn time",
      "Reusable glass jar",
      "Eco-friendly",
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
      "A warm and inviting candle with notes of honey and vanilla. Creates a cozy atmosphere perfect for evenings at home. Made with premium soy wax blend.",
    shortDescription: "Warm honey and vanilla scented candle",
    price: 16.0,
    images: [
      {
        src: "/images/products/honey-candle-1.jpg",
        alt: "Honey vanilla candle front",
      },
    ],
    category: {
      id: "candles-scented",
      name: "Scented Candles",
      slug: "candles-scented",
    },
    tags: [],
    materials: ["Soy wax blend", "Honey and vanilla fragrance", "Cotton wick"],
    dimensions: "9cm height, 7cm diameter",
    features: ["Warm cozy scent", "25+ hour burn time", "Hand-poured"],
    rating: 4.7,
    reviewCount: 28,
    inStock: true,
  },
  {
    id: "crochet-heart",
    name: "Crochet Heart - Mini",
    slug: "crochet-heart-mini",
    description:
      "A sweet little crochet heart, perfect as a small token of love or appreciation. Available in multiple colors, this handmade heart can be used as a decoration, keychain, or keepsake.",
    shortDescription: "Sweet mini crochet heart decoration",
    price: 5.0,
    images: [
      { src: "/images/products/heart-1.jpg", alt: "Mini crochet heart red" },
      {
        src: "/images/products/heart-2.jpg",
        alt: "Mini crochet heart collection",
      },
    ],
    category: {
      id: "crochet-home-decor",
      name: "Home Decor",
      slug: "crochet-home-decor",
    },
    tags: ["best-seller"],
    materials: ["Cotton yarn"],
    dimensions: "4cm x 4cm",
    features: ["Multi-purpose", "Available in 8 colors", "Handmade"],
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
  },
  {
    id: "cozy-bookmark",
    name: "Cozy Bookmark Set",
    slug: "cozy-bookmark-set",
    description:
      "A set of 3 charming crochet bookmarks in complementary colors. Each bookmark features a unique pattern and a small decorative tassel. Perfect for book lovers.",
    shortDescription: "Set of 3 charming crochet bookmarks",
    price: 12.0,
    images: [
      { src: "/images/products/bookmark-1.jpg", alt: "Crochet bookmark set" },
      {
        src: "/images/products/bookmark-2.jpg",
        alt: "Crochet bookmark in book",
      },
    ],
    category: {
      id: "crochet-bookmarks",
      name: "Bookmarks",
      slug: "crochet-bookmarks",
    },
    tags: ["new"],
    materials: ["Cotton yarn", "Tassel threads"],
    dimensions: "15cm length",
    features: ["Set of 3", "Unique patterns", "Tassel detail"],
    isNew: true,
    rating: 4.5,
    reviewCount: 18,
    inStock: true,
  },
  {
    id: "wall-hanging",
    name: "Macrame Wall Hanging",
    slug: "macrame-wall-hanging",
    description:
      "An elegant macrame-style wall hanging with intricate knot patterns. Adds a bohemian touch to any room. Handcrafted with natural cotton rope.",
    shortDescription: "Elegant macrame-style wall hanging",
    price: 35.0,
    images: [
      {
        src: "/images/products/wall-hanging-1.jpg",
        alt: "Macrame wall hanging front",
      },
      {
        src: "/images/products/wall-hanging-2.jpg",
        alt: "Macrame wall hanging detail",
      },
    ],
    category: {
      id: "crochet-home-decor",
      name: "Home Decor",
      slug: "crochet-home-decor",
    },
    tags: ["featured"],
    materials: ["Natural cotton rope", "Wooden dowel"],
    dimensions: "40cm width, 60cm length",
    features: ["Bohemian style", "Natural materials", "Handmade"],
    isFeatured: true,
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
  },
  {
    id: "birthday-bundle-essentials",
    name: "Birthday Joy Bundle",
    slug: "birthday-joy-bundle",
    description:
      "The perfect birthday gift set featuring a crochet bouquet, a scented candle, and a personalized greeting card. Everything you need to make someone's birthday special.",
    shortDescription: "Complete birthday gift set with bouquet and candle",
    price: 65.0,
    images: [
      {
        src: "/images/products/birthday-bundle-1.jpg",
        alt: "Birthday gift bundle",
      },
      {
        src: "/images/products/birthday-bundle-2.jpg",
        alt: "Birthday bundle contents",
      },
    ],
    category: {
      id: "bundles-birthday",
      name: "Birthday",
      slug: "bundles-birthday",
    },
    tags: ["featured", "best-seller"],
    materials: ["Various premium materials"],
    features: [
      "Crochet bouquet included",
      "Scented candle included",
      "Personalized greeting card",
      "Gift wrapping included",
    ],
    isFeatured: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
  },
  {
    id: "self-care-bundle",
    name: "Self Care Sunday Bundle",
    slug: "self-care-sunday-bundle",
    description:
      "A relaxing self-care bundle with a lavender candle, a crochet heart, and a cozy bookmark. Perfect for someone who deserves a moment of peace.",
    shortDescription: "Relaxing self-care gift bundle",
    price: 42.0,
    images: [
      {
        src: "/images/products/self-care-bundle-1.jpg",
        alt: "Self care gift bundle",
      },
    ],
    category: {
      id: "bundles-birthday",
      name: "Birthday",
      slug: "bundles-birthday",
    },
    tags: ["new"],
    features: [
      "Lavender candle",
      "Crochet heart",
      "Cozy bookmark",
      "Gift wrapping included",
    ],
    isNew: true,
    rating: 4.8,
    reviewCount: 21,
    inStock: true,
  },
];

export const bundles: Bundle[] = [
  {
    id: "birthday-joy-bundle",
    name: "Birthday Joy Bundle",
    slug: "birthday-joy-bundle",
    description:
      "Celebrate another year of life with this beautifully curated birthday gift set. Includes a stunning crochet bouquet, a fragrant scented candle, and a personalized greeting card.",
    shortDescription: "Complete birthday gift set",
    coverImage: {
      src: "/images/bundles/birthday-bundle.jpg",
      alt: "Birthday Joy Bundle",
    },
    products: [products[0], products[5], products[8]],
    startingPrice: 65.0,
    includesGiftWrapping: true,
    includesGreetingCard: true,
    customizationOptions: [
      "Choose bouquet color",
      "Select candle scent",
      "Add personalized message",
    ],
    occasions: ["birthday"],
    isFeatured: true,
  },
  {
    id: "anniversary-love-bundle",
    name: "Anniversary Love Bundle",
    slug: "anniversary-love-bundle",
    description:
      "Express your enduring love with this romantic anniversary gift set. A red rose bouquet, a romantic candle, and a heartfelt crochet heart.",
    shortDescription: "Romantic anniversary gift set",
    coverImage: {
      src: "/images/bundles/anniversary-bundle.jpg",
      alt: "Anniversary Love Bundle",
    },
    products: [products[0], products[4], products[7]],
    startingPrice: 72.0,
    includesGiftWrapping: true,
    includesGreetingCard: true,
    customizationOptions: ["Choose rose count", "Add a love letter"],
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
      "The crochet bouquet I ordered for my mom's birthday was absolutely stunning! She loved it and couldn't believe it was handmade. The quality is exceptional.",
    date: "2024-12-15",
    product: "Rose Bouquet - Red",
  },
  {
    id: "testimonial-2",
    name: "James K.",
    rating: 5,
    comment:
      "I ordered the anniversary bundle for my wife and she was thrilled. The attention to detail in every piece is remarkable. Will definitely order again!",
    date: "2024-11-28",
    product: "Anniversary Love Bundle",
  },
  {
    id: "testimonial-3",
    name: "Priya R.",
    rating: 5,
    comment:
      "These candles smell incredible and the rose shape is so unique. I've bought several as gifts and everyone has asked where I got them from.",
    date: "2024-12-01",
    product: "Rose Flower Candle",
  },
  {
    id: "testimonial-4",
    name: "Emma L.",
    rating: 4,
    comment:
      "The bookmark set is adorable! I bought it for myself and ended up ordering more as Christmas gifts. The craftsmanship is beautiful.",
    date: "2024-12-10",
    product: "Cozy Bookmark Set",
  },
  {
    id: "testimonial-5",
    name: "David C.",
    rating: 5,
    comment:
      "Ordered corporate gift bundles for our team and they were a huge hit! The quality and presentation were top-notch. Highly recommend for corporate gifting.",
    date: "2024-11-20",
    product: "Birthday Joy Bundle",
  },
];

export const heroBanners: HeroBanner[] = [
  {
    id: "hero-1",
    title: "Handcrafted with Love",
    subtitle:
      "Discover unique handmade gifts that tell a story. Every piece is crafted with care and premium materials.",
    image: "/images/hero/hero-1.jpg",
    ctaText: "Explore Collection",
    ctaLink: "/shop",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How are the products made?",
    answer:
      "All our products are handcrafted with premium materials. Each item is carefully made by hand, ensuring unique quality and attention to detail in every piece.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Can I customize my order?",
    answer:
      "Yes! We offer customization options for most products. You can choose colors, add personalized messages, and request specific arrangements. Contact us with your requirements.",
    category: "Orders",
  },
  {
    id: "faq-3",
    question: "How do I place an inquiry?",
    answer:
      "Simply add products to your inquiry cart and submit it through our contact form or WhatsApp. We'll get back to you with details and pricing within 24 hours.",
    category: "Orders",
  },
  {
    id: "faq-4",
    question: "Do you offer gift wrapping?",
    answer:
      "Yes! All our gift bundles come with premium gift wrapping included. For individual products, you can add gift wrapping during your inquiry.",
    category: "Shipping",
  },
  {
    id: "faq-5",
    question: "What is the turnaround time?",
    answer:
      "Most items are ready within 3-5 business days. Custom orders may take 5-7 business days. We'll provide an estimated timeline when you submit your inquiry.",
    category: "Shipping",
  },
  {
    id: "faq-6",
    question: "Do you ship internationally?",
    answer:
      "Currently, we primarily serve local customers. However, we can discuss international shipping for special orders. Please contact us for details.",
    category: "Shipping",
  },
];
