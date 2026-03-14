import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getIndustry, getAllIndustrySlugs, industries } from "@/lib/industries";
import { IndustryPageClient } from "@/components/industries/IndustryPageClient";

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.title} | LeftFlow`,
    description: industry.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <IndustryPageClient
      industry={industry}
      dict={dict}
      locale={locale as Locale}
      allIndustries={industries}
    />
  );
}
