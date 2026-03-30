"use client";
import React from "react";
import { motion } from "framer-motion";
import { Droplet, Sparkles, Check, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  icon: React.JSX.Element;
  titleKey: string;
  descriptionKey: string;
  durationKey: string;
  benefitsKey: any;
  beforeAfterImages: {
    altKey: string;
    descKey: string;
    beforeSrc: string;
    afterSrc: string;
  }[];
  delay: number;
}

const ServiceCard = ({
  id,
  icon,
  titleKey,
  descriptionKey,
  durationKey,
  benefitsKey,
  beforeAfterImages,
  delay,
}: ServiceCardProps) => {
  const t = useTranslations();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay } },
  };

  return (
    <div className="">
      <div className="flex items-center mb-6">
        <div className="py-3  rounded-full mr-4">{icon}</div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-text-headings">
          {t(titleKey)}
        </h2>{" "}
        {/* Heading color */}
      </div>
      <p className="text-text-secondary mb-6 leading-relaxed">
        {t(descriptionKey)}
      </p>

      <div className="mb-6 flex items-center text-sm text-text-primary">
        <Clock size={18} className="mr-2 text-accent" />{" "}
        {/* Secondary color for icon */}
        <strong>{t("servicesPage.common.durationLabel")}:</strong>&nbsp;
        {t(durationKey)}
      </div>

      <h3 className="text-xl font-semibold font-serif mb-3 text-text-headings">
        {t("servicesPage.common.benefitsTitle")}
      </h3>
      <ul className="space-y-2 mb-8">
        {/* {t(benefitsKey.map((benefit, index) => (
            <li key={index} className="flex items-start text-text-secondary/90">
              <Check
                size={18}
                className="mr-2 mt-1 text-primary flex-shrink-0" */}
        {/* />{" "} */}
        {/* Primary color for check icon */}
        {/* <span>{benefitke}</span>
            </li>
          ))} */}
      </ul>

      {beforeAfterImages && beforeAfterImages.length > 0 && (
        <>
          <h3 className="text-xl font-semibold font-serif mb-4 text-text-headings">
            {t("servicesPage.common.galleryTitle")}
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {beforeAfterImages.map(
              (
                img: {
                  altKey: string;
                  descKey: string;
                  beforeSrc: string;
                  afterSrc: string;
                },
                index: number
              ) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden shadow-soft-sm"
                >
                  <img
                    alt={t(img.altKey)}
                    className="w-full h-full object-cover"
                    src={img.beforeSrc}
                  />
                  <img
                    alt={t(img.altKey)}
                    className="w-full h-full object-cover"
                    src={img.afterSrc}
                  />
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

const ServicesPage = () => {
  const t = useTranslations();

  const servicesData = [
    {
      id: "with-tint",
      icon: <Droplet className="h-10 w-10 text-accent" />,
      titleKey: "servicesPage.withTint.title",
      descriptionKey: "servicesPage.withTint.description",
      durationKey: "servicesPage.withTint.duration",
      benefitsKey: "servicesPage.withTint.benefits",
      beforeAfterImages: [
        {
          beforeSrc: "/B3.jpeg",
          afterSrc: "/A3.jpeg",
          altKey: "servicesPage.withTint.image1Alt",
          descKey: "servicesPage.withTint.image1Desc",
        },
        {
          beforeSrc: "/A3.jpeg",
          afterSrc: "/A1.jpeg",
          altKey: "servicesPage.withTint.image2Alt",
          descKey: "servicesPage.withTint.image2Desc",
        },
      ],
      delay: 0.2,
    },
    {
      id: "without-tint",
      icon: (
        <Sparkles className="h-10 w-10 text-accent" />
      ) /* Secondary color for icon */,
      titleKey: "servicesPage.withoutTint.title",
      descriptionKey: "servicesPage.withoutTint.description",
      durationKey: "servicesPage.withoutTint.duration",
      benefitsKey: "servicesPage.withoutTint.benefits",
      beforeAfterImages: [
        {
          beforeSrc: "/B2.jpeg",
          afterSrc: "/A2.jpeg",
          altKey: "servicesPage.withoutTint.image1Alt",
          descKey: "servicesPage.withoutTint.image1Desc",
        },
        {
          beforeSrc: "/A2.jpeg",
          afterSrc: "/A2.jpeg",
          altKey: "servicesPage.withoutTint.image2Alt",
          descKey: "servicesPage.withoutTint.image2Desc",
        },
      ],
      delay: 0.4,
    },
  ];

  return (
    <div className="container  mx-auto  py-12 md:py-16 text-primary ">
      <div className=" ">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-text-headings">
            {t("servicesPage.mainTitle.main")}{" "}
            <span className="text-secondary">
              {t("servicesPage.mainTitle.highlight")}
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t("servicesPage.mainSubtitle")}
          </p>
        </motion.div>
        <div className="card-soft bg-background overflow-hidden">
          <div className="space-y-12 md:space-y-16 min-h-[200px]">
            {servicesData.map((service, index) => {
              const delay = service.delay || index * 0.2;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="card-soft bg-background overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="  text-center bg-gradient-to-br from-primary/5 via-secondary/50 to-primary/5 text-primary rounded-2xl py-5" /* Primary tint for CTA card */
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-text-headings">
            {t("servicesPage.cta.title")}
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            {t("servicesPage.cta.subtitle")}
          </p>
          <Link href="/booking">
            <Button variant="default" size="lg">
              {t("servicesPage.cta.button")}
            </Button>{" "}
            {/* Default (primary) button */}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
