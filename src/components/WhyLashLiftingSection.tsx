import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Eye, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

const WhyLashLiftingSection = () => {
  const t = useTranslations();

  const benefits = [
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      titleKey: "whyLashLifting.benefits.naturalLook.title",
      descriptionKey: "whyLashLifting.benefits.naturalLook.description",
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      titleKey: "whyLashLifting.benefits.longLasting.title",
      descriptionKey: "whyLashLifting.benefits.longLasting.description",
    },
    {
      icon: <Sun className="h-8 w-8 text-accent" />,
      titleKey: "whyLashLifting.benefits.lowMaintenance.title",
      descriptionKey: "whyLashLifting.benefits.lowMaintenance.description",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      titleKey: "whyLashLifting.benefits.safeGentle.title",
      descriptionKey: "whyLashLifting.benefits.safeGentle.description",
    },
  ];

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-background text-primary">
      {" "}
      {/* Using muted background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <img
                alt={t("whyLashLifting.imageAlt")}

                className="rounded-xl  w-full h-auto object-cover max-h-[500px] transpar"
                src="/bg.jpg"
              />
              <a className="text-[5px]" href="https://www.freepik.com/free-photo/pattern-separate-false-lashes-pink-background-with-hard-light-makes-shadow_26183802.htm#fromView=keyword&page=1&position=18&uuid=b71a7116-bf3b-4fc0-9342-8888f0a82a79&query=Lashes+Background">Image by Anastasia Kazakova on Freepik</a>
              <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/70 to-background/50"></div>
            </div>

            {/* Stronger gradient */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-xl md:text-4xl font-bold font-serif mb-6 text-secondary">
              {t("whyLashLifting.title.main")}{" "}
              <span className="text-primary">
                {t("whyLashLifting.title.highlight")}
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              {t("whyLashLifting.subtitle")}
            </p>
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex-shrink-0 mr-4 mt-1  p-2 ">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-serif text-text-headings mb-1">
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="text-text-secondary/90">
                      {t(benefit.descriptionKey)}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLashLiftingSection;
