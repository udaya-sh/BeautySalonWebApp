"use client";
import React from "react";
import { useTranslations } from "next-intl"; 
import Hero from "@/components/Hero";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CtaHomeSection from "@/components/CtaHomeSection";
import WhyLashLiftingSection from "@/components/WhyLashLiftingSection";

const Home = () => {
  const t = useTranslations(); 

  return (
    <>
      <Hero  t ={t} /> 
      <ServicesOverviewSection />
      <BeforeAfterSection />
      <WhyLashLiftingSection />
      <CtaHomeSection />
    </>
  );
};

export default Home;
