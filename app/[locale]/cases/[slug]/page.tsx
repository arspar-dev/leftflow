import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import { caseStudies } from "@/lib/cases";
import { CaseDetailClient } from "./CaseDetailClient";
import { buildPageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Cases | LeftFlow" };
  const content = cs[locale as keyof typeof cs] as any || cs.en;
  return buildPageMeta({
    locale,
    path: `/cases/${slug}`,
    title: `${cs.client} — ${content.title} | LeftFlow`,
    description: content.excerpt,
  });
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const caseStudy = caseStudies.find((c) => c.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const otherCases = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <CaseDetailClient
      caseStudy={caseStudy}
      otherCases={otherCases}
      locale={locale as Locale}
      dict={dict}
    />
  );
}
