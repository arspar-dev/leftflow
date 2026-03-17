import { getDictionary, type Locale } from "@/lib/i18n";
import { ContactClient } from "./ContactClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.contact.label} | LeftFlow`,
    description: dict.contact.subtitle,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <ContactClient dict={dict} locale={locale as Locale} />;
}
