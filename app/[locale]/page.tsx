import { getDictionary, type Locale } from "@/lib/i18n";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { CasesPreview } from "@/components/sections/CasesPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <HeroSection dict={dict} locale={locale as Locale} />
      <TrendingSection dict={dict} />
      <CasesPreview locale={locale as Locale} />
      <ServicesSection dict={dict} locale={locale as Locale} />
      <TrustedBySection dict={dict} />
      <LocationsSection />
      <ContactCTA locale={locale as Locale} />
      <BlogPreview locale={locale as Locale} />
    </>
  );
}
