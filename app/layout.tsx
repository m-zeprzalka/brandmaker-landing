import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrandMaker – Twoja cyfrowa Agencja Brandingowa",
  description:
    "BrandMaker to cyfrowa Agencja Brandingowa oparta na AI. Wygeneruj profesjonalne logo, BrandBook i pełną identyfikację wizualną w kilka minut.",
  keywords: [
    "brandmaker",
    "branding",
    "logo AI",
    "brandbook",
    "identyfikacja wizualna",
    "design system",
  ],
  openGraph: {
    title: "BrandMaker – Branding gotowy w kilka minut",
    description:
      "Od pomysłu do pełnego BrandBooka podczas jednej sesji. Zaoszczędź 5 000–50 000 zł i 3 tygodnie pracy.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
