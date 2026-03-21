import { Roboto, Playfair_Display } from "next/font/google";

// Roboto — body & UI text (closest to Helvetica Neue available via Google)
export const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

// Playfair Display — display serif headings (Portrait alternative)
export const portrait = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-portrait",
});
