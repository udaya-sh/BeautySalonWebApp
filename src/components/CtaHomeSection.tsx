
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const CtaHomeSection = () => {
  const t  = useTranslations();

  return (
    <section className="py-16 md:py-24 "> {/* Very subtle gradient */}
      <div className="container mx-auto px-4 md:px-6 text-center bg-gradient-to-br from-primary/5 via-secondary/50 to-primary/5 text-primary rounded-2xl py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 animate-subtle-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-text-headings">
            {t('ctaHome.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
            {t('ctaHome.subtitle')}
          </p>
          <Link href="/booking">
            <Button variant="default" size="lg" className="group"> {/* Default (primary) button */}
              {t('ctaHome.buttonText')}
              <CalendarCheck className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaHomeSection;
