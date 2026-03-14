import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const footerLinks = {
    [dict.footer.quickLinks]: [
      { label: dict.nav.about, href: `/${locale}/about` },
      { label: dict.nav.services, href: `/${locale}/#services` },
      { label: dict.nav.blog, href: `/${locale}/blog` },
      { label: dict.nav.contact, href: `/${locale}/contact` },
    ],
    [dict.footer.services]: [
      { label: dict.services.items[0].title, href: `/${locale}/#services` },
      { label: dict.services.items[1].title, href: `/${locale}/#services` },
      { label: dict.services.items[2].title, href: `/${locale}/#services` },
      { label: dict.services.items[3].title, href: `/${locale}/#services` },
    ],
    [dict.nav.industries]: [
      { label: "E-commerce", href: `/${locale}/industries/ecommerce` },
      { label: "Healthcare", href: `/${locale}/industries/healthcare` },
      { label: "Finance", href: `/${locale}/industries/finance` },
      { label: "Logistics", href: `/${locale}/industries/logistics` },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2MmgxMnpNMjQgMjBoMTJ2MkgyNHYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {dict.footer.ctaTitle}
            </h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              {dict.footer.ctaSubtitle}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-3.5 rounded-full font-medium hover:bg-white/90 transition-colors"
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
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">leftflow</span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs mb-6">
              {dict.footer.description}
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-500/10 flex items-center justify-center text-slate-500 hover:text-primary-400 transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    {social === "twitter" && (
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    )}
                    {social === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                    {social === "youtube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-slate-200 mb-4 text-sm">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-primary-400 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} LeftFlow. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
