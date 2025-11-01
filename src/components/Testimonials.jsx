import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      text: "Targeting consultation discover apartments. indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts.",
      name: "Michel Dark",
      role: "Envato Client",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      rating: 4.7,
      text: "Mentioning consultation discover apartments. indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts resolve parties the regular.",
      name: "Michel Dark",
      role: "Envato Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      rating: 5.0,
      text: "Outstanding service and attention to detail. The team went above and beyond to ensure our project was a success. Highly recommended for anyone looking for quality work.",
      name: "Sarah Johnson",
      role: "Envato Client",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      rating: 4.9,
      text: "Professional approach and excellent results. They understood our requirements perfectly and delivered beyond expectations. Will definitely work with them again.",
      name: "David Chen",
      role: "Envato Client",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 2);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const startIdx = currentIndex * 2;
    return testimonials.slice(startIdx, startIdx + 2);
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#0f0f0f] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image (hidden on mobile) */}
          <motion.div
            className="lg:col-span-4 hidden lg:block"
            style={{ y, opacity }}
          >
            <motion.img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1761890867/14_ruvxvh.png"
              alt="Testimonials decoration"
              className="w-full h-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Right Side */}
          <div className="lg:col-span-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 text-center lg:text-left"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  TESTI<span className="text-lime-400">MONIALS</span>
                </h2>

                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl font-bold">4.9</span>
                  <div className="flex flex-col items-start">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-lime-400 text-lime-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-400">145 Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <div className="relative min-h-[360px] sm:min-h-[400px]">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6" // ✅ responsive fix
              >
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl sm:text-2xl font-bold">{testimonial.rating}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(testimonial.rating)
                                ? 'fill-lime-400 text-lime-400'
                                : 'fill-zinc-700 text-zinc-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs text-zinc-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 flex-wrap">
              <motion.button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center hover:border-lime-400 hover:bg-lime-400 hover:text-black transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center gap-2">
                {[...Array(totalSlides)].map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleSlideClick(idx)}
                    className="relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 sm:w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-lime-400"
                        initial={{ width: 0 }}
                        animate={{ width: idx === currentIndex ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center hover:border-lime-400 hover:bg-lime-400 hover:text-black transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
