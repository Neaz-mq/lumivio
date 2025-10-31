import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = sectionsRef.current;
      const isMobile = window.innerWidth < 768;

      // Kill old triggers (important for resize handling)
      ScrollTrigger.getAll().forEach((t) => t.kill());

      if (!isMobile) {
        // Total scroll width for all sections
        const totalWidth = containerRef.current.scrollWidth;
        const endValue = totalWidth - window.innerWidth;

        // Horizontal scroll animation
        const tween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + endValue,
          },
        });

        // Fade-in animations per section
        sections.forEach((section, index) => {
          if (index === 0) return;
          const content = section.querySelectorAll(".animate-content");
          gsap.fromTo(
            content,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                containerAnimation: tween,
                start: "left center",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, containerRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black overflow-hidden">
     
      {/* Scroll Container */}
      <div ref={containerRef} className="overflow-hidden">
        <div className="flex flex-col md:flex-row md:w-[300vw]">
          {/* ========== SECTION 1 ========== */}
          <section
            ref={(el) => (sectionsRef.current[0] = el)}
            className="w-full md:w-screen h-auto md:h-screen flex flex-col md:flex-row items-center justify-center bg-neutral-900"
          >
            <div className="flex flex-col lg:flex-row w-full h-full">
              {/* Left Image */}
              <div className="w-full lg:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=80"
                  alt="Fashion"
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Right Text */}
              <div className="w-full lg:w-1/2 h-auto flex items-center justify-center p-6 sm:p-10 md:p-16 bg-gradient-to-b from-black/70 to-black/90">
                <div className="max-w-2xl space-y-6 md:space-y-8 text-center md:text-left">
                  <div className="inline-block border border-white/30 rounded-full px-5 py-2 mb-2">
                    <span className="text-white/80 text-xs sm:text-sm uppercase tracking-wider">
                      Why Lumivio
                    </span>
                  </div>

                  <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                    Unlock Revenue Growth
                  </h2>

                  <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                    Bennings appetite disposed me an at subjects an. To no indulgence
                    diminution so discovered mr apartments. Are off under folly death
                    wrote cause.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mt-8 sm:mt-12">
                    {[
                      { icon: "Bē", text: "Behance Awards" },
                      { icon: "🏆", text: "Design Awards" },
                      { icon: "⚙️", text: "Coding Awards" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 text-center"
                      >
                        <div className="text-lime-400 text-2xl sm:text-3xl mb-2">
                          {item.icon}
                        </div>
                        <p className="text-white text-xs sm:text-sm font-medium">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== SECTION 2 ========== */}
          <section
            ref={(el) => (sectionsRef.current[1] = el)}
            className="w-full md:w-screen h-auto md:h-screen flex items-center justify-center bg-zinc-950 p-6 sm:p-10 md:p-16"
          >
            <div className="max-w-7xl w-full">
              <div className="animate-content text-center mb-10 sm:mb-16">
                <div className="inline-block border border-white/30 rounded-full px-5 py-2 mb-4 sm:mb-8">
                  <span className="text-white/80 text-xs sm:text-sm uppercase tracking-wider">
                    Our Process
                  </span>
                </div>
                <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold">
                  Best Solutions Provider
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Research",
                    desc: "Remarkably on estimating. Side in so life past. Continue indulged speaking.",
                    icon: "🔍",
                  },
                  {
                    title: "Concept",
                    desc: "Terminators on estimating. Continue indulged speaking the was out.",
                    icon: "💡",
                  },
                  {
                    title: "Implement",
                    desc: "Side in so life past. Continue indulged speaking the was out.",
                    icon: "⚙️",
                  },
                  {
                    title: "Handover",
                    desc: "Trensination on estimating. Side in so life past. Continue indulged speaking.",
                    icon: "📦",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="animate-content bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center sm:text-left"
                  >
                    <div className="text-lime-400 text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========== SECTION 3 ========== */}
          <section
            ref={(el) => (sectionsRef.current[2] = el)}
            className="w-full md:w-screen h-auto md:h-screen flex flex-col md:flex-row items-center justify-center bg-black"
          >
            <div className="flex flex-col lg:flex-row w-full">
              {/* Left Text */}
              <div className="w-full lg:w-1/2 h-auto bg-zinc-950 flex items-center justify-center p-6 sm:p-10 md:p-16">
                <div className="max-w-xl text-center md:text-left">
                  <div className="animate-content inline-block border border-white/30 rounded-full px-5 py-2 mb-4 sm:mb-8">
                    <span className="text-white/80 text-xs sm:text-sm uppercase tracking-wider">
                      Have a Project in Mind?
                    </span>
                  </div>

                  <h2 className="animate-content text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 sm:mb-16 leading-tight">
                    For instant support <br /> please reach us
                  </h2>

                  <div className="space-y-6 sm:space-y-8">
                    {[
                      { title: "Phone", value: "+47 333 78901", icon: "📞" },
                      { title: "Official Email", value: "info@agrul.com", icon: "📧" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="animate-content flex items-center justify-center md:justify-start gap-4"
                      >
                        <div className="bg-lime-400 rounded-full p-3 sm:p-4 text-black text-lg">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-white text-base sm:text-xl font-bold">
                            {item.title}
                          </p>
                          <p className="text-white/60 text-sm sm:text-base">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 h-[40vh] md:h-full relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1761903307/3_z2o4yk.jpg"
                  alt="Contact"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Gsap;
