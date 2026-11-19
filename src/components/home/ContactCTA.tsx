import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageSquare, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-healing-900 via-healing-800 to-quantum-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-healing-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-quantum-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span>Connect Directly with Sachin Karve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Take the First Step Toward Living Free from Pain
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Whether you want to schedule a 30-minute remote video healing session, enroll in an accredited masterclass, or ask a question about your symptoms — Sachin is here to assist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contact-for-quantum-healing"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto gap-2 font-bold shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              <span>Go to Full Contact Page</span>
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              external
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp Directly</span>
            </Button>
          </div>

          {/* Quick info badges */}
          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-healing-300" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-healing-300" />
              <span>{siteConfig.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Fast reply within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
