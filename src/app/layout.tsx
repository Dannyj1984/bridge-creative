import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import AnalyticsConsent from './components/AnalyticsConsent';
import "./globals.css";
import Script from 'next/script'
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bridgecreative.co.uk"),
  title: {
    default: "Graphic Designer in Stalybridge | Logo Design & Branding | Bridge Creative",
    template: "%s | Bridge Creative",
  },
  description:
    "Professional graphic designer in Stalybridge specialising in logo design, branding and digital media for local businesses across Greater Manchester.",
  keywords: [
    "graphic designer stalybridge",
    "logo design stalybridge",
    "branding designer greater manchester",
    "digital media design",
    "brand identity design"
  ],
  authors: [{ name: "Bridge Creative" }],
  creator: "Bridge Creative",
  publisher: "Bridge Creative",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.bridgecreative.co.uk",
    siteName: "Bridge Creative",
    title: "Graphic Designer in Stalybridge | Logo Design & Branding | Bridge Creative",
    description: "Professional graphic designer in Stalybridge specialising in logo design, branding and digital media for local businesses across Greater Manchester.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bridge Creative Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge Creative | Graphic Design & Branding Stalybridge",
    description: "Professional graphic designer in Stalybridge specialising in logo design, branding and digital media.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png", // Ideally an apple-touch-icon.png
  },
  manifest: "/manifest.json",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>
        <Toaster position="top-left" />
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
