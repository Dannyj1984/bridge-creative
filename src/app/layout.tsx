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
  title: "Graphic Designer in Stalybridge | Logo Design & Branding | Bridge Creative",
  description:
    "Professional graphic designer in Stalybridge specialising in logo design, branding and digital media for local businesses across Greater Manchester.",
  keywords: [
    "graphic designer stalybridge",
    "logo design stalybridge",
    "branding designer greater manchester",
    "digital media design",
    "brand identity design"
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
