import React from "react";
import Link from "next/link";
import {
  Video,
  Clock,
  Award,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/Button";

export const QuantumHealingCourses: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-100 text-quantum-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-quantum-600" />
            <span>Online Learning & Certification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Learn Energy & Quantum Healing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Anyone can awaken their innate healing faculty. Step-by-step accredited video masterclasses designed for beginners and holistic practitioners worldwide.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Header card banner */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-healing-950 text-white relative">
                  {course.badge && (
                    <span className="inline-block bg-gold-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                      {course.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {course.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-healing-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Video className="w-4 h-4 text-healing-400" />
                      <span>{course.lessonsCount} Video Lessons</span>
                    </div>
                    <div className="flex items-center gap-1 text-gold-400">
                      <Star className="w-4 h-4 fill-gold-400" />
                      <span className="font-bold text-white">{course.rating}</span>
                      <span className="text-slate-400">({course.studentsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Course Content Highlights */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {course.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Core Curriculum Highlights:
                    </h4>
                    <ul className="space-y-2.5">
                      {course.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-healing-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Price & CTA */}
              <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">One-time Enrollment Fee</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-slate-900">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        {course.originalPrice}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Lifetime Access
                    </span>
                  </div>
                </div>

                <Button href={`/${course.slug}`} variant="primary" size="md" className="w-full sm:w-auto gap-2">
                  <span>Explore Course & Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Ebook Callout Banner */}
        <div className="bg-gradient-to-r from-healing-800 to-quantum-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
              <BookOpen className="w-8 h-8 text-gold-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gold-300 font-bold">
                Kindle & Paperback Guide
              </span>
              <h4 className="text-xl font-bold font-serif text-white mt-0.5">
                Instant Healing for Self and Others by Sachin Karve
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
                Prefer reading? Grab the comprehensive handbook on Amazon Kindle and begin practicing at your own pace today.
              </p>
            </div>
          </div>
          <Button
            href="/book-on-quantum-healing"
            variant="gold"
            size="md"
            className="shrink-0 gap-2 font-bold"
          >
            <span>Learn About the Book</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
