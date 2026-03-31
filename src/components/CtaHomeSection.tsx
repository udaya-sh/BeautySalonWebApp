"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("ctaHome");

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-light mb-5">
            {t("title")}
          </h2>

          <p className="text-primary-foreground/60 text-sm md:text-base max-w-md mx-auto mb-10">
            {t("description")}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-full text-sm font-medium hover:brightness-110 transition-all"
          >
            {t("buttonText")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}