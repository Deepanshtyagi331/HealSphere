import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Sparkles, Send } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { Button } from "@/components/ui/Button";
import { FooterContactForm } from "@/components/forms/FooterContactForm";

export const metadata: Metadata = {
  title: "Contact Sachin Karve | Instant Healing Therapy",
  description:
    "Get in touch with Sachin Karve for quantum healing session bookings, course inquiries, or wellness questions. Reach out via phone, WhatsApp, or contact form.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-healing-100 text-healing-800 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-healing-600" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Contact Sachin Karve & Instant Healing
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions regarding an upcoming remote session, our certified video masterclasses, or severe chronic pain? We are here to support your healing journey.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: WhatsApp & Phone */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">Phone & WhatsApp</h3>
              <p className="text-xs text-slate-500 mt-1">Direct inquiries & fast scheduling</p>
              <div className="mt-4">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="text-lg font-bold text-slate-900 hover:text-healing-700 transition"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <Button
              href={siteConfig.whatsappUrl}
              external
              variant="gold"
              size="md"
              className="w-full justify-center gap-2 font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </Button>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-healing-100 text-healing-700 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">Email Address</h3>
              <p className="text-xs text-slate-500 mt-1">Detailed case histories & enquiries</p>
              <div className="mt-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-healing-700 transition break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition text-center"
            >
              Send an Email
            </a>
          </div>

          {/* Card 3: Global Remote Hours */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-quantum-100 text-quantum-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">Global Flexibility</h3>
              <p className="text-xs text-slate-500 mt-1">Serving clients worldwide</p>
              <div className="mt-4 text-xs text-slate-600 space-y-1">
                <div>&bull; India (IST)</div>
                <div>&bull; USA & Canada (EST, CST, PST)</div>
                <div>&bull; UK & Europe (GMT, CET)</div>
                <div>&bull; Australia & New Zealand (AEST)</div>
              </div>
            </div>
            <div className="text-xs text-slate-400 bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              Available 7 days by prior appointment
            </div>
          </div>
        </div>

        {/* Form and Details Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-healing-700 uppercase tracking-wider">
                Consultation Enquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                Send Us Your Health or Course Question
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fill in the form to send an instant message directly to Sachin Karve. Please include any relevant details regarding symptoms, pain duration, or previous treatments.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict confidentiality observed for all medical questions.</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>No obligation &bull; Fair fee guarantee on all live sessions.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FooterContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
