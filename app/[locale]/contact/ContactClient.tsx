"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, TextReveal } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const discussOptions: Record<string, { tr: string; en: string; nl: string }[]> = {
  items: [
    { tr: "AI Otomasyon & Chatbotlar", en: "AI Automation & Chatbots", nl: "AI Automatisering & Chatbots" },
    { tr: "Workflow Otomasyonu", en: "Workflow Automation", nl: "Workflow Automatisering" },
    { tr: "B2B Satış Otomasyonu", en: "B2B Sales Automation", nl: "B2B Sales Automatisering" },
    { tr: "Kurumsal Website / E-Commerce", en: "Corporate Website / E-Commerce", nl: "Bedrijfswebsite / E-Commerce" },
    { tr: "Veri Zekası & Analitik", en: "Data Intelligence & Analytics", nl: "Data Intelligentie & Analytics" },
    { tr: "İş Ortaklığı", en: "Partnership", nl: "Partnerschap" },
    { tr: "Diğer", en: "Other", nl: "Anders" },
  ],
};

const labels = {
  tr: {
    firstName: "AD",
    lastName: "SOYAD",
    email: "E-POSTA",
    company: "ŞİRKET ADI",
    discuss: "NELERI GÖRÜŞMEK ISTERSINIZ?",
    message: "LEFTFLOW SIZE NASIL YARDIMCI OLABILIR?",
    privacy: "BU FORMU GÖNDEREREK LEFTFLOW'UN GİZLİLİK POLİTİKASINI OKUDUĞUMU VE KABUL ETTİĞİMİ ONAYLIYORUM",
    submit: "GÖRÜŞME AYARLA",
    success: "Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.",
    errorGeneric: "Bir hata oluştu.",
    errorNetwork: "Ağ hatası. Lütfen tekrar deneyin.",
    heroTitle: "Büyümeye hazır mısınız? Formu doldurun, en kısa sürede dönüş yapalım.",
  },
  en: {
    firstName: "FIRST NAME",
    lastName: "LAST NAME",
    email: "EMAIL",
    company: "COMPANY NAME",
    discuss: "WHAT WOULD YOU LIKE TO DISCUSS?",
    message: "WHAT CAN LEFTFLOW HELP YOU WITH?",
    privacy: "BY SUBMITTING THIS FORM I CONFIRM I HAVE READ AND ACCEPT LEFTFLOW'S PRIVACY POLICY",
    submit: "BOOK A CALL",
    success: "Message sent! We'll get back to you shortly.",
    errorGeneric: "Something went wrong.",
    errorNetwork: "Network error. Please try again.",
    heroTitle: "Ready to grow? Fill in the form and we'll get back to you quick smart.",
  },
  nl: {
    firstName: "VOORNAAM",
    lastName: "ACHTERNAAM",
    email: "E-MAIL",
    company: "BEDRIJFSNAAM",
    discuss: "WAT WILT U BESPREKEN?",
    message: "HOE KAN LEFTFLOW U HELPEN?",
    privacy: "DOOR DIT FORMULIER TE VERZENDEN BEVESTIG IK DAT IK HET PRIVACYBELEID VAN LEFTFLOW HEB GELEZEN EN GEACCEPTEERD",
    submit: "BOEK EEN GESPREK",
    success: "Bericht verzonden! We nemen snel contact op.",
    errorGeneric: "Er is iets misgegaan.",
    errorNetwork: "Netwerkfout. Probeer het opnieuw.",
    heroTitle: "Klaar om te groeien? Vul het formulier in en we nemen snel contact op.",
  },
};

