import React from "react";
import { motion } from "framer-motion";
import { Target, Handshake, Rocket } from "lucide-react";

const OurCommitmentSection = () => {
  const commitmentPoints = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Client-Centric Approach",
      description:
        "Your success is our primary goal. We listen, understand, and tailor solutions to meet your specific needs and objectives.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      title: "Transparent Collaboration",
      description:
        "We believe in open communication and partnership. You'll be involved and informed throughout the entire development lifecycle.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Future-Ready Solutions",
      description:
        "We build scalable and adaptable applications, ensuring your digital assets remain relevant and effective in the long run.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Commitment to{" "}
            <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-lg text-gray-600">
            At DevUnity, we are dedicated to forging strong partnerships and
            delivering excellence in every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitmentPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-full inline-block">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentSection;
