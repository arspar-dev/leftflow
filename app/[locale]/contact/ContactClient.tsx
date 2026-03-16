"use client";

import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { FadeIn, PageTransition } from "@/components/animations";
import { Button } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const offices = [
  {
    id: "amsterdam",
    city: "Amsterdam",
    address: "Oudezijds Voorburgwal",
    zip: "Amsterdam, Netherlands",
    phone: "+31 6 12345678",
    mapUrl: "https://www.google.com/maps/dir//Oudezijds+Voorburgwal,+Amsterdam",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    id: "rotterdam",
    city: "Rotterdam",
    address: "Stationsplein 45",
    zip: "3013 AK Rotterdam",
    phone: "+31 6 12345678",
    mapUrl: "https://www.google.com/maps/dir//Stationsplein+45,+3013+AK+Rotterdam",
    gradient: "from-secondary-400 to-secondary-600",
  },
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
        setError(json.error || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-charcoal-800 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
              {c.label}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              What&apos;s your challenge?
            </h1>
            <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
              {c.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Schedule a Call - Calendly */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-800 mb-2">
                Schedule a 15-minute discovery call
              </h2>
              <p className="text-charcoal-500">
                Pick a time that works best for you.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-charcoal-200/60 shadow-lg">
              <InlineWidget
                url="https://calendly.com/burhantech/doa-tanisma-toplantisi-clone"
                styles={{ height: "650px", width: "100%" }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "0693e3",
                  textColor: "32373c",
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-800 mb-2">
                Or send us a message
              </h2>
              <p className="text-charcoal-500">{c.subtitle}</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <FadeIn direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-charcoal-200/60 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success-500/10 border border-success-500/30 flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d084" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-lg text-charcoal-800 font-medium">{c.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1.5">{c.form.name}</label>
                        <input
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          placeholder={c.form.name}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1.5">{c.form.email}</label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          placeholder={c.form.email}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1.5">{c.form.company}</label>
                        <input
                          name="company"
                          className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          placeholder={c.form.company}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1.5">{c.form.phone}</label>
                        <input
                          name="phone"
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          placeholder={c.form.phone}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-1.5">{c.form.message}</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                        placeholder={c.form.message}
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-red-500 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">{error}</p>
                    )}
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          {c.form.submit}
                        </span>
                      ) : (
                        c.form.submit
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    ),
                    label: "Email",
                    value: c.info.email,
                    href: `mailto:${c.info.email}`,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: c.info.phone,
                    href: `tel:${c.info.phone}`,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    label: "Hours",
                    value: c.info.hours,
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-charcoal-200/60">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-charcoal-400 uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-charcoal-800 font-medium hover:text-primary-500 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-charcoal-800 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-800 mb-2">
                Our Offices
              </h2>
              <p className="text-charcoal-500">Visit us at our locations in the Netherlands.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <FadeIn key={office.id}>
                <div id={office.id} className="bg-charcoal-50 rounded-2xl p-8 border border-charcoal-200/60 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.gradient} flex items-center justify-center mb-4`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-800 mb-3">{office.city}</h3>
                  <div className="space-y-2 text-sm text-charcoal-500 mb-6">
                    <p>{office.address}</p>
                    <p>{office.zip}</p>
                    <p>{office.phone}</p>
                    <p>info@leftflow.ai</p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                      </svg>
                      Get directions
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
