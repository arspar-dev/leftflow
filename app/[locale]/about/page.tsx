import { getDictionary, type Locale } from "@/lib/i18n";
import { AboutClient } from "./AboutClient";
import { buildPageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMeta({
    locale,
    path: "/about",
    title: `${dict.about.label} | LeftFlow`,
    description: dict.about.subtitle,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <AboutClient dict={dict} locale={locale as Locale} />;
}
