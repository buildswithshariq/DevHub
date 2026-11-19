export interface ServiceCarouselItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  industryTag: string;
  badge: string;
  previewImage: string;
  targetCategory: 'ecom' | 'local' | 'software' | 'ai';
  liveUrl: string;
}

export interface ProjectShowcaseItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  industryTag: string;
  badge: string;
  previewImage: string;
  liveUrl: string;
  clientName: string;
  turnaround: string;
  metrics: string[];
  techStack: string[];
}

export const AGENCY_SERVICES_ITEMS: ServiceCarouselItem[] = [
  {
    id: 'srv-ecom',
    name: 'Online Stores & D2C Brands',
    headline: 'High-Converting Storefronts with Fast 1-Click Checkout',
    description: 'Custom Next.js stores with instant cart drawer, multiple currencies, automatic tax setup, and direct WhatsApp or Stripe checkout.',
    industryTag: 'E-COMMERCE',
    badge: 'Popular',
    previewImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'ecom',
    liveUrl: '/templates?cat=ecom',
  },
  {
    id: 'srv-local',
    name: 'Local Business Websites',
    headline: 'Websites Built for Salons, Cafés, Gyms & Clinics',
    description: 'Mobile-first sites designed to rank on Google Maps, generate direct WhatsApp bookings, and show customer reviews.',
    industryTag: 'LOCAL BUSINESS',
    badge: '48h Launch',
    previewImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'local',
    liveUrl: '/templates?cat=local',
  },
  {
    id: 'srv-qr',
    name: 'Restaurant QR Menus & Ordering',
    headline: 'Zero-App Digital Menus with Table Ordering & Kitchen Routing',
    description: 'Guests scan the table QR code to view live menus, add order instructions, split bills, and pay directly on their phone.',
    industryTag: 'RESTAURANTS',
    badge: 'Zero Commission',
    previewImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'software',
    liveUrl: '/templates?cat=software',
  },
  {
    id: 'srv-booking',
    name: 'Online Table & Appointment Booking',
    headline: 'Automated Booking for Salons, Restaurants & Clinics',
    description: 'Multi-zone table reservations and stylist chair appointment calendars with automatic reminders and zero double-booking.',
    industryTag: 'RESERVATIONS',
    badge: 'High Demand',
    previewImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'software',
    liveUrl: '/templates?cat=software',
  },
  {
    id: 'srv-ai-agents',
    name: 'Customer Support Chatbots',
    headline: '24/7 Website Chatbots Trained on Your Business FAQs',
    description: 'Custom chatbots embedded on your site that answer client questions, qualify leads, and book meetings around the clock.',
    industryTag: 'AI CHATBOTS',
    badge: 'Custom AI',
    previewImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'ai',
    liveUrl: '/templates?cat=ai',
  },
  {
    id: 'srv-voice',
    name: 'AI Phone Voice Assistants',
    headline: 'Automated Voice Call Handling for Appointments & Inquiries',
    description: 'Natural voice agents answering customer calls, booking appointments into your calendar, and routing urgent calls.',
    industryTag: 'VOICE AI',
    badge: 'Voice Setup',
    previewImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'ai',
    liveUrl: '/templates?cat=ai',
  },
  {
    id: 'srv-rag',
    name: 'Searchable Team Knowledge Bases',
    headline: 'Instant Search Across Company Manuals & Docs',
    description: 'Fast, secure search for team handbooks, SOPs, and product documentation with exact source citations.',
    industryTag: 'DOCS SEARCH',
    badge: 'Enterprise',
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'ai',
    liveUrl: '/templates?cat=ai',
  },
  {
    id: 'srv-nfc',
    name: 'NFC Digital Business Cards',
    headline: '1-Tap Smartphone Contact Sharing & Lead Capture',
    description: 'Tap your physical card on any iPhone or Android to immediately share your contact info, social links, and portfolio.',
    industryTag: 'NFC CARDS',
    badge: 'Physical Kit',
    previewImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    targetCategory: 'software',
    liveUrl: '/templates?cat=software',
  },
];

