import React, { useState } from "react";
import { motion } from "framer-motion";
import { Triangle, Disc, Hexagon, Target, ArrowRight } from "lucide-react";

const servicesData = [
  {
    Icon: Triangle,
    title: "Marketing & SEO Optimization",
    description:
      "Drive traffic and boost search rankings with strategic optimization and content marketing solutions.",
    isFeatured: false,
  },
  {
    Icon: Disc,
    title: "Mobile App & Web Development",
    description:
      "Crafting fast, responsive, and user-friendly applications and websites for all platforms and devices.",
    isFeatured: false,
  },
  {
    Icon: Hexagon,
    title: "UI/UX Design from Professionals",
    description:
      "Explained jas something an- Contrasted dissimilar get joy you instrument out reasonably. Again keeps it no meant stuff.",
    isFeatured: true,
  },
  {
    Icon: Target,
    title: "Access to the Latest Technology",
    description:
      "Integrating cutting-edge tools and platforms to keep your business ahead of the competition.",
    isFeatured: false,
  },
];

const Services = () => {
  const defaultActiveIndex = servicesData.findIndex(
    (service) => service.isFeatured
  );
  const [activeCardIndex, setActiveCardIndex] = useState(defaultActiveIndex);

  const handleMouseEnter = (index) => setActiveCardIndex(index);
  const handleMouseLeave = () => setActiveCardIndex(defaultActiveIndex);

  return (
    <section className="bg-black text-white py-24 overflow-x-hidden w-full">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <p className="inline-block text-sm font-semibold tracking-widest uppercase text-gray-400 border border-neutral-700 px-4 py-1 rounded-full mb-4">
          SERVICES WE OFFER
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight break-words">
          Turn Information Into <br className="hidden sm:inline" /> Actionable
          Insights
        </h2>
      </div>

      {/* Grid */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden"
        onMouseLeave={handleMouseLeave}
      >
        {servicesData.map((service, index) => {
          const isFeatured = service.isFeatured;
          const isActive = index === activeCardIndex;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              initial={{ y: 0, scale: 1, opacity: 0.95 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                opacity: 1,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
              className="bg-neutral-900/50 p-6 sm:p-8 rounded-xl border border-neutral-800 
                         flex flex-col justify-between shadow-lg hover:shadow-2xl 
                         hover:border-neutral-700 transition-all duration-300 
                         text-center lg:text-left items-center lg:items-start w-full"
            >
              <div className="flex-grow w-full">
                {/* Icon */}
                <motion.div
                  className="mb-8 w-16 h-16 flex items-center justify-center lg:justify-start mx-auto lg:mx-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <service.Icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-4 break-words">
                  {service.title}
                </h3>

                {/* Description */}
                <motion.div
                  animate={{
                    maxHeight: isActive ? 200 : 0,
                    opacity: isActive ? 1 : 0,
                    paddingTop: isActive ? "0.5rem" : 0,
                    paddingBottom: isActive ? "1.5rem" : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden text-gray-400 text-sm lg:max-h-full lg:opacity-100 lg:pt-2 lg:pb-6"
                >
                  <p>{service.description}</p>
                </motion.div>
              </div>

              {/* Read More */}
              <div className="flex items-center justify-center lg:justify-start mt-6">
                <a
                  href="#"
                  className="flex items-center text-white text-sm font-semibold tracking-wider group"
                >
                  <span className="mr-3">READ MORE</span>
                  <motion.div
                    initial={{
                      backgroundColor: isFeatured ? "#ffffff" : "#27272a",
                      color: isFeatured ? "#000000" : "#ffffff",
                      scale: 1,
                    }}
                    whileHover={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ rotate: -45 }}
                      whileHover={{ rotate: 0 }}
                      transition={{ type: "spring", stiffness: 250, damping: 15 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
