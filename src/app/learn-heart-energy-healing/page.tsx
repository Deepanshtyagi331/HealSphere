import React from "react";
import type { Metadata } from "next";
import {
  Heart,
  Clock,
  Video,
  Award,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Masterclass on Heart Energy Healing | Sachin Karve",
  description:
    "Awaken heart coherence, heal emotional trauma, and cultivate deep unconditional compassion in this 36-lesson masterclass by Sachin Karve.",
};

export default function LearnHeartEnergyHealingPage() {
  const course = courses[1]; // Heart Energy Healing Masterclass

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-rose-950/60 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl mb-16 relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {course.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg text-rose-100 leading-relaxed max-w-3xl">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-rose-400" />
                <span>{course.lessonsCount} Video Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-400" />
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Star className="w-4 h-4 fill-amber-300" />
                <span>{course.rating} / 5 ({course.studentsCount})</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="gold"
                size="lg"
                className="w-full sm:w-auto font-bold gap-2 shadow-xl"
              >
                <span>Enroll in Course ({course.price})</span>
              </Button>
              <Button
                href="/quantum-healing-session"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10"
              >
                <span>Book a Consultation First</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-10">
            {/* Description */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                The Science of Heart Coherence
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {course.description}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                The heart is far more than a physical pump. Research in neuro-cardiology shows that the heart possesses its own complex intrinsic nervous system with more than 40,000 sensory neurons. It generates an electromagnetic field approximately 5,000 times stronger than the brain.
              </p>
            </div>

            {/* What you will learn */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                Core Skills You Will Acquire
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                Course Curriculum & Modules
              </h2>
              <div className="space-y-4">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900 text-base font-serif mb-1">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-4">{mod.description}</p>
                    <div className="space-y-2">
                      {mod.lessons.map((lesson, lIdx) => (
                        <div key={lIdx} className="flex items-center gap-2.5 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-100">
                          <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Enrollment Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Full Video Course
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-slate-900">{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-base text-slate-400 line-through">
                      {course.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Format</span>
                  <span className="font-semibold text-slate-900">36 Recorded Lessons</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span className="font-semibold text-slate-900">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Certificate</span>
                  <span className="font-semibold text-emerald-600">Downloadable Certificate</span>
                </div>
              </div>

              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="gold"
                size="md"
                className="w-full justify-center font-bold"
              >
                <span>Enroll via WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
