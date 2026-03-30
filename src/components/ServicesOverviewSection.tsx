import React from "react";
import { motion } from "framer-motion";
import { Droplet, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ServicesOverviewSection = () => {
  const t = useTranslations("servicesOverview");

  const services = [
    {
      icon: <Droplet className="h-10 w-10 text-accent mb-4" />,
      titleKey: "withTint.title",
      descriptionKey: "withTint.description",
      link: "/services#with-tint",
    },
    {
      icon: (
        <Sparkles className="h-10 w-10 text-accent mb-4" />
      ) ,
      titleKey: "withoutTint.title",
      descriptionKey: "withoutTint.description",
      link: "/services#without-tint",
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-background text-primary ">
      {/* Plain background */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-4xl font-bold font-serif mb-4 text-primary ">
            {t("title.main")}{" "}
            <span className="text-secondary">{t("title.highlight")}</span>
          </h2>
          <p className="text-lg text-text-secondary">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-soft text-center flex flex-col items-center"
              custom={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-3 rounded-full inline-block mb-6 ">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold font-serif text-text-headings mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="text-text-secondary/90 mb-6 flex-grow">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="justify-center align-middle text-center">
          <Link href="/services">
            <Button
              variant="link"
              className="text-accent hover:text-primary/80 font-medium group"
            >
              {" "}
              {/* Link button with primary color */}
              {t("learnMore")}
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
