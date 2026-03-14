"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n";

const tabs = [
  {
    key: "inventory",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
        <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
      </svg>
    ),
    visual: (
      <div className="space-y-3">
        {[
          { name: "SKU-2847", stock: 85, color: "bg-emerald-500" },
          { name: "SKU-1923", stock: 23, color: "bg-amber-500" },
          { name: "SKU-4561", stock: 95, color: "bg-emerald-500" },
          { name: "SKU-7834", stock: 8, color: "bg-red-500" },
          { name: "SKU-3290", stock: 67, color: "bg-emerald-500" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3"
          >
            <span className="text-xs text-slate-400 font-mono w-20">{item.name}</span>
            <div className="flex-1 bg-slate-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${item.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${item.stock}%` }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
              />
            </div>
            <span className={`text-xs font-medium ${item.stock < 20 ? "text-red-400" : item.stock < 50 ? "text-amber-400" : "text-emerald-400"}`}>
              {item.stock}%
            </span>
          </motion.div>
        ))}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-700">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-red-400">1 item below reorder threshold — auto-reorder triggered</span>
        </div>
      </div>
    ),
  },
  {
    key: "orders",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16h6M16 16l3-3M16 16l3 3" />
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
        <path d="m7.5 4.27 9 5.15" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
    visual: (
      <div className="space-y-4">
        {[
          { step: "Order Received", time: "14:23", status: "done" },
          { step: "Payment Verified", time: "14:23", status: "done" },
          { step: "Inventory Checked", time: "14:24", status: "done" },
          { step: "Packed & Labeled", time: "14:31", status: "active" },
          { step: "Shipped", time: "—", status: "pending" },
        ].map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              item.status === "done" ? "bg-emerald-500/20 text-emerald-400" :
              item.status === "active" ? "bg-primary-500/20 text-primary-400 ring-2 ring-primary-500/30" :
              "bg-slate-700 text-slate-500"
            }`}>
              {item.status === "done" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              ) : item.status === "active" ? (
                <div className="w-2.5 h-2.5 bg-primary-400 rounded-full animate-pulse" />
              ) : (
                <span className="text-xs">{i + 1}</span>
              )}
            </div>
            {i < 4 && <div className={`absolute ml-4 mt-10 w-0.5 h-5 ${item.status === "done" ? "bg-emerald-500/30" : "bg-slate-700"}`} />}
            <div className="flex-1">
              <span className={`text-sm ${item.status === "pending" ? "text-slate-500" : "text-slate-200"}`}>{item.step}</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">{item.time}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    key: "notifications",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    visual: (
      <div className="space-y-3">
        {[
          { type: "email", msg: "Order #2847 confirmed — tracking sent", time: "2m ago", color: "text-primary-400" },
          { type: "sms", msg: "Your package is out for delivery", time: "1h ago", color: "text-emerald-400" },
          { type: "webhook", msg: "CRM updated: customer status → active", time: "1h ago", color: "text-amber-400" },
          { type: "email", msg: "Review request sent for order #2831", time: "3h ago", color: "text-primary-400" },
          { type: "slack", msg: "#alerts: Low stock alert for SKU-1923", time: "4h ago", color: "text-purple-400" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3"
          >
            <span className={`text-xs font-mono uppercase mt-0.5 ${item.color} shrink-0 w-16`}>{item.type}</span>
            <span className="text-sm text-slate-300 flex-1">{item.msg}</span>
            <span className="text-xs text-slate-500 shrink-0">{item.time}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
];

export function AutomationShowcase({ dict }: { dict: Dictionary }) {
  const [activeTab, setActiveTab] = useState(0);
  const a = dict.automationShowcase;

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel>{a.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{a.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{a.subtitle}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {a.tabs.map((tab: any, i: number) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  i === activeTab
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {tabs[i].icon}
                {tab.title}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="ml-3 text-xs text-slate-500 font-mono">LeftFlow Dashboard</span>
            </div>
            <div className="p-6 min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {a.tabs[activeTab].title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6">
                    {a.tabs[activeTab].description}
                  </p>
                  {tabs[activeTab].visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
