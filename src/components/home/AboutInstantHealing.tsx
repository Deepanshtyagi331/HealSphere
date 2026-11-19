import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, GraduationCap, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

export const AboutInstantHealing: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Bio Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200">
                <div className="relative h-96 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Sachin Karve - Quantum Healer and Instructor"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-healing-300">
                      Founder & Master Instructor
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">Sachin Karve</h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Mechanical Engineer &bull; MBA Mumbai Univ &bull; Energy Healer
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-900">Experience</span>
                    <span>25+ Years in Spiritual Consciousness</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-900">Global Reach</span>
                    <span>95+ Countries Worldwide</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Published Author</span>
                    <span>Instant Healing for Self & Others</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-gradient-to-r from-healing-700 to-healing-800 text-white rounded-xl shadow-lg p-3.5 flex items-center gap-3">
                <Award className="w-6 h-6 text-gold-300 shrink-0" />
                <div>
                  <div className="text-xs font-bold leading-tight">40,000+ Students</div>
                  <div className="text-[10px] text-healing-200">Udemy & Independent Masterclasses</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-healing-100 text-healing-800 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-healing-600" />
              <span>Scientific Rigor & Spiritual Stillness</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              About Instant Healing Therapy & Sachin Karve
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Instant Healing Therapy was founded by <strong className="text-slate-900 font-semibold">Sachin Karve</strong> with a singular mission: to strip away superstition, dogma, and mysticism from energy healing, and demonstrate how tapping into pure consciousness activates spontaneous physiological recovery.
              </p>
              <p>
                With a formal background as a <strong className="text-slate-900 font-semibold">Mechanical Engineer</strong> and an <strong className="text-slate-900 font-semibold">MBA in Marketing from Mumbai University</strong>, Sachin spent decades in corporate leadership and behavioral training. Following a transformative spiritual awakening over 25 years ago, and extended phases of profound inner stillness around 2016, he began exploring the mechanics of spontaneous healing.
              </p>
              <p>
                His approach combines analytical clarity with deep meditative presence. Rather than relying on rigid rituals or difficult visualization techniques, Sachin teaches students and clients how to access the quiet space of &quot;No-Mind&quot; where the body naturally returns to its harmonious baseline.
              </p>
            </div>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <GraduationCap className="w-5 h-5 text-healing-700 mb-2" />
                <div className="font-bold text-slate-900 text-sm">Engineering Logic</div>
                <div className="text-xs text-slate-500 mt-1">Clear, step-by-step repeatable protocols.</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <Users className="w-5 h-5 text-quantum-700 mb-2" />
                <div className="font-bold text-slate-900 text-sm">Global Practice</div>
                <div className="text-xs text-slate-500 mt-1">Consulting clients across all time zones.</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <BookOpen className="w-5 h-5 text-gold-600 mb-2" />
                <div className="font-bold text-slate-900 text-sm">Kindle Best-Seller</div>
                <div className="text-xs text-slate-500 mt-1">Author of acclaimed self-healing guide.</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/sachin-karve-quantum-healer" variant="primary" size="md" className="gap-2">
                <span>Read Full Biography & Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/book-on-quantum-healing" variant="outline" size="md">
                <span>View Book on Amazon</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
