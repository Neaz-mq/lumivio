const About = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <div className="relative flex justify-center lg:justify-start">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1759655091/2_nafpaa.jpg"
            alt="Abstract Shape"
            className="rounded-2xl w-full max-w-md"
          />

          {/* Overlapping First Card (Social Media) */}
          <div className="absolute -bottom-12 -right-8 sm:-right-16 w-60 h-40 bg-lime-400 rounded-xl flex flex-col justify-center items-start p-6 shadow-lg">
            <span className="mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            <h3 className="text-black font-semibold">Social Media</h3>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-8">
          {/* Heading with arrow image */}
          <div className="flex items-start gap-4 ">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1759655101/arrow_lazi8i.png"
              alt="Arrow Icon"
              className="w-16 h-16 my-2"
            />
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug">
              BEST CREATIVE & <br /> DIGITAL AGENCY
            </h2>
          </div>

          {/* Paragraph */}
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Give lady of they such they sure it. Me contained explained my
            education. Vulgar as hearts by garret. Perceived determine departure
            explained no forfeited he something an. Contrasted dissimilar get joy
            you instrument out reasonably
          </p>

          {/* Cards Section (2 only because Social Media overlaps image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            
            {/* Card 2: Content Writing */}
            <div className="relative rounded-xl border border-gray-700 h-40 flex flex-col items-center justify-center cursor-pointer group bg-[#141414] hover:bg-lime-400 hover:text-black transition-all duration-500">
              {/* Number / Arrow */}
              <div className="absolute top-5">
                <span className="text-gray-200 text-lg font-bold bg-[#333] rounded-full w-10 h-10 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                  02
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              {/* Title */}
              <h3 className="font-semibold mt-8 group-hover:text-black">Content Writing</h3>
            </div>

            {/* Card 3: Video Production */}
            <div className="relative rounded-xl border border-gray-700 h-40 flex flex-col items-center justify-center cursor-pointer group bg-[#141414] hover:bg-lime-400 hover:text-black transition-all duration-500">
              {/* Number / Arrow */}
              <div className="absolute top-5">
                <span className="text-gray-200 text-lg font-bold bg-[#333] rounded-full w-10 h-10 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                  03
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              {/* Title */}
              <h3 className="font-semibold mt-8 group-hover:text-black">Video Production</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
