"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar, MessageSquare } from "lucide-react";
import { headerNavLinks, siteConfig } from "@/data/siteData";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setLearnDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-sm border-b border-slate-200/80 bg-white/95 backdrop-blur-md"
          : "border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-[84px] gap-2 lg:gap-4 xl:gap-6">
          {/* SECTION 1 - LEFT: Vertically stacked HealSphere logo */}
          <div className="shrink-0 flex items-center">
            <Logo />
          </div>

          {/* SECTION 2 - CENTER: Six clean navigation links */}
          <nav className="hidden lg:flex items-center justify-center space-x-0.5 xl:space-x-1 flex-1 px-1 xl:px-3">
            {headerNavLinks.map((item) => {
              const isActive = pathname === item.href;

              if (item.subLinks) {
                const isSubActive = item.subLinks.some((sub) => pathname === sub.href);
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setLearnDropdownOpen(true)}
                    onMouseLeave={() => setLearnDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                        isSubActive
                          ? "text-healing-700 bg-healing-50 font-semibold"
                          : "text-slate-700 hover:text-healing-700 hover:bg-slate-50"
                      }`}
                      aria-expanded={learnDropdownOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          learnDropdownOpen ? "rotate-180 text-healing-700" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 z-50 ${
                        learnDropdownOpen
                          ? "opacity-100 visible translate-y-1"
                          : "opacity-0 invisible pointer-events-none -translate-y-2"
                      }`}
                    >
                      <div className="px-3.5 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                        Educational Masterclasses
                      </div>
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-3 transition-colors ${
                            pathname === sub.href
                              ? "bg-healing-50 text-healing-800"
                              : "hover:bg-slate-50 text-slate-700 hover:text-healing-700"
                          }`}
                        >
                          <div className="text-sm font-semibold">{sub.name}</div>
                          {sub.description && (
                            <div className="text-xs text-slate-500 mt-0.5">{sub.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-healing-700 bg-healing-50 font-semibold"
                      : "text-slate-700 hover:text-healing-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* SECTION 3 - RIGHT: Book Session and Direct WhatsApp buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <Button
              href="/quantum-healing-session"
              variant="outline"
              size="sm"
              className="gap-1.5 whitespace-nowrap text-xs font-semibold border-healing-700 text-healing-800 hover:bg-healing-50 px-2.5 xl:px-3"
            >
              <Calendar className="w-3.5 h-3.5 text-healing-700" />
              <span>Book Session</span>
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              external
              variant="gold"
              size="sm"
              className="gap-1.5 whitespace-nowrap text-xs font-bold px-2.5 xl:px-3"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp</span>
            </Button>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/quantum-healing-session"
              variant="outline"
              size="sm"
              className="text-xs px-2.5 py-1.5 font-semibold"
            >
              Book
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-healing-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-healing-500 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-50 overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 py-4 space-y-1 flex-1">
              {headerNavLinks.map((item) => {
                const isActive = pathname === item.href;

                if (item.subLinks) {
                  return (
                    <div key={item.name} className="py-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
                        {item.name}
                      </div>
                      <div className="space-y-1 pl-2">
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              pathname === sub.href
                                ? "bg-healing-50 text-healing-800 font-semibold"
                                : "text-slate-700 hover:bg-slate-50 hover:text-healing-700"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-healing-50 text-healing-800 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-healing-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <Button
                href="/quantum-healing-session"
                variant="primary"
                size="md"
                className="w-full justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Session</span>
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="gold"
                size="md"
                className="w-full justify-center gap-2 font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
