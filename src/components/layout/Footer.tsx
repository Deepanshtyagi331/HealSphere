import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Heart,
  BookOpen,
  ShieldAlert,
} from "lucide-react";
import { siteConfig, footerNavLinks } from "@/data/siteData";
import { Logo } from "./Logo";
import { FooterContactForm } from "@/components/forms/FooterContactForm";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner section containing the Footer Contact Form */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left promo info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-healing-950/80 border border-healing-700/60 text-healing-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Zero-Risk Healing Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Ready to Experience Spontaneous Pain Relief?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are suffering from chronic spinal stiffness, migraines, joint inflammation, or emotional burnout — connect directly with certified quantum healer Sachin Karve.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-healing-900/70 border border-healing-700/50 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-healing-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Client-Centric Policy:</span> Pay only when you physically sense a positive shift during your therapy session.
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-quantum-900/70 border border-quantum-700/50 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-quantum-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Online Masterclasses:</span> Learn to self-heal and heal others with lifetime video access & certification.
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm hover:underline"
                >
                  <span>Need an immediate response? Chat directly on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right column: Footer Contact Form (Required on EVERY page) */}
            <div className="lg:col-span-7">
              <FooterContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Founded by Sachin Karve, HealSphere bridges timeless Eastern spiritual stillness with modern energy resonance to awaken the human body’s innate healing intelligence.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Founder:</span> Sachin Karve (Mechanical Engineer, MBA Mumbai Univ, Energy Healer & Author)
            </div>
          </div>

          {/* Col 2: Navigation Links (Preserves Articles & About Sachin Karve) */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Explore Platform
            </h3>
            <ul className="space-y-2 text-sm">
              {footerNavLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-healing-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Healing Services & Courses */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Healing Offerings
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/quantum-healing-session"
                  className="text-slate-400 hover:text-healing-300 transition-colors"
                >
                  30-Min Remote Quantum Session
                </Link>
              </li>
              <li>
                <Link
                  href="/learn-quantum-healing"
                  className="text-slate-400 hover:text-healing-300 transition-colors"
                >
                  Quantum Healing Masterclass (12-Hr)
                </Link>
              </li>
              <li>
                <Link
                  href="/learn-heart-energy-healing"
                  className="text-slate-400 hover:text-healing-300 transition-colors"
                >
                  Heart Energy Healing Masterclass
                </Link>
              </li>
              <li>
                <Link
                  href="/book-on-quantum-healing"
                  className="text-slate-400 hover:text-healing-300 transition-colors"
                >
                  E-Book: Instant Healing for Self & Others
                </Link>
              </li>
              <li>
                <Link
                  href="/insightful-articles-on-quantum-healing-and-wellness"
                  className="text-slate-400 hover:text-healing-300 transition-colors"
                >
                  Articles on Quantum Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/sachin-karve-quantum-healer"
                  className="text-slate-400 hover:text-healing-300 transition-colors"
                >
                  About Sachin Karve
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Connect With Us
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-2.5 hover:text-healing-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-healing-400 shrink-0 mt-0.5" />
                <span>{siteConfig.phone} (Call / WhatsApp)</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-2.5 hover:text-healing-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-healing-400 shrink-0 mt-0.5" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-healing-400 shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400">
              <div className="font-semibold text-slate-200 mb-1">Global Timezone Flexibility</div>
              Sessions arranged for IST, UK/GMT, US (EST/PST), Europe, Australia, and Middle East.
            </div>
          </div>
        </div>

        {/* Medical & Health Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-800 text-xs text-slate-400 leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Health & Regulatory Disclaimer:</strong>{" "}
              {siteConfig.disclaimer}
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} HealSphere & Sachin Karve. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/insightful-articles-on-quantum-healing-and-wellness" className="hover:text-slate-300 transition-colors">
              Articles
            </Link>
            <Link href="/sachin-karve-quantum-healer" className="hover:text-slate-300 transition-colors">
              About Sachin Karve
            </Link>
            <Link href="/contact-for-quantum-healing" className="hover:text-slate-300 transition-colors">
              Direct Contact
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-healing-300 transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
