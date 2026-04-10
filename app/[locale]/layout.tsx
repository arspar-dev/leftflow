import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { roboto, portrait } from "@/lib/fonts";
import type { Metadata } from "next";

const BASE_URL = "https://leftflow.ai";

const localeMeta: Record<string, { title: string; description: string; ogLocale: string }> = {
  tr: {
    title: "LeftFlow | AI Destekli Otomasyon Çözümleri",
    description:
      "AI stratejisi, agent sistemleri ve otomasyon. Orta ve büyük ölçekli şirketler için, Amsterdam Tech ortaklığında.",
    ogLocale: "tr_TR",
  },
  en: {
    title: "LeftFlow | AI-Powered Automation Solutions",
    description:
      "AI strategy, agent systems, and automation for mid-market and enterprise companies. In partnership with Amsterdam Tech.",
    ogLocale: "en_US",
  },
  nl: {
    title: "LeftFlow | AI-gestuurde Automatiseringsoplossingen",
    description:
      "AI-strategie, agentsystemen en automatisering voor mid-market en enterprise bedrijven. In samenwerking met Amsterdam Tech.",
    ogLocale: "nl_NL",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMeta[locale] || localeMeta.tr;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
      url: `${BASE_URL}/${locale}`,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function OrganizationJsonLd({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LeftFlow",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo-dark.svg`,
    description: localeMeta[locale]?.description || localeMeta.tr.description,
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Burhan Kocabıyık",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Stationsplein 45",
        addressLocality: "Rotterdam",
        postalCode: "3013 AK",
        addressCountry: "NL",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Sarıyer",
        addressCountry: "TR",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@leftflow.ai",
      contactType: "sales",
      availableLanguage: ["Turkish", "English", "Dutch"],
    },
    sameAs: [
      "https://www.linkedin.com/company/leftflow",
      "https://www.instagram.com/leftflow",
    ],
    areaServed: ["TR", "NL", "EU"],
    knowsAbout: [
      "Artificial Intelligence",
      "Business Automation",
      "AI Strategy",
      "AI Agents",
      "Workflow Automation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LeftFlow",
    url: BASE_URL,
    inLanguage: ["tr", "en", "nl"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/tr/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${roboto.variable} ${portrait.variable}`}>
      <head>
        <OrganizationJsonLd locale={locale} />
        <WebsiteJsonLd />
      </head>
      <body className="body min-h-screen flex flex-col">
        <Navbar locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
