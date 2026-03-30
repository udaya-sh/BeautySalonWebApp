"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-16 text-primary">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-text-headings mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains what data we collect, how we use it, and your rights.
        </p>
      </motion.div>

      <div className="card-soft bg-background p-6 md:p-8 rounded-2xl shadow-soft-sm space-y-6 text-text-secondary">
        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">1. Data we collect</h2>
          <p>We collect your name, email, phone number, and booking preferences when you use our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">2. How we use your data</h2>
          <p>We use your data to manage your bookings, provide customer support, and improve our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">3. Data sharing</h2>
          <p>We do not sell your data. We may share it with trusted providers (like our hosting platform or booking software) to provide our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">4. Your rights</h2>
          <p>You can request access to your data, ask us to delete it, or correct inaccuracies. Contact us at [your email].</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">5. Contact</h2>
          <p>If you have questions about this policy, contact [Your Company Name] at [your email address].</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
