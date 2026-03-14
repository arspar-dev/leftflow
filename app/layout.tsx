import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeftFlow | AI Destekli Otomasyon Çözümleri",
  description:
    "İş süreçlerinizi yapay zeka ile otomatikleştirin. LeftFlow, otomasyon, veri analizi ve AI çözümleri ile işletmenizi geleceğe taşır.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
