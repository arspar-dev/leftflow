import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getService, getAllServiceSlugs } from "@/lib/services";
import { ServicePageClient } from "@/components/services/ServicePageClient";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const locales = ["tr", "en", "nl"];
  return locales.flatMap(locale =>
    slugs.map(slug => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const data = service[locale as keyof Pick<typeof service, "tr" | "en" | "nl">] || service.en;
  return {
    title: `${data.title} | LeftFlow`,
    description: data.subtitle,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const dict = await getDictionary(locale as Locale);
  const data = service[locale as keyof Pick<typeof service, "tr" | "en" | "nl">] || service.en;

  return (
    <ServicePageClient
      service={data}
      slug={slug}
      locale={locale as Locale}
      dict={dict}
    />
  );
}
