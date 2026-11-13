export interface TemplateItem {
  id: string;
  slug: string;
  category: 'ecom' | 'local' | 'software' | 'ai';
  categoryLabel: string;
  subCategory: string;
  name: string;
  headline: string;
  description: string;
  previewImage: string;
  gallery: string[];
  industryTag: string;
  badge?: string;
  paletteType: 'ecom' | 'salon' | 'cafe' | 'restaurant' | 'ai' | 'software';
  theme: {
    primary: string;
    accent: string;
    bg: string;
    cardBg: string;
    text: string;
    border: string;
    badgeStyle: string;
  };
  liveUrl: string;
  features: string[];
  customizationOptions: string[];
  pricing: {
    starter: number;
    pro: number;
    enterprise: number;
  };
  featured: boolean;
  rating: number;
  reviewsCount: number;
  turnaroundDays: number;
}

export const CATEGORIES_CONFIG = [
  {
    id: 'all',
    name: 'All Templates',
    count: 56,
    icon: 'GridIcon',
    description: 'Explore our complete library of ready-to-deploy digital products'
  },
  {
    id: 'ecom',
    name: 'E-Commerce Stores',
    count: 20,
    icon: 'CartIcon',
    description: 'High-converting online storefronts with cart, checkout & WhatsApp sales'
  },
  {
    id: 'local',
    name: 'Local Businesses',
    count: 15,
    icon: 'StoreIcon',
    description: 'Tailored websites for salons, cafés, restaurants, gyms & studios'
  },
  {
    id: 'software',
    name: 'Small Business Software',
    count: 8,
    icon: 'TerminalIcon',
    description: 'Interactive QR menus, table reservations, appointment booking & digital cards'
  },
  {
    id: 'ai',
    name: 'AI Solutions & Agents',
    count: 10,
    icon: 'BrainIcon',
    description: 'Autonomous customer agents, voice receptionists, RAG search & web chatbots'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Dining',
    count: 7,
    icon: 'UtensilsIcon',
    description: 'Fine dining menus, bakeries, food trucks & table reservation tools'
  }
];

export const AGENCY_SERVICES = [
  {
    id: 'web-seo',
    title: 'Website Development + SEO Optimization',
    shortDesc: 'Ultra-fast Next.js architecture engineered for Google PageSpeed 95+, schema markup, and first-page local search rankings.',
    icon: 'GlobeIcon',
    badge: 'High Impact',
    deliverables: ['Custom Next.js & Tailwind Code', 'Technical SEO & Meta Tuning', 'Core Web Vitals Optimization', '99.9% Uptime Deployment']
  },
  {
    id: 'ecom-templates',
    title: 'E-Commerce Templates (Multi-Industry)',
    shortDesc: 'Turnkey storefronts with conversion-optimized checkouts, instant WhatsApp orders, variant selectors, and inventory syncing.',
    icon: 'CartIcon',
    badge: 'Popular',
    deliverables: ['Product Grid & Live Search', '1-Click WhatsApp Direct Buy', 'Stripe / Razorpay Integration', 'Responsive Mobile-First UX']
  },
  {
    id: 'local-biz',
    title: 'Local Business Websites',
    shortDesc: 'Designed to dominate local geography for salons, clinics, gyms, and professional services with direct appointment booking.',
    icon: 'StoreIcon',
    badge: 'Turnkey',
    deliverables: ['Google Business Profile Sync', 'Service Menus & Price Lists', 'Click-to-Call / WhatsApp Leads', 'Customer Review Carousel']
  },
  {
    id: 'qr-menu',
    title: 'QR Menu for Restaurants',
    shortDesc: 'Touchless, lightning-fast digital menus that guests open instantly on smartphones with zero app downloads required.',
    icon: 'QrCodeIcon',
    badge: 'Hospitality',
    deliverables: ['Instant Scan PDF/Interactive', 'Dietary & Vegan Tags', 'Real-time Item Availability', 'Table Number Order Routing']
  },
  {
    id: 'table-booking',
    title: 'Table Booking for Cafés',
    shortDesc: 'Frictionless table and booth reservation engines with instant SMS/WhatsApp booking confirmation and party size tracking.',
    icon: 'CalendarIcon',
    badge: 'Real-time',
    deliverables: ['Time Slot Capacity Management', 'Guest Details & Special Requests', 'Automated Reminder Alerts', 'Manager Admin Dashboard']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents for Business',
    shortDesc: 'Autonomous LLM workers that qualify inbound leads, schedule appointments, handle customer FAQs, and automate repetitive workflows.',
    icon: 'BotIcon',
    badge: 'Autonomous',
    deliverables: ['Multi-Channel Integration', 'Custom Persona & Guardrails', 'CRM Sync (HubSpot, Sheets)', 'Analytics & Transcripts']
  },
  {
    id: 'voice-assistant',
    title: 'AI Voice Assistant (Clinics & Services)',
    shortDesc: 'Human-sounding conversational voice AI handling phone inquiries, triage questions, and booking calendars 24/7.',
    icon: 'MicIcon',
    badge: 'Voice AI',
    deliverables: ['Natural Low-Latency Audio', 'Phone Number Integration', 'After-Hours Auto Receptionist', 'Live Call Summaries']
  },
  {
    id: 'rag-system',
    title: 'RAG System (Knowledge Base Chat)',
    shortDesc: 'Grounded vector AI answering customer and staff queries strictly from your internal docs, PDFs, manuals, and Notion wikis.',
    icon: 'CpuIcon',
    badge: 'Enterprise',
    deliverables: ['Private Vector Embeddings', 'Zero Hallucination Grounding', 'PDF / Doc Bulk Importer', 'Source Citation Highlighting']
  },
  {
    id: 'chatbot-integration',
    title: 'Chatbot Integration (Existing Websites)',
    shortDesc: 'Embed our modern conversational chat widget into any existing WordPress, Shopify, Webflow, or custom React website in 5 minutes.',
    icon: 'MessageSquareIcon',
    badge: '5-Min Setup',
    deliverables: ['Embeddable JS Script Tag', 'Custom Brand Color Theming', 'WhatsApp & Web Fallback', 'Lead Collection & Webhooks']
  }
];

