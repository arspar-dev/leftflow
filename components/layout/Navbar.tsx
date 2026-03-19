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

const serviceCategories = {
  ai: {
    tr: "AI & Otomasyon",
    en: "AI & Automation",
    nl: "AI & Automatisering",
    items: [
      { slug: "ai-automation", tr: "AI Otomasyon", en: "AI Automation", nl: "AI Automatisering" },
      { slug: "chatbots-voice-agents", tr: "AI Chatbots & Sesli Asistanlar", en: "AI Chatbots & Voice Agents", nl: "AI Chatbots & Spraakassistenten" },
      { slug: "workflow-automation", tr: "Workflow Automation", en: "Workflow Automation", nl: "Workflow Automatisering" },
      { slug: "custom-ai-solutions", tr: "Özel AI Çözümleri", en: "Custom AI Solutions", nl: "Custom AI-oplossingen" },
    ],
  },
  sales: {
    tr: "Satış & Pazarlama",
    en: "Sales & Marketing",
    nl: "Sales & Marketing",
    items: [
      { slug: "b2b-sales-automation", tr: "B2B Sales Automation", en: "B2B Sales Automation", nl: "B2B Sales Automatisering" },
      { slug: "content-creation", tr: "Content Creation", en: "Content Creation", nl: "Content Creatie" },
    ],
  },
  web: {
    tr: "Website & E-Commerce",
    en: "Website & E-Commerce",
    nl: "Website & E-Commerce",
    items: [
      { slug: "corporate-website", tr: "Kurumsal Web Sitesi", en: "Corporate Website", nl: "Bedrijfswebsite" },
      { slug: "e-commerce-webshop", tr: "E-Commerce & Webshop", en: "E-Commerce & Webshop", nl: "E-Commerce & Webshop" },
    ],
  },
};

const industryItems = [
  { slug: "ecommerce", tr: "E-ticaret", en: "E-commerce", nl: "E-commerce" },
  { slug: "healthcare", tr: "Sağlık", en: "Healthcare", nl: "Gezondheidszorg" },
  { slug: "finance", tr: "Finans", en: "Finance", nl: "Financiën" },
  { slug: "manufacturing", tr: "Üretim", en: "Manufacturing", nl: "Productie" },
  { slug: "logistics", tr: "Lojistik", en: "Logistics", nl: "Logistiek" },
  { slug: "retail", tr: "Perakende", en: "Retail", nl: "Retail" },
  { slug: "real-estate", tr: "Emlak", en: "Real Estate", nl: "Vastgoed" },
  { slug: "education", tr: "Eğitim", en: "Education", nl: "Onderwijs" },
  { slug: "hr", tr: "İnsan Kaynakları", en: "Human Resources", nl: "Human Resources" },
];

