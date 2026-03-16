"use client";

import { useState } from "react";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
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
    hours: "Monday - Friday 09:00 - 18:00",
    closed: "Saturday & Sunday: Closed",
    mapUrl: "https://www.google.com/maps/dir//Oudezijds+Voorburgwal,+Amsterdam",
  },
  {
    id: "rotterdam",
    city: "Rotterdam",
    address: "Stationsplein 45",
    zip: "3013 AK Rotterdam",
    phone: "+31 6 12345678",
    hours: "Monday - Friday 09:00 - 18:00",
    closed: "Saturday & Sunday: Closed",
    mapUrl: "https://www.google.com/maps/dir//Stationsplein+45,+3013+AK+Rotterdam",
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
    <>
      {/* Section 1: Hero Image */}
      <section className="relative w-full">
        <div className="relative aspect-[3/1] w-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="What's your challenge?"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              What&apos;s your challenge?
            </h1>
          </div>
        </div>
      </section>

      {/* Section 2: Schedule a Call CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
            Schedule a 15-minute discovery call
          </h2>
          <p className="text-charcoal-500 text-lg mb-8">
            During the call, we&apos;ll discuss your challenge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="tel:+31612345678"
              className="text-charcoal-950 text-xl font-semibold hover:text-charcoal-700 transition-colors"
            >
              +31 6 12345678
            </a>
            <span className="hidden sm:block w-px h-6 bg-charcoal-200" />
            <a
              href="mailto:info@leftflow.ai"
              className="text-charcoal-950 text-xl font-semibold hover:text-charcoal-700 transition-colors"
            >
              info@leftflow.ai
            </a>
          </div>
          <a href="#calendly" className="btn-hh">
            Book a call
          </a>
        </div>
      </section>

      {/* Section 3: Calendly Embed */}
      <section id="calendly" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-xl border border-charcoal-200 overflow-hidden">
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
        </div>
      </section>

      {/* Section 4: Challenge Form */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
              What&apos;s your challenge?
            </h2>
            <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
              Curious about what we can do for your results? Challenge us and
              we&apos;ll contact you within 2 business days.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-lg text-charcoal-950 font-medium">
                  {c.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    {c.form.name}
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-charcoal-950 focus:ring-1 focus:ring-charcoal-950 transition-colors"
                    placeholder={c.form.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    {c.form.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-charcoal-950 focus:ring-1 focus:ring-charcoal-950 transition-colors"
                    placeholder={c.form.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    {c.form.company}
                  </label>
                  <input
                    name="company"
                    className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-charcoal-950 focus:ring-1 focus:ring-charcoal-950 transition-colors"
                    placeholder={c.form.company}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    {c.form.phone}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-charcoal-950 focus:ring-1 focus:ring-charcoal-950 transition-colors"
                    placeholder={c.form.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    {c.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white border border-charcoal-200 rounded-lg px-4 py-3 text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-charcoal-950 focus:ring-1 focus:ring-charcoal-950 transition-colors resize-none"
                    placeholder={c.form.message}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-hh w-full justify-center"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
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

      {/* Section 5: Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-950 mb-4">
              Our Offices
            </h2>
            <p className="text-charcoal-500 text-lg">
              Visit us at our locations in the Netherlands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.id}
                id={office.id}
                className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-200"
              >
                <h3 className="text-2xl font-bold text-charcoal-950 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-1 text-charcoal-500 mb-2">
                  <p>{office.address}</p>
                  <p>{office.zip}</p>
                </div>
                <div className="space-y-1 text-charcoal-500 mb-2">
                  <p>{office.phone}</p>
                  <p>info@leftflow.ai</p>
                </div>
                <div className="text-charcoal-500 mb-6">
                  <p>{office.hours}</p>
                  <p>{office.closed}</p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal-950 font-medium hover:underline transition-colors"
                  >
                    Get directions
                  </a>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hh-outline"
                  >
                    Route
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
