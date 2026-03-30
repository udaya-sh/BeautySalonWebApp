'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations(); // ✅ Translation hook

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-amber-50"
      id="overOns"
    >
      {/* Diagonal Background */}
      <div className="h-full w-full absolute inset-0 bg-white clip-diagonal"></div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto container lg:px-7 py-10 md:py-60 lg:py-0 tracking-wide font-semibold">
        <div className="mx-auto flex flex-col space-y-10 p-3">
          {/* Title */}
          <h1 className="font-bold mt-40 leading-[1.1] text-3xl md:text-4xl lg:text-5xl text-[#062035]">
            {t('about.title')}
          </h1>

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
            {/* Left Text Section */}
            <div className="lg:w-1/2 pl-2 lg:text-left space-y-6 text-[#041624]">
              <p className="text-sm md:text-lg text-[#062035] pt-4 font-semibold">
                <span className="font-bold text-[#041624] text-lg sm:text-xl md:text-2xl">
                  {t('about.companyName')}
                </span>
                , {t('about.description')}
              </p>
              <p className="text-sm md:text-lg text-[#062035] pt-4">
                {t('about.mission')}
              </p>
            </div>
            {/* Right Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="/building.png"
                alt={t('about.buildingAlt')}
                width={600}
                height={400}
                className="shadow-2xl shadow-[#062035] rounded-lg max-w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 -mb-20 lg:mb-10">
            {/* Left Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="/about.png"
                alt={t('about.aboutAlt')}
                width={600}
                height={400}
                className="shadow-2xl shadow-[#062035] rounded-lg max-w-full h-auto object-cover"
              />
            </div>
            {/* Right Text Section */}
            <div className="lg:w-1/2 lg:text-left space-y-6 text-[#062035]">
              <p className="text-sm md:text-lg text-[#062035] pt-4">
                {t('about.personalizedService')}
              </p>
              <p className="text-sm md:text-lg text-[#062035] pt-4">
                {t('about.technology')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Diagonal Background */}
      <style>
        {`
          .clip-diagonal {
            clip-path: ellipse(100% 50% at 25% 50%);
          }
        `}
      </style>
    </section>
  );
}
