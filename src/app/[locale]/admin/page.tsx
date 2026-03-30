"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { addDays, format, startOfWeek } from "date-fns";

const timeSlots = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

type Booking = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  submissionDate: string;
};

const AdminPage = () => {
  const t = useTranslations();
  const [availableSlots, setAvailableSlots] = useState<Record<string, string[]>>({});
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));

  useEffect(() => {
    fetch("/api/slots")
      .then((res) => res.json())
      .then((data) => setAvailableSlots(data))
      .catch(() => toast("Error", { description: "Failed to load slots" }));
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        const result = await response.json();
        if (response.ok) {
          setBookings(result.bookings);
        } else {
          console.error("Failed to fetch bookings:", result.error);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  const toggleTimeSlot = (dateKey: string, time: string) => {
    setAvailableSlots((prev) => {
      const currentSlots = prev[dateKey] || [];
      const newSlots = currentSlots.includes(time)
        ? currentSlots.filter((t) => t !== time)
        : [...currentSlots, time];
      return { ...prev, [dateKey]: newSlots };
    });
  };

  const handleSave = async () => {
    const response = await fetch("/api/slots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(availableSlots),
    });

    if (response.ok) {
      toast("Saved", { description: "Time slots updated successfully." });
    } else {
      toast("Error", { description: "Failed to save slots." });
    }
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  });

  return (
    <section className="py-16 md:py-24 bg-background text-primary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-cocoa mb-4">
            Admin - Manage Slots
          </h1>
          <p className="text-lg text-text-secondary">
            Select available booking slots for the entire week.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 card-soft bg-white shadow-lg p-6"
          variants={fadeIn(0.1)}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              onClick={() => setCurrentWeekStart((prev) => addDays(prev, -7))}
            >
              ← Previous Week
            </Button>
            <p className="font-semibold text-cocoa">
              Week of {format(currentWeekStart, "dd MMM yyyy")}
            </p>
            <Button
              variant="outline"
              onClick={() => setCurrentWeekStart((prev) => addDays(prev, 7))}
            >
              Next Week →
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-3 bg-muted text-left text-sm font-semibold">Time</th>
                  {weekDays.map((day) => (
                    <th
                      key={day.toISOString()}
                      className="border-b p-3 bg-muted text-sm font-semibold text-center"
                    >
                      {format(day, "EEE dd/MM")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time) => (
                  <tr key={time} className="hover:bg-muted/10">
                    <td className="p-3 text-sm font-medium text-cocoa bg-muted/10">{time}</td>
                    {weekDays.map((day) => {
                      const dateKey = format(day, "yyyy-MM-dd");
                      const selected = availableSlots[dateKey]?.includes(time);
                      return (
                        <td
                          key={dateKey + time}
                          className={`p-2 text-center cursor-pointer transition rounded-sm text-sm border hover:bg-muted/40 ${
                            selected ? "bg-primary text-white" : "text-cocoa"
                          }`}
                          onClick={() => toggleTimeSlot(dateKey, time)}
                        >
                          {selected ? "✔" : ""}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-6">
            <Button onClick={handleSave} className="flex items-center gap-2">
              Save Slots <Save className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="card-soft bg-white shadow-md p-6"
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-semibold mb-4 text-cocoa">Bookings</h2>
          {bookings.length === 0 ? (
            <p className="text-text-secondary">No bookings found.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((b, idx) => (
                <div key={idx} className="border p-4 rounded-md bg-muted/10">
                  <p><strong>Date:</strong> {b.date} at {b.time}</p>
                  <p><strong>Name:</strong> {b.name}</p>
                  <p><strong>Email:</strong> {b.email}</p>
                  <p><strong>Phone:</strong> {b.phone}</p>
                  <p><strong>Service:</strong> {b.service}</p>
                  <p><strong>Message:</strong> {b.message}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AdminPage;
