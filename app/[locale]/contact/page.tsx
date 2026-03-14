import { getDictionary, type Locale } from "@/lib/i18n";
import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "İletişim | LeftFlow",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <ContactClient dict={dict} locale={locale as Locale} />;
}
