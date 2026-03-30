import React from "react";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="bg-muted pt-16 pb-8 text-primary">
      {/* Muted background, secondary text */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center">
              <div
                className={`text-xl font-bold font-cursive transition-colors duration-300`}
              >
                <Image
                  src="/logo2.png"
                  alt="logo"
                  width={120}
                  height={120}
                  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
                />
              </div>
            </Link>
            <p className="text-sm my-6 mx-0 px-0">{t("footer.tagline")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/wimper.lifting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} className="text-accent"/>
              </a>
     
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-5 font-serif text-text-headings">
              {t("footer.quickLinks")}
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {t("nav.booking")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-5 font-serif text-text-headings">
              {t("footer.contactUs")}
            </p>
            <ul className="space-y-4 text-sm">
              {/* <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary flex-shrink-0" />
                <a href={`tel:${t('footer.phoneLink')}`} className="hover:text-primary">{t('footer.phoneDisplay')}</a>
              </li> */}
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="hover:text-primary"
                >
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-5 font-serif text-text-headings">
              {t("footer.openingHours.title")}
            </p>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.openingHours.weekend_status")}</li>
            </ul>
            <Link href="/booking">
              <Button
                variant="default"
                className="mt-6 text-sm w-full md:w-auto"
              >
                {t("nav.bookNow")}
              </Button>{" "}
              {/* Default (primary) button */}
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          {" "}
          {/* Border color from new palette */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="mb-4 md:mb-0">
              © {currentYear} LashLift by Jenni. {t("footer.rightsReserved")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-primary transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
