import React from "react";
import {
  ShieldCheck,
  Zap,
  Heart,
  Activity,
  Compass,
  Smile,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Spinal & Back Pain Relief",
    desc: "Spontaneous unwinding of tight postural ligaments, easing sciatica, lumbar stiffness, and disc discomfort without forceful cracking.",
  },
  {
    icon: Activity,
    title: "Migraine & Headache Resolution",
    desc: "Disperses cranial vascular pressure and upper cervical tension, breaking chronic pain cycles gently and naturally.",
  },
  {
    icon: Heart,
    title: "Emotional Trauma Dissolution",
    desc: "Clears trapped emotional charge, grief, and chronic anxiety stored in neuromuscular fascia without traumatic re-living.",
  },
  {
    icon: Compass,
    title: "Joint & Muscular Rehabilitation",
    desc: "Supports rapid recovery for frozen shoulders, twisted knees, sports sprains, and restricted joint ranges of motion.",
  },
  {
    icon: ShieldCheck,
    title: "Autonomic Nervous Reset",
    desc: "Transfers the body from sympathetic fight-or-flight into parasympathetic deep restoration in a matter of minutes.",
  },
  {
    icon: Smile,
    title: "Zero Invasiveness or Side Effects",
    desc: "A completely safe, drug-free energetic modality that supports and complements your conventional medical care.",
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Awareness & Sensation",
    desc: "We locate the exact region of pain or emotional tension without resistance, judgment, or anxiety.",
  },
  {
    step: "02",
    title: "Entering No-Mind",
    desc: "The healer quiets analytical thought, resting effortlessly in the Zero Point field of pure consciousness.",
  },
  {
    step: "03",
    title: "Triangulation Resonance",
    desc: "By holding two points of observation connected to pure awareness, high coherence entrains dense physical tension.",
  },
  {
    step: "04",
    title: "Spontaneous Unwinding",
    desc: "The body releases stored defense patterns. Clients experience warmth, tingling, and immediate structural ease.",
  },
];

export const HealingBenefitsApproach: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-healing-50 text-healing-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-healing-600" />
            <span>Proven Modality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Healing Benefits & Our Unique Approach
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Instant Healing Therapy does not combat disease; it establishes a coherent energetic environment where your body remembers its natural state of harmony.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-healing-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-healing-100 text-healing-700 flex items-center justify-center mb-4 group-hover:bg-healing-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* The 4-Step Healing Approach Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-healing-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Methodology Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mt-1">
              How the Quantum Shift Unfolds in Minutes
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Rooted in quantum physics, entrainment, and deep meditative presence — here is how an Instant Healing session proceeds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step) => (
              <div
                key={step.step}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 relative hover:border-healing-500/80 transition-colors"
              >
                <div className="text-3xl font-extrabold font-serif text-healing-400 mb-2">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Conducted comfortably in your home via video call.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No physical contact required. Works across all continents.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
