"use client";

import { useState } from "react";
import Link from "next/link";
import { InlineWidget } from "react-calendly";
import { FadeIn } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const offices = [
  {
    id: "rotterdam",
    city: "Rotterdam",
    country: "Netherlands",
    address: "Stationsplein 45",
    zip: "3013 AK Rotterdam",
    phone: "+31 6 12345678",
    mapUrl: "https://www.google.com/maps/dir//Stationsplein+45,+3013+AK+Rotterdam",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.7!2d4.4699!3d51.9225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzIxLjAiTiA0wrAyOCcxMS42IkU!5e0!3m2!1sen!2snl!4v1",
  },
  {
    id: "istanbul",
    city: "İstanbul",
    country: "Turkey",
    address: "Maslak Mahallesi",
    zip: "34398 Sarıyer, İstanbul",
    phone: "+90 212 000 00 00",
    mapUrl: "https://www.google.com/maps/dir//Maslak,+Sar%C4%B1yer,+%C4%B0stanbul",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.7!2d29.0203!3d41.1087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA2JzMxLjMiTiAyOcKwMDEnMTMuMSJF!5e0!3m2!1sen!2str!4v1",
  },
];

const budgetOptions = [
  { value: "", label: { tr: "Bütçe aralığı seçin", en: "Select budget range", nl: "Selecteer budgetbereik" } },
  { value: "5k-10k", label: { tr: "€5.000 - €10.000", en: "€5,000 - €10,000", nl: "€5.000 - €10.000" } },
  { value: "10k-25k", label: { tr: "€10.000 - €25.000", en: "€10,000 - €25,000", nl: "€10.000 - €25.000" } },
  { value: "25k-50k", label: { tr: "€25.000 - €50.000", en: "€25,000 - €50,000", nl: "€25.000 - €50.000" } },
  { value: "50k+", label: { tr: "€50.000+", en: "€50,000+", nl: "€50.000+" } },
];

export function ContactClient({ dict, locale }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const c = dict.contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      budget: formData.get("budget"),
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
        setError(json.error || ((dict as any).contact?.errorGeneric || "Something went wrong."));
      }
    } catch {
      setError((dict as any).contact?.errorNetwork || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-950" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <nav className="text-sm text-white/50 mb-8">
              <Link href={`/${locale}`} className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/80">{c.label}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
              {(dict as any).contact?.heroTitle || "What's your challenge?"}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8">
              {c.subtitle}
            </p>

            {/* Quick contact */}
            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:+31612345678" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +31 6 12345678
              </a>
              <a href="mailto:info@leftflow.ai" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                info@leftflow.ai
              </a>
              <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Calendly */}
      <section id="calendly" className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-3">
                {(dict as any).contact?.scheduleLabel || "Free Consultation"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-4">
                {(dict as any).contact?.scheduleTitle || "Schedule a 15-minute discovery call"}
              </h2>
              <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
                {(dict as any).contact?.scheduleDescription || "During the call, we'll discuss your challenge."}
              </p>
            </div>
          </FadeIn>
          <div className="max-w-4xl mx-auto rounded-xl border border-charcoal-200 overflow-hidden">
            <InlineWidget
              url="https://calendly.com/burhantech/doa-tanisma-toplantisi-clone"
              styles={{ height: "650px", width: "100%" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "2563EB",
                textColor: "0D0D0D",
              }}
            />
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-charcoal-500 mb-4">
                {(dict as any).contact?.emailSection?.label || "Direct Contact"}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {(dict as any).contact?.emailSection?.title || "Prefer email?"}
              </h2>
              <p className="text-charcoal-400 mb-6 max-w-lg mx-auto">
                {(dict as any).contact?.emailSection?.description || "Send us your project details directly."}
              </p>
              <a
                href="mailto:teklif@leftflow.ai"
                className="btn-hh-white text-sm inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                teklif@leftflow.ai
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-4">
                {(dict as any).contact?.challengeTitle || "What's your challenge?"}
              </h2>
              <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
                {(dict as any).contact?.challengeDescription || "Fill out the form and we'll contact you within 2 business days."}
              </p>
            </div>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <FadeIn>
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-lg text-charcoal-950 font-medium">{c.form.success}</p>
                </div>
              </FadeIn>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">{c.form.name} *</label>
                    <input
                      name="name"
                      required
                      className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder={c.form.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">{c.form.email} *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder={c.form.email}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">{c.form.company}</label>
                    <input
                      name="company"
                      className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder={c.form.company}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">{c.form.phone}</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder={c.form.phone}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    {(dict as any).contact?.form?.budget || "Budget"}
                  </label>
                  <select
                    name="budget"
                    className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label[locale]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">{c.form.message} *</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                    placeholder={c.form.message}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">{error}</p>
                )}

                <button type="submit" disabled={loading} className="btn-hh w-full justify-center">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {c.form.submit}
                    </span>
                  ) : (
                    c.form.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-3">
                {(dict as any).contact?.officesLabel || "Our Offices"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-4">
                {(dict as any).contact?.officesTitle || "Visit Us"}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div key={office.id} id={office.id} className="bg-charcoal-50 rounded-xl overflow-hidden border border-charcoal-200">
                {/* Map embed */}
                <div className="aspect-[16/9] bg-charcoal-100">
                  <iframe
                    src={office.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.city} office map`}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-charcoal-950 mb-1">{office.city}</h3>
                  <p className="text-sm text-charcoal-400 mb-4">{office.country}</p>
                  <div className="space-y-1 text-charcoal-500 mb-4">
                    <p>{office.address}</p>
                    <p>{office.zip}</p>
                  </div>
                  <div className="space-y-1 text-charcoal-500 mb-6">
                    <p>{office.phone}</p>
                    <p>info@leftflow.ai</p>
                  </div>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hh-outline text-sm"
                  >
                    {(dict as any).locations?.getDirections || "Get directions"} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-charcoal-50 border-t border-charcoal-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm text-charcoal-500 mb-6">
            {(dict as any).contact?.followUs || "Follow us"}
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-600 transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-600 transition-colors" aria-label="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-600 transition-colors" aria-label="X">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
