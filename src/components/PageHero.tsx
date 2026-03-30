import { motion } from "motion/react"

interface PageHeroProps {
  title: string;
  highlightedTitle: string;
  description: string;
}

const PageHero : React.FC<PageHeroProps> = ({ title, highlightedTitle, description }) => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title} <span className="gradient-text">{highlightedTitle}</span>
          </motion.div>
          <motion.div 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;