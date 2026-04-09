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
  const [megaMenu, setMegaMenu] = useState<"industries" | null>(null);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathWithoutLocale = pathname.replace(/^\/(tr|en|nl)/, "") || "/";
  const isHomepage = pathWithoutLocale === "/" || pathWithoutLocale === "";
  const hasVideoHero =
    isHomepage ||
    pathWithoutLocale.startsWith("/services/") ||
    pathWithoutLocale === "/advisory" ||
    pathWithoutLocale === "/systems" ||
    pathWithoutLocale.startsWith("/systems/");
  const isTransparent = hasVideoHero && !scrolled && !megaMenu;

  const handleMenuEnter = (menu: "industries") => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenu(menu);
  };

  const handleMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenu(null), 200);
  };

  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const navExtra = (dict as any).navExtra || {};
  const navLinkClass = isTransparent
    ? "text-white/80 hover:text-white"
    : "text-black/70 hover:text-black";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-black/5"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between h-[72px]">
          <AnimatedLogo locale={locale} variant={isTransparent ? "light" : "dark"} />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href={`/${locale}/advisory`}
              className={`px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors ${navLinkClass}`}
            >
              {navExtra.advisory || "Advisory"}
            </Link>

            <Link
              href={`/${locale}/systems`}
              className={`px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors ${navLinkClass}`}
            >
              {navExtra.systems || "Systems"}
            </Link>

            <Link
              href={`/${locale}/cases`}
              className={`px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors ${navLinkClass}`}
            >
              {(dict as any).nav?.cases || "Cases"}
            </Link>

            {/* Industries */}
            <div
              onMouseEnter={() => handleMenuEnter("industries")}
              onMouseLeave={handleMenuLeave}
              className="relative"
            >
              <span
                className={`flex items-center gap-1 px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors cursor-pointer ${navLinkClass}`}
              >
                {dict.nav.industries}
                <svg
                  className={`w-3 h-3 transition-transform ${
                    megaMenu === "industries" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <Link
              href={`/${locale}/about`}
              className={`px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors ${navLinkClass}`}
            >
              {(dict as any).nav?.culture || "Culture"}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Contact CTA */}
            <Link
              href={`/${locale}/contact`}
              className={`hidden lg:inline-flex items-center px-5 py-2 text-[0.8125rem] font-medium transition-all ${
                isTransparent
                  ? "border border-white/30 text-white hover:bg-white hover:text-black"
                  : "bg-black text-white hover:bg-black/85"
              }`}
            >
              {dict.nav.cta}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[0.8125rem] font-medium transition-colors ${
                  isTransparent ? "text-white/70 hover:text-white" : "text-black/50 hover:text-black"
                }`}
              >
                <span>{localeFlags[locale]}</span>
                <span className="hidden sm:inline text-xs uppercase tracking-wider">{locale}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-white shadow-lg border border-black/5 py-1 min-w-[140px] z-50"
                  >
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={`/${loc}${pathWithoutLocale}`}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                          loc === locale
                            ? "text-black font-medium bg-[#f5f4f0]"
                            : "text-black/60 hover:text-black hover:bg-[#f5f4f0]"
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
              className={`lg:hidden p-2 ${isTransparent ? "text-white" : "text-black"}`}
              aria-label="Menu"
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
            className="absolute left-0 right-0 bg-white shadow-xl border-t border-black/5"
          >
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-8">
              <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                {industryItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/industries/${item.slug}`}
                    onClick={() => setMegaMenu(null)}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-black/60 hover:bg-[#f5f4f0] hover:text-black transition-colors group"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-[#e63b2e] opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="lg:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="px-8 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              <Link
                href={`/${locale}/advisory`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[0.9375rem] font-medium text-black border-b border-black/5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span>{navExtra.advisory || "Advisory"}</span>
                  <span className="text-[11px] font-normal text-black/40">
                    {locale === "tr"
                      ? "Strateji paketleri"
                      : locale === "nl"
                      ? "Strategie pakketten"
                      : "Strategy packages"}
                  </span>
                </div>
              </Link>

              <Link
                href={`/${locale}/systems`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[0.9375rem] font-medium text-black border-b border-black/5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span>{navExtra.systems || "Systems"}</span>
                  <span className="text-[11px] font-normal text-black/40">
                    {locale === "tr"
                      ? "Hazır AI agent ürünleri"
                      : locale === "nl"
                      ? "Kant-en-klare agents"
                      : "Productized AI agents"}
                  </span>
                </div>
              </Link>

              <Link
                href={`/${locale}/cases`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[0.9375rem] font-medium text-black border-b border-black/5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span>{(dict as any).nav?.cases || "Cases"}</span>
                  <span className="text-[11px] font-normal text-black/40">
                    {locale === "tr" ? "200+ başarı" : "200+ stories"}
                  </span>
                </div>
              </Link>

              {/* Industries Accordion */}
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between w-full py-3 text-[0.9375rem] font-medium text-black border-b border-black/5"
              >
                {dict.nav.industries}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    mobileIndustriesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
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
                          className="block py-2 text-sm text-black/55 hover:text-black"
                        >
                          {item[locale]}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href={`/${locale}/about`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[0.9375rem] font-medium text-black border-b border-black/5"
              >
                {(dict as any).nav?.culture || "Culture"}
              </Link>

              <div className="pt-4 space-y-3">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setMobileOpen(false)}
                  className="btn-hh w-full justify-center text-sm"
                >
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
