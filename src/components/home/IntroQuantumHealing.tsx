import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, Activity, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/Button";

const levels = [
  { level: "Layer 1", name: "Physical Organs & Tissues", desc: "The visible physical structure — muscles, bones, joints, and organs." },
  { level: "Layer 2", name: "Cellular Blueprint", desc: "Trillions of specialized cells constantly communicating and renewing." },
  { level: "Layer 3", name: "Molecular Chemistry", desc: "Neurotransmitters, hormones, and biochemical signaling molecules." },
  { level: "Layer 4", name: "Atomic Structure", desc: "Protons, neutrons, and electrons vibrating in resonant orbital pathways." },
  { level: "Layer 5", name: "Subatomic Waves", desc: "Quantum probabilities and energetic frequencies prior to material collapse." },
  { level: "Layer 6", name: "Pure Consciousness / Zero Point", desc: "The unconditioned stillness — the infinite intelligent field that births all creation." },
];

export const IntroQuantumHealing: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-50 text-quantum-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-quantum-600" />
            <span>The Science of Stillness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            What is Quantum Healing?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Quantum healing is an energy healing methodology rooted in the understanding that our physical biology is an outer projection of an underlying field of pure consciousness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Explanations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                When you try to solve chronic pain or illness only at the organ or cellular level using pills or mechanical force, you are working with the densest, slowest layer of reality.
              </p>
              <p>
                In Quantum Healing, the healer enters a profound state known as <strong className="text-slate-900">No-Mind (Zero Point Stillness)</strong>. In this state, mental chatter ceases, and the healer connects with the client at the deepest level — <strong className="text-slate-900">the Quantum Field of Pure Consciousness</strong>.
              </p>
              <p>
                Because this field contains the pristine energetic blueprint of health, the client&apos;s physical and nervous systems spontaneously synchronize with this coherent frequency, triggering rapid realignment without force.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-healing-50/60 border border-healing-100">
                <Activity className="w-6 h-6 text-healing-700 mb-2" />
                <h4 className="font-semibold text-slate-900 text-sm">Non-Invasive Alignment</h4>
                <p className="text-xs text-slate-600 mt-1">No needles, no medications, and no painful physical cracking.</p>
              </div>
              <div className="p-4 rounded-xl bg-quantum-50/60 border border-quantum-100">
                <HeartPulse className="w-6 h-6 text-quantum-700 mb-2" />
                <h4 className="font-semibold text-slate-900 text-sm">Addresses the Root</h4>
                <p className="text-xs text-slate-600 mt-1">Dissolves energetic tension and stored psychosomatic trauma.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/what-is-quantum-healing" variant="outline" size="md" className="gap-2">
                <span>Read Full Quantum Healing Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right: The 6 Layers breakdown */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-healing-400 uppercase tracking-wider">Metaphysical Blueprint</span>
                  <h3 className="text-xl font-bold font-serif text-white">The 6 Levels of the Human Being</h3>
                </div>
                <Layers className="w-6 h-6 text-healing-400" />
              </div>

              <div className="space-y-3">
                {levels.map((item, idx) => (
                  <div
                    key={item.level}
                    className={`p-3.5 rounded-xl border transition-all ${
                      idx === 5
                        ? "bg-healing-950/90 border-healing-500 shadow-lg shadow-healing-900/50"
                        : "bg-slate-800/60 border-slate-700/60 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-bold uppercase tracking-wider ${idx === 5 ? "text-healing-300" : "text-slate-400"}`}>
                        {item.level}
                      </span>
                      {idx === 5 && (
                        <span className="bg-gold-500/20 text-gold-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gold-400/30">
                          Where Instant Healing Occurs
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">{item.name}</div>
                    <div className="text-xs text-slate-300 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 text-center">
                Accessing Layer 6 influences all upper physical layers instantaneously.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
