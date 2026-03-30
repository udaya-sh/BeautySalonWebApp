import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Code, Palette, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesOverview = () => {

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.'
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces designed to enhance user satisfaction and business outcomes.'
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Digital Strategy',
      description: 'Strategic planning and consultation to align your digital presence with your business objectives.'
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of digital services to help your business thrive in the digital age. From concept to launch, we're your partners in innovation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service: any, index:number) => (
            <motion.div
              key={index}
              className="service-card bg-white rounded-xl shadow-lg p-6 flex flex-col"
              variants={fadeIn}
            >
              <div className="mb-5 p-3 bg-primary/10 rounded-full w-fit text-primary">
                {React.cloneElement(service!.icon, { size: 32 })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary font-medium group mt-auto"
              >
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/services">
            <Button 
              variant="outline" 
              className="text-primary border-primary hover:bg-primary/5 px-8 py-6 text-base font-semibold group"
            >
              Explore All Services
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;