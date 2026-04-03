"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Terms() {
  const t = useTranslations("terms");
  const sections = t.raw("sections");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          <h1 className="font-heading text-4xl md:text-5xl font-light mb-3">
            {t("title")}
          </h1>

          <p className="text-muted-foreground text-sm mb-12">
            {t("last_updated")}: {t("last_updated_date")}
          </p>

          <div className="space-y-8">
            {sections.map((section: any, i: number) => (
              <div key={i}>
                <h2 className="font-heading text-xl font-medium mb-3">
                  {section.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}