import React from "react";
import { HeroBannerSlider } from "@/components/home/HeroBannerSlider";
import { IntroQuantumHealing } from "@/components/home/IntroQuantumHealing";
import { AboutInstantHealing } from "@/components/home/AboutInstantHealing";
import { HealingBenefitsApproach } from "@/components/home/HealingBenefitsApproach";
import { QuantumHealingCourses } from "@/components/home/QuantumHealingCourses";
import { TherapySessionInfo } from "@/components/home/TherapySessionInfo";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Banner Slider */}
      <HeroBannerSlider />

      {/* 2. Introduction to Quantum Healing */}
      <IntroQuantumHealing />

      {/* 3. About Instant Healing Therapy */}
      <AboutInstantHealing />

      {/* 4. Healing benefits and approach */}
      <HealingBenefitsApproach />

      {/* 5. Quantum Healing courses */}
      <QuantumHealingCourses />

      {/* 6. Quantum Healing Therapy information */}
      <TherapySessionInfo />

      {/* 7. Client testimonials */}
      <ClientTestimonials />

      {/* 8. Contact CTA */}
      <ContactCTA />
    </div>
  );
}
