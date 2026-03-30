"use client";
import { useState } from "react";
import { toast } from "sonner"; // Importing Sonner's toast
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function Jobs() {
  const  t  = useTranslations();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("jobs.thankYou")); // Using translation for success message
    setSubmitted(true);
  };

  // // Fetch FAQ list from translations
  // const faqList = t("jobs.faqList", );

  // // Render FAQ section only if it's an array
  // const renderFAQ = () => {
  //   if (Array.isArray(faqList)) {
  //     return faqList.map((faq, index) => (
  //       <div key={index} className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
  //         <p>{faq.answer}</p>
  //       </div>
  //     ));
  //   } else {
  //     return <div>{t("jobs.noFaqAvailable")}</div>; // Fallback translation if faqList is not available
  //   }
  // };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <div className="bg-white py-16 px-8 text-[#062035]">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            {t("jobs.heroTitle")}
          </h1>
          <p className="text-center mt-2 font-semibold">
            {t("jobs.heroDescription")}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row mt-12 px-6 gap-12">
        {/* Left Column: Job Information */}
        <div className="flex flex-col md:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-[#062035] mb-4">
              {t("jobs.whyWorkWithUs")}
            </h2>
            <ul className="text-lg space-y-3">
              <li> {t("jobs.whyList.0")}</li>
              <li> {t("jobs.whyList.1")}</li>
              <li> {t("jobs.whyList.2")}</li>
              <li> {t("jobs.whyList.3")}</li>
              <li> {t("jobs.whyList.4")}</li>
              <li> {t("jobs.whyList.5")}</li>
              <li> {t("jobs.whyList.6")}</li>
              <li> {t("jobs.whyList.7")}</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="flex flex-col md:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-[#062035] mb-6">
              {t("jobs.applyForFuture")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-lg font-medium">
                  {t("jobs.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg shadow-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-lg font-medium">
                  {t("jobs.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 bg-[#e6551b] text-white text-lg rounded-lg font-medium hover:bg-[#c34e1b]"
              >
                {t("jobs.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Information Section (FAQ) */}
      <div className="bg-[#f7f7f7] py-12 mt-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#062035] mb-8">
            {/* {t("jobs.faq")} */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* {renderFAQ()} */}
          </div>
        </div>
      </div>

      <Toaster
        toastOptions={{
          style: {
            background: "#e6551b",
            color: "#fff",
          },
        }}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
