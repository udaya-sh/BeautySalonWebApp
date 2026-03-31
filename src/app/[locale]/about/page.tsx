"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const ABOUT_IMG =
  "https://media.base44.com/images/public/69c24a713322c8d8ad724ffb/cb8a7d7d9_generated_493c3aa5.png";

const stats = [
  { value: "15+", key: "years" },
  { value: "10K+", key: "clients" },
  { value: "12", key: "experts" },
  { value: "50+", key: "products" },
];

export default function About() {
  const t = useTranslations("aboutPage");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = t.raw("values");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ABOUT_IMG}
            alt="Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="text-amber-300/90 text-xs uppercase tracking-[0.3em] font-medium">
              {t("subtitle")}
            </span>

            <h1 className="font-heading text-5xl md:text-7xl font-light text-white mt-3">
              {t("title")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-light text-accent mb-2">
                  {stat.value}
                </div>

                <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
                  {t(`stats.${stat.key}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-light text-center mb-16"
          >
            {t("values_title")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/60 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading text-2xl text-accent">
                    {value.title.charAt(0)}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium mb-2">
                  {value.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}