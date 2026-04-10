import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://leftflow.ai";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "LeftFlow | AI Destekli Otomasyon Çözümleri",
    template: "%s | LeftFlow",
  },
  description:
    "İş süreçlerinizi yapay zeka ile otomatikleştirin. LeftFlow, otomasyon, veri analizi ve AI çözümleri ile işletmenizi geleceğe taşır.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US", "nl_NL"],
    siteName: "LeftFlow",
    title: "LeftFlow | AI Destekli Otomasyon Çözümleri",
    description:
      "AI stratejisi, agent sistemleri ve otomasyon. Orta ve büyük ölçekli şirketler için, Amsterdam Tech ortaklığında.",
    url: BASE_URL,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "LeftFlow — AI Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeftFlow | AI Destekli Otomasyon Çözümleri",
    description:
      "AI stratejisi, agent sistemleri ve otomasyon. Orta ve büyük ölçekli şirketler için.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      tr: `${BASE_URL}/tr`,
      en: `${BASE_URL}/en`,
      nl: `${BASE_URL}/nl`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
