import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import IntroLoader from "@/components/IntroLoader";

export const metadata: Metadata = {
  metadataBase: new URL('https://devhub.agency'),
  title: "Dev Hub | Engineering The Future • 56+ Production Architectures",
  description: "Dev Hub — Production-ready digital architectures across E-Commerce, Local Businesses, Small Business Software, and Autonomous AI Engines. Turnkey launch in 48 hours.",
  icons: {
    icon: [
      { url: '/icon-192.png?v=devhub3', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.svg?v=devhub3', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=devhub3', sizes: 'any' },
    ],
    shortcut: '/favicon.ico?v=devhub3',
    apple: [
      { url: '/apple-touch-icon.png?v=devhub3', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json?v=devhub3',
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
        <link rel="icon" href="/icon-192.png?v=devhub3" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon.svg?v=devhub3" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico?v=devhub3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=devhub3" sizes="180x180" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png?v=devhub3" sizes="180x180" />
        <link rel="manifest" href="/manifest.json?v=devhub3" />
        <meta name="msapplication-TileImage" content="/icon-192.png?v=devhub3" />
        <meta name="msapplication-TileColor" content="#80202A" />
        <meta name="theme-color" content="#80202A" />
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
