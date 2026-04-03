"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function Contact() {
  const t = useTranslations("contact");

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = t.raw("services");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSending(true);

    await new Promise((r) => setTimeout(r, 1500));

    setSending(false);
    setSent(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSent(false), 5000);
  };

  const infoItems = [
    { icon: MapPin, label: t("info.address_label"), value: t("info.address") },
    { icon: Phone, label: t("info.phone_label"), value: t("info.phone") },
    { icon: Mail, label: t("info.email_label"), value: t("info.email") },
    { icon: Clock, label: t("info.hours_label"), value: t("info.hours") },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="bg-secondary/50 border-border/60 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      {t("form.email")}
                    </label>

                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
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
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="bg-secondary/50 border-border/60 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    {t("form.message")}
                  </label>

                  <Textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="bg-secondary/50 border-border/60 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-10 py-3 h-12 rounded-full bg-accent text-accent-foreground hover:brightness-110"
                >
                  {sending ? t("form.sending") : t("form.send")}
                </Button>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-600 font-medium"
                  >
                    {t("form.success")}
                  </motion.p>
                )}

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
    </>
  );
}