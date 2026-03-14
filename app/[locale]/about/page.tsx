import { getDictionary, type Locale } from "@/lib/i18n";
import { AboutClient } from "./AboutClient";

export const metadata = {
  title: "Hakkımızda | LeftFlow",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <AboutClient dict={dict} locale={locale as Locale} />;
}
