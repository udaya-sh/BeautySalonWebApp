"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function WayOfWorkingSection() {
  const t = useTranslations("way_of_working");
  const steps = t.raw("steps");

  return (
    <section className="py-24 bg-secondary/30">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              {/* connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px bg-border -translate-y-1/2 z-0"
                  style={{ width: "calc(100% - 3rem)", left: "3.5rem" }}
                />
              )}

              <div className="relative z-10">
                <div className="text-5xl font-heading font-light text-accent/20 mb-4">
                  {step.number}
                </div>

                <h3 className="font-heading text-xl font-medium mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}