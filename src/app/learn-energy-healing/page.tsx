import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Video,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Heart,
} from "lucide-react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Learn Energy Healing | Online Masterclasses by Sachin Karve",
  description:
    "Comprehensive online training in Quantum Healing and Heart Energy Healing. Learn how to heal yourself, loved ones, and remote clients with lifetime video access and certificate.",
};

export default function LearnEnergyHealingPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-healing-100 text-healing-800 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-healing-600" />
            <span>Awaken Your Healing Faculty</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Learn Energy & Quantum Healing
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            You do not need special psychic gifts or a background in medicine. Sachin Karve breaks down energy healing into crystal-clear, repeatable protocols accessible to everyone.
          </p>
        </div>

        {/* Why Learn from Sachin Karve */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Why Learn Healing With Us?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Combining engineering logic with deep experiential consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Award className="w-8 h-8 text-healing-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1 font-serif">
                Practical, No-Nonsense Logic
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Free from complex rituals or dogma. Every exercise is grounded in observable physical and energetic feedback.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Video className="w-8 h-8 text-quantum-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1 font-serif">
                Learn Anywhere, Anytime
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-definition on-demand video masterclasses with lifetime access on mobile, desktop, and tablet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Users className="w-8 h-8 text-gold-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1 font-serif">
                Global Alumni Community
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Join over 40,000 students across 95+ nations learning, sharing, and practicing instant healing techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Courses Offered */}
        <div className="space-y-8 mb-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Our Signature Masterclasses
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select the course that aligns with your healing aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                <div className="p-8">
                  {course.badge && (
                    <span className="inline-block bg-healing-100 text-healing-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                      {course.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">{course.format}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Highlights:
                    </h4>
                    {course.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-healing-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-slate-900">{course.price}</span>
                    <span className="text-xs text-slate-500 ml-2">Lifetime Access</span>
                  </div>
                  <Button href={`/${course.slug}`} variant="primary" size="md" className="gap-2">
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
