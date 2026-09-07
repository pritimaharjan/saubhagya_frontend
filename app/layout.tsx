import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import "./globals.css";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Saubhagya | Good Fortune, Handcrafted with Love",
    template: "%s | Saubhagya",
  },
  description:
    "Discover unique handcrafted gifts at Saubhagya — Good Fortune, Handcrafted with Love. Premium crochet products, candles, gift bundles, and personalized gifts for every occasion.",
  keywords: [
    "saubhagya",
    "handmade gifts",
    "crochet",
    "candles",
    "gift bundles",
    "personalized gifts",
    "birthday gifts",
    "anniversary gifts",
    "good fortune",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Saubhagya",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
