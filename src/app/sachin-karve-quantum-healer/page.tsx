import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  BookOpen,
  Users,
  Sparkles,
  Heart,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Sachin Karve | Quantum Healer, Corporate Trainer & Author",
  description:
    "Learn about Sachin Karve's background in engineering, 25+ years in spiritual awakening, and his mission to demystify energy healing through Instant Healing Therapy.",
};

const careerMilestones = [
  {
    year: "Academic Foundations",
    title: "Mechanical Engineering & MBA Marketing (Mumbai University)",
    desc: "Rigorous analytical training providing the foundation for viewing human physiology through physics, thermodynamics, and systems dynamics.",
  },
  {
    year: "Corporate Leadership",
    title: "20+ Years in Engineering Design & Corporate Training",
    desc: "Conducted behavioral, leadership, and human potential training programs for premier multinational corporations across India.",
  },
  {
    year: "Spiritual Awakening",
    title: "Over 25 Years of Conscious Inquiry",
    desc: "A life-altering spiritual awakening catalyzed decades of deep meditation, studying Vedic philosophies, Advaita Vedanta, and non-dual stillness.",
  },
  {
    year: "2016 Turning Point",
    title: "Discovery of Instant Quantum Shifting",
    desc: "Entering profound, extended phases of inner zero-point stillness, Sachin uncovered how pure awareness spontaneously realigns distorted bodily tissues.",
  },
  {
    year: "Present Day",
    title: "Global Teaching & Remote Therapy Practice",
    desc: "Empowered 40,000+ students across 95+ countries through masterclasses, author of 'Instant Healing for Self and Others', and conducting international video therapy sessions.",
  },
];

export default function SachinKarveProfilePage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Hero */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Sachin Karve - Quantum Healer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-healing-300">
                    Energy Healer & Author
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-white mt-0.5">
                    Sachin Karve
                  </h2>
                  <p className="text-xs text-slate-300">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Profile Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-healing-100 text-healing-800 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-healing-600" />
                <span>Founder & Master Teacher</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight">
                Sachin Karve
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Bridging analytical precision with timeless meditative presence. Sachin Karve has dedicated over two decades to exploring how human consciousness interacts with biological matter to produce spontaneous healing.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-100">
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 font-serif">40K+</div>
                  <div className="text-xs text-slate-500">Students Taught</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 font-serif">95+</div>
                  <div className="text-xs text-slate-500">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 font-serif">25+</div>
                  <div className="text-xs text-slate-500">Years Meditating</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-emerald-600 font-serif">4.9/5</div>
                  <div className="text-xs text-slate-500">Average Rating</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button href="/quantum-healing-session" variant="primary" size="lg" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book a Personal Session</span>
                </Button>
                <Button href="/book-on-quantum-healing" variant="outline" size="lg">
                  <span>Explore His Amazon E-Book</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Detailed Biography Text */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6 text-slate-700 leading-relaxed text-base">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              The Journey from Engineering to Quantum Healing
            </h2>

            <p>
              Sachin Karve began his professional life firmly rooted in empirical science. Earning a degree in Mechanical Engineering followed by an MBA in Marketing from Mumbai University, he built a successful corporate career spanning engineering design, executive management, and corporate leadership training.
            </p>

            <p>
              However, beneath his professional achievements lay a passionate spiritual quest. Over 25 years ago, a spontaneous spiritual awakening dramatically shifted his perception of physical reality. He realized that the human mind is merely an instrument, and that beneath thought lies an unfathomable ocean of silent stillness.
            </p>

            <div className="bg-slate-50 border-l-4 border-healing-600 p-6 rounded-r-2xl my-6">
              <Quote className="w-8 h-8 text-healing-400 mb-2" />
              <p className="font-serif italic text-slate-800 text-lg leading-relaxed">
                &ldquo;Healing is not something the healer does to the recipient. Healing is what naturally takes place when the noisy analytical mind steps out of the way and allows pure consciousness to do what it has always known how to do.&rdquo;
              </p>
              <div className="mt-2 text-xs font-bold text-healing-800 uppercase tracking-wider">
                &mdash; Sachin Karve
              </div>
            </div>

            <p>
              Around 2016, during extended periods of meditation in which he inhabited the &quot;No-Mind&quot; state for days at a time, Sachin began noticing that when friends or colleagues with acute physical pain sat near him, their symptoms dissolved rapidly. Severe back spasms unlocked, knee stiffness vanished, and migraine pressure cleared within minutes.
            </p>

            <p>
              Applying his engineering rigor, Sachin investigated why this occurred. He codified the reproducible mechanics of quantum entrainment, formulating the Triangulation technique and establishing Instant Healing Therapy. Today, he conducts remote therapy consultations globally and trains students across the world to realize their own innate healing capacity.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                Milestones & Evolution
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                A Life of Synthesis
              </h3>

              <div className="space-y-6 relative border-l border-slate-700 ml-2 pl-4">
                {careerMilestones.map((m, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-healing-400 ring-4 ring-slate-900" />
                    <span className="text-[11px] font-bold uppercase text-healing-300">
                      {m.year}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{m.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
