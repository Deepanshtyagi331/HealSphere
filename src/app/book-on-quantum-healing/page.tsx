import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Star, CheckCircle2, ArrowRight, Award, ShieldCheck } from "lucide-react";
import { ebookData, siteConfig } from "@/data/siteData";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Instant Healing for Self and Others | E-Book by Sachin Karve",
  description:
    "A practical handbook by Sachin Karve on Amazon Kindle. Learn step-by-step protocols to awaken the quantum field and dissolve physical and emotional pain.",
};

export default function BookOnQuantumHealingPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-12 lg:p-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Book Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-80 h-96 sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900">
                <Image
                  src={ebookData.coverImage}
                  alt={ebookData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-300">
                    Amazon Kindle Best-Seller
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    {ebookData.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">By {ebookData.author}</p>
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-gold-700" />
                <span>Published Work & Guidebook</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                {ebookData.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-serif italic">
                &ldquo;{ebookData.subtitle}&rdquo;
              </p>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 border-y border-slate-100 py-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">{ebookData.rating} / 5</span>
                <span className="text-slate-400">({ebookData.reviewsCount} Reader Reviews)</span>
                <span>&bull;</span>
                <span>{ebookData.format}</span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {ebookData.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  href={ebookData.kindleUrl}
                  external
                  variant="gold"
                  size="lg"
                  className="gap-2 font-bold shadow-lg"
                >
                  <span>Get on Amazon Kindle &rarr;</span>
                </Button>
                <Button
                  href={siteConfig.whatsappUrl}
                  external
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <span>Enquire via WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters Outline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              What You Will Read Inside the Book
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Eight comprehensive chapters breaking down self-healing into practical steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ebookData.chapters.map((chap, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-healing-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-slate-800">{chap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
