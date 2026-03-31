"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const HERO_IMG =
  "https://media.base44.com/images/public/69c24a713322c8d8ad724ffb/a29e1e2b1_generated_a38eb86b.png";

const LOGO =
  "/logo.png";

export default function Hero({ tt }: any) {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Luxury beauty salon interior with elegant lighting"
          fill
          priority
          quality={90}
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl will-change-transform"
        >
          {/* Logo + Subtitle */}
          <div className="flex items-center gap-3 mb-6">
            <Image
              src={LOGO}
              alt="Beauty salon brand logo"
              width={64}
              height={64}
              className="object-contain"
              loading="lazy"
            />
            <span className="text-amber-300/90 text-xs uppercase tracking-[0.3em] font-medium">
              {t("subtitle")}
            </span>
          </div>

          {/* SEO IMPORTANT: Only ONE h1 */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] mb-6 whitespace-pre-line">
            {t("title")}
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {t("discover")}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        aria-label="Scroll down"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown className="w-5 h-5 text-white/50" />
      </motion.button>
    </section>
  );
}
