import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SplashScreen } from "@/components/SplashScreen";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${GeistSans.className} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SplashScreen />
        <Navbar locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
