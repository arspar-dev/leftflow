"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { type Locale, locales, localeNames, localeFlags } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathWithoutLocale = pathname.replace(/^\/(tr|en|nl)/, "") || "/";
  const isHomepage = pathWithoutLocale === "/" || pathWithoutLocale === "";

  // HH style: transparent navbar over dark hero on homepage
  const isTransparent = isHomepage && !scrolled;

  const navLinks = [
    { label: dict.nav.services, href: `/${locale}/#services` },
    { label: dict.nav.industries, href: `/${locale}/#industries` },
    { label: (dict as any).nav?.cases || "Cases", href: `/${locale}/cases` },
    { label: (dict as any).nav?.insights || "Insights", href: `/${locale}/blog` },
    { label: (dict as any).nav?.culture || "Culture", href: `/${locale}/about` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <AnimatedLogo locale={locale} variant={isTransparent ? "light" : "dark"} />

          {/* Desktop Nav - simple text links like HH */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[15px] font-medium transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-charcoal-950 hover:text-charcoal-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Contact CTA - HH style: bordered on transparent, filled on white */}
            <Link
              href={`/${locale}/contact`}
              className={`hidden lg:inline-flex items-center px-5 py-2 text-sm font-medium transition-all ${
                isTransparent
                  ? "border border-white text-white hover:bg-white hover:text-charcoal-950"
                  : "btn-hh"
              }`}
            >
              {dict.nav.cta}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-charcoal-700 hover:text-charcoal-950"
                }`}
              >
                <span>{localeFlags[locale]}</span>
                <span className="hidden sm:inline text-xs uppercase">{locale}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-charcoal-200 py-1 min-w-[140px] z-50"
                  >
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={`/${loc}${pathWithoutLocale}`}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                          loc === locale
                            ? "text-charcoal-950 font-medium bg-charcoal-50"
                            : "text-charcoal-700 hover:text-charcoal-950 hover:bg-charcoal-50"
                        }`}
                      >
                        <span>{localeFlags[loc]}</span>
                        <span>{localeNames[loc]}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${isTransparent ? "text-white" : "text-charcoal-950"}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-charcoal-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-[15px] font-medium text-charcoal-950 border-b border-charcoal-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href={`/${locale}/contact`} className="btn-hh w-full justify-center text-sm">
                  {dict.nav.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
