"use client";
import React from "react";
import { motion } from "framer-motion";

const CookiePolicyPage = () => {
  return (
    <div className="pt-32">
      <div className="container mx-auto py-12 md:py-16 text-primary">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-text-headings mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            This page explains how and why we use cookies on our website.
          </p>
        </motion.div>

        <div className="card-soft bg-background p-6 md:p-8 rounded-2xl shadow-soft-sm space-y-6 text-text-secondary">
          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">
              1. What are cookies?
            </h2>
            <p>
              Cookies are small text files placed on your device to help the
              site function, remember your preferences, and improve your
              experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">
              2. How we use cookies
            </h2>
            <p>
              We use cookies to temporarily store your booking data during your
              session. These cookies are essential for the booking process to
              function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">
              3. Third-party cookies
            </h2>
            <p>
              We do not use third-party cookies for advertising or analytics at
              this time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">
              4. Managing cookies
            </h2>
            <p>
              You can set your browser to block or alert you about cookies, but
              some parts of the site may not work properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-headings mb-2">
              5. Contact
            </h2>
            <p>
              If you have questions about our use of cookies, please contact us
              at [Your Company Name], [your email address].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
