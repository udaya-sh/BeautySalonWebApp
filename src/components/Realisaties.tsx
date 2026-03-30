"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { useTranslations } from "next-intl"; // Importing useTranslations hook

const images = [
  "/project1.jpeg",
  "/project3.jpeg",
  "/project5.jpeg",
  "/project6.jpeg",
  "/project4.jpeg",
  "/project2.jpeg",
];

export default function Realisaties() {
  const t = useTranslations("realisaties"); // Access translations for 'realisaties'

  return (
    <div className="bg-amber-50" id="realisaties">
      <div className="container mx-auto flex flex-col items-center justify-center pt-40 pb-20 p-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          {t("title")} {/* Dynamic translation for the title */}
        </h1>
        <p className="text-center mt-2 font-semibold">
          {t("description")} {/* Dynamic translation for the description */}
        </p>
        <div className="w-full pt-2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                {/* <Link href={`/realisation/${index + 1}`}> */}
                  <div className="relative">
                    <Image
                      src={src}
                      alt={`Realisatie project ${index + 1}`}
                      objectFit="cover"
                      className="rounded-lg"
                      width={650}
                      height={200}
                    />
                  </div>
                {/* </Link> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
