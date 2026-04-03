"use client";
import React from "react";
import { useTranslations } from "next-intl"; 
import Hero from "@/components/Hero";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import CtaHomeSection from "@/components/CtaHomeSection";
import WhyUsSection from "@/components/WhyUsSection";
import WayOfWorkingSection from "@/components/WayofWorking";

const Home = () => {
  const t = useTranslations(); 

  return (
    <>
      <Hero t ={t} /> 
      <WhyUsSection />
      <ServicesOverviewSection />
      <WayOfWorkingSection/>
      <CtaHomeSection />

    </>
  );
};

export default Home;
