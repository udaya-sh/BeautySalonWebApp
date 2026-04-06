"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const LOGO = "/logo1.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  // Detect language from URL (/en, /fr, /nl)
  const currentLang = pathname.split("/")[1] || "fr";

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
    // { href: "/booking", label: t("nav.booking") },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];
  const currentLangDetails =
    languages.find((lang) => pathname.startsWith(`/${lang.code}`)) ||
    languages[2];
  const languageButtonClass = `text-text-primary hover:bg-primary/10`;
  const baseTextColor = "text-text-primary"; // Use the main text color

  const changeLanguage = (lang: string) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
    router.push(newPathname);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === `/${currentLang}`;
    }
    return pathname === `/${currentLang}${path}` || pathname === path;
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto  flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href={`/${currentLang}`} className="flex items-center  ">
          <Image
            src={LOGO}
            alt="Maison de Beauté logo"
            width={200}
            height={200}
             className=" w-full max-w-[95px] sm-max-w-[200px]  object-contain"
            priority
            fetchPriority="high"
          />
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight">
            {/* Maison de <span className="text-accent">Beauté</span> */}
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={`/${currentLang}${link.href}`}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  isActive(link.href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}

                {isActive(link.href) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <div className="flex-1 flex">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-sm font-medium flex items-center cursor-pointer
                  ${languageButtonClass}`}
                >
                  <Globe size={16} className="mr-2" /> {currentLangDetails.flag}{" "}
                  <ChevronDown size={16} className="" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className=" bg-background border-border shadow-soft-lg  "
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`cursor-pointer hover:bg-primary/10 focus:bg-primary/10 ${baseTextColor}`}
                  >
                    {lang.flag} {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`px-3 py-2 text-sm font-medium flex items-center cursor-pointer
                  ${languageButtonClass}`}
              >
                <Globe size={16} className="mr-2" /> {currentLangDetails.flag}{" "}
                <ChevronDown size={16} className="" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className=" bg-background border-border shadow-soft-lg  "
            >
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`cursor-pointer hover:bg-primary/10 focus:bg-primary/10 ${baseTextColor}`}
                >
                  {lang.flag} {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={`/${currentLang}${link.href}`}
                  className={`block py-3 text-base ${
                    isActive(link.href)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
