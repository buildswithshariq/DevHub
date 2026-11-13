import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import IntroLoader from "@/components/IntroLoader";

export const metadata: Metadata = {
  title: "Dev Hub | Engineering The Future • 56+ Production Architectures",
  description: "Dev Hub — Production-ready digital architectures across E-Commerce, Local Businesses, Small Business Software, and Autonomous AI Engines. Turnkey launch in 48 hours.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    "Dev Hub",
    "Engineering The Future",
    "website templates",
    "ecommerce architectures",
    "restaurant qr menu",
    "table booking system",
    "ai voice assistant",
    "rag knowledge base",
    "software platforms",
    "digital agency"
  ],
  openGraph: {
    title: "Dev Hub | Engineering The Future",
    description: "Launch your high-converting digital platform in 48 hours. 56+ production architectures and custom AI systems.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 250,
        alt: 'Dev Hub — Engineering The Future',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Instant zero-flash intro loader script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var seen=sessionStorage.getItem('devhub_intro_seen');var force=window.location.search.indexOf('intro=1')!==-1;if(!seen||force){document.documentElement.classList.add('devhub-intro-active');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#000000] text-[#f4f4f6] selection:bg-[#80202A] selection:text-white">
        <ThemeProvider>
          <CartProvider>
            {/* Cinematic Audio & Visual Intro Loader */}
            <IntroLoader />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
