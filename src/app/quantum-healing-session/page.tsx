import React from "react";
import type { Metadata } from "next";
import {
  Video,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  DollarSign,
  Heart,
  Sparkles,
  PhoneCall,
  Activity,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig, homeFaqs } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Book a Remote Quantum Healing Session | Sachin Karve",
  description:
    "Experience spontaneous relief from back pain, sciatica, migraines, and emotional distress in a 30-minute remote video session with Sachin Karve. Pay only after you feel a shift.",
};

const treatedConditions = [
  "Chronic Lower Back Pain & Lumbar Strain",
  "Sciatica & Radiating Nerve Pain",
  "Cervical Neck Stiffness & Frozen Shoulder",
  "Knee Joint Discomfort & Sports Sprains",
  "Severe Vascular Headaches & Chronic Migraines",
  "Digestive Discomfort & Irritable Bowel Strain",
  "Trapped Emotional Trauma & Grief",
  "Chronic Fatigue & Autonomic Exhaustion",
];

export default function QuantumHealingSessionPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-gradient-to-br from-healing-950 via-slate-900 to-quantum-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Zero Risk &bull; High Integrity</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
              One-on-One Remote Quantum Healing Sessions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Experience the restorative power of zero-point consciousness. Conducted via live video call while you rest in the comfort of your own home.
            </p>

            {/* Fair fee callout */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-2">
              <div className="text-gold-300 font-bold text-sm sm:text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Client-First Fair Fee Policy:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Fees ($50 USD globally / subsidized rates for India) are requested only when you notice a clear physical shift or relief during or immediately after the 30-minute session.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="gold"
                size="lg"
                className="w-full sm:w-auto font-bold gap-2 shadow-xl"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book via WhatsApp ({siteConfig.phone})</span>
              </Button>
              <Button
                href="#enquiry-form"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10"
              >
                <span>Submit Details Below</span>
              </Button>
            </div>
          </div>
        </div>

        {/* What to Expect & Conditions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                What Happens During a 30-Minute Video Session?
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  You will connect with Sachin Karve over Zoom, Google Meet, or WhatsApp video call. You will be seated or lying comfortably in a quiet room at your home.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-900 text-sm">1. Target Symptom Assessment:</span>
                    <p className="text-xs text-slate-600 mt-0.5">We discuss where you feel pain, stiffness, or emotional heaviness, and assign a number from 1 to 10.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-900 text-sm">2. Silent Consciousness Connection:</span>
                    <p className="text-xs text-slate-600 mt-0.5">Sachin enters the No-Mind state of zero-point stillness. You simply close your eyes, breathe naturally, and witness bodily sensations without resistance.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-900 text-sm">3. Physical Shift & Re-Check:</span>
                    <p className="text-xs text-slate-600 mt-0.5">As the quantum entrainment acts on the nervous system, you will test movement, bend, or stretch to observe immediate improvements in mobility and comfort.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conditions Box */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Conditions Commonly Addressed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {treatedConditions.map((cond, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-healing-600 shrink-0 mt-0.5" />
                    <span>{cond}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Scheduling Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6" id="enquiry-form">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-healing-700 uppercase tracking-wider">
                  Session Specifications
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                  Individual Consultation
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-bold text-slate-900">30 Minutes</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Format</span>
                  <span className="font-bold text-slate-900">Zoom / WhatsApp Video</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Standard Global Fee</span>
                  <span className="font-bold text-slate-900">$50 USD</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Fee Timing</span>
                  <span className="font-bold text-emerald-600">Pay After Session Shift</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Availability</span>
                  <span className="font-bold text-slate-900">All International Timezones</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={siteConfig.whatsappUrl}
                  external
                  variant="primary"
                  size="md"
                  className="w-full justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Schedule via WhatsApp Now</span>
                </Button>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 leading-relaxed border border-slate-100">
                💡 Need to book for a family member or pet? Remote sessions can also be arranged with a surrogate or directly via photograph and video call.
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Frequently Asked Questions About Sessions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm mb-2">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