export const ALL_TEMPLATES: TemplateItem[] = [
  // -------------------------------------------------------------
  // E-COMMERCE: CLOTHING / FASHION (5)
  // -------------------------------------------------------------
  {
    id: 'ecom-streetwear',
    slug: 'streetwear',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Clothing/Fashion',
    name: 'HYPEX Urban Streetwear',
    headline: 'High-Impact Streetwear & Drop Culture Storefront',
    description: 'Edgy oversized typography, countdown timers for hype drops, lookbook galleries, and instant Instagram & WhatsApp direct purchasing.',
    previewImage: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Urban Streetwear & Apparel',
    badge: 'Trending Drop',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#e11d48',
      bg: '#ffffff',
      cardBg: '#f4f4f5',
      text: '#09090b',
      border: '#e4e4e7',
      badgeStyle: 'bg-rose-50 text-rose-600 border-rose-200'
    },
    liveUrl: '/templates/ecommerce/hypex-streetwear',
    features: ['Hype Drop Countdown Bar', 'Interactive Size & Fit Guide', 'WhatsApp Instant Buy Button', 'High-Res Lookbook Masonry'],
    customizationOptions: ['Custom Drop Scheduling', 'Currency Switcher (USD, EUR, INR)', 'Inventory Alert System', 'TikTok & Instagram Embeds'],
    pricing: { starter: 299, pro: 599, enterprise: 1199 },
    featured: true,
    rating: 4.9,
    reviewsCount: 38,
    turnaroundDays: 2
  },
  {
    id: 'ecom-luxury-fashion',
    slug: 'luxury-fashion',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Clothing/Fashion',
    name: 'AURA Haute Luxury & Atelier',
    headline: 'High-End Minimalist Editorial Fashion Experience',
    description: 'Serif typographic elegance, generous whitespace, bespoke atelier lookbooks, and private VIP client inquiry concierge.',
    previewImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Haute Couture & Designer Wear',
    badge: 'Editorial Pick',
    paletteType: 'ecom',
    theme: {
      primary: '#1c1917',
      accent: '#ca8a04',
      bg: '#fcfbf9',
      cardBg: '#f7f5f0',
      text: '#1c1917',
      border: '#e7e5e4',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    liveUrl: '/templates/ecom/clothing/luxury',
    features: ['Editorial Runway Carousels', 'Concierge VIP Inquiry Form', 'Fabric & Craftsmanship Details', 'Curated Capsule Collections'],
    customizationOptions: ['Private Member Access Gate', 'Bespoke Sizing Request', 'Multi-Language Support', 'Lookbook Video Player'],
    pricing: { starter: 399, pro: 799, enterprise: 1499 },
    featured: false,
    rating: 5.0,
    reviewsCount: 24,
    turnaroundDays: 3
  },
  {
    id: 'ecom-athleisure',
    slug: 'athleisure',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Clothing/Fashion',
    name: 'KINETIX Athletic Performance',
    headline: 'High-Motion Activewear & Gym Apparel Store',
    description: 'Dynamic performance grids, moisture-wicking tech specs, athlete endorsements, and frictionless mobile checkout.',
    previewImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Activewear & Fitness Apparel',
    badge: 'High Conversion',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#2563eb',
      bg: '#ffffff',
      cardBg: '#f8fafc',
      text: '#0f172a',
      border: '#e2e8f0',
      badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    liveUrl: '/templates/ecom/clothing/athleisure',
    features: ['Compression & Fit Indicator', 'Athlete Video Showcases', 'Quick Add-to-Bag Drawers', 'Bundle & Save Discount Logic'],
    customizationOptions: ['Color Swatch Sync', 'Strava/Fitness Club Hook', 'Subscription Replenishment', 'Custom Brand Typography'],
    pricing: { starter: 299, pro: 549, enterprise: 1099 },
    featured: false,
    rating: 4.8,
    reviewsCount: 31,
    turnaroundDays: 2
  },
  {
    id: 'ecom-kids-fashion',
    slug: 'kids-fashion',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Clothing/Fashion',
    name: 'PETIT Wonder Kids & Baby',
    headline: 'Gentle Organic Kids Wear & Nursery Essentials',
    description: 'Pastel warm aesthetics, soft cotton certifications, age-based product filtering, and parent gift registry features.',
    previewImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Children & Infant Clothing',
    badge: 'Organic Certified',
    paletteType: 'ecom',
    theme: {
      primary: '#334155',
      accent: '#f59e0b',
      bg: '#fffdfa',
      cardBg: '#fff8ed',
      text: '#1e293b',
      border: '#fde68a',
      badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    liveUrl: '/templates/ecom/clothing/kids',
    features: ['Age Filter (0-6M, 1-3Y, 4-8Y)', 'GOTS Organic Cotton Badges', 'Gift Wrap & Card Selector', 'WhatsApp Parent Support'],
    customizationOptions: ['Baby Shower Registry Mode', 'Bundle Box Builder', 'Wash Care Video Modals', 'Multi-Currency'],
    pricing: { starter: 279, pro: 499, enterprise: 999 },
    featured: false,
    rating: 4.9,
    reviewsCount: 19,
    turnaroundDays: 2
  },
  {
    id: 'ecom-vintage-apparel',
    slug: 'vintage-apparel',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Clothing/Fashion',
    name: 'RETROVA Archive & Vintage Goods',
    headline: '1-of-1 Curated Thrift & Vintage Marketplace',
    description: 'Nostalgic film-grain styling, decade-based filtering (70s, 80s, 90s, Y2K), one-of-one rarity badges, and condition ratings.',
    previewImage: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Thrift & Vintage Archive',
    badge: '1-of-1 Rare',
    paletteType: 'ecom',
    theme: {
      primary: '#292524',
      accent: '#d97706',
      bg: '#fcfbf7',
      cardBg: '#f5f0e8',
      text: '#292524',
      border: '#e7dfd5',
      badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    liveUrl: '/templates/ecom/clothing/vintage',
    features: ['Single Quantity Sold-Out State', 'Decade & Era Tagging', 'Garment Measurements Blueprint', 'High-Res Texture Zoom'],
    customizationOptions: ['Auction/Bid Flow', 'Vintage Authentication Seal', 'Live Drop Notification SMS', 'Curator Stories Blog'],
    pricing: { starter: 289, pro: 529, enterprise: 1049 },
    featured: false,
    rating: 4.7,
    reviewsCount: 22,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // E-COMMERCE: ELECTRONICS (4)
  // -------------------------------------------------------------
  {
    id: 'ecom-smart-gadgets',
    slug: 'smart-gadgets',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Electronics',
    name: 'NEXUS Smart IoT & Gizmos',
    headline: 'Futuristic Connected Devices & Smart Living Gear',
    description: 'Sleek dark theme, live interactive 360 viewer preview, specs comparison matrix, and fast 1-click cart drawer.',
    previewImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Smart Electronics & Wearables',
    badge: 'Tech Spec Pro',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#06b6d4',
      bg: '#ffffff',
      cardBg: '#f8fafc',
      text: '#09090b',
      border: '#e2e8f0',
      badgeStyle: 'bg-cyan-50 text-cyan-600 border-cyan-200'
    },
    liveUrl: '/templates/ecom/electronics/gadgets',
    features: ['Technical Specs Comparison', 'Interactive 3D Render Slot', 'Compatibility Checker', 'Warranty & Protection Plan Addon'],
    customizationOptions: ['Firmware Update Alerts', 'API Specs Documentation', 'B2B Wholesale Portal', 'Express Checkout Buttons'],
    pricing: { starter: 349, pro: 699, enterprise: 1299 },
    featured: true,
    rating: 4.9,
    reviewsCount: 45,
    turnaroundDays: 2
  },
  {
    id: 'ecom-home-appliances',
    slug: 'home-appliances',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Electronics',
    name: 'PURUS Modern Home Appliances',
    headline: 'High-Efficiency Kitchen & Living Technology',
    description: 'Clean energy rating labels, appliance bundle savings, dimension fitment guide, and instant pin-code delivery checker.',
    previewImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Smart Home & Kitchen Tech',
    badge: 'Energy Star',
    paletteType: 'ecom',
    theme: {
      primary: '#1e293b',
      accent: '#10b981',
      bg: '#ffffff',
      cardBg: '#f8fafc',
      text: '#0f172a',
      border: '#e2e8f0',
      badgeStyle: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    liveUrl: '/templates/ecom/electronics/home-appliances',
    features: ['Pin-code Delivery Estimator', 'Energy Star Efficiency Badges', 'Installation Service Booking', 'Detailed Dimensions Matrix'],
    customizationOptions: ['EMI Financing Calculator', 'Extended Care Warranty', 'Old Appliance Trade-in', 'Smart Home Ecosystem Tags'],
    pricing: { starter: 329, pro: 649, enterprise: 1199 },
    featured: false,
    rating: 4.8,
    reviewsCount: 29,
    turnaroundDays: 2
  },
  {
    id: 'ecom-computer-accessories',
    slug: 'computer-accessories',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Electronics',
    name: 'KEYCRAFT Pro Desks & Peripherals',
    headline: 'Mechanical Keyboards, Desk Mats & Ergonomics',
    description: 'Custom switch sound test players, keycap customizer previews, desk setup inspiration gallery, and enthusiast reviews.',
    previewImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'PC Peripherals & Desk Setup',
    badge: 'Enthusiast Choice',
    paletteType: 'ecom',
    theme: {
      primary: '#0f172a',
      accent: '#6366f1',
      bg: '#ffffff',
      cardBg: '#f8fafc',
      text: '#0f172a',
      border: '#cbd5e1',
      badgeStyle: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    liveUrl: '/templates/ecom/electronics/computer-accessories',
    features: ['Interactive Switch Sound Player', 'Desk Pad Size Visualizer', 'Group Buy & Pre-Order Logic', 'Multi-Switch Configurator'],
    customizationOptions: ['Discord Community Hook', 'Custom Keymap Download', 'RGB Preview Toggle', 'Artisan Keycap Showcases'],
    pricing: { starter: 319, pro: 599, enterprise: 1149 },
    featured: false,
    rating: 4.9,
    reviewsCount: 36,
    turnaroundDays: 2
  },
  {
    id: 'ecom-audiophile',
    slug: 'audiophile',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Electronics',
    name: 'SONIQ Audiophile & Hi-Fi Acoustics',
    headline: 'High-Res Audio Gear, Studio Monitors & DACs',
    description: 'Frequency response graphs, impedance matched specs, studio engineering testimonials, and acoustic room gear packages.',
    previewImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Hi-Fi Audio & Headphones',
    badge: 'Studio Grade',
    paletteType: 'ecom',
    theme: {
      primary: '#18181b',
      accent: '#f97316',
      bg: '#ffffff',
      cardBg: '#fafafa',
      text: '#18181b',
      border: '#e4e4e7',
      badgeStyle: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    liveUrl: '/templates/ecom/electronics/audio',
    features: ['Frequency Response Graph', 'Driver Technology Breakdown', 'Cable & Amp Matching Guide', 'Hi-Res Lossless Audio Badge'],
    customizationOptions: ['Sound Profile Preset Selector', 'Custom Ear-tip Sizing Tool', 'Studio Bundle Packages', 'Burn-In Tracker'],
    pricing: { starter: 339, pro: 649, enterprise: 1249 },
    featured: false,
    rating: 5.0,
    reviewsCount: 28,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // E-COMMERCE: DIGITAL PRODUCTS (4)
  // -------------------------------------------------------------
  {
    id: 'ecom-courses',
    slug: 'courses',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Digital Products',
    name: 'MASTERY Pro Video Academy',
    headline: 'High-Converting Online Cohort & Video Course Platform',
    description: 'Video curriculum breakdown, instructor bio cards, student reviews carousel, lesson previews, and instant LMS access webhook.',
    previewImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'E-Learning & Video Courses',
    badge: 'Best Seller',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#8b5cf6',
      bg: '#ffffff',
      cardBg: '#faf5ff',
      text: '#09090b',
      border: '#e9d5ff',
      badgeStyle: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    liveUrl: '/templates/ecom/digital/courses',
    features: ['Curriculum Accordion with Timers', 'Interactive Lesson Preview Video', 'Certificate of Completion Seal', 'Money-Back Guarantee Callout'],
    customizationOptions: ['Cohort Enrollment Timer', 'Teachable/Thinkific Hook', 'Student Discord Invite', 'Multi-Tier Pricing (Basic/VIP)'],
    pricing: { starter: 299, pro: 599, enterprise: 1199 },
    featured: false,
    rating: 4.9,
    reviewsCount: 52,
    turnaroundDays: 2
  },
  {
    id: 'ecom-ebooks',
    slug: 'ebooks',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Digital Products',
    name: 'LUMEN Digital Books & Guides',
    headline: 'High-Converting Digital E-Book & Guide Checkout',
    description: '3D book mockup renders, chapter sample excerpt reader, instant PDF/EPUB delivery, and reader testimonials.',
    previewImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'E-Books & Author Publications',
    badge: 'Instant Download',
    paletteType: 'ecom',
    theme: {
      primary: '#1c1917',
      accent: '#0d9488',
      bg: '#fcfbf7',
      cardBg: '#f0fdfa',
      text: '#1c1917',
      border: '#ccfbf1',
      badgeStyle: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    liveUrl: '/templates/ecom/digital/ebooks',
    features: ['Interactive 3D Book Cover Turn', 'Free Sample PDF Reader', 'Audiobook Add-on Checkbox', 'Instant Download Link Mailer'],
    customizationOptions: ['Author Signature Addon', 'Goodreads Review Embed', 'Kindle Format Packaging', 'Bundle Multiple Books'],
    pricing: { starter: 249, pro: 449, enterprise: 899 },
    featured: false,
    rating: 4.8,
    reviewsCount: 23,
    turnaroundDays: 1
  },
  {
    id: 'ecom-templates-marketplace',
    slug: 'templates-marketplace',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Digital Products',
    name: 'DEVSTACK UI Design Systems & Kits',
    headline: 'Digital Assets, Figma Kits & Code Templates Store',
    description: 'Component counter badges, live Figma interactive iframe embed, software license selector, and instant zip delivery.',
    previewImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'UI Kits & Developer Assets',
    badge: 'Figma & React',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#ec4899',
      bg: '#ffffff',
      cardBg: '#fdf2f8',
      text: '#09090b',
      border: '#fbcfe8',
      badgeStyle: 'bg-pink-50 text-pink-600 border-pink-200'
    },
    liveUrl: '/templates/ecom/digital/templates',
    features: ['Figma / Code Live Switcher', 'Personal vs Commercial License Tier', 'Changelog History Accordion', 'Instant Github Repo Access'],
    customizationOptions: ['Subscription All-Access Pass', 'Affiliate Referral System', 'Customer Dashboard Area', 'Dark/Light Preview'],
    pricing: { starter: 329, pro: 629, enterprise: 1199 },
    featured: false,
    rating: 5.0,
    reviewsCount: 42,
    turnaroundDays: 2
  },
  {
    id: 'ecom-software-tools',
    slug: 'software-tools',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Digital Products',
    name: 'CLOUDSCALE Micro-SaaS & Developer Tools',
    headline: 'One-Time Payment Software & CLI Tools Store',
    description: 'Lifetime license keys, automated GitHub license verification, feature comparison cards, and developer documentation tab.',
    previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Developer Tools & SaaS',
    badge: 'Lifetime Deal',
    paletteType: 'ecom',
    theme: {
      primary: '#030712',
      accent: '#3b82f6',
      bg: '#ffffff',
      cardBg: '#eff6ff',
      text: '#030712',
      border: '#bfdbfe',
      badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    liveUrl: '/templates/ecom/digital/software',
    features: ['Automated License Key Generator', 'Terminal Copy-to-Clipboard Code', 'Docker & NPM Integration Badges', 'Stripe Customer Portal Hook'],
    customizationOptions: ['Seats & Team License Tiering', 'Self-Hosted vs Cloud Option', 'Roadmap Voting Board', 'API Webhooks'],
    pricing: { starter: 349, pro: 679, enterprise: 1299 },
    featured: false,
    rating: 4.9,
    reviewsCount: 33,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // E-COMMERCE: GENERAL E-COM (7)
  // -------------------------------------------------------------
  {
    id: 'ecom-artisan-grocery',
    slug: 'artisan-grocery',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'General E-Com',
    name: 'TERRA Organic & Artisan Harvest',
    headline: 'Farm-Fresh Organic Grocery & Weekly Farm Basket',
    description: 'Weight-based pricing, farm origin storytelling, weekly subscription basket builder, and local delivery slot selector.',
    previewImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Organic Food & Groceries',
    badge: '100% Farm Fresh',
    paletteType: 'ecom',
    theme: {
      primary: '#14532d',
      accent: '#16a34a',
      bg: '#ffffff',
      cardBg: '#f0fdf4',
      text: '#14532d',
      border: '#bbf7d0',
      badgeStyle: 'bg-green-50 text-green-700 border-green-200'
    },
    liveUrl: '/templates/ecom/general/grocery',
    features: ['Weekly Farm Box Subscription', 'Origin Farm Traceability Map', 'Per-Gram / Kilo Weight Pricing', 'Local Delivery Time Slots'],
    customizationOptions: ['WhatsApp Order Routing', 'Dietary Filter (Keto, Vegan)', 'Vendor Multi-Store Support', 'Refrigerated Cold Chain Badges'],
    pricing: { starter: 289, pro: 549, enterprise: 1099 },
    featured: false,
    rating: 4.8,
    reviewsCount: 35,
    turnaroundDays: 2
  },
  {
    id: 'ecom-clean-beauty',
    slug: 'clean-beauty',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'General E-Com',
    name: 'GLOW Pure Botanical Skincare',
    headline: 'High-Conversion Clean Beauty & Cosmetic Formulary',
    description: 'Ingredient safety transparency rating, skin type diagnosis quiz, before/after slider results, and routine bundle discounts.',
    previewImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Skincare & Cosmetics',
    badge: 'Cruelty-Free',
    paletteType: 'ecom',
    theme: {
      primary: '#4a044e',
      accent: '#db2777',
      bg: '#ffffff',
      cardBg: '#fdf2f8',
      text: '#4a044e',
      border: '#fbcfe8',
      badgeStyle: 'bg-pink-50 text-pink-600 border-pink-200'
    },
    liveUrl: '/templates/ecom/general/beauty',
    features: ['Skin Routine Step 1-2-3 Builder', 'Interactive Before/After Photo Slider', 'Toxic-Free Ingredient Breakdown', 'Dermatologist Verified Badge'],
    customizationOptions: ['Shade Finder Interactive Quiz', 'Sample Mini Box at Checkout', 'Auto-Refill Monthly Subscription', 'Instagram UGC Feed'],
    pricing: { starter: 319, pro: 619, enterprise: 1199 },
    featured: false,
    rating: 5.0,
    reviewsCount: 47,
    turnaroundDays: 2
  },
  {
    id: 'ecom-fine-jewelry',
    slug: 'fine-jewelry',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'General E-Com',
    name: 'ORUM Fine Diamonds & Solitaires',
    headline: 'Prestige Gemstones & Handcrafted Fine Jewelry',
    description: 'Gold purity karats selector, diamond 4Cs clarity visualizer, virtual ring sizer tool, and insured high-value delivery guarantee.',
    previewImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Fine Jewelry & Luxury Watches',
    badge: 'GIA Certified',
    paletteType: 'ecom',
    theme: {
      primary: '#18181b',
      accent: '#ca8a04',
      bg: '#ffffff',
      cardBg: '#fefce8',
      text: '#18181b',
      border: '#fef08a',
      badgeStyle: 'bg-yellow-50 text-yellow-800 border-yellow-200'
    },
    liveUrl: '/templates/ecom/general/jewelry',
    features: ['Diamond 4C Clarity & Cut Tool', 'Virtual Ring Sizer Modal', 'GIA / IGI Certificate Verification', 'Insured White-Glove Shipping'],
    customizationOptions: ['Engraving Customizer Text Box', 'Custom Bridal Set Builder', 'Private Showroom Booking', 'Gold Price Ticker API'],
    pricing: { starter: 399, pro: 799, enterprise: 1499 },
    featured: false,
    rating: 4.9,
    reviewsCount: 26,
    turnaroundDays: 3
  },
  {
    id: 'ecom-pet-supplies',
    slug: 'pet-supplies',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'General E-Com',
    name: 'PAWPAWS Premium Pet Nutrition',
    headline: 'Wholesome Pet Food, Treats & Accessories',
    description: 'Breed & weight portion calculator, recurring treat subscription, vet approval badges, and community pet photo wall.',
    previewImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Pet Food & Canine Care',
    badge: 'Vet Recommended',
    paletteType: 'ecom',
    theme: {
      primary: '#0f172a',
      accent: '#ea580c',
      bg: '#ffffff',
      cardBg: '#fff7ed',
      text: '#0f172a',
      border: '#fed7aa',
      badgeStyle: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    liveUrl: '/templates/ecom/general/pet-supplies',
    features: ['Breed Portion Calculator', 'Auto-Ship Food Subscription', 'Veterinary Nutrition Endorsement', 'Breed & Age Categorization'],
    customizationOptions: ['Personalized Pet Birthday Treats', 'Local Vet Clinic Partner Locator', 'Instagram Pet Gallery Sync', 'WhatsApp Re-Order'],
    pricing: { starter: 279, pro: 499, enterprise: 999 },
    featured: false,
    rating: 4.8,
    reviewsCount: 39,
    turnaroundDays: 2
  },
  {
    id: 'ecom-independent-books',
    slug: 'independent-books',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'General E-Com',
    name: 'PAGEBOUND Independent Bookstore',
    headline: 'Curated Literature, Staff Picks & First Editions',
    description: 'Book club picks of the month, bookseller handwritten notes, genre browsing shelves, and author event calendar.',
    previewImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Books & Curated Literature',
    badge: 'Staff Favorite',
    paletteType: 'ecom',
    theme: {
      primary: '#292524',
      accent: '#854d0e',
      bg: '#fafaf9',
      cardBg: '#fefce8',
      text: '#292524',
      border: '#e7e5e4',
      badgeStyle: 'bg-stone-100 text-stone-800 border-stone-300'
    },
    liveUrl: '/templates/ecom/general/books',
    features: ['Staff Handwritten Recommendation Tags', 'Monthly Book Club Subscription', 'ISBN Fast Lookup', 'Author Reading Event Calendar'],
    customizationOptions: ['Collectable First-Edition Badges', 'Gift Wrapping & Custom Bookmark', 'Audiobook Sample Player', 'Literary Blog'],
    pricing: { starter: 269, pro: 489, enterprise: 949 },
    featured: false,
    rating: 4.9,
    reviewsCount: 31,
    turnaroundDays: 2
  },
  {
    id: 'ecom-educational-toys',
    slug: 'educational-toys',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'General E-Com',
    name: 'KIDDOSTEM Montessori & Wooden Play',
    headline: 'Non-Toxic Wooden Toys & STEM Learning Sets',
    description: 'Age-development milestone filtering, child-safe wood certifications, video unboxing demos, and holiday bundle gifts.',
    previewImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Children Toys & STEM Learning',
    badge: 'Montessori Inspired',
    paletteType: 'ecom',
    theme: {
      primary: '#0f172a',
      accent: '#0284c7',
      bg: '#ffffff',
      cardBg: '#f0f9ff',
      text: '#0f172a',
      border: '#bae6fd',
      badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    liveUrl: '/templates/ecom/general/toys',
    features: ['Development Milestone Filter', 'Non-Toxic FSC Wood Seal', 'Unboxing Demo Videos', 'Classroom & Teacher Bulk Inquiries'],
    customizationOptions: ['Engraved Name Personalization', 'Birthday Gift Wrap', 'Montessori Curriculum Guides', 'WhatsApp Inquiry'],
    pricing: { starter: 289, pro: 519, enterprise: 999 },
    featured: false,
    rating: 4.8,
    reviewsCount: 27,
    turnaroundDays: 2
  },
  {
    id: 'ecom-sports-outdoor',
    slug: 'sports-outdoor',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'General E-Com',
    name: 'ALPINE Wild Peak Outdoor Equipment',
    headline: 'Rugged Camping, Trekking & Alpine Expedition Gear',
    description: 'Weatherproof rating matrix, gear checklist builder, rental vs purchase toggle, and expedition route reviews.',
    previewImage: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Outdoor Adventure & Gear',
    badge: 'Expedition Tested',
    paletteType: 'ecom',
    theme: {
      primary: '#1c1917',
      accent: '#059669',
      bg: '#ffffff',
      cardBg: '#ecfdf5',
      text: '#1c1917',
      border: '#a7f3d0',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    liveUrl: '/templates/ecom/general/sports',
    features: ['Weather & Thermal Ratings Matrix', 'Expedition Checklist Generator', 'Gear Rental vs Buy Switcher', 'Topographic Brand Details'],
    customizationOptions: ['Guided Trek Booking Integration', 'Lifetime Gear Warranty', 'Repair & Recaulk Service Modals', 'Multi-Currency'],
    pricing: { starter: 329, pro: 629, enterprise: 1199 },
    featured: false,
    rating: 4.9,
    reviewsCount: 34,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // LOCAL BUSINESSES: SALONS (3)
  // -------------------------------------------------------------
  {
    id: 'local-unisex-salon',
    slug: 'unisex-salon',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Salons',
    name: 'VELOUR Luxe Hair Studio & Spa',
    headline: 'High-Fashion Hair Styling, Balayage & Keratin Spa',
    description: 'Soft rose gold elegance, stylist lookbook portfolio, service rate menu, and seamless 1-click WhatsApp appointment booking.',
    previewImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Luxury Salon & Hair Spa',
    badge: 'Popular Local',
    paletteType: 'salon',
    theme: {
      primary: '#881337',
      accent: '#f43f5e',
      bg: '#fff1f2',
      cardBg: '#ffffff',
      text: '#4c0519',
      border: '#fecdd3',
      badgeStyle: 'bg-rose-100 text-rose-800 border-rose-300'
    },
    liveUrl: '/templates/local/salons/unisex',
    features: ['Service Menu with Duration & Pricing', 'Master Stylist Portfolio Cards', 'WhatsApp Instant Slot Confirmation', 'Client Transformation Gallery'],
    customizationOptions: ['Bridal Package Specializer', 'Product Upsell At Checkout', 'Google Maps Location & Directions', 'Instagram Feed Auto-Sync'],
    pricing: { starter: 299, pro: 549, enterprise: 999 },
    featured: true,
    rating: 4.9,
    reviewsCount: 41,
    turnaroundDays: 2
  },
  {
    id: 'local-womens-salon',
    slug: 'womens-salon',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Salons',
    name: 'ROSEBLUSH Sanctuary Aesthetic Lounge',
    headline: 'Exclusive Women’s Facial, Nail Art & Lash Bar',
    description: 'Chic blush pink aesthetic, soothing treatments catalog, nail art swatch selector, and private VIP suite reservations.',
    previewImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Aesthetics & Nail Sanctuary',
    badge: 'Women Exclusive',
    paletteType: 'salon',
    theme: {
      primary: '#831843',
      accent: '#ec4899',
      bg: '#fdf2f8',
      cardBg: '#ffffff',
      text: '#500724',
      border: '#fbcfe8',
      badgeStyle: 'bg-pink-100 text-pink-800 border-pink-300'
    },
    liveUrl: '/templates/local/salons/women',
    features: ['Nail Art & Lash Extension Lookbook', 'Facial Glow Treatment Selector', 'Private Room Appointment Booking', 'Member Loyalty Pass Flow'],
    customizationOptions: ['Organic Skincare Retail Shop', 'Seasonal Treatment Packages', 'Gift Voucher Instant Generator', 'Client Video Reviews'],
    pricing: { starter: 289, pro: 519, enterprise: 949 },
    featured: false,
    rating: 5.0,
    reviewsCount: 32,
    turnaroundDays: 2
  },
  {
    id: 'local-heritage-barbershop',
    slug: 'heritage-barbershop',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Salons',
    name: 'IRON & RAZOR Heritage Master Barbers',
    headline: 'Classic Hot Towel Shaves, Fades & Beard Grooming',
    description: 'Vintage vintage leather and timber styling, straight-razor service list, barber chair selection, and walk-in waitlist tracker.',
    previewImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Traditional Barbershop & Grooming',
    badge: 'Craftsman Classic',
    paletteType: 'salon',
    theme: {
      primary: '#27272a',
      accent: '#b45309',
      bg: '#fafaf9',
      cardBg: '#ffffff',
      text: '#18181b',
      border: '#e7e5e4',
      badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    liveUrl: '/templates/local/salons/barbershop',
    features: ['Barber Choice & Chair Scheduling', 'Hot Towel Shave Package Showcase', 'Real-Time Waitlist Queue Display', 'Grooming Pomade & Oil Shop'],
    customizationOptions: ['Monthly Unlimited Haircut Subscription', 'Father & Son Duo Packages', 'SMS Appointment Reminders', 'Spotify Barbershop Playlist Embed'],
    pricing: { starter: 279, pro: 499, enterprise: 899 },
    featured: false,
    rating: 4.8,
    reviewsCount: 37,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // LOCAL BUSINESSES: CAFÉS (3)
  // -------------------------------------------------------------
  {
    id: 'local-specialty-coffee',
    slug: 'specialty-coffee',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Cafés',
    name: 'ORIGIN Single-Origin Micro Roasters',
    headline: 'Third-Wave Coffee Roastery & Neighborhood Espresso Bar',
    description: 'Warm roasted coffee tones, bean origin tasting notes (altitude, wash, varietal), live brew bar menu, and coffee bean retail.',
    previewImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Specialty Coffee & Roastery',
    badge: 'Third-Wave Pick',
    paletteType: 'cafe',
    theme: {
      primary: '#451a03',
      accent: '#b45309',
      bg: '#fefce8',
      cardBg: '#ffffff',
      text: '#451a03',
      border: '#fde68a',
      badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    liveUrl: '/templates/local/origin-coffee',
    features: ['Pour-Over & Espresso Menu with Tasting Notes', 'Whole Bean Retail Shop with Grind Select', 'Café Seating & Wi-Fi Details', 'Cupping Workshop Booking'],
    customizationOptions: ['Coffee Subscription Delivery', 'QR Code Table Orders', 'Roast Schedule Ticker', 'Google Maps Live Hours'],
    pricing: { starter: 299, pro: 549, enterprise: 999 },
    featured: true,
    rating: 5.0,
    reviewsCount: 46,
    turnaroundDays: 2
  },
  {
    id: 'local-bakery-cafe',
    slug: 'bakery-cafe',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Cafés',
    name: 'CRUST & CO. Artisan Sourdough & Pâtisserie',
    headline: 'Fresh Morning Bakes, Viennoiserie & European Breads',
    description: 'Golden buttery aesthetic, daily bake batch timetable, pre-order for weekend croissants, and custom celebration cake orders.',
    previewImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Artisan Bakery & Patisserie',
    badge: 'Baked Fresh Daily',
    paletteType: 'cafe',
    theme: {
      primary: '#78350f',
      accent: '#d97706',
      bg: '#fffbeb',
      cardBg: '#ffffff',
      text: '#451a03',
      border: '#fde68a',
      badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    liveUrl: '/templates/local/cafes/bakery',
    features: ['Daily Bake Schedule & Sold-Out Ticker', 'Custom Cake Pre-Order Configurator', 'Allergen & Gluten-Free Filter', 'WhatsApp Morning Pickup Reserve'],
    customizationOptions: ['Corporate Breakfast Catering Form', 'Sourdough Workshop Signups', 'Local Delivery Radius Filter', 'Instagram Story Integration'],
    pricing: { starter: 289, pro: 529, enterprise: 949 },
    featured: false,
    rating: 4.9,
    reviewsCount: 38,
    turnaroundDays: 2
  },
  {
    id: 'local-brunch-bistro',
    slug: 'brunch-bistro',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Cafés',
    name: 'BOTANICA Garden Brunch & Bistro',
    headline: 'Sunlit Courtyard Brunch, Avo Toasts & Mimosa Cocktails',
    description: 'Lush botanical garden aesthetic, weekend brunch menu, outdoor patio seating reservation, and pet-friendly courtyard details.',
    previewImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'All-Day Brunch & Garden Bistro',
    badge: 'Instagram Hotspot',
    paletteType: 'cafe',
    theme: {
      primary: '#14532d',
      accent: '#15803d',
      bg: '#f0fdf4',
      cardBg: '#ffffff',
      text: '#14532d',
      border: '#bbf7d0',
      badgeStyle: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    liveUrl: '/templates/local/cafes/brunch',
    features: ['Weekend Brunch Menu with High-Res Photos', 'Patio Table Reservation Widget', 'Pet-Friendly & Wi-Fi Amenities Badges', 'Cocktail & Mocktail Happy Hour Specials'],
    customizationOptions: ['Private Event Booking (Showers, Birthdays)', 'Direct Google Reviews Carousel', 'Special Dietary Icons (GF, Vegan)', 'Live Wait Times'],
    pricing: { starter: 299, pro: 549, enterprise: 999 },
    featured: false,
    rating: 4.9,
    reviewsCount: 33,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // LOCAL BUSINESSES: RESTAURANTS (4)
  // -------------------------------------------------------------
  {
    id: 'local-fine-dining',
    slug: 'fine-dining',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Restaurants',
    name: 'L’ETOILE Chef’s Tasting Table',
    headline: 'Michelin-Style Degustation & Wine Pairing Journey',
    description: 'Dramatic obsidian and deep burgundy styling, seasonal culinary stories, sommelier pairings, and formal reservation engine.',
    previewImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Fine Dining & Gastronomy',
    badge: 'Sommelier Choice',
    paletteType: 'restaurant',
    theme: {
      primary: '#450a0a',
      accent: '#dc2626',
      bg: '#0f0f12',
      cardBg: '#18181b',
      text: '#fafafa',
      border: '#7f1d1d',
      badgeStyle: 'bg-red-950 text-red-400 border-red-800'
    },
    liveUrl: '/templates/hospitality/letoile-fine-dining',
    features: ['7-Course Tasting Menu Presentation', 'Cellar Wine Pairing Recommendations', 'Dress Code & Reservation Deposit Policy', 'Private Dining Room Inquiries'],
    customizationOptions: ['OpenTable / SevenRooms Integration', 'Dietary Restrictions Pre-Screen', 'Chef Biography & Accolades', 'Gift Voucher Purchase'],
    pricing: { starter: 399, pro: 799, enterprise: 1499 },
    featured: true,
    rating: 5.0,
    reviewsCount: 50,
    turnaroundDays: 3
  },
  {
    id: 'local-gourmet-fastfood',
    slug: 'gourmet-fastfood',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Restaurants',
    name: 'STACKS Smash Burgers & Craft Shakes',
    headline: 'High-Energy Gourmet Burgers, Loaded Fries & Shakes',
    description: 'Bold urban color contrast, mouthwatering burger stacks photography, instant takeaway pickup ordering, and combo deals.',
    previewImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Fast Casual Burgers & Wings',
    badge: 'Street Hit',
    paletteType: 'restaurant',
    theme: {
      primary: '#7f1d1d',
      accent: '#ea580c',
      bg: '#1c1917',
      cardBg: '#292524',
      text: '#fafaf9',
      border: '#44403c',
      badgeStyle: 'bg-orange-950 text-orange-400 border-orange-800'
    },
    liveUrl: '/templates/local/restaurants/fastfood',
    features: ['Burger Modifier Customizer (Cheese, Patties, Sauce)', 'Pickup In 15 Mins Fast Order', 'Spice Level & Secret Sauce Badges', 'Combo Meal Builder'],
    customizationOptions: ['UberEats / DoorDash Direct Deep Links', 'Digital Loyalty Stamp Card', 'Late Night Hours Alert', 'Merch Store Add-on'],
    pricing: { starter: 289, pro: 529, enterprise: 999 },
    featured: false,
    rating: 4.8,
    reviewsCount: 44,
    turnaroundDays: 2
  },
  {
    id: 'local-royal-indian',
    slug: 'royal-indian',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Restaurants',
    name: 'RIWAAYAT Royal Awadhi & Tandoor',
    headline: 'Authentic Heritage Biryanis, Slow-Cooked Curries & Kebabs',
    description: 'Regal saffron gold and royal ruby aesthetics, spice profile indicators, thali banquet packages, and catering event inquiries.',
    previewImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Royal Indian Cuisine & Tandoor',
    badge: 'Heritage Flavors',
    paletteType: 'restaurant',
    theme: {
      primary: '#701a75',
      accent: '#d97706',
      bg: '#18181b',
      cardBg: '#27272a',
      text: '#fafafa',
      border: '#52525b',
      badgeStyle: 'bg-amber-950 text-amber-400 border-amber-800'
    },
    liveUrl: '/templates/local/restaurants/indian',
    features: ['Dum Biryani & Curry Rich Menu', 'Spice Meter (Mild, Medium, Desi Hot)', 'Family Feast & Party Pack Bundles', 'WhatsApp Instant Takeaway Orders'],
    customizationOptions: ['Wedding & Corporate Catering Quote Engine', 'Halal & Jain Food Badges', 'Table Reservation with Family Size', 'Chef Special Video Story'],
    pricing: { starter: 319, pro: 599, enterprise: 1099 },
    featured: false,
    rating: 4.9,
    reviewsCount: 39,
    turnaroundDays: 2
  },
  {
    id: 'local-woodfired-pizza',
    slug: 'woodfired-pizza',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Restaurants',
    name: 'FORNO NOVO Neapolitan Trattoria',
    headline: '48-Hour Fermented Woodfired Pizza & Fresh Pasta',
    description: 'Rustic Italian trattoria warmth, imported San Marzano ingredients showcase, pizza builder, and wine-by-the-glass menu.',
    previewImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Woodfired Pizza & Italian',
    badge: 'Neapolitan Certified',
    paletteType: 'restaurant',
    theme: {
      primary: '#991b1b',
      accent: '#15803d',
      bg: '#1c1917',
      cardBg: '#292524',
      text: '#fafaf9',
      border: '#44403c',
      badgeStyle: 'bg-red-950 text-red-400 border-red-800'
    },
    liveUrl: '/templates/local/restaurants/pizza',
    features: ['Woodfired Pizza Crust Details & Toppings', 'Fresh Hand-Rolled Pasta Menu', 'Table Booking for Date Nights & Groups', 'Direct WhatsApp Delivery Service'],
    customizationOptions: ['Build Your Own Pizza Step-by-Step', 'Gluten-Free Crust Upgrade', 'Gelato Dessert Upsells', 'Italian Spritz Bar Cocktails'],
    pricing: { starter: 299, pro: 549, enterprise: 999 },
    featured: false,
    rating: 4.9,
    reviewsCount: 36,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // LOCAL BUSINESSES: FOOD CARTS & STREETS (3)
  // -------------------------------------------------------------
  {
    id: 'local-street-food',
    slug: 'street-food',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Food Carts/Streets',
    name: 'BAO STREET Asian Fusion Truck',
    headline: 'Steamed Bao Buns, Dim Sum & Night Market Street Eats',
    description: 'Vibrant neon street night market vibes, live truck tracker schedule, limited batch countdowns, and quick QR payment flow.',
    previewImage: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Food Truck & Night Market',
    badge: 'Live Truck Tracker',
    paletteType: 'restaurant',
    theme: {
      primary: '#991b1b',
      accent: '#eab308',
      bg: '#09090b',
      cardBg: '#18181b',
      text: '#fafafa',
      border: '#3f3f46',
      badgeStyle: 'bg-yellow-950 text-yellow-400 border-yellow-800'
    },
    liveUrl: '/templates/local/street/food-truck',
    features: ['Weekly Truck Location Calendar', 'Quick Tap-to-Order Counter Flow', 'Popular Street Combo Deals', 'Instagram Daily Location Story'],
    customizationOptions: ['Event Catering Inquiry', 'Live Queue Alert SMS', 'Merch & Sauce Bottles', 'Dietary Tagging'],
    pricing: { starter: 249, pro: 449, enterprise: 849 },
    featured: false,
    rating: 4.8,
    reviewsCount: 29,
    turnaroundDays: 1
  },
  {
    id: 'local-coldpressed-juice',
    slug: 'coldpressed-juice',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Food Carts/Streets',
    name: 'SQUEEZE Raw Cold-Pressed Elixirs',
    headline: 'Detox Juices, Superfood Smoothies & Acai Bowls',
    description: 'Refreshing citrus aesthetic, cleanse subscription programs, nutritional wellness specs, and express pickup locker orders.',
    previewImage: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Juice Bar & Health Elixirs',
    badge: '100% Raw',
    paletteType: 'ecom',
    theme: {
      primary: '#15803d',
      accent: '#ea580c',
      bg: '#ffffff',
      cardBg: '#f0fdf4',
      text: '#14532d',
      border: '#bbf7d0',
      badgeStyle: 'bg-green-50 text-green-700 border-green-200'
    },
    liveUrl: '/templates/local/street/juice-bar',
    features: ['3-Day Detox Cleanse Program Builder', 'Superfood Ingredient Breakdown', 'Acai Bowl Customizer', 'WhatsApp Morning Subscription Order'],
    customizationOptions: ['Gym Partner Discount System', 'Cold-Storage Bottle Return Deposit', 'Nutritionist Consultation Slot', 'Eco Packaging Badges'],
    pricing: { starter: 269, pro: 489, enterprise: 899 },
    featured: false,
    rating: 4.9,
    reviewsCount: 25,
    turnaroundDays: 2
  },
  {
    id: 'local-dessert-cart',
    slug: 'dessert-cart',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Food Carts/Streets',
    name: 'CHURRO LAB Artisan Cinnamon & Gelato Truck',
    headline: 'Hot Crispy Churros, Belgian Chocolate Dips & Gelato',
    description: 'Playful warm sugar-cinnamon branding, dipping sauce customizer, pop-up catering requests, and live social media buzz.',
    previewImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Dessert Cart & Sweets',
    badge: 'Sweet Sensation',
    paletteType: 'cafe',
    theme: {
      primary: '#78350f',
      accent: '#f59e0b',
      bg: '#fffbeb',
      cardBg: '#ffffff',
      text: '#451a03',
      border: '#fde68a',
      badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    liveUrl: '/templates/local/street/dessert-cart',
    features: ['Dip & Topping Interactive Customizer', 'Party & Wedding Live Station Booking', 'Pop-Up Weekend Schedule', 'Instant WhatsApp Order'],
    customizationOptions: ['Custom Churro Box Branding', 'Gelato Flavor Rotation', 'Party Favors Packing', 'Instagram Selfie Tag Wall'],
    pricing: { starter: 259, pro: 469, enterprise: 879 },
    featured: false,
    rating: 4.8,
    reviewsCount: 22,
    turnaroundDays: 1
  },

  // -------------------------------------------------------------
  // LOCAL BUSINESSES: OTHER (2)
  // -------------------------------------------------------------
  {
    id: 'local-gym-fitness',
    slug: 'gym-fitness',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Other',
    name: 'FORGE High-Intensity Strength & Hyrox',
    headline: 'High-Performance Functional Fitness & Hybrid Athletics',
    description: 'High-contrast grit and steel aesthetic, class timetable booking, coach roster, transformation success stories, and free pass form.',
    previewImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Gym & Functional Fitness',
    badge: 'Strength Club',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#e11d48',
      bg: '#0c0a09',
      cardBg: '#1c1917',
      text: '#fafaf9',
      border: '#292524',
      badgeStyle: 'bg-rose-950 text-rose-400 border-rose-800'
    },
    liveUrl: '/templates/local/other/gym',
    features: ['Weekly Group Class Scheduler', 'Free 1-Day Trial Pass Form', 'Personal Trainer Bios & Specialty', 'Member PR & Transformation Wall'],
    customizationOptions: ['Hyrox Official Training Affiliate', 'Nutrition Plan PDF Generator', 'Member Access App Links', 'Merch & Supplement Shop'],
    pricing: { starter: 299, pro: 549, enterprise: 999 },
    featured: false,
    rating: 4.9,
    reviewsCount: 48,
    turnaroundDays: 2
  },
  {
    id: 'local-photography-studio',
    slug: 'photography-studio',
    category: 'local',
    categoryLabel: 'Local Businesses',
    subCategory: 'Other',
    name: 'MONOCHROME Editorial Portrait & Film Studio',
    headline: 'High-Fashion Portraiture, Commercial & Campaign Studio',
    description: 'Fine art gallery layout, full-bleed portfolio viewing, studio space rental rates, and shoot inquiry questionnaires.',
    previewImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Commercial & Portrait Photography',
    badge: 'Art Director Choice',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#71717a',
      bg: '#ffffff',
      cardBg: '#fafafa',
      text: '#09090b',
      border: '#e4e4e7',
      badgeStyle: 'bg-zinc-100 text-zinc-800 border-zinc-300'
    },
    liveUrl: '/templates/local/other/photography',
    features: ['Lightbox Fullscreen Image Viewer', 'Client Private Proofing Gallery', 'Session Pricing & Deliverable Cards', 'Studio Equipment & Cyc Wall Specs'],
    customizationOptions: ['Wedding & Commercial Inquiries Flow', 'Print Store Sales Integration', 'Direct Calendar Availability Booking', 'Instagram Grid Integration'],
    pricing: { starter: 329, pro: 599, enterprise: 1149 },
    featured: false,
    rating: 5.0,
    reviewsCount: 30,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // SMALL BUSINESS SOFTWARE: QR MENU (3)
  // -------------------------------------------------------------
  {
    id: 'software-qr-restaurant',
    slug: 'qr-menu-restaurant',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'QR Menu',
    name: 'TABLEPULSE Interactive Dine-In Ordering',
    headline: 'Instant Mobile QR Menu with Real-Time Kitchen Routing',
    description: 'Zero app download required, instant category filtering, chef specials badge, order notes, and split-bill calculation.',
    previewImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Restaurant Digital QR Tech',
    badge: 'Zero Hardware',
    paletteType: 'software',
    theme: {
      primary: '#0284c7',
      accent: '#2563eb',
      bg: '#f8fafc',
      cardBg: '#ffffff',
      text: '#0f172a',
      border: '#e2e8f0',
      badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    liveUrl: '/templates/software/tablepulse-qr',
    features: ['Instant Mobile Scan Loading (<1s)', 'Dietary & Allergen Instant Filters', 'Table Number Order Routing', 'Waiter Call Button'],
    customizationOptions: ['Kitchen Printer / POS Webhook', 'Multiple Menu Schedules (Lunch/Dinner)', 'Direct Tip Selector', 'Branded Table Standee Generator'],
    pricing: { starter: 199, pro: 399, enterprise: 799 },
    featured: true,
    rating: 4.9,
    reviewsCount: 56,
    turnaroundDays: 1
  },
  {
    id: 'software-qr-cafe',
    slug: 'qr-menu-cafe',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'QR Menu',
    name: 'TAPBREW Quick Counter & Express Barista QR',
    headline: 'Fast Countertop & Tabletop QR Ordering for Busy Cafés',
    description: 'Milk customization (oat, almond), syrup pumps selector, pastry upsell popups, and order ready SMS buzzers.',
    previewImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Café & Quick-Serve QR',
    badge: 'Speed of Service',
    paletteType: 'software',
    theme: {
      primary: '#0369a1',
      accent: '#0284c7',
      bg: '#f8fafc',
      cardBg: '#ffffff',
      text: '#0f172a',
      border: '#cbd5e1',
      badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    liveUrl: '/templates/software/qr/cafe',
    features: ['Drink Customizer (Milk, Syrups, Ice)', 'Fast UPI & Apple Pay Integration', 'Pastry Counter Real-Time Stock Count', 'Order Number Ticket Display'],
    customizationOptions: ['Morning Coffee Loyalty Stamps', 'Peak Hour Queue Reduction Mode', 'Barista Screen Order Feed', 'Multi-Register Support'],
    pricing: { starter: 189, pro: 369, enterprise: 749 },
    featured: false,
    rating: 4.8,
    reviewsCount: 34,
    turnaroundDays: 1
  },
  {
    id: 'software-qr-bar',
    slug: 'qr-menu-bar',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'QR Menu',
    name: 'NEON POUR Rooftop Cocktails Visual Card',
    headline: 'Dark Mode High-Contrast QR Drink Card & Bottle Service',
    description: 'Cocktail flavour profiles (sweet, smoky, sour), spirit brands, VIP bottle service reservation, and night mode readability.',
    previewImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Rooftop Bar & Lounge QR',
    badge: 'Night Mode',
    paletteType: 'software',
    theme: {
      primary: '#1e1b4b',
      accent: '#6366f1',
      bg: '#0f172a',
      cardBg: '#1e293b',
      text: '#f8fafc',
      border: '#334155',
      badgeStyle: 'bg-indigo-950 text-indigo-400 border-indigo-800'
    },
    liveUrl: '/templates/software/qr/bar',
    features: ['Cocktail Flavor Wheel Badges', 'VIP Bottle Service Inquiry', 'Happy Hour Auto-Pricing Scheduler', 'Dark Lounge Optimized Contrast'],
    customizationOptions: ['DJ Song Request Tip Jar', 'Guest Age Verification Disclaimer', 'Bar Tab Linking', 'Special Event Flyers'],
    pricing: { starter: 219, pro: 419, enterprise: 829 },
    featured: false,
    rating: 4.9,
    reviewsCount: 27,
    turnaroundDays: 1
  },

  // -------------------------------------------------------------
  // SMALL BUSINESS SOFTWARE: TABLE BOOKING (2)
  // -------------------------------------------------------------
  {
    id: 'software-table-booking-restaurant',
    slug: 'table-booking-restaurant',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'Table Booking',
    name: 'RESERVIO Multi-Zone Restaurant Reservation',
    headline: 'Smart Table Reservation Engine with SMS Confirmation',
    description: 'Indoor, patio, and private room dining zone selection, automated table allocation, waitlist queue, and party size management.',
    previewImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Restaurant Reservation Tech',
    badge: 'Smart Allocation',
    paletteType: 'software',
    theme: {
      primary: '#0369a1',
      accent: '#0ea5e9',
      bg: '#f8fafc',
      cardBg: '#ffffff',
      text: '#0f172a',
      border: '#e2e8f0',
      badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    liveUrl: '/templates/software/booking/table-restaurant',
    features: ['Multi-Zone Floorplan Table Selection', 'Automatic 2-Hour Slot Pacing', 'WhatsApp & SMS Instant Confirmation', 'Special Occasion (Birthday/Anniversary) Field'],
    customizationOptions: ['Credit Card Hold for No-Show Prevention', 'Hostess Tablet Live Check-In View', 'Guest Dining History & Preferences', 'Google Reserve Sync'],
    pricing: { starter: 249, pro: 479, enterprise: 899 },
    featured: false,
    rating: 4.9,
    reviewsCount: 39,
    turnaroundDays: 2
  },
  {
    id: 'software-table-booking-cafe',
    slug: 'table-booking-cafe',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'Table Booking',
    name: 'SEATSTUDIO Co-Working Booth & Desk Reserve',
    headline: 'Hourly Desk & Quiet Booth Booking for Work Cafés',
    description: 'Wi-Fi speed indicator, power outlet availability per seat, hourly and daily pass ticketing, and instant calendar booking.',
    previewImage: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Work Café & Co-Working Hub',
    badge: 'Remote Work Ready',
    paletteType: 'software',
    theme: {
      primary: '#0284c7',
      accent: '#06b6d4',
      bg: '#f0f9ff',
      cardBg: '#ffffff',
      text: '#0c4a6e',
      border: '#bae6fd',
      badgeStyle: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    liveUrl: '/templates/software/booking/table-cafe',
    features: ['Hourly & Full-Day Pass Options', 'Power Outlet & Ergonomic Chair Tagging', 'Free Coffee Voucher Included with Pass', 'Automated Check-in Pin'],
    customizationOptions: ['Conference Room Hourly Addon', 'Monthly Remote Worker Pass', 'Printer Credits Topup', 'Community Member Directory'],
    pricing: { starter: 229, pro: 429, enterprise: 849 },
    featured: false,
    rating: 4.8,
    reviewsCount: 28,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // SMALL BUSINESS SOFTWARE: APPOINTMENT BOOKING (2)
  // -------------------------------------------------------------
  {
    id: 'software-booking-salon',
    slug: 'booking-salon',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'Appointment Booking',
    name: 'CHAIRSYNC Stylist Slot & Calendar Booking',
    headline: 'Effortless Salon Stylist Calendar & Service Booking',
    description: 'Stylist specialty matching, service duration calculation, automated deposit collection, and two-way Google Calendar sync.',
    previewImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Salon & Spa Appointment SaaS',
    badge: 'Two-Way Sync',
    paletteType: 'software',
    theme: {
      primary: '#0284c7',
      accent: '#ec4899',
      bg: '#f8fafc',
      cardBg: '#ffffff',
      text: '#0f172a',
      border: '#e2e8f0',
      badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    liveUrl: '/templates/software/booking/salon',
    features: ['Real-Time Stylist Availability Calendar', 'Multi-Service Combo Stacking (Cut + Color)', 'WhatsApp Automated 24h & 2h Reminders', 'Cancellation & Reschedule Self-Service'],
    customizationOptions: ['Deposit / Full Payment Collection', 'Client Hair History Notes', 'Staff Commission Tracking', 'VIP Client Membership Perks'],
    pricing: { starter: 269, pro: 499, enterprise: 949 },
    featured: false,
    rating: 4.9,
    reviewsCount: 37,
    turnaroundDays: 2
  },
  {
    id: 'software-booking-clinic',
    slug: 'booking-clinic',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'Appointment Booking',
    name: 'MEDISLOT Patient Care & Clinical Intake',
    headline: 'HIPAA-Ready Doctor Appointment & Patient Intake Engine',
    description: 'Medical doctor specialization filter, telemedicine video slot integration, new patient medical intake form, and insurance verification.',
    previewImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Medical Clinic & Dental Intake',
    badge: 'HIPAA Compliant',
    paletteType: 'software',
    theme: {
      primary: '#0369a1',
      accent: '#0d9488',
      bg: '#f0fdfa',
      cardBg: '#ffffff',
      text: '#134e4a',
      border: '#99f6e4',
      badgeStyle: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    liveUrl: '/templates/software/booking/clinic',
    features: ['Doctor Specialty & Clinic Location Filter', 'Digital Medical History Intake Form', 'In-Person or Video Telehealth Choice', 'SMS Confirmation with Google Maps Link'],
    customizationOptions: ['Insurance Carrier Pre-Check', 'Prescription Refill Request Hook', 'Emergency On-Call Dispatch', 'Multilingual Patient Support'],
    pricing: { starter: 349, pro: 679, enterprise: 1299 },
    featured: false,
    rating: 5.0,
    reviewsCount: 31,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // SMALL BUSINESS SOFTWARE: DIGITAL BUSINESS CARD (1)
  // -------------------------------------------------------------
  {
    id: 'software-digital-business-card',
    slug: 'digital-business-card',
    category: 'software',
    categoryLabel: 'Small Business Software',
    subCategory: 'Digital Business Card',
    name: 'TAPCONNECT Executive NFC Profile & vCard',
    headline: '1-Tap Smartphone NFC Digital Business Card & Lead Capture',
    description: 'Instant save-to-contacts vCard download, interactive portfolio links, meeting booking button, and lead capture form.',
    previewImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Executive NFC & Digital Identity',
    badge: '1-Tap Tap-to-Phone',
    paletteType: 'software',
    theme: {
      primary: '#09090b',
      accent: '#2563eb',
      bg: '#ffffff',
      cardBg: '#f8fafc',
      text: '#09090b',
      border: '#e2e8f0',
      badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    liveUrl: '/templates/software/cards/digital-card',
    features: ['1-Tap "Save Contact (.vcf)" Button', 'Social & Portfolio Fast Hub', 'Reciprocal Lead Exchange Form', 'Custom QR Code on Lock Screen'],
    customizationOptions: ['Corporate Team Bulk Management', 'NFC Physical Card Fulfillment', 'HubSpot & Salesforce Webhook', 'Custom Domain Name (e.g. card.yourname.com)'],
    pricing: { starter: 149, pro: 299, enterprise: 599 },
    featured: false,
    rating: 4.9,
    reviewsCount: 44,
    turnaroundDays: 1
  },

  // -------------------------------------------------------------
  // AI SOLUTIONS: AI AGENT DASHBOARD (3)
  // -------------------------------------------------------------
  {
    id: 'ai-agent-customer-support',
    slug: 'agent-customer-support',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'AI Agent Dashboard',
    name: 'OMNIAGENT 24/7 Autonomous Customer Support',
    headline: 'Multi-Channel AI Support Agent Resolving 80%+ Tickets',
    description: 'Instant ticket resolution, order tracking lookup, refund policy reasoning, multilingual chat, and smooth human agent handoff.',
    previewImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Autonomous Customer Support AI',
    badge: '82% Auto-Resolution',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#10b981',
      bg: '#090a0f',
      cardBg: '#12141c',
      text: '#f4f4f5',
      border: '#1e293b',
      badgeStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30'
    },
    liveUrl: '/templates/ai/omniagent-support',
    features: ['Omnichannel Web, WhatsApp & Email Routing', 'Real-Time Order Tracking & Shopify API Sync', 'Zero-Latency Sentiment Analysis', 'Seamless Human Escalation Protocol'],
    customizationOptions: ['Brand Tone Fine-Tuning (Friendly, Professional)', 'Zendesk & Freshdesk Webhook', 'CSAT Instant Rating Prompt', 'Knowledge Base Self-Learning'],
    pricing: { starter: 499, pro: 999, enterprise: 1999 },
    featured: true,
    rating: 5.0,
    reviewsCount: 62,
    turnaroundDays: 2
  },
  {
    id: 'ai-agent-sales-lead',
    slug: 'agent-sales-lead',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'AI Agent Dashboard',
    name: 'PIPELINEAI Inbound B2B Lead Qualifier',
    headline: 'Autonomous Sales Agent That Researches & Books Meetings',
    description: 'B2B visitor identification, automated BANT qualification questioning, calendar booking, and automatic CRM record enrichment.',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'B2B Inbound Sales AI',
    badge: '3.4x Pipeline Lift',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#6366f1',
      bg: '#0a0b12',
      cardBg: '#131524',
      text: '#f8fafc',
      border: '#1f2438',
      badgeStyle: 'bg-indigo-950/80 text-indigo-400 border-indigo-500/30'
    },
    liveUrl: '/templates/ai/agents/sales',
    features: ['Instant BANT Lead Qualification Flow', 'Calendly & Google Calendar Live Embed', 'LinkedIn & Clearbit Company Enrichment', 'Slack Notification on VIP Lead'],
    customizationOptions: ['Custom Objection Handling Scripts', 'HubSpot & Pipedrive Bi-directional Sync', 'Multi-Rep Round Robin Routing', 'Dynamic Demo Video Dispatch'],
    pricing: { starter: 549, pro: 1099, enterprise: 2199 },
    featured: false,
    rating: 4.9,
    reviewsCount: 38,
    turnaroundDays: 2
  },
  {
    id: 'ai-agent-internal-ops',
    slug: 'agent-internal-ops',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'AI Agent Dashboard',
    name: 'AUTOWORK Multi-Agent ERP & SOP Automation',
    headline: 'Autonomous Internal Operations & Invoice Verification Agent',
    description: 'Document extraction, receipt reconciliation, multi-system data entry, automated employee onboarding, and error anomaly detection.',
    previewImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Internal Ops & Workflow AI',
    badge: 'Enterprise Automation',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#06b6d4',
      bg: '#080c10',
      cardBg: '#101722',
      text: '#f1f5f9',
      border: '#1b2838',
      badgeStyle: 'bg-cyan-950/80 text-cyan-400 border-cyan-500/30'
    },
    liveUrl: '/templates/ai/agents/ops',
    features: ['PDF Invoice & Receipt Auto-OCR', 'Google Sheets / SQL Live Auto-Populate', 'Internal Slack / Teams Bot Commands', 'Audit Trail with Confidence Scores'],
    customizationOptions: ['QuickBooks & Xero Sync', 'Contract Clause Risk Highlighting', 'Custom Human Approval Triggers', 'Multi-Department Permissions'],
    pricing: { starter: 599, pro: 1199, enterprise: 2399 },
    featured: false,
    rating: 4.9,
    reviewsCount: 29,
    turnaroundDays: 3
  },

  // -------------------------------------------------------------
  // AI SOLUTIONS: AI VOICE ASSISTANT (2)
  // -------------------------------------------------------------
  {
    id: 'ai-voice-clinic-reception',
    slug: 'voice-clinic-reception',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'AI Voice Assistant',
    name: 'CLINICVOICE Patient Inbound Triage AI',
    headline: 'Ultra-Natural Voice AI Handling Clinic Phone Calls 24/7',
    description: 'Zero wait times, human-like warm empathy, medical inquiry triage, doctor schedule booking, and emergency protocol escalation.',
    previewImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Medical Voice AI Receptionist',
    badge: 'Sub-600ms Latency',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#14b8a6',
      bg: '#080f12',
      cardBg: '#0f1c22',
      text: '#f0fdfa',
      border: '#15313d',
      badgeStyle: 'bg-teal-950/80 text-teal-400 border-teal-500/30'
    },
    liveUrl: '/templates/ai/voice/clinic',
    features: ['Low Latency Conversational Voice (<600ms)', 'Inbound Phone Line Integration (Twilio / Plivo)', 'Appointment Booking over Phone Call', 'Live Call Audio Recording & Transcript'],
    customizationOptions: ['Custom Voice Accent & Persona (Female/Male)', 'After-Hours Emergency Triage Rules', 'Doctor Calender Direct Booking', 'Multilingual Caller Support'],
    pricing: { starter: 599, pro: 1199, enterprise: 2499 },
    featured: false,
    rating: 5.0,
    reviewsCount: 36,
    turnaroundDays: 3
  },
  {
    id: 'ai-voice-business-phone',
    slug: 'voice-business-phone',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'AI Voice Assistant',
    name: 'CALLPULSE Inbound Sales & Appointment Dispatch',
    headline: 'Never Miss a Phone Lead: 24/7 AI Voice Phone Agent',
    description: 'Answers customer calls in 1 ring, gives price quotes, captures lead details, and texts the caller an instant booking link.',
    previewImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Business Phone & Dispatch Voice AI',
    badge: 'Zero Missed Calls',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#f59e0b',
      bg: '#0c0a08',
      cardBg: '#18140e',
      text: '#fafaf9',
      border: '#2c2214',
      badgeStyle: 'bg-amber-950/80 text-amber-400 border-amber-500/30'
    },
    liveUrl: '/templates/ai/voice/business',
    features: ['Answers Within 2 Rings Every Time', 'Automated SMS Confirmation Sent During Call', 'Local Virtual Business Phone Number', 'Call Audio Player & Sentiment Tag'],
    customizationOptions: ['Live Call Transfer to Owner Phone', 'Custom Business FAQ Scripting', 'Voicemail Summarizer & Action Items', 'CRM Instant Lead Creation'],
    pricing: { starter: 549, pro: 1049, enterprise: 2199 },
    featured: false,
    rating: 4.9,
    reviewsCount: 41,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // AI SOLUTIONS: RAG KNOWLEDGE BASE (2)
  // -------------------------------------------------------------
  {
    id: 'ai-rag-product-docs',
    slug: 'rag-product-docs',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'RAG Knowledge Base',
    name: 'DOCUMIND Vector RAG Enterprise Tech Docs',
    headline: 'Grounded AI Search & Chat Across All Product Manuals & Code',
    description: 'Embeds your entire technical documentation, OpenAPI specs, and user manuals with verifiable page citations and exact code snippets.',
    previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Enterprise Documentation RAG',
    badge: 'Zero Hallucinations',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#8b5cf6',
      bg: '#0a0912',
      cardBg: '#131124',
      text: '#f5f3ff',
      border: '#241e45',
      badgeStyle: 'bg-purple-950/80 text-purple-400 border-purple-500/30'
    },
    liveUrl: '/templates/ai/rag/product-docs',
    features: ['Exact Citation Page & Paragraph Highlighting', 'Hybrid Vector + Full-Text Keyword Search', 'Drag-and-Drop PDF, Markdown & Notion Sync', 'Direct Copy Code Snippet Blocks'],
    customizationOptions: ['Private Self-Hosted Vector Store (Pinecone/pgvector)', 'API Token Rate Limiting & Auth', 'Custom Brand Palette & Embedded Widget', 'Analytics on Unanswered Queries'],
    pricing: { starter: 499, pro: 949, enterprise: 1899 },
    featured: true,
    rating: 5.0,
    reviewsCount: 47,
    turnaroundDays: 2
  },
  {
    id: 'ai-rag-internal-wiki',
    slug: 'rag-internal-wiki',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'RAG Knowledge Base',
    name: 'VAULTAI Internal Team Wiki & HR Copilot',
    headline: 'Secure Internal Company Wiki & Employee Handbook AI',
    description: 'Instant answers on company policy, leave balances, insurance claims, and IT troubleshooting with strict role-based access control.',
    previewImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Internal HR & Enterprise Wiki AI',
    badge: 'SOC2 Compliant Ready',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#38bdf8',
      bg: '#080c12',
      cardBg: '#101824',
      text: '#f0f9ff',
      border: '#1a293e',
      badgeStyle: 'bg-sky-950/80 text-sky-400 border-sky-500/30'
    },
    liveUrl: '/templates/ai/rag/internal-wiki',
    features: ['Department Role-Based Permission Walls', 'Google Drive & Notion Automatic Sync', 'HR Ticket Auto-Drafting', 'Full Audit Log of Internal Queries'],
    customizationOptions: ['Okta & Google SSO Single-Sign On', 'Internal Slack / Microsoft Teams Bot', 'Confidential Data Redaction Filter', 'Onboarding Quiz Generator'],
    pricing: { starter: 529, pro: 1049, enterprise: 2099 },
    featured: false,
    rating: 4.9,
    reviewsCount: 33,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // AI SOLUTIONS: CHATBOT (3)
  // -------------------------------------------------------------
  {
    id: 'ai-chatbot-website-widget',
    slug: 'chatbot-website-widget',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'Chatbot',
    name: 'CONVERTLY High-Converting Sticky Web Bot',
    headline: 'Embeddable Sticky AI Chatbot Boosting Conversions 40%',
    description: 'Lightweight JS snippet, proactive greeting triggers, visitor email capture, product recommendations, and mobile floating pill.',
    previewImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Website Conversion Chatbot',
    badge: '5-Min Embed',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#ec4899',
      bg: '#0d0a11',
      cardBg: '#181220',
      text: '#faf5ff',
      border: '#2c1e3b',
      badgeStyle: 'bg-pink-950/80 text-pink-400 border-pink-500/30'
    },
    liveUrl: '/templates/ai/chatbots/website-widget',
    features: ['1-Line Script Tag Integration (<15KB)', 'Proactive Exit-Intent & Timer Triggers', 'Interactive Multiple-Choice Quick Replies', 'Direct Lead Email & Phone Capture Modal'],
    customizationOptions: ['Custom Brand Avatars & Hex Colors', 'Webhook to Zapier & Make.com', 'Human Agent Live Takeover Mode', 'Multilingual Auto-Translation'],
    pricing: { starter: 249, pro: 489, enterprise: 999 },
    featured: false,
    rating: 4.9,
    reviewsCount: 51,
    turnaroundDays: 1
  },
  {
    id: 'ai-chatbot-whatsapp',
    slug: 'chatbot-whatsapp',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'Chatbot',
    name: 'WABIZ Enterprise Official WhatsApp Business Bot',
    headline: 'Official WhatsApp Cloud API Bot with Catalog & Payments',
    description: 'Instant interactive list messages, product catalog browsing, payment link sharing, order updates, and customer support on WhatsApp.',
    previewImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'WhatsApp Commerce & Automated Bot',
    badge: 'Meta Cloud API',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#22c55e',
      bg: '#080d0a',
      cardBg: '#101a14',
      text: '#f0fdf4',
      border: '#183323',
      badgeStyle: 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30'
    },
    liveUrl: '/templates/ai/chatbots/whatsapp',
    features: ['Official WhatsApp Green Tick API Compatible', 'Interactive Buttons & Catalog Messages', 'Razorpay & Stripe Direct Payment Links', 'Multi-Agent Shared WhatsApp Inbox'],
    customizationOptions: ['Automated Abandoned Cart Recovery', 'Broadcast Marketing Campaigns', 'Shipping Tracking Notifications', 'Custom Conversational Flows'],
    pricing: { starter: 399, pro: 799, enterprise: 1599 },
    featured: false,
    rating: 5.0,
    reviewsCount: 43,
    turnaroundDays: 2
  },
  {
    id: 'ai-chatbot-email',
    slug: 'chatbot-email',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    subCategory: 'Chatbot',
    name: 'INBOXGENIE Zero-Touch Email Auto-Draft & Resolution',
    headline: 'AI Email Copilot Reading, Categorizing & Drafting Replies',
    description: 'Classifies inbound emails by urgency, drafts context-aware replies matching your company guidelines, and routes VIP threads.',
    previewImage: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Email Support Automation AI',
    badge: 'Zero-Inbox',
    paletteType: 'ai',
    theme: {
      primary: '#09090b',
      accent: '#a855f7',
      bg: '#0a0812',
      cardBg: '#141022',
      text: '#faf5ff',
      border: '#261c3f',
      badgeStyle: 'bg-purple-950/80 text-purple-400 border-purple-500/30'
    },
    liveUrl: '/templates/ai/chatbots/email',
    features: ['Gmail & Outlook OAuth Fast Connection', 'Urgency & Sentiment Auto-Tagging', '1-Click Approve AI Drafted Reply', 'Unsubscribe & Spam Intelligent Purge'],
    customizationOptions: ['Brand Tone & Sign-Off Personas', 'Automatic Order Lookups in Email Context', 'Out-of-Office Smart Scheduling', 'Team Escalation Alerts'],
    pricing: { starter: 329, pro: 649, enterprise: 1299 },
    featured: false,
    rating: 4.8,
    reviewsCount: 30,
    turnaroundDays: 2
  },

  // -------------------------------------------------------------
  // MOBILITY & HARDWARE E-COMMERCE (3) (Preserving existing niche strength!)
  // -------------------------------------------------------------
  {
    id: 'ecom-volt-modern',
    slug: 'ev-mobility',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Electronics',
    name: 'VOLTX Modern Connected EV',
    headline: 'Cyber Obsidian EV Scooters & IoT Mobility Platform',
    description: 'Telemetry battery specs, charging network map, 72V lithium specs, and instant WhatsApp booking flow.',
    previewImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Electric Two-Wheelers & EV Tech',
    badge: 'Next-Gen EV',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#10b981',
      bg: '#ffffff',
      cardBg: '#f8fafc',
      text: '#09090b',
      border: '#e2e8f0',
      badgeStyle: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    liveUrl: '/templates/ecom/mobility/ev',
    features: ['Battery Telemetry & Range Calculator', 'Test Ride Slot Booking Modal', 'Color Customizer Preview', 'Instant WhatsApp Financing Inquiry'],
    customizationOptions: ['Charging Station Finder API', 'Govt Subsidy Subsidy Calculator', 'Spare Parts Filter', 'Accessories Bundler'],
    pricing: { starter: 349, pro: 699, enterprise: 1399 },
    featured: false,
    rating: 4.9,
    reviewsCount: 39,
    turnaroundDays: 2
  },
  {
    id: 'ecom-parts-pro',
    slug: 'spare-parts',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Electronics',
    name: 'GEARCRAFT OEM Spare Parts & Workshop',
    headline: 'High-Density Spare Parts Catalog with Vehicle Fitment Filter',
    description: 'Model compatibility checker, exploded blueprint diagrams, OEM SKU reference, and bulk garage order inquiry.',
    previewImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Automotive & Industrial Spare Parts',
    badge: 'OEM Direct',
    paletteType: 'ecom',
    theme: {
      primary: '#1c1917',
      accent: '#f59e0b',
      bg: '#ffffff',
      cardBg: '#fffbeb',
      text: '#1c1917',
      border: '#fde68a',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    liveUrl: '/templates/ecom/mobility/parts',
    features: ['Year/Make/Model Fitment Verification', 'Exploded Technical Diagrams', 'Bulk B2B Wholesale Cart', 'OEM Part Number Fast Search'],
    customizationOptions: ['Workshop Portal Login', 'Core Return Deposit Tracking', 'PDF Technical Datasheets', 'Mechanic WhatsApp Support'],
    pricing: { starter: 329, pro: 649, enterprise: 1249 },
    featured: false,
    rating: 4.8,
    reviewsCount: 35,
    turnaroundDays: 2
  },
  {
    id: 'ecom-apex-racing',
    slug: 'racing-performance',
    category: 'ecom',
    categoryLabel: 'E-Commerce',
    subCategory: 'Electronics',
    name: 'APEX Track Performance & Tuning',
    headline: 'Track-Bred Suspensions, Dyno Tuning & Performance Exhausts',
    description: 'High-torque telemetry, carbon fiber badges, dyno horsepower graphs, and track test video galleries.',
    previewImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1200&q=80'
    ],
    industryTag: 'Motorsport & Performance Tuning',
    badge: 'Track Tested',
    paletteType: 'ecom',
    theme: {
      primary: '#09090b',
      accent: '#ef4444',
      bg: '#ffffff',
      cardBg: '#fef2f2',
      text: '#09090b',
      border: '#fecaca',
      badgeStyle: 'bg-red-50 text-red-600 border-red-200'
    },
    liveUrl: '/templates/ecom/mobility/racing',
    features: ['Dyno Horsepower & Torque Graphs', 'ECU Map Download Portal', 'Track-Ready Hardware Badges', 'Pit Crew Video Tutorials'],
    customizationOptions: ['Custom Dyno Tune Booking', 'Racer Sponsorship Application', 'Titanium Exhaust Sound Clips', 'International Express Courier'],
    pricing: { starter: 359, pro: 699, enterprise: 1399 },
    featured: false,
    rating: 4.9,
    reviewsCount: 31,
    turnaroundDays: 2
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Pick Your Template',
    subtitle: 'From 56+ Proven Niches',
    description: 'Browse our extensive catalog of conversion-tested designs across e-commerce, local businesses, software, and AI solutions.',
    icon: 'SparklesIcon',
    color: '#3b82f6'
  },
  {
    step: '02',
    title: 'We Customize',
    subtitle: 'Tailored to Your Exact Brand',
    description: 'Our engineering team injects your logo, brand colors, product catalog, payment gateways, and custom workflows in 48 hours.',
    icon: 'WrenchIcon',
    color: '#8b5cf6'
  },
  {
    step: '03',
    title: 'SEO Optimization',
    subtitle: 'Built to Rank on Google #1',
    description: 'We configure structured JSON-LD schema, local meta keywords, lightning Core Web Vitals, and Google Business Profile linkages.',
    icon: 'TrendingUpIcon',
    color: '#10b981'
  },
  {
    step: '04',
    title: 'Launch & Grow',
    subtitle: 'Go Live with Full Support',
    description: 'Your standalone site goes live on high-speed CDN hosting with WhatsApp CRM direct checkout and continuous maintenance.',
    icon: 'RocketIcon',
    color: '#f59e0b'
  }
];

export const AGENCY_STATS = [
  {
    value: '56+',
    label: 'Ready-to-Deploy Templates',
    sub: 'E-com, Local, Software & AI'
  },
  {
    value: '140+',
    label: 'Businesses Launched',
    sub: 'From startups to franchises'
  },
  {
    value: '18+',
    label: 'Industry Verticals',
    sub: 'Deep domain specialization'
  },
  {
    value: '48h',
    label: 'Average Turnaround',
    sub: 'From selection to live URL'
  }
];
