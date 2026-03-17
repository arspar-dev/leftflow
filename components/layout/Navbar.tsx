"use client";

import { useState, useEffect, useRef } from "react";
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  const serviceLabels = (dict as any).nav?.serviceItems || [
    "Content Generation", "AI Agent Development", "Workflow Automation", "LLM Development", "Data & Intelligence"
  ];
  const serviceItems = [
    { label: serviceLabels[0], href: "/#services" },
    { label: serviceLabels[1], href: "/#services" },
    { label: serviceLabels[2], href: "/#services" },
    { label: serviceLabels[3], href: "/#services" },
    { label: serviceLabels[4], href: "/data-intelligence" },
  ];

  const industryLabels = (dict as any).nav?.industryItems || [
    "E-commerce", "Healthcare", "Finance", "Manufacturing", "Logistics", "Retail"
  ];
  const industryItems = [
    { label: industryLabels[0], href: "/industries/ecommerce" },
    { label: industryLabels[1], href: "/industries/healthcare" },
    { label: industryLabels[2], href: "/industries/finance" },
    { label: industryLabels[3], href: "/industries/manufacturing" },
    { label: industryLabels[4], href: "/industries/logistics" },
    { label: industryLabels[5], href: "/industries/retail" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const pathWithoutLocale = pathname.replace(/^\/(tr|en|nl)/, "") || "/";

  const navLinks = [
    { label: dict.nav.services, href: `/${locale}/#services`, hasDropdown: true, dropdownType: "services" as const },
    { label: dict.nav.industries, href: `/${locale}/#industries`, hasDropdown: true, dropdownType: "industries" as const },
    { label: (dict as any).nav?.insights || "Insights", href: `/${locale}/blog` },
    { label: (dict as any).nav?.cases || "Cases", href: `/${locale}/cases` },
    { label: (dict as any).nav?.culture || "Culture", href: `/${locale}/about` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-charcoal-200"
          : "bg-white"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <AnimatedLogo locale={locale} variant="dark" />

          {/* Desktop Nav - centered */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isServices = link.dropdownType === "services";
                const isOpen = isServices ? servicesOpen : industriesOpen;
                const setOpen = isServices ? setServicesOpen : setIndustriesOpen;
                const items = isServices ? serviceItems : industryItems;
                const ref = isServices ? servicesRef : industriesRef;

                return (
                  <div key={link.href} className="relative" ref={ref}>
                    <button
                      onClick={() => setOpen(!isOpen)}
                      className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-charcoal-950 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-charcoal-200 py-2 min-w-[240px] z-50"
                        >
                          {items.map((item) => (
                            <Link
                              key={item.label}
                              href={`/${locale}${item.href}`}
                              onClick={() => setOpen(false)}
                              className="block px-5 py-2.5 text-[14px] text-charcoal-700 hover:text-primary-500 hover:bg-charcoal-50 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[15px] font-medium text-charcoal-950 hover:text-primary-500 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA + Lang + Mobile */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href={`/${locale}/contact`}
              className="hidden lg:inline-flex btn-hh text-sm"
            >
              {dict.nav.cta}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal-700 hover:text-primary-500 transition-colors"
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
                            ? "text-primary-500 font-medium bg-charcoal-50"
                            : "text-charcoal-700 hover:text-primary-500 hover:bg-charcoal-50"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-charcoal-950"
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

      {/* Mobile Menu */}
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
                  className="block py-3 text-[15px] font-medium text-charcoal-950 hover:text-primary-500 border-b border-charcoal-100"
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
