// app/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { ReactNode } from "react";
import "../globals.css";
import { notFound } from "next/navigation";
import { Jost } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "nl" }, { locale: "fr" }];
}
const jost = Jost({
  // variable: "--font-jost-sans",
  subsets: ["latin"],
});

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: "Luxury Beauty Salon",
      image: "https://media.base44.com/images/public/69c24a713322c8d8ad724ffb/a29e1e2b1_generated_a38eb86b.png",
      description: "Premium beauty and wellness services",
    }),
  }}
/>

export const metadata: Metadata = {
  title: "Maison de Beaute| Premium Hair & Skin Care",
  description:
    "Experience luxury beauty treatments. Hair styling, skincare, and premium salon services tailored to you.",
  keywords: [
    "beauty salon",
    "hair styling",
    "skincare",
    "luxury salon",
  ],
  openGraph: {
    title: "Maison de Beaute",
    description: "Premium beauty services tailored for you.",
    images: [
      {
        url: "https://media.base44.com/images/public/69c24a713322c8d8ad724ffb/a29e1e2b1_generated_a38eb86b.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    // Load the messages based on the locale
    messages = await getMessages({ locale });
  } catch (error) {
    return notFound(); // If messages are not found, return 404
  }

  return (
    <html lang={locale}>
      <body className={jost.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <CookieBanner />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
