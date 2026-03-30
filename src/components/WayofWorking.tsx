"use client";

import React from "react";
import { ClipboardIcon, WrenchIcon, ShieldCheckIcon, DocumentCurrencyEuroIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslations } from "next-intl"; // Importing the useTranslations hook

const OurProcess = () => {
  const t = useTranslations("ourProcess"); // Accessing translations for the "ourProcess" namespace

  const steps = [
    {
      icon: ClipboardIcon,
      title: t("steps.0.title"),
      description: t("steps.0.description"),
    },
    {
      icon: DocumentCurrencyEuroIcon,
      title: t("steps.1.title"),
      description: t("steps.1.description"),
    },
    {
      icon: WrenchIcon,
      title: t("steps.2.title"),
      description: t("steps.2.description"),
    },
    {
      icon: ShieldCheckIcon,
      title: t("steps.3.title"),
      description: t("steps.3.description"),
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-30 bg-amber-50" id="werkwijze">
      <div className="h-full w-full absolute inset-0 bg-white clip-diagonal"></div>

      <div className="relative z-10 flex-1 mx-auto container md:py-30 md:p-10 tracking-wide w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062035] mb-8">{t("title")}</h2>
          <p className="text-lg text-[#062035]-700 font-semibold px-6">{t("description")}</p>
        </div>

        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-15">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
              <step.icon aria-hidden="true" className="size-15 flex-none text-[#ff5f1f]" />
              <div>
                <h3 className="text-xl font-semibold text-[#062035]">{step.title}</h3>
                <p className="text-[#062035] mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Uncomment this block if you want to add a call-to-action button */}
        {/* <div className="mt-12 text-center">
          <Link href="/#contact">
            <button className="bg-[#ff5f1f] text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md hover:bg-[#e6551b] transition">
              Vraag offerte aan
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default OurProcess;
