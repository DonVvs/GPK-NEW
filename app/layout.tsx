import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Gargi PaperKraft | Best Paper Bag Manufacturer in India | Wholesale Supplier",
    template: "%s | Gargi PaperKraft"
  },
  description: "India's leading manufacturer of eco-friendly kraft paper bags. We supply high-quality flat bottom, V-bottom, and square bottom bags for groceries, food delivery, and retail. Based in Lucknow, serving Pan-India.",
  keywords: ["Paper Bag Manufacturer India", "Kraft Paper Bags Wholesale", "Eco-friendly Carry Bags", "Food Delivery Bags", "Grocery Paper Bags", "Custom Printed Paper Bags", "Lucknow Paper Bag Factory"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gargipaperkraft.com",
    title: "Gargi PaperKraft | Sustainable Packaging Solutions",
    description: "Premium kraft paper bags for modern businesses. ISO Certified manufacturer in India.",
    siteName: "Gargi PaperKraft",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
