import { locales } from "@/lib/i18n/config";
import type { Metadata } from "next";

const BASE_URL = "https://leftflow.ai";

export function buildPageMeta({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${BASE_URL}/${locale}${path}`;
  const ogLocaleMap: Record<string, string> = {
    tr: "tr_TR",
    en: "en_US",
    nl: "nl_NL",
  };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      locale: ogLocaleMap[locale] || "tr_TR",
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${BASE_URL}/${l}${path}`])
      ),
    },
  };
}
