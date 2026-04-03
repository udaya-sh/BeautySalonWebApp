"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Star, Award, Users, Clock } from "lucide-react";

const STORY_IMG =
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80";



const stats = [
  { value: "15+", key: "years", icon: Clock },
  { value: "10K+", key: "clients", icon: Users },
  { value: "12", key: "experts", icon: Star },
  { value: "50+", key: "products", icon: Award },
];

export default function About() {
  const about = useTranslations("aboutPage");
  const hero = useTranslations("hero");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = about.raw("values");

  return (
    <>
      {/* Hero */}
      {/* <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
              {about("subtitle")}
            </span>

            <h1 className="font-heading text-5xl md:text-7xl font-light mt-3 mb-4">
              {about("title")}
            </h1>
          </motion.div>
        </div>
      </section> */}

      {/* Stats */}
      {/* <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-primary-foreground/10">
            {stats.map(({ value, key, icon: Icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 py-2"
              >
                <Icon className="w-4 h-4 text-accent/70" />

                <div className="font-heading text-4xl md:text-5xl font-light text-accent">
                  {value}
                </div>

                <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 text-center">
                  {about(`stats.${key}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src={STORY_IMG}
                alt={about("title")}
                className="w-full rounded-3xl object-cover aspect-[4/5]"
              />

              <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                <div className="font-heading text-3xl font-light">15+</div>
                <div className="text-xs mt-1 text-white/80 leading-snug">
                  {about("stats.years")}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
                {about("subtitle")}
              </span>

              <h2 className="font-heading text-3xl md:text-4xl font-light leading-tight">
                {about("title")}
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{about("p1")}</p>
                <p>{about("p2")}</p>
                <p>{about("p3")}</p>
              </div>

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-full text-sm font-medium hover:brightness-110 transition-all mt-2"
              >
                {hero("cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
              {about("subtitle")}
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-light mt-3">
              {about("values_title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/60 rounded-2xl p-8 group hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors">
                  <span className="font-heading text-2xl text-accent">
                    {value.title.charAt(0)}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium mb-3">
                  {value.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section> */}


    </>
  );
}