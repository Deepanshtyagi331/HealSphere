import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Insightful Articles on Quantum Healing & Wellness | Sachin Karve",
  description:
    "Explore in-depth articles on energy medicine, quantum mechanics of consciousness, pain relief techniques, and emotional wellness written by Sachin Karve.",
};

export default function ArticlesDirectoryPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-healing-100 text-healing-800 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-healing-600" />
            <span>Knowledge Base & Articles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Insightful Articles on Quantum Healing & Wellness
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Written by Sachin Karve, these articles explore the intersection of quantum science, emotional anatomy, and spontaneous physical healing.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={art.coverImage}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-lg font-bold font-serif text-slate-900 group-hover:text-healing-700 transition-colors line-clamp-2">
                    <Link href={`/articles/${art.slug}`}>{art.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-healing-100 text-healing-700 flex items-center justify-center text-xs font-bold">
                    SK
                  </div>
                  <span className="text-xs font-medium text-slate-700">{art.author.name}</span>
                </div>

                <Link
                  href={`/articles/${art.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-healing-700 hover:text-healing-800 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
