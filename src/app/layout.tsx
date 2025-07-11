import type { Metadata } from "next";
import { Inter, Caveat} from "next/font/google";
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
  title: "Bridge Creative | Graphic Designer",
  description: "Portfolio of Bridge Creative, a professional graphic design company specialising in brand identity and digital design.",
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
      </head>
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
