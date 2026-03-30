"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background text-text-secondary shadow-soft-sm rounded-lg p-4 md:p-6 max-w-md w-full z-50 border border-border"
    >
      <p className="mb-3 text-sm">
        We use cookies to ensure the booking process works smoothly and to improve your experience.{" "}
        <a href="/cookie-policy" className="underline text-accent">Learn more</a>.
      </p>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={handleReject}>
          Reject
        </Button>
        <Button variant="default" size="sm" onClick={handleAccept}>
          Accept
        </Button>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
