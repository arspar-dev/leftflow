import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n";
import { AnimatedLogo } from "@/components/AnimatedLogo";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const f = (dict as any).footer || {};
  const nav = (dict as any).nav || {};

  const serviceLabels = nav.serviceItems || [
    "Content Generation", "AI Agent Development", "Workflow Automation", "LLM Development", "Data & Intelligence"
  ];

  const industryLabels = nav.industryItems || [
    "E-commerce", "Healthcare", "Finance", "Manufacturing", "Logistics", "Retail"
  ];

  return (
    <footer className="bg-white border-t border-charcoal-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Logo */}
        <div className="mb-12">
          <AnimatedLogo locale={locale} variant="dark" />
        </div>

        {/* HH-style multi-column footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Hubs */}
          <div>
            <h4 className="font-bold text-charcoal-950 mb-4 text-sm">
              {f.hubs || "Hubs"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/contact#amsterdam`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                  Amsterdam
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact#rotterdam`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                  Rotterdam
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-bold text-charcoal-950 mb-4 text-sm">
              {f.content || "Content"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/cases`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                  {f.cases || "Cases"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                  {f.blog || "Blog"}
                </Link>
              </li>
            </ul>
            <p className="text-sm text-charcoal-500 mt-4">
              {f.newsletter || "Subscribe to our newsletter"}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-charcoal-950 mb-4 text-sm">
              {f.services || dict.nav?.services || "Services"}
            </h4>
            <ul className="space-y-2">
              {serviceLabels.map((label: string, i: number) => (
                <li key={i}>
                  <Link href={`/${locale}/#services`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-charcoal-950 mb-4 text-sm">
              {f.industries || dict.nav?.industries || "Industries"}
            </h4>
            <ul className="space-y-2">
              {industryLabels.map((label: string, i: number) => {
                const slugs = ["ecommerce", "healthcare", "finance", "manufacturing", "logistics", "retail"];
                return (
                  <li key={i}>
                    <Link href={`/${locale}/industries/${slugs[i]}`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Culture */}
          <div>
            <h4 className="font-bold text-charcoal-950 mb-4 text-sm">
              {f.culture || "Culture"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                  {f.aboutUs || "About Us"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors">
                  {f.contact || dict.nav?.contact || "Contact"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charcoal-500">
            &copy; 2026 LeftFlow - {f.allRightsReserved || "All Rights Reserved"}
          </p>
          <div className="flex gap-4 text-sm text-charcoal-500">
            <a href="#" className="hover:text-charcoal-950 transition-colors">
              {f.privacyPolicy || "Privacy Policy"}
            </a>
            <span className="text-charcoal-300">|</span>
            <a href="#" className="hover:text-charcoal-950 transition-colors">
              {f.terms || "Terms & Conditions"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
