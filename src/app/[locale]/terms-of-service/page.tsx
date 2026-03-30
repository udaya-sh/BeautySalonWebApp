"use client";
import React from "react";
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto py-12 md:py-16 text-primary">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-text-headings mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Please read these terms carefully. By using our service, you agree to them.
        </p>
      </motion.div>

      <div className="card-soft bg-background p-6 md:p-8 rounded-2xl shadow-soft-sm space-y-6 text-text-secondary">
        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">1. Using our service</h2>
          <p>You must provide accurate booking information and follow our guidelines. We may cancel bookings for misuse or unavailability.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">2. Cancellations</h2>
          <p>We may cancel a booking if necessary. We will try to notify you as soon as possible.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">3. Limitation of liability</h2>
          <p>We are not responsible for indirect damages. Our maximum liability is limited to the amount paid for your booking.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">4. Changes</h2>
          <p>We may update these terms. Continued use means you accept the changes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">5. Governing law</h2>
          <p>These terms are governed by the laws of [Your Country].</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">6. Contact</h2>
          <p>Questions? Contact us at [Your Company Name], [your email address].</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
