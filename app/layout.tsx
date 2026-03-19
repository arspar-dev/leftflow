import type { Metadata } from "next";
import "./globals.css";

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
