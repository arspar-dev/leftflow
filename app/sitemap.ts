import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { caseStudies } from "@/lib/cases";

const BASE_URL = "https://leftflow.ai";

const INDUSTRY_SLUGS = [
  "ecommerce",
  "healthcare",
  "finance",
  "manufacturing",
  "logistics",
  "retail",
  "real-estate",
  "education",
  "hr",
];

const SERVICE_SLUGS = [
  "ai-automation",
  "chatbots-voice-agents",
  "workflow-automation",
  "custom-ai-solutions",
  "b2b-sales-automation",
  "content-creation",
  "corporate-website",
  "e-commerce-webshop",
];

const SYSTEM_SLUGS = [
  "customer-support-agent",
  "sales-outreach-agent",
  "content-engine",
  "operations-agent",
  "automation-agent",
  "custom-build",
];

const STATIC_PAGES = [
  "",
  "/about",
  "/advisory",
  "/systems",
  "/contact",
  "/cases",
  "/services",
  "/blog",
  "/data-intelligence",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages — all locales
  for (const page of STATIC_PAGES) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  // Industry pages
  for (const slug of INDUSTRY_SLUGS) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/industries/${slug}`])
          ),
        },
      });
    }
  }

  // Service pages
  for (const slug of SERVICE_SLUGS) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/services/${slug}`])
          ),
        },
      });
    }
  }

  // Systems product pages
  for (const slug of SYSTEM_SLUGS) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/systems/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/systems/${slug}`])
          ),
        },
      });
    }
  }

  // Case study pages
  for (const cs of caseStudies) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/cases/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/cases/${cs.slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
