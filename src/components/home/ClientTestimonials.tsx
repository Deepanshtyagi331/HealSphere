import React from "react";
import { Star, Quote, CheckCircle, ShieldCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const ClientTestimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-gold-600 text-gold-600" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Real Stories of Spontaneous Healing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Read authentic experiences from individuals across the world who regained comfort, mobility, and emotional peace through Sachin Karve’s quantum practice and masterclasses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-healing-200 transition-colors" />
                </div>

                <div className="text-xs font-semibold text-healing-700 uppercase tracking-wider mb-2">
                  {t.conditionOrCourse}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  &ldquo;{t.feedback}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
                {t.date && (
                  <span className="text-[11px] text-slate-400">{t.date}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto text-xs text-slate-500 leading-relaxed">
          * Note: Individual responses to energy healing vary based on personal physiological state and openness. Testimonials represent personal subjective experiences and are not guarantees of specific clinical outcomes.
        </div>
      </div>
    </section>
  );
};
