"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const BeforeAfterSection = () => {
  const  t  = useTranslations();

  const images = [
    {beforeSrc:"B1.jpeg", AfterSrc:"A1.jpeg", id: 1, beforeAlt: t('beforeAfter.image1.beforeAlt'), afterAlt: t('beforeAfter.image1.afterAlt'), beforeDesc: "Close-up of natural, un-treated eyelashes", afterDesc: "Close-up of perfectly lifted and tinted eyelashes after treatment" },
    {beforeSrc:"B2.jpeg", AfterSrc:"A2.jpeg", id: 2, beforeAlt: t('beforeAfter.image2.beforeAlt'), afterAlt: t('beforeAfter.image2.afterAlt'), beforeDesc: "Another example of natural lashes before lash lift", afterDesc: "Another example of beautifully defined lashes post-treatment" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-muted text-primary"> {/* Using muted background */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-4xl font-bold font-serif mb-4 text-primary">
            {t('beforeAfter.title.main')} <span className="text-secondary">{t('beforeAfter.title.highlight')}</span> {/* Highlight with secondary */}
          </h2>
          <p className="text-lg text-text-secondary">
            {t('beforeAfter.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {images.map((imageSet, index) => (
            <motion.div
              key={imageSet.id}
              className="card-soft overflow-hidden"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-background p-3 md:p-4">
                  <p className="text-sm font-semibold  mb-2 text-center text-secondary">{t('beforeAfter.beforeLabel')}</p>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-soft-sm">
                    <img  alt={imageSet.beforeAlt} className="w-full h-full object-cover" src={imageSet.beforeSrc} />
                  </div>
                </div>
                <div className="bg-background p-3 md:p-4">
                  <p className="text-sm font-semibold  mb-2 text-center text-accent">{t('beforeAfter.afterLabel')}</p> {/* After label in primary color */}
                  <div className="aspect-square rounded-lg overflow-hidden shadow-soft-sm">
                    <img  alt={imageSet.afterAlt} className="w-full h-full object-cover" src={imageSet.AfterSrc} />
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                 <p className="text-xs text-primary">{t('beforeAfter.imageCaption')} {index + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/services#gallery">
            <Button variant="default" className="group"> {/* Secondary button style */}
              {t('beforeAfter.ctaViewGallery')}
              <Eye className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
