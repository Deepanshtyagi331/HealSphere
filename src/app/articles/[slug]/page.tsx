import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2, Sparkles, CheckCircle2, User } from "lucide-react";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/Button";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Instant Healing Therapy",
    };
  }

  return {
    title: `${article.title} | Instant Healing Therapy`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/insightful-articles-on-quantum-healing-and-wellness"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-healing-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <span className="inline-block bg-healing-100 text-healing-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 border-y border-slate-200 py-3.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-healing-700 text-white flex items-center justify-center font-bold text-xs">
                SK
              </div>
              <span className="font-semibold text-slate-900">{article.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl mb-10 border border-slate-200 bg-slate-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-healing-50 border border-healing-200 rounded-2xl p-6 sm:p-8 mb-10">
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-healing-600" />
              <span>Key Takeaways at a Glance</span>
            </h3>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-healing-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Body Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-16">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-16 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-healing-600 to-quantum-600 flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-lg">
            SK
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-serif font-bold text-white">
              Written by Sachin Karve
            </h4>
            <p className="text-xs text-healing-300 font-semibold uppercase tracking-wider">
              {article.author.role} &bull; Mumbai, India
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sachin Karve is an energy healer, author of <em>Instant Healing for Self and Others</em>, and instructor teaching quantum and heart energy healing to over 40,000 students globally.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-slate-900">
            More Insightful Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/articles/${rel.slug}`}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-bold text-healing-700 uppercase mb-1">
                    {rel.category}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-healing-700 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-xs text-slate-400 mt-4">{rel.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
