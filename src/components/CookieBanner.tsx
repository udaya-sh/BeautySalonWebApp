"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const STORAGE_KEY = "cookie_preferences";

const defaultPrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const locale = useLocale();

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (p: typeof defaultPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setVisible(false);
  };

  const acceptAll = () =>
    save({ essential: true, analytics: true, marketing: true });

  const saveCustom = () => save(prefs);

  const Toggle = ({
    checked,
    disabled,
    onChange,
  }: {
    checked: boolean;
    disabled?: boolean;
    onChange?: (v: boolean) => void;
  }) => (
    <button
      type="button"
      onClick={() => !disabled && onChange?.(!checked)}
      className={`relative w-10 h-6 rounded-full transition-colors ${
        checked ? "bg-accent" : "bg-border"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <Cookie className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-lg font-medium">
                    {t("title")}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t("description")}
                  </p>
                </div>
              </div>

              {/* Expand button */}
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1.5 text-xs text-accent font-medium mb-3 hover:underline"
              >
                {t("customize")}
                {expanded ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 mb-4 border-t border-border pt-3">

                      {/* Essential */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium">
                            {t("essential")}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {t("essentialDesc")}
                          </div>
                        </div>
                        <Toggle checked disabled />
                      </div>

                      {/* Analytics */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium">
                            {t("analytics")}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {t("analyticsDesc")}
                          </div>
                        </div>
                        <Toggle
                          checked={prefs.analytics}
                          onChange={(v) =>
                            setPrefs({ ...prefs, analytics: v })
                          }
                        />
                      </div>

                      {/* Marketing */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium">
                            {t("marketing")}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {t("marketingDesc")}
                          </div>
                        </div>
                        <Toggle
                          checked={prefs.marketing}
                          onChange={(v) =>
                            setPrefs({ ...prefs, marketing: v })
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-2">
                {expanded && (
                  <button
                    onClick={saveCustom}
                    className="flex-1 px-4 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    {t("savePreferences")}
                  </button>
                )}

                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:brightness-110 transition-all"
                >
                  {t("acceptAll")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}