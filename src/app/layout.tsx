import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: {
    default: "HealSphere | Quantum Healing & Energy Therapy",
    template: "%s | HealSphere",
  },
  description: siteConfig.description,
  keywords: [
    "HealSphere",
    "Quantum Healing",
    "Energy Healing",
    "Sachin Karve",
    "Remote Energy Healing",
    "Back Pain Healing",
    "Migraine Relief",
    "Heart Energy Healing",
    "Zero Point Meditation",
    "Learn Quantum Healing",
  ],
  authors: [{ name: "Sachin Karve" }],
  creator: "Sachin Karve",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://instanthealingtherapy.com",
    title: "HealSphere | Quantum Healing & Energy Therapy",
    description: siteConfig.description,
    siteName: "HealSphere",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealSphere | Quantum Healing & Energy Therapy",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white">
        {/* Responsive Header & Navigation (Single main header bar with HealSphere logo) */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer with Integrated Contact Form on EVERY page */}
        <Footer />

        {/* WhatsApp Floating Contact Button */}
        <WhatsAppFloatingButton />

        {/* Scroll To Top Button */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
