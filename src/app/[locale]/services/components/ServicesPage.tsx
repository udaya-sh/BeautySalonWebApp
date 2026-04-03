"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import ServiceCategory from "./ServicesCategory";

export default function Services() {
  const t = useTranslations("services_page");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
              {t("subtitle")}
            </span>

            <h1 className="font-heading text-3xl md:text-4xl font-light mt-3 mb-4">
              {t("title")}
            </h1>

            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.raw("categories").map((category: any, i: number) => (
              <ServiceCategory key={i} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}