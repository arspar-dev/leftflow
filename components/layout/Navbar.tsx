"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { Button } from "@/components/ui";
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

  const navLinks = [
    { label: dict.nav.services, href: `/${locale}/#services` },
    { label: "Cases", href: `/${locale}/cases` },
    { label: dict.nav.industries, href: `/${locale}/#industries` },
    { label: "Insights", href: `/${locale}/blog` },
    { label: "Culture", href: `/${locale}/about` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathWithoutLocale = pathname.replace(/^\/(tr|en|nl)/, "") || "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-charcoal-200/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <AnimatedLogo locale={locale} variant={scrolled ? "dark" : "dark"} />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.includes('#') && pathname === `/${locale}`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-primary-500 bg-primary-50"
                      : "text-charcoal-600 hover:text-primary-500 hover:bg-charcoal-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Language + Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal-600 hover:text-primary-500 rounded-lg hover:bg-charcoal-50 transition-all"
              >
                <span>{localeFlags[locale]}</span>
                <span className="hidden sm:inline">{localeNames[locale]}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-charcoal-200 py-1 min-w-[140px] z-50"
                  >
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={`/${loc}${pathWithoutLocale}`}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                          loc === locale
                            ? "text-primary-500 bg-primary-50 font-medium"
                            : "text-charcoal-600 hover:text-primary-500 hover:bg-charcoal-50"
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

            <div className="hidden lg:block">
              <Button
                href={`/${locale}/contact`}
                size="sm"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                }
              >
                {dict.nav.cta}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-charcoal-100 transition-colors text-charcoal-700"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-charcoal-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-charcoal-600 hover:text-primary-500 rounded-lg hover:bg-charcoal-50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button href={`/${locale}/contact`} size="md" className="w-full">
                  {dict.nav.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
