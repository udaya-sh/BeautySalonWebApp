"use client";
import React from "react";
import { useTranslations } from "next-intl"; 
import Hero from "@/components/Hero";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import CtaHomeSection from "@/components/CtaHomeSection";

const Home = () => {
  const t = useTranslations(); 

  return (
    <>
      <Hero t ={t} /> 
      <ServicesOverviewSection />
      {/* <BeforeAfterSection />
      <WhyLashLiftingSection /> */}
      <CtaHomeSection />
    </>
  );
};

export default Home;
