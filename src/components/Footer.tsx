"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.28 8.28 0 0 0 4.84 1.55V6.85a4.85 4.85 0 0 1-1.07-.16z"/>
  </svg>
);

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center  mb-4">
              <Image
                src="/logo.png"
                alt="Maison de Beauté logo"
                width={0}
                height={0}
                priority
              />
              <h3 className="font-heading text-2xl font-semibold">
                Maison de <span className="text-accent">Beauté</span>
              </h3>
            </Link>

            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              {t("description")}
            </p>

            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              {[
                { label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
                { label: "Facebook", icon: <Facebook className="w-4 h-4" /> },
                { label: "TikTok", icon: <TikTokIcon /> },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-heading text-lg font-medium mb-4">{t("quick_links")}</h4>
            <div className="space-y-2.5">
              <Link href="/" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {nav("home")}
              </Link>
              <Link href="/about" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {nav("about")}
              </Link>
              <Link href="/services" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {nav("services")}
              </Link>
              <Link href="/contact" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {nav("contact")}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-heading text-lg font-medium mb-4">{t("legal")}</h4>
            <div className="space-y-2.5">
              <Link href="/privacy-policy" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("privacy")}
              </Link>
              <Link href="/cookie-policy" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("cookies")}
              </Link>
              <Link href="/terms-of-service" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Maison de Beauté. {t("rights")}
          </p>
        </div>

      </div>
    </footer>
  );
}