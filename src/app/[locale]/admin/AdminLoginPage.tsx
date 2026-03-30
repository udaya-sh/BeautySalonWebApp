"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, LogIn } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

const AdminLoginPage = () => {
  const t = useTranslations();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    // This is a mock password check. In a real app, this would be an API call.
    // The password should be stored securely (e.g., hashed) on a backend.
    // For this example, we'll use a simple hardcoded password.
    // IMPORTANT: NEVER use hardcoded passwords in production.
    const ADMIN_PASSWORD = "lashliftbyjenniadmin"; // Replace with an environment variable in a real app

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem("isAdminAuthenticated", "true");
        toast(t("adminLogin.toast.successDescription"));
        // navigate('/admin/dashboard');
      } else {
        toast(t("adminLogin.toast.errorTitle"), {
          description: t("adminLogin.toast.errorDescription"),
        });
        localStorage.removeItem("isAdminAuthenticated");
      }
      setIsLoading(false);
      setPassword("");
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center py-12 bg-pale-lilac/20">
      <motion.div
        className="max-w-md w-full card-soft bg-background p-8 md:p-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center mb-8">
          <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
          <h1 className="text-3xl font-bold font-serif text-cocoa">
            {t("adminLogin.title")}
          </h1>
          <p className="text-cocoa/70 mt-1">{t("adminLogin.subtitle")}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password">{t("adminLogin.passwordLabel")}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
              placeholder="********"
            />
          </div>
          <Button
            type="submit"
            className="btn-primary w-full text-lg py-3 group"
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                <LogIn className="h-5 w-5" />
              </motion.div>
            ) : (
              <LogIn className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            )}
            {isLoading
              ? t("adminLogin.loggingInButton")
              : t("adminLogin.loginButton")}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
