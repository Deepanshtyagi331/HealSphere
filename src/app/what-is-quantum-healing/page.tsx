import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Layers, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "What is Quantum Healing? The Science of No-Mind & Stillness",
  description:
    "Explore the foundations of Quantum Healing by Sachin Karve. Learn how accessing the Zero Point field of pure consciousness triggers rapid physical and emotional self-repair.",
};

const comparisons = [
  {
    modality: "Conventional Medicine",
    level: "Layer 1 (Physical Organs & Chemistry)",
    approach: "Treats symptoms via pharmacological substances or mechanical surgical intervention.",
    speed: "Depends on biological turnover (weeks or months).",
  },
  {
    modality: "Traditional Energy Modalities (Reiki/Pranic)",
    level: "Layer 4 & 5 (Aura, Meridians, Chakras)",
    approach: "Channels external universal life-force energy or sweeps auric fields with specific intention.",
    speed: "Gradual energetic rebalancing over multiple sessions.",
  },
  {
    modality: "Quantum Healing (Instant Healing Therapy)",
    level: "Layer 6 (Pure Consciousness / Zero-Point)",
    approach: "Resting in the unconditioned stillness of No-Mind where the body's natural matrix auto-corrects.",
    speed: "Spontaneous shifts observed within minutes during session.",
  },
];

export default function WhatIsQuantumHealingPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-quantum-100 text-quantum-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-quantum-600" />
            <span>Core Philosophical Foundation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            What is Quantum Healing?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Understanding the physics of pure awareness, the zero-point state of No-Mind, and how human physiology realigns when freed from energetic resistance.
          </p>
        </div>

        {/* Content Section: Detailed Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              The Reality Beyond the Physical Form
            </h2>

            <p>
              When we gaze at our bodies in the mirror, we perceive solid bones, muscles, skin, and organs. In modern biology, however, we know that these tissues are composed of cells; cells are formed of molecules; molecules are made of atoms; and atoms are composed of subatomic particles which are, in essence, vibrating packets of wave-energy.
            </p>

            <p>
              At the deepest root of quantum physics lies the <strong className="text-slate-900">Zero-Point Field</strong> — an ocean of infinite potential energy and consciousness from which every material particle emerges.
            </p>

            <div className="bg-healing-50 border-l-4 border-healing-600 p-6 rounded-r-2xl my-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">The Concept of &quot;No-Mind&quot;</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                In Sanskrit and Zen traditions, this is called the state of <em>Sunyata</em> or emptiness. In modern terms, it is simply pure conscious awareness devoid of conceptual judgment, doubt, fear, or mental manipulation. In the state of No-Mind, there is zero resistance.
              </p>
            </div>

            <h3 className="text-xl font-bold font-serif text-slate-900 pt-2">
              Why Does Healing Occur Instantly?
            </h3>
            <p>
              Disease, chronic inflammation, and physical pain are manifestations of concentrated tension and energetic resistance. The nervous system becomes trapped in a perpetual loop of alarm.
            </p>
            <p>
              When a certified quantum healer accesses the zero-point state while placing subtle attention on the client&apos;s physical blueprint, a phenomenon called <strong className="text-slate-900">Quantum Entrainment</strong> occurs. Just as two pendulum clocks mounted on the same wall naturally synchronize their swing to the stronger rhythm, the client&apos;s disturbed energetic state harmonizes with the coherent silence of the zero-point field.
            </p>

            <h3 className="text-xl font-bold font-serif text-slate-900 pt-2">
              Non-Locality and Remote Video Healing
            </h3>
            <p>
              A common question from newcomers is: <em>&ldquo;How can you heal someone thousands of miles away over Zoom or WhatsApp?&rdquo;</em>
            </p>
            <p>
              In quantum mechanics, this is supported by <strong className="text-slate-900">Quantum Entanglement</strong>. At the level of pure consciousness, distance and time are not physical barriers. Just as a thought in your mind can encompass a distant galaxy in a microsecond, the quantum field connects all living organisms instantaneously.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/quantum-healing-session" variant="primary" size="md">
                <span>Book a Remote Healing Session</span>
              </Button>
              <Button href="/learn-quantum-healing" variant="outline" size="md">
                <span>Learn How to Heal Others</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Key Takeaways & Fact Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
              <span className="text-xs font-bold text-healing-400 uppercase tracking-widest">
                Quick Facts
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Core Principles of Quantum Healing
              </h3>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-healing-400 shrink-0 mt-0.5" />
                  <span>The body has innate wisdom and always seeks equilibrium.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-healing-400 shrink-0 mt-0.5" />
                  <span>No physical force, cracking, or invasive tools needed.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-healing-400 shrink-0 mt-0.5" />
                  <span>The healer acts as a coherent zero-point anchor.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-healing-400 shrink-0 mt-0.5" />
                  <span>Works across any physical distance via video call.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Developed & Taught by <strong className="text-white">Sachin Karve</strong>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-1" />
              <h4 className="font-bold text-slate-900 text-base font-serif">Safe & Complementary</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quantum healing does not interfere with medicines, physical therapy, or surgical recoveries. It accelerates the body&apos;s natural bio-energetic repair mechanisms.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              How Quantum Healing Compares to Other Modalities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              A clear side-by-side analysis of depth, approach, and observed response times.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-900 uppercase tracking-wider bg-slate-50">
                  <th className="py-4 px-6">Modality</th>
                  <th className="py-4 px-6">Primary Level of Action</th>
                  <th className="py-4 px-6">Core Methodology</th>
                  <th className="py-4 px-6">Typical Shift Timing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx === 2 ? "bg-healing-50/60 font-medium" : "hover:bg-slate-50/50"}
                  >
                    <td className="py-4 px-6 font-bold text-slate-900">{row.modality}</td>
                    <td className="py-4 px-6 text-slate-700">{row.level}</td>
                    <td className="py-4 px-6 text-slate-600">{row.approach}</td>
                    <td className="py-4 px-6 text-slate-900">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
