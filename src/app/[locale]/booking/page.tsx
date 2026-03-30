"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Send,
  CheckCircle,
  User,
  Clock,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { startOfDay } from "date-fns";
import { usePathname, useRouter } from "next/navigation";

const timeSlots = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    startOfDay(new Date())
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<
    Record<string, string[]>
  >({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "lash_lift_tint",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();

  const currentLangDetails = pathname.startsWith(`/${"nl"}`);

  useEffect(() => {
    // Load available slots from server
    const fetchSlots = async () => {
      try {
        const response = await fetch("/api/slots");
        const data = await response.json();
        setAvailableSlots(data);
      } catch (error) {
        toast("Error", { description: "Failed to load slots." });
      }
    };

    fetchSlots();
  }, []);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast("Missing Info", { description: "Select a date and time." });
      return;
    }

    const bookingData = {
      ...formData,
      date: format(selectedDate, "yyyy-MM-dd"),
      time: selectedTime,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        toast("Booking Successful", {
          description: "Your booking has been submitted.",
          icon: <CheckCircle className="text-green-500" />,
        });
        setSelectedDate(undefined);
        setSelectedTime(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        toast("Error", { description: "Failed to submit booking." });
      }
    } catch {
      toast("Error", { description: "Server error during booking." });
    } finally {
      setIsSubmitting(false);
    }
  };
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const dateKey = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const availableTimes = availableSlots[dateKey] || [];

  return (
    <section className="pt-32 bg-background text-primary">
      <div className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            {t("bookingPage.title.main")}{" "}
            <span className="text-secondary">
              {t("bookingPage.title.highlight")}
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t("bookingPage.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto card-soft bg-background p-6 md:p-10">
          {isSubmitted ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle className="h-16 w-16  mx-auto mb-6 text-accent" />
              <h2 className="text-2xl font-semibold font-serif mb-3 text-text-headings">
                {t("bookingPage.confirmation.title")}
              </h2>
              <p className="text-text-secondary">
                {t("bookingPage.confirmation.message")}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              <motion.p
                className="text-sm text-text-secondary/80 mb-6"
                variants={fadeIn(0.1)}
                initial="hidden"
                animate="visible"
              >
                {t("bookingPage.formIntro")}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeIn(0.2)}
                  initial="hidden"
                  animate="visible"
                >
                  <Label htmlFor="name" className="text-text-primary">
                    {t("bookingPage.form.name.label")}
                  </Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5  text-accent" />
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={t("bookingPage.form.name.placeholder")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn(0.3)}
                  initial="hidden"
                  animate="visible"
                >
                  <Label htmlFor="email" className="text-text-primary">
                    {t("bookingPage.form.email.label")}
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent" />
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("bookingPage.form.email.placeholder")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn(0.4)}
                initial="hidden"
                animate="visible"
              >
                <Label htmlFor="phone" className="text-text-primary">
                  {t("bookingPage.form.phone.label")}
                </Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent" />
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder={t("bookingPage.form.phone.placeholder")}
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn(0.5)}
                initial="hidden"
                animate="visible"
              >
                <Label htmlFor="service" className="text-text-primary">
                  {t("bookingPage.form.service.label")}
                </Label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm  shadow-soft-sm text-text-primary"
                >
                  <option value="lash_lift_tint">
                    {t("bookingPage.form.service.options.withTint")}
                  </option>
                  <option value="lash_lift_no_tint">
                    {t("bookingPage.form.service.options.withoutTint")}
                  </option>
                </select>
              </motion.div>

              <motion.div
                variants={fadeIn(0.8)}
                initial="hidden"
                animate="visible"
              >
                <Label htmlFor="message" className="text-text-primary">
                  {t("bookingPage.form.message.label")}
                </Label>
                <div className="relative mt-1">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-accent" />
                  <Textarea
                    name="message"
                    id="message"
                    placeholder={t("bookingPage.form.message.placeholder")}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="pl-10"
                  />
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-row space-y-2">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    fromDate={new Date()}
                  />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="flex flex-col items-start space-y-2 pt-3">
                    <Label>{t("bookingPage.form.time.label")}</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => {
                        const isAvailable = availableTimes.includes(time);
                        return (
                          <Button
                            key={time}
                            type="button"
                            variant={
                              selectedTime === time ? "default" : "outline"
                            }
                            disabled={!isAvailable}
                            onClick={() => setSelectedTime(time)}
                            className={`${!isAvailable ? "opacity-50 cursor-not-allowed" : ""}`}
                          >
                            {time}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <motion.div
                variants={fadeIn(0.9)}
                initial="hidden"
                animate="visible"
              >
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="mr-2"
                      >
                        <Send className="h-5 w-5 " />
                      </motion.div>
                      {t("bookingPage.form.submittingButton")}
                    </>
                  ) : (
                    <>
                      {t("bookingPage.form.submitButton")}
                      <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </motion.div>

              <motion.p
                className="text-xs text-center text-text-secondary/70 pt-2"
                variants={fadeIn(1)}
                initial="hidden"
                animate="visible"
              >
                {t("bookingPage.form.note")}
              </motion.p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
