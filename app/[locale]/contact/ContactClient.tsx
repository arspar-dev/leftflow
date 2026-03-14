"use client";

import { useState } from "react";
import { FadeIn, PageTransition } from "@/components/animations";
import { Button, Card, SectionLabel, Input, Textarea } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>{c.label}</SectionLabel>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {c.title}
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                {c.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-5 gap-12">
            <FadeIn direction="left" className="lg:col-span-3">
              <Card padding="lg" hover={false}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-lg text-white font-medium">{c.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input name="name" label={c.form.name} placeholder={c.form.name} required />
                      <Input name="email" label={c.form.email} type="email" placeholder={c.form.email} required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input name="company" label={c.form.company} placeholder={c.form.company} />
                      <Input name="phone" label={c.form.phone} type="tel" placeholder={c.form.phone} />
                    </div>
                    <Textarea name="message" label={c.form.message} placeholder={c.form.message} rows={5} required />
                    {error && (
                      <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg">{error}</p>
                    )}
                    <Button type="submit" size="lg" className="w-full">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                          {c.form.submit}
                        </span>
                      ) : (
                        c.form.submit
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, label: "Email", value: c.info.email },
                  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: "Phone", value: c.info.phone },
                  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Address", value: c.info.address },
                  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "Hours", value: c.info.hours },
                ].map((item, i) => (
                  <Card key={i} padding="md" hover={false}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
