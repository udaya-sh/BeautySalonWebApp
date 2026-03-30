
"use client"
import { motion } from 'framer-motion';
import { Heart, Smile, Scissors } from 'lucide-react';
import { useTranslations } from "next-intl";
import CtaHomeSection from "@/components/CtaHomeSection";

const AboutPage = () => {
  const  t  = useTranslations();

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="pt-32">
      <div className=" py-12 md:py-16 text-primary container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            {t('aboutPage.title.main')} <span className="text-secondary">{t('aboutPage.title.highlight')}</span>
          </h1>
          <p className="text-lg text-cocoa/80 max-w-2xl mx-auto">{t('aboutPage.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <motion.div variants={fadeIn(0.2)} initial="hidden" animate="visible">
            <img  
              alt={t('aboutPage.ownerImageAlt')} 
              className="rounded-xl shadow-soft-lg w-full h-auto object-cover max-h-[500px]"
             src="https://images.unsplash.com/photo-1579621451709-51fd0d213a5a" />
          </motion.div>
          <motion.div variants={fadeIn(0.4)} initial="hidden" animate="visible">
            <h2 className="text-3xl font-semibold font-serif mb-6 ">{t('aboutPage.story.title')}</h2>
            <div className="space-y-4 text-cocoa/90 leading-relaxed">
              <p>{t('aboutPage.story.paragraph1')}</p>
              <p>{t('aboutPage.story.paragraph2')}</p>
              <p>{t('aboutPage.story.paragraph3')}</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mb-16 md:mb-24 card-soft bg-background py-10 md:py-12"
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-semibold font-serif mb-4 text-primary">{t('aboutPage.mission.title')}</h2>
          <p className="text-lg text-cocoa/80 max-w-2xl mx-auto italic">
            "{t('aboutPage.mission.statement')}"
          </p>
        </motion.div>

        <div className="mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl font-semibold font-serif text-center mb-10 md:mb-12 "
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('aboutPage.values.title')}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Smile className="h-8 w-8 text-accent" />, titleKey: 'aboutPage.values.care.title', descKey: 'aboutPage.values.care.description' },
              { icon: <Scissors className="h-8 w-8 text-accent" />, titleKey: 'aboutPage.values.precision.title', descKey: 'aboutPage.values.precision.description' },
              { icon: <Heart className="h-8 w-8 text-accent" />, titleKey: 'aboutPage.values.passion.title', descKey: 'aboutPage.values.passion.description' },
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="card-soft text-center p-6"
                variants={fadeIn(0.3 + index * 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-block p-3 rounded-full">{value.icon}</div>
                <h3 className="text-xl font-semibold font-serif mb-2 text-secondary">{t(value.titleKey)}</h3>
                <p className="text-sm text-cocoa/70">{t(value.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold font-serif text-center mb-10 md:mb-12 ">{t('aboutPage.studio.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden shadow-soft-md">
              <img  alt={t('aboutPage.studio.image1Alt')} className="w-full h-full object-cover" src="/room.jpeg" />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-soft-md">
              <img  alt={t('aboutPage.studio.image2Alt')} className="w-full h-full object-cover" src="/workbench.jpg" />
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-cocoa/70">{t('aboutPage.studio.caption')}</p>
        </motion.div>

      </div>
      <CtaHomeSection />
    </div>

    
  );
};

export default AboutPage;
