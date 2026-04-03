"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, ShieldCheck, Leaf } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [Sparkles, Heart, ShieldCheck, Leaf];

export default function WhyUsSection() {
  const t = useTranslations("why_us");
  const reasons = t.raw("reasons");

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
            {t("subtitle")}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-light mt-3 whitespace-pre-line">
            {t("title")}
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason: any, i: number) => {
            const Icon = icons[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>

                <h3 className="font-heading text-lg font-medium">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}