export function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<"services" | "industries" | null>(null);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathWithoutLocale = pathname.replace(/^\/(tr|en|nl)/, "") || "/";
  const isHomepage = pathWithoutLocale === "/" || pathWithoutLocale === "";
  const isTransparent = isHomepage && !scrolled && !megaMenu;

  const handleMenuEnter = (menu: "services" | "industries") => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenu(menu);
  };

  const handleMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenu(null), 200);
  };

  // Mobile service expand
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <AnimatedLogo locale={locale} variant={isTransparent ? "light" : "dark"} />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services - Mega Menu Trigger */}
            <div
              onMouseEnter={() => handleMenuEnter("services")}
              onMouseLeave={handleMenuLeave}
              className="relative"
            >
              <Link
                href={`/${locale}/services`}
                className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-charcoal-950 hover:text-charcoal-600"
                }`}
              >
                {dict.nav.services}
                <svg className={`w-3.5 h-3.5 transition-transform ${megaMenu === "services" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Industries - Dropdown Trigger */}
            <div
              onMouseEnter={() => handleMenuEnter("industries")}
              onMouseLeave={handleMenuLeave}
              className="relative"
            >
              <span
                className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors cursor-pointer ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-charcoal-950 hover:text-charcoal-600"
                }`}
              >
                {dict.nav.industries}
                <svg className={`w-3.5 h-3.5 transition-transform ${megaMenu === "industries" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <Link
              href={`/${locale}/cases`}
              className={`px-4 py-2 text-[15px] font-medium transition-colors ${
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-charcoal-950 hover:text-charcoal-600"
              }`}
            >
              {(dict as any).nav?.cases || "Cases"}
            </Link>

            <Link
              href={`/${locale}/blog`}
              className={`px-4 py-2 text-[15px] font-medium transition-colors ${
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-charcoal-950 hover:text-charcoal-600"
              }`}
            >
              {(dict as any).nav?.insights || "Insights"}
            </Link>

            <Link
              href={`/${locale}/about`}
              className={`px-4 py-2 text-[15px] font-medium transition-colors ${
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-charcoal-950 hover:text-charcoal-600"
              }`}
            >
              {(dict as any).nav?.culture || "Culture"}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Contact CTA */}
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

            {/* Mobile Hamburger */}
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

      {/* Mega Menu - Services */}
      <AnimatePresence>
        {megaMenu === "services" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => handleMenuEnter("services")}
            onMouseLeave={handleMenuLeave}
            className="absolute left-0 right-0 bg-white shadow-xl border-t border-charcoal-100"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-8">
              <div className="grid grid-cols-3 gap-8">
                {(Object.keys(serviceCategories) as Array<keyof typeof serviceCategories>).map((catKey) => {
                  const cat = serviceCategories[catKey];
                  return (
                    <div key={catKey}>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-4">
                        {cat[locale]}
                      </h3>
                      <ul className="space-y-1">
                        {cat.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/${locale}/services/${item.slug}`}
                              onClick={() => setMegaMenu(null)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-950 transition-colors group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {item[locale]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-6 border-t border-charcoal-100">
                <Link
                  href={`/${locale}/services`}
                  onClick={() => setMegaMenu(null)}
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {(dict as any).services?.viewAll || "View all services"} →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown - Industries */}
      <AnimatePresence>
        {megaMenu === "industries" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => handleMenuEnter("industries")}
            onMouseLeave={handleMenuLeave}
            className="absolute left-0 right-0 bg-white shadow-xl border-t border-charcoal-100"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-8">
              <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                {industryItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/industries/${item.slug}`}
                    onClick={() => setMegaMenu(null)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-950 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item[locale]}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-charcoal-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {/* Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-[15px] font-medium text-charcoal-950 border-b border-charcoal-100"
              >
                {dict.nav.services}
                <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-2 space-y-1">
                      {(Object.keys(serviceCategories) as Array<keyof typeof serviceCategories>).map((catKey) => {
                        const cat = serviceCategories[catKey];
                        return (
                          <div key={catKey} className="mb-3">
                            <p className="text-xs font-bold uppercase tracking-wider text-charcoal-400 py-2">
                              {cat[locale]}
                            </p>
                            {cat.items.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/${locale}/services/${item.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-charcoal-600 hover:text-charcoal-950"
                              >
                                {item[locale]}
                              </Link>
                            ))}
                          </div>
                        );
                      })}
                      <Link
                        href={`/${locale}/services`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm font-medium text-primary-600"
                      >
                        {(dict as any).services?.viewAll || "View all services"} →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Industries Accordion */}
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between w-full py-3 text-[15px] font-medium text-charcoal-950 border-b border-charcoal-100"
              >
                {dict.nav.industries}
                <svg className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {mobileIndustriesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-2 space-y-1">
                      {industryItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${locale}/industries/${item.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-charcoal-600 hover:text-charcoal-950"
                        >
                          {item[locale]}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Direct Links */}
              <Link
                href={`/${locale}/cases`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[15px] font-medium text-charcoal-950 border-b border-charcoal-100"
              >
                {(dict as any).nav?.cases || "Cases"}
              </Link>
              <Link
                href={`/${locale}/blog`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[15px] font-medium text-charcoal-950 border-b border-charcoal-100"
              >
                {(dict as any).nav?.insights || "Insights"}
              </Link>
              <Link
                href={`/${locale}/about`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[15px] font-medium text-charcoal-950 border-b border-charcoal-100"
              >
                {(dict as any).nav?.culture || "Culture"}
              </Link>

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
