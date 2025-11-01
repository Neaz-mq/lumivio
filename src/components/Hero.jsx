const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center py-20 sm:py-28 lg:py-36"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxohwanal/image/upload/v1759639640/3_n8tuwf.jpg')",
      }}
    >
      {/* Wrapper matches Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="text-white max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            DESIGNING <br /> CREATIVE
          </h1>

          {/* Dexus Agency + Line */}
          <div className="flex items-center mt-6 justify-center lg:justify-start">
            <span className="font-semibold text-lg">LUMIVIO AGENCY</span>
            <span className="hidden sm:block flex-1 border-t border-gray-500 ml-4"></span>
          </div>

          {/* Paragraph */}
          <p className="text-gray-300 mt-6 leading-relaxed text-base sm:text-lg">
            Providing innovative solutions in branding, marketing, design, and
            advertising. These agencies often collaborate with clients to
            develop unique campaigns, visual identities, and digital strategies
            that resonate with target audiences. Services may include graphic
            design, content creation, social media management.
          </p>

          {/* Know More Button */}
          <button className="group relative mt-8 flex items-center justify-center lg:justify-start space-x-2 font-semibold">
            <span className="uppercase">Know More</span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white ml-4 group-hover:bg-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white group-hover:text-black transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col items-center">
          {/* Top Image */}
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1759640026/1_lkdy0m.png"
            alt="Creative Shape"
            className="w-56 sm:w-72 lg:w-96"
          />

          {/* Bottom Card */}
          <div className="absolute -bottom-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg px-6 sm:px-8 py-4 sm:py-6 text-center text-white border border-white/20">
            <h2 className="text-3xl sm:text-4xl font-extrabold">3K</h2>
            <p className="text-xs sm:text-sm uppercase tracking-wide mt-1">
              Completed Projects
            </p>

            <div className="mt-3 flex justify-center">
              <span className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg cursor-pointer hover:scale-105 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