export function ContactClient({ dict, locale }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const l = labels[locale] || labels.en;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyChecked) return;
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      company: formData.get("company"),
      phone: "",
      budget: formData.get("discuss"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json();
        setError(json.error || l.errorGeneric);
      }
    } catch {
      setError(l.errorNetwork);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Contact Form Section — Tasman style */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left — Heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <FadeIn>
                <h1 className="heading-display text-black text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-[1.15]">
                  {l.heroTitle}
                </h1>
              </FadeIn>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <FadeIn>
                  <div className="py-20 text-center">
                    <div className="w-16 h-16 bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-lg text-black font-medium">{l.success}</p>
                  </div>
                </FadeIn>
              ) : (
                <FadeIn delay={0.2}>
                  <form onSubmit={handleSubmit}>
                    {/* Row 1: First Name / Last Name */}
                    <div className="grid md:grid-cols-2 border-t border-black/10">
                      <div className="border-b border-black/10 md:border-b-0 md:border-r border-black/10 px-6 py-8 md:px-8 md:py-10">
                        <label className="block section-label text-black/40 mb-4">{l.firstName}*</label>
                        <input
                          name="firstName"
                          required
                          className="w-full bg-transparent text-black text-lg outline-none placeholder-black/20 py-2"
                          placeholder=""
                        />
                      </div>
                      <div className="border-b border-black/10 px-6 py-8 md:px-8 md:py-10">
                        <label className="block section-label text-black/40 mb-4">{l.lastName}*</label>
                        <input
                          name="lastName"
                          required
                          className="w-full bg-transparent text-black text-lg outline-none placeholder-black/20 py-2"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Row 2: Email / Company */}
                    <div className="grid md:grid-cols-2 border-t border-black/10">
                      <div className="border-b border-black/10 md:border-b-0 md:border-r border-black/10 px-6 py-8 md:px-8 md:py-10">
                        <label className="block section-label text-black/40 mb-4">{l.email}*</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full bg-transparent text-black text-lg outline-none placeholder-black/20 py-2"
                          placeholder=""
                        />
                      </div>
                      <div className="border-b border-black/10 px-6 py-8 md:px-8 md:py-10">
                        <label className="block section-label text-black/40 mb-4">{l.company}</label>
                        <input
                          name="company"
                          className="w-full bg-transparent text-black text-lg outline-none placeholder-black/20 py-2"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Row 3: What to discuss — dropdown */}
                    <div className="border-t border-black/10 border-b border-black/10 px-6 py-8 md:px-8 md:py-10">
                      <label className="block section-label text-black/40 mb-4">{l.discuss}</label>
                      <select
                        name="discuss"
                        className="w-full bg-transparent text-black text-lg outline-none cursor-pointer appearance-none py-2"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 0 center" }}
                      >
                        <option value="">{l.discuss}</option>
                        {discussOptions.items.map((opt, i) => (
                          <option key={i} value={opt[locale] || opt.en}>
                            {opt[locale] || opt.en}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Message — textarea */}
                    <div className="border-b border-black/10 px-6 py-8 md:px-8 md:py-10">
                      <label className="block section-label text-black/40 mb-4">{l.message}</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full bg-transparent text-black text-lg outline-none resize-none placeholder-black/20 py-2"
                        placeholder=""
                      />
                    </div>

                    {/* Row 5: Privacy checkbox + Submit */}
                    <div className="border-b border-black/10 px-6 py-8 md:px-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <label className="flex items-start gap-3 cursor-pointer flex-1">
                        <input
                          type="checkbox"
                          checked={privacyChecked}
                          onChange={(e) => setPrivacyChecked(e.target.checked)}
                          className="mt-0.5 w-4 h-4 border border-black/20 accent-primary-500 flex-shrink-0"
                        />
                        <span className="section-label text-black/40 leading-relaxed">
                          {l.privacy}
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={loading || !privacyChecked}
                        className="flex items-center gap-3 px-8 py-4 border border-black text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                      >
                        {loading ? (
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        )}
                        {l.submit}
                      </button>
                    </div>

                    {error && (
                      <div className="px-6 py-8 md:px-8 md:py-10">
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">{error}</p>
                      </div>
                    )}
                  </form>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer section with contact info */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <FadeIn>
              <p className="section-label text-white/30 mb-3">Email</p>
              <a href="mailto:info@leftflow.ai" className="text-white/70 hover:text-white transition-colors body-16">
                info@leftflow.ai
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="section-label text-white/30 mb-3">Rotterdam</p>
              <p className="text-white/70 body-14">Stationsplein 45<br />3013 AK Rotterdam</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="section-label text-white/30 mb-3">İstanbul</p>
              <p className="text-white/70 body-14">Maslak Mahallesi<br />34398 Sarıyer, İstanbul</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
