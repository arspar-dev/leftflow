import { Suspense } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { ContactClient } from "./ContactClient";
import { buildPageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMeta({
    locale,
    path: "/contact",
    title: `${dict.contact.label} | LeftFlow`,
    description: dict.contact.subtitle,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return (
    <Suspense fallback={null}>
      <ContactClient dict={dict} locale={locale as Locale} />
    </Suspense>
  );
}
