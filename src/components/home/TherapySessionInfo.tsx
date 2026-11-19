import React from "react";
import Link from "next/link";
import {
  Video,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  PhoneCall,
  DollarSign,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

const sessionSteps = [
  {
    step: "Phase 1",
    title: "Initial Check-in & Rating",
    desc: "We discuss your specific symptom, determine when it started, and rate your pain or restricted mobility on a clear 1 to 10 scale.",
  },
  {
    step: "Phase 2",
    title: "Quiet Observation in Stillness",
    desc: "You sit or lie down comfortably at home. Sachin enters the No-Mind state, holding your body's energetic blueprint in pure awareness.",
  },
  {
    step: "Phase 3",
    title: "The Shift & Release",
    desc: "During the 15 to 25 minutes of transmission, you will likely feel tingling, soothing warmth, muscle unwinding, or involuntary deep breaths.",
  },
  {
    step: "Phase 4",
    title: "Movement & Pain Re-evaluation",
    desc: "You gently stand, bend, or test the restricted joint. We re-score the pain level and observe the tangible change in flexibility.",
  },
];

export const TherapySessionInfo: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Private One-on-One Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            How a Quantum Healing Session Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience the healing power of non-local consciousness from the comfort of your home. Professional 30-minute video sessions tailored to your individual needs.
          </p>
        </div>

        {/* Highlight Guarantee Box */}
        <div className="bg-gradient-to-r from-healing-900 via-slate-900 to-quantum-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Our Uncompromising Fair-Fee Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Pay Only When You Perceive a Noticeable Physical Shift
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Sachin Karve believes true healing must be verifiable and client-centered. If after your 30-minute consultation you do not experience a discernible change, reduction in pain score, or release of tension, you are not charged.
              </p>
              <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-healing-400" />
                  <span>30 Minutes per Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-healing-400" />
                  <span>Zoom / Google Meet / WhatsApp Video</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gold-400" />
                  <span>Global: $50 USD (Subsidized Rates for India)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-center lg:items-end">
              <Button
                href="/quantum-healing-session"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto text-center gap-2 font-bold shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Session Now</span>
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="outline"
                size="md"
                className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp to Schedule</span>
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Phases of the session */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessionSteps.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:border-healing-300 hover:shadow-lg transition-all"
            >
              <div className="text-xs font-bold text-healing-700 uppercase tracking-wider mb-2">
                {s.step}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-serif">{s.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
