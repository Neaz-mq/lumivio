import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Motion Graphics",
    description:
      "Dissent casnets dolor sit amet consectetur adipisicing elit. Theserunt ullam laboriosam, excepturi quibusdam ipsased maiores illo qui vel dicta impedit nobis sapiente culpa non quis provident ex facilis voluptates.",
    insight: "Experience the perfect blend of creativity and functionality",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1760692237/1_qbzjkq.jpg",
  },
  {
    title: "Market Branding",
    description:
      "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin eget tortor non dui tincidunt sollicitudin.",
    insight: "A strategic vision for identity and growth in a competitive space.",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1760694077/2_x3cytt.jpg",
  },
];

const Work = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const totalSlides = PROJECTS.length;
  const currentProject = useMemo(
    () => PROJECTS[currentProjectIndex],
    [currentProjectIndex]
  );

  const handleNext = () =>
    setCurrentProjectIndex((prev) => (prev + 1) % totalSlides);

  const handlePrev = () =>
    setCurrentProjectIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );

  const fadeSlide = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-16 relative overflow-hidden">
      {/* Neon Glow */}
      <div
        className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80"
        style={{
          background:
            "radial-gradient(circle at bottom left, #9AE600 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.4,
          zIndex: 0,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10 overflow-hidden">
        {/* Title Block (absolute only on large devices) */}
        <div className="relative lg:absolute z-20 px-4 w-full lg:w-1/2 lg:left-[52%] lg:top-1/2 lg:-translate-y-1/2 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.title}
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight mb-6 lg:mb-8 pt-16 lg:pt-0">
                {currentProject.title.split(" ")[0]}
                <br />
                {currentProject.title.split(" ")[1]}
              </h1>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold tracking-wider group mt-4"
                >
                  <div className="w-28 h-10 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                    <span className="text-xs">SEE DETAILS</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description & Insight */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between pt-10 sm:pt-10 md:pt-6 lg:pt-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.description}
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="mb-10 sm:mb-16">
                <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest border border-neutral-700 rounded-full mb-6 sm:mb-8">
                  RECENT WORK
                </span>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {currentProject.description}
                </p>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <p className="text-lg sm:text-xl font-semibold leading-snug max-w-xs mx-auto lg:mx-0">
                  {currentProject.insight}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Controls */}
        <div className="w-full lg:w-1/5 relative flex flex-row lg:flex-col items-center justify-center lg:justify-start lg:items-start mt-8 lg:mt-0 space-x-4 lg:space-x-0 lg:space-y-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-neutral-700 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="text-center mx-4 lg:mx-0">
            <span className="text-lg font-semibold">{currentProjectIndex + 1}</span>
            <span className="text-xs text-gray-500 mx-1">/</span>
            <span className="text-xs text-gray-500">{totalSlides}</span>
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-neutral-700 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-2/5 relative mt-8 lg:mt-0">
          <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square bg-neutral-800 rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.image}
                variants={fadeSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${currentProject.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 flex flex-col items-center justify-center lg:hidden">
            <a
              href="#"
              className="flex items-center justify-center text-sm font-semibold tracking-wider group"
            >
              <div className="w-28 h-10 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                <span className="text-xs">SEE DETAILS</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
