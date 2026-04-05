"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Hand } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const HAIR_IMG =
  "/hairr.png";

const BEAUTY_IMG =
  "/nail.png";

const SPA_IMG =
  "/beauty.png";

const services = [
  { icon: Scissors, img: HAIR_IMG, key: "hair" },
  { icon: Sparkles, img: SPA_IMG, key: "skin" },
  { icon: Hand, img: BEAUTY_IMG, key: "nails" },
];

export default function ServicesOverviewSection() {
  const t = useTranslations("servicesOverview");
  const locale = useLocale();

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
            {t("subtitle")}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-light mt-3 mb-4">
            {t("title")}
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={`/${locale}/services`}
                className="group block"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                  
                  {/* Image (Next optimized) */}
                  <Image
                    src={service.img}
                    alt={t(`serviceNames.${service.key}`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <service.icon className="w-4 h-4 text-white" />
                    </div>

                    <h3 className="font-heading text-2xl text-white font-medium">
                      {t(`serviceNames.${service.key}`)}
                    </h3>

                    <p className="text-white/70 text-sm mt-1">
                      {t(`serviceDesc.${service.key}`)}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}