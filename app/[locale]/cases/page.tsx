import { getDictionary, type Locale } from "@/lib/i18n";
import { caseStudies, caseCategories } from "@/lib/cases";
import { CasesListClient } from "./CasesListClient";

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  // Extract category strings (exclude "all" — handled by the "-- Filter --" default)
  const categoryStrings = caseCategories
    .filter((c) => c.value !== "all")
    .map((c) => c.value);

  return (
    <CasesListClient
      cases={caseStudies}
      categories={categoryStrings}
      locale={locale as Locale}
      dict={dict}
    />
  );
}
