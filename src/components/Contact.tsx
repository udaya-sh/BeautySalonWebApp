"use client";

import React, { useState, useCallback } from "react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useTranslations } from "next-intl"; // ✅ Import translations

const Contact = () => {
  const t = useTranslations("contact"); // ✅ Fetch translations

  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    postcode: "",
    telefoonnummer: "",
    dakrenovatie: false,
    gevelisolatie: false,
    zonnepaneleninstallatie: false,
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [buttonText, setButtonText] = useState(t("submit"));

  // Validation function
  const handleValidation = useCallback(() => {
    let tempErrors: Record<string, boolean> = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      if (!value && typeof value !== "boolean") {
        tempErrors[key] = true;
        isValid = false;
      }
    });

    setErrors(tempErrors);
    return isValid;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (key: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [key]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setButtonText(t("sending"));
    try {
      const res = await fetch("/api/offerte-aanvragen/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const { error } = await res.json();

      if (error) {
        toast.error(t("error"));
      } else {
        toast.success(t("success"));
        setFormData({
          naam: "",
          email: "",
          postcode: "",
          telefoonnummer: "",
          dakrenovatie: false,
          gevelisolatie: false,
          zonnepaneleninstallatie: false,
        });
      }
    } catch {
      toast.error(t("error"));
    } finally {
      setButtonText(t("submit"));
    }
  };

  return (
    <div className="bg-amber-50 pt-10 h-[68rem] md:h-screen" id="contact">
      <div className="container mx-auto md:flex min-h-screen items-center justify-center text-[#062035]">
        <div className="lg:w-[30%] px-5 py-10">
          <h1 className="lg:px-0 pt-10 lg:my-4 uppercase secondary text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("title")}
          </h1>
          <p className="primary lg:sec-text lg:text-left font-bold">
            {t("subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg shadow-xl flex flex-col px-8 py-8 lg:px-20 bg-white sm:min-w-[45%] max-w-full overflow-hidden">
          <h1 className="text-2xl font-bold">{t("formTitle")}</h1>

          {Object.entries(formData).map(([key, value]) => {
            if (typeof value === "boolean") return null;

            return (
              <div key={key} className="mt-4">
                <label className="block capitalize" htmlFor={key}>
                  {t(key)}
                  <span className="text-[#e6551b]">*</span>
                </label>
                <input
                  id={key}
                  type={key === "email" ? "email" : key === "telefoonnummer" ? "number" : "text"}
                  name={key}
                  value={value.toString()}
                  onChange={handleChange}
                  className="border-b w-full py-2"
                />
                {errors[key] && <p className="text-[#e6551b]">{t("required")}</p>}
              </div>
            );
          })}

          {/* Switches */}
          <div className="mt-4 flex flex-col sm:space-x-4 sm:flex-row">
            {["dakrenovatie", "gevelisolatie", "zonnepaneleninstallatie"].map((key) => (
              <div key={key} className="flex items-center w-full sm:w-auto">
                <Switch
                  checked={formData[key as keyof typeof formData] as boolean}
                  onCheckedChange={(checked) => handleSwitchChange(key, checked)}
                  className="data-[state=checked]:bg-[#e6551b]"
                />
                <label className="ml-2 capitalize">{t(key)}</label>
              </div>
            ))}
          </div>

          <button type="submit" className="px-10 mt-8 py-2 bg-[#e6551b] text-white font-light rounded-lg">
            {buttonText}
          </button>
        </form>
      </div>

      <Toaster toastOptions={{ style: { background: "#e6551b", color: "#fff" } }} />
    </div>
  );
};

export default Contact;
