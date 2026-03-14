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
  const c = dict.contact;

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-slate-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>{c.label}</SectionLabel>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {c.title}
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                {c.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <FadeIn direction="left" className="lg:col-span-3">
              <Card padding="lg" hover={false}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-lg text-slate-700 font-medium">{c.form.success}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label={c.form.name} placeholder={c.form.name} required />
                      <Input label={c.form.email} type="email" placeholder={c.form.email} required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label={c.form.company} placeholder={c.form.company} />
                      <Input label={c.form.phone} type="tel" placeholder={c.form.phone} />
                    </div>
                    <Textarea label={c.form.message} placeholder={c.form.message} rows={5} required />
                    <Button type="submit" size="lg" className="w-full">
                      {c.form.submit}
                    </Button>
                  </form>
                )}
              </Card>
            </FadeIn>

            {/* Info Cards */}
            <FadeIn direction="right" className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                    label: "Email",
                    value: c.info.email,
                  },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                    label: "Phone",
                    value: c.info.phone,
                  },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
                    label: "Address",
                    value: c.info.address,
                  },
                  {
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    label: "Hours",
                    value: c.info.hours,
                  },
                ].map((item, i) => (
                  <Card key={i} padding="md" hover={false}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</p>
                        <p className="text-slate-700 font-medium">{item.value}</p>
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
