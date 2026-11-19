import React from "react";
import { Phone, Mail, Clock, Globe } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export const TopContactBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-healing-300 transition-colors"
              title="Call for appointments"
            >
              <Phone className="w-3.5 h-3.5 text-healing-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-healing-300 transition-colors"
              title="Email Sachin Karve"
            >
              <Mail className="w-3.5 h-3.5 text-healing-400" />
              <span>{siteConfig.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Remote Sessions via Video Call Worldwide</span>
            </div>
          </div>

          {/* Right info */}
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 text-[11px] bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
              <Globe className="w-3 h-3 text-healing-400" />
              <span>95+ Countries Served</span>
            </span>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-healing-300 hover:text-healing-200 font-medium hover:underline transition"
            >
              WhatsApp Us &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
