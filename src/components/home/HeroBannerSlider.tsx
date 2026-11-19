"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, BookOpen, Video, Heart, Star, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteData";

// Three official HealSphere banner artworks
const BANNERS = [
  {
    id: "healsphere-banner-1",
    src: "/images/banners/healsphere-banner-1.png",
    alt: "HealSphere - Lavender and pink mountain landscape with glowing lotus and celestial flowing light",
  },
  {
    id: "healsphere-banner-2",
    src: "/images/banners/healsphere-banner-2.png",
    alt: "HealSphere - Golden and cream spiritual wellness background with illuminated lotus and sacred geometric patterns",
  },
  {
    id: "healsphere-banner-3",
    src: "/images/banners/healsphere-banner-3.png",
    alt: "HealSphere - White lotus with sage-green and cream glowing energy and expansive sacred geometry",
  },
];

export const HeroBannerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Check for reduced motion preference & trigger subtle initial entrance
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      setHasLoaded(true);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Automatic 5-second infinite slider transition (1.5-second crossfade)
  useEffect(() => {
    if (isReducedMotion) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isReducedMotion]);

  return (
    <section
      aria-label="HealSphere Hero Banner"
      className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] flex items-center border-b border-slate-100"
    >
      {/* =========================================================================
          BACKGROUND IMAGE SLIDER (Zero Slider Controls: Pure Background Crossfade)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        {BANNERS.map((banner, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={banner.id}
              className={`absolute inset-0 w-full h-full transition-opacity ease-in-out ${
                isReducedMotion ? "duration-0" : "duration-[1500ms]"
              } ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              aria-hidden={!isActive}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center lg:object-[center_right]"
                quality={95}
              />
            </div>
          );
        })}

        {/* Ambient Subtle Readability Gradient Overlay */}
        {/* Left: Soft white/cream 85-92% opacity, tapering smoothly toward the right to showcase the lotus */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-white/92 via-white/80 to-white/30 sm:from-white/90 sm:via-white/70 sm:to-white/20 lg:from-white/92 lg:via-white/60 lg:to-transparent pointer-events-none" />

        {/* Top and bottom subtle blending vignette */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-white/30 via-transparent to-white/60 pointer-events-none" />
      </div>

      {/* =========================================================================
          STATIONARY HERO CONTENT (Layout 3 - Refined Premium Design)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full py-12 sm:py-16 lg:py-20">
        <div
          className={`max-w-[650px] text-left transition-all duration-700 ease-out ${
            isReducedMotion || hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {/* 3. Hero Introduction Badge */}
          <div className="mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-healing-200/90 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-healing-700 shrink-0" />
              <span className="text-healing-800 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                HealSphere &bull; Energy Healing
              </span>
            </div>
          </div>

          {/* 4. Main Hero Headline */}
          <h1 className="font-serif font-bold text-slate-900 tracking-tight leading-[1.08] sm:leading-[1.12] text-[34px] sm:text-[46px] lg:text-[56px] xl:text-[62px]">
            Experience Healing Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-700 via-teal-600 to-quantum-600">
              Inner Consciousness
            </span>
          </h1>

          {/* 5. Hero Description */}
          <p className="mt-5 sm:mt-6 text-slate-600 text-base sm:text-[17px] lg:text-[18px] leading-relaxed max-w-[580px]">
            Discover guided healing experiences and courses designed to support your personal wellness journey.
          </p>

          {/* 6. Primary CTA Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Link
              href="/quantum-healing-session"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-medium text-white bg-healing-700 hover:bg-healing-800 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book a Remote Session</span>
            </Link>
            <Link
              href="/learn-quantum-healing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-medium text-healing-800 bg-white/85 hover:bg-white border border-healing-700/80 hover:border-healing-700 shadow-2xs hover:shadow-sm transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Explore Masterclasses</span>
            </Link>
          </div>

          {/* 7. Supporting Benefit Row */}
          <div className="mt-7 sm:mt-8 pt-6 border-t border-slate-200/70">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="inline-flex items-center gap-2">
                <Video className="w-4 h-4 text-healing-700 shrink-0" />
                <span>Online Consultations</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-healing-700 shrink-0" />
                <span>Healing Courses</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-healing-700 shrink-0" />
                <span>Holistic Wellness</span>
              </div>
            </div>

            {/* 8. Refined Verified Trust Strip */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <div className="inline-flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-700">4.9 / 5 Rating</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">&bull;</span>
              <div className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-healing-700 shrink-0" />
                <span>{siteConfig.stats.studentsTrained} Students Worldwide</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">&bull;</span>
              <div>
                <span>{siteConfig.stats.countriesReached} Countries Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
