import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n";

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

  const columns = [
    {
      heading: f.hubs || "Hubs",
      links: [
        { label: "Amsterdam", href: `/${locale}/contact#amsterdam` },
        { label: "Rotterdam", href: `/${locale}/contact#rotterdam` },
      ],
    },
    {
      heading: f.content || "Content",
      links: [
        { label: f.cases || "Cases", href: `/${locale}/cases` },
        { label: f.blog || "Blog", href: `/${locale}/blog` },
      ],
      extra: f.newsletter || "Subscribe to our newsletter",
    },
    {
      heading: f.services || dict.nav?.services || "Services",
      links: [
        { label: serviceLabels[0], href: `/${locale}/#services` },
        { label: serviceLabels[1], href: `/${locale}/#services` },
        { label: serviceLabels[2], href: `/${locale}/#services` },
        { label: serviceLabels[3], href: `/${locale}/#services` },
        { label: serviceLabels[4], href: `/${locale}/#services` },
      ],
    },
    {
      heading: f.industries || dict.nav?.industries || "Industries",
      links: [
        { label: industryLabels[0], href: `/${locale}/industries/ecommerce` },
        { label: industryLabels[1], href: `/${locale}/industries/healthcare` },
        { label: industryLabels[2], href: `/${locale}/industries/finance` },
        { label: industryLabels[3], href: `/${locale}/industries/manufacturing` },
        { label: industryLabels[4], href: `/${locale}/industries/logistics` },
        { label: industryLabels[5], href: `/${locale}/industries/retail` },
      ],
    },
    {
      heading: f.culture || "Culture",
      links: [
        { label: f.aboutUs || "About Us", href: `/${locale}/about` },
        { label: f.contact || dict.nav?.contact || "Contact", href: `/${locale}/contact` },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-charcoal-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {columns.map((column) => (
            <div key={column.heading}>
              <h4 className="font-medium text-charcoal-950 mb-4 text-sm">
                {column.heading}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-500 hover:text-charcoal-950 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {column.extra && (
                  <li className="pt-2">
                    <p className="text-sm text-charcoal-500">{column.extra}</p>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-charcoal-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charcoal-500">
            &copy; 2026 LeftFlow - {f.allRightsReserved || dict.footer?.copyright || "All Rights Reserved"}
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
