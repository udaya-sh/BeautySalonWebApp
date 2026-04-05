"use client";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function Contact() {
  const [form, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [buttonText, setButtonText] = useState(t("form.send"));

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // Validation function
  const handleValidation = useCallback(() => {
    let tempErrors: Record<string, boolean> = {};
    let isValid = true;

    Object.entries(form).forEach(([key, value]) => {
      if (!value && key !== "companyName") {
        tempErrors[key] = true;
        isValid = false;
      }
    });

    setErrors(tempErrors);
    return isValid;
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setButtonText(t("form.sending"));
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const { error } = await res.json();

      if (error) {
        toast.error("error");
      } else {
        toast.success(t("form.success"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch {
      toast.error("error");
    } finally {
      setButtonText(t("form.send"));
    }
  };

  const infoItems = [
    {
      icon: MapPin,
      label: t("info.address_label"),
      value: "Av. Gustave Latinis 43, 1030 Schaerbeek",
    },
    { icon: Phone, label: t("info.phone_label"), value: "0465914824" },
    {
      icon: Mail,
      label: t("info.email_label"),
      value: "drilonalia11@gmail.com",
    },
    { icon: Clock, label: t("info.hours_label"), value: t("info.hours") },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
              {t("subtitle")}
            </span>

            <h1 className="font-heading text-4xl md:text-5xl font-light mt-3 mb-4">
              {t("title")}
            </h1>

            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      {t("form.name")}
                    </label>

                    <Input
                      required
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border/60 rounded-xl h-12"
                    />
                    {errors["name"] && (
                      <p className="text-[#e6551b]">{t("required")}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      {t("form.email")}
                    </label>

                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border/60 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      {t("form.phone")}
                    </label>

                    <Input
                      type="number"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border/60 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    {t("form.message")}
                  </label>

                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/60 rounded-xl resize-none "
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-3 h-12 rounded-full bg-accent text-accent-foreground hover:brightness-110"
                >
                  {isSubmitting ? t("form.sending") : t("form.send")}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {infoItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </div>

                    <p className="text-sm font-medium whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Toaster
        toastOptions={{ style: { background: "#dc2626", color: "#fff" } }}
      />
    </>
  );
}