export const AGENCY_PROJECTS: ProjectShowcaseItem[] = [
  {
    id: 'prj-hypex',
    name: 'HYPEX London Streetwear Store',
    headline: 'Custom Apparel Storefront with Instant Drop Checkout',
    description: 'Designed and deployed an online store for an independent streetwear brand. Includes drop countdown timers, lookbook photo galleries, and Apple Pay checkout.',
    industryTag: 'APPAREL & D2C',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/ecommerce/hypex-streetwear',
    clientName: 'HypeX Apparel UK Ltd',
    turnaround: '48 Hours',
    metrics: ['+340% Mobile Conversion', '0.38s Page Load', '£140k First Drop Volume'],
    techStack: ['Next.js 16', 'Tailwind CSS', 'Stripe', 'Supabase', 'Vercel Edge'],
  },
  {
    id: 'prj-origin',
    name: 'Origin Coffee Roasters Tasting Hub',
    headline: 'Artisan Coffee Roastery Store & Weekly Subscription Engine',
    description: 'Crafted an e-commerce website for an independent coffee roaster. Includes bean grind selection, tasting notes guide, and WhatsApp subscription ordering.',
    industryTag: 'FOOD & BEVERAGE',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/local/origin-coffee',
    clientName: 'Origin Artisan Roasters',
    turnaround: '48 Hours',
    metrics: ['+180% Subscriptions', '100% Mobile Order Share', '4.9/5 Customer Rating'],
    techStack: ['Next.js 16', 'Tailwind CSS', 'WhatsApp Business API', 'Shopify Storefront'],
  },
  {
    id: 'prj-tablepulse',
    name: 'TablePulse Restaurant QR Ordering',
    headline: 'Zero-App Dine-In QR Ordering with Split-Bill & Kitchen Routing',
    description: 'Built a table ordering system to cut customer wait times. Guests scan table QR codes to view real-time menus, place kitchen orders, and pay on their phone.',
    industryTag: 'HOSPITALITY SOFTWARE',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/software/tablepulse-qr',
    clientName: 'Pulse Hospitality Group',
    turnaround: '3 Days',
    metrics: ['32% Faster Table Turnover', 'Zero App Downloads', '+24% Average Tip Size'],
    techStack: ['Next.js 16', 'Node.js', 'Socket.io', 'Thermal Printer Bridge', 'PostgreSQL'],
  },
  {
    id: 'prj-omniagent',
    name: 'OmniAgent Customer Support Assistant',
    headline: '24/7 AI Support Chatbot Resolving 82% of Inquiries Automatically',
    description: 'Custom AI support chatbot trained on company product guides and documentation. Handles customer questions instantly and forwards complex issues to team email.',
    industryTag: 'AI SUPPORT',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/ai/omniagent-support',
    clientName: 'OmniSaaS Global',
    turnaround: '48 Hours',
    metrics: ['82% Automated Resolution', 'Instant 1.2s Response Time', '65% CSAT Score Boost'],
    techStack: ['Next.js 16', 'OpenAI GPT-4o', 'Pinecone Vector DB', 'Zendesk API', 'Webhooks'],
  },
  {
    id: 'prj-letoile',
    name: "L'Étoile Fine Dining Showcase",
    headline: 'Restaurant Tasting Menu Showcase with Online Table Bookings',
    description: 'An elegant dining website for a high-end restaurant. Features seasonal menus, wine pairings, and direct online private dining reservation inquiries.',
    industryTag: 'RESTAURANTS',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/hospitality/letoile-fine-dining',
    clientName: "L'Étoile Restaurant Group",
    turnaround: '48 Hours',
    metrics: ['100% Weekend Bookings', '+45% Private Dining Requests', 'Zero 3rd-Party Cover Fees'],
    techStack: ['Next.js 16', 'Tailwind CSS', 'Stripe Deposits', 'WhatsApp Concierge Desk'],
  },
  {
    id: 'prj-clinicvoice',
    name: 'ClinicVoice Patient Phone Receptionist',
    headline: 'AI Voice Phone Receptionist Handling 2,000+ Calls Monthly',
    description: 'Voice assistant answering incoming clinic calls on ring one. Helps patients check hours, books appointments directly into clinic calendar, and escalates emergencies.',
    industryTag: 'HEALTHCARE AI',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/ai/voice-clinic-reception',
    clientName: 'MetroCare Health Network',
    turnaround: '4 Days',
    metrics: ['0 Seconds Hold Time', '99.4% Booking Accuracy', 'Saved 140 Staff Hours/Mo'],
    techStack: ['WebSockets', 'ElevenLabs Turbo', 'Deepgram Nova-2', 'Twilio Voice', 'FHIR API'],
  },
  {
    id: 'prj-volt',
    name: 'VOLT Performance Mobility Hub',
    headline: 'Interactive EV Showcase & VIP Test Drive Reservation Flow',
    description: 'A digital showroom showcasing electric performance vehicles. Features real-time battery range estimators, vehicle specs viewer, and test drive booking form.',
    industryTag: 'EV & AUTOMOTIVE',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/ecom/mobility/ev',
    clientName: 'Volt Automotive Corp',
    turnaround: '48 Hours',
    metrics: ['+210% Test Drive Bookings', '4.2 Min Average Dwell Time', '$1.8M Pipeline Generated'],
    techStack: ['Next.js 16', 'Three.js / WebGL', 'Tailwind CSS', 'HubSpot CRM Sync'],
  },
  {
    id: 'prj-velour',
    name: 'Velour Hair Salon & Aesthetics Lounge',
    headline: 'Full-Service Salon Appointment Booking & Stylist Portfolio',
    description: 'Luxury salon website allowing clients to browse stylist portfolios, view real-time available time slots, select treatments, and pay deposits online.',
    industryTag: 'SALON & BEAUTY',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '/templates/local/unisex-salon',
    clientName: 'Velour Studio Soho',
    turnaround: '48 Hours',
    metrics: ['+78% Repeat Bookings', 'Zero Double Bookings', 'Google Maps #1 Search Rank'],
    techStack: ['Next.js 16', 'Google Calendar 2-Way Sync', 'Stripe', 'Twilio SMS Reminders'],
  },
  {
    id: 'prj-ai-agency-os',
    name: 'AI Agency OS — Multi-Agent Marketing Platform',
    headline: 'Autonomous Agency Operating System with 6 Specialist AI Agents',
    description: 'Engineered an operating system for marketing agencies. Features 6 autonomous agents for market intelligence research, cold prospect sequencing, live signal tracking, instant competitive teardowns, and brand-aware campaign drafting.',
    industryTag: 'AGENCY AI OS',
    badge: 'Live Client Site',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://ai-agency-v2-jet.vercel.app',
    clientName: 'Agentic Agency OS',
    turnaround: '48 Hours',
    metrics: ['6 Specialist AI Agents', 'Zero Tab Graveyard', '10x Research Speed'],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Multi-Agent OS', 'Vercel Edge'],
  },
];
