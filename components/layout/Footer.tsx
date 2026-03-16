import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const columns = [
    {
      heading: "Hubs",
      links: [
        { label: "Amsterdam", href: `/${locale}/contact#amsterdam` },
        { label: "Rotterdam", href: `/${locale}/contact#rotterdam` },
      ],
    },
    {
      heading: "Content",
      links: [
        { label: "Cases", href: `/${locale}/cases` },
        { label: "Blog", href: `/${locale}/blog` },
      ],
      extra: "Subscribe to our newsletter",
    },
    {
      heading: "Services",
      links: [
        { label: "AI Agent Development", href: `/${locale}/#services` },
        { label: "Workflow Automation", href: `/${locale}/#services` },
        { label: "Content Generation", href: `/${locale}/#services` },
        { label: "LLM Development", href: `/${locale}/#services` },
        { label: "Data & Intelligence", href: `/${locale}/#services` },
      ],
    },
    {
      heading: "Industries",
      links: [
        { label: "E-commerce", href: `/${locale}/#services` },
        { label: "Healthcare", href: `/${locale}/#services` },
        { label: "Finance", href: `/${locale}/#services` },
        { label: "Manufacturing", href: `/${locale}/#services` },
        { label: "Logistics", href: `/${locale}/#services` },
        { label: "Retail", href: `/${locale}/#services` },
      ],
    },
    {
      heading: "Culture",
      links: [
        { label: "About Us", href: `/${locale}/about` },
        { label: "Contact", href: `/${locale}/contact` },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-charcoal-200">
      {/* Footer Navigation */}
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

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charcoal-500">
            &copy; 2025 LeftFlow - All Rights Reserved
          </p>
          <div className="flex gap-4 text-sm text-charcoal-500">
            <a
              href="#"
              className="hover:text-charcoal-950 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-charcoal-300">|</span>
            <a
              href="#"
              className="hover:text-charcoal-950 transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
