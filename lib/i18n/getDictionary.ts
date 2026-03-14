import type { Locale } from "./config";

const dictionaries = {
  tr: () => import("@/content/dictionaries/tr.json").then((m) => m.default),
  en: () => import("@/content/dictionaries/en.json").then((m) => m.default),
  nl: () => import("@/content/dictionaries/nl.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
