import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const footerLinks = {
    [dict.footer.quickLinks]: [
      { label: "Culture", href: `/${locale}/about` },
      { label: dict.nav.services, href: `/${locale}/#services` },
      { label: "Cases", href: `/${locale}/cases` },
      { label: "Insights", href: `/${locale}/blog` },
      { label: dict.nav.contact, href: `/${locale}/contact` },
    ],
    [dict.footer.services]: [
      { label: dict.services.items[0].title, href: `/${locale}/#services` },
      { label: dict.services.items[1].title, href: `/${locale}/#services` },
      { label: dict.services.items[2].title, href: `/${locale}/#services` },
      { label: dict.services.items[3].title, href: `/${locale}/#services` },
    ],
    Locations: [
      { label: "Amsterdam", href: `/${locale}/contact#amsterdam` },
      { label: "Rotterdam", href: `/${locale}/contact#rotterdam` },
    ],
  };

  return (
    <footer className="bg-charcoal-800 text-white">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-charcoal-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-500 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {dict.footer.ctaTitle}
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              {dict.footer.ctaSubtitle}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-white text-charcoal-800 px-8 py-3.5 rounded-full font-semibold hover:bg-charcoal-50 transition-colors shadow-lg"
            >
              {dict.nav.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-white">left</span>
                <span className="text-xl font-bold text-primary-400">flow</span>
              </div>
            </Link>
            <p className="text-sm text-charcoal-400 max-w-xs mb-4">
              {dict.footer.description}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2 text-sm text-charcoal-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Amsterdam &bull; Rotterdam</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@leftflow.ai</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { name: "twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { name: "linkedin", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-charcoal-700 hover:bg-primary-500/20 flex items-center justify-center text-charcoal-400 hover:text-primary-400 transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-charcoal-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charcoal-500">
            &copy; {new Date().getFullYear()} LeftFlow. {dict.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-charcoal-500">
            <a href="#" className="hover:text-charcoal-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
