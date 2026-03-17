import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLdSchema from "@/components/JsonLdSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  verification: { other: { 'msvalidate.01': '4238BAC83D0A84184DB5C8AEF5C3CE14' } },
  title: "AI-Readiness für die Gastronomie | AI Shift Drift",
  description:
    "Ist dein Restaurant bereit für die KI-Ära? Kostenlose Scanner für Sichtbarkeit, Nutzbarkeit und Sicherheit. Jetzt prüfen.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI-Readiness für die Gastronomie | AI Shift Drift",
    description:
      "Ist dein Restaurant bereit für die KI-Ära? Kostenlose Scanner für Sichtbarkeit, Nutzbarkeit und Sicherheit. Jetzt prüfen.",
    locale: "de_DE",
    url: "https://ai-gastro-hub.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <JsonLdSchema />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
