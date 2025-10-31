import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: "14",
      month: "SEP",
      author: "Md Sohag",
      comments: 18,
      title: "Miscovery incommode earnestly commanded if.",
      img: "https://res.cloudinary.com/dxohwanal/image/upload/v1761921052/4_jmuw9b.jpg",
    },
    {
      id: 2,
      date: "06",
      month: "OCT",
      author: "Md Sohag",
      comments: 26,
      title: "Expression acceptance imprudence particular",
      img: "https://res.cloudinary.com/dxohwanal/image/upload/v1761921077/5_cnpwog.jpg",
    },
  ];

  return (
    <section className="relative z-0 bg-[#161616] text-white py-24 md:py-32 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* ====== Section Header ====== */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase bg-[#222222] text-gray-400 px-4 py-1 rounded-full tracking-widest font-medium">
            News & Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 tracking-tight">
            Latest blog posts
          </h2>
        </div>

        {/* ====== Blog Grid ====== */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative flex flex-col group">
              
              {/* --- Blog Image --- */}
              <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 rounded-xl"
                />
              </div>

              {/* --- Blog Content Card --- */}
              <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-[-40px] md:bottom-[-60px] 
                              bg-[#222222] p-6 rounded-xl shadow-2xl z-20 transition duration-300 
                              group-hover:bottom-[-55px] group-hover:md:bottom-[-70px]">
                
                {/* Meta Info */}
                <p className="text-xs text-gray-400 mb-4">
                  {blog.author} • {blog.comments} Comments
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-normal text-white mb-4 group-hover:text-gray-100 transition">
                  {blog.title}
                </h3>

                {/* Read More */}
                <a
                  href="#"
                  className="text-sm text-gray-500 flex items-center gap-2 hover:text-lime-400 transition-all font-medium"
                  onClick={(e) => e.preventDefault()}
                >
                  Continue Reading
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* --- Date Badge (Adjusted Higher) --- */}
              <div className="absolute -top-5 left-8 bg-lime-400 text-gray-900 
                              rounded-md px-3 py-2 text-center shadow-2xl z-30 
                              transition-all duration-300 group-hover:-top-7 group-hover:scale-[1.05]">
                <p className="text-2xl font-extrabold leading-none">{blog.date}</p>
                <p className="text-[10px] font-bold tracking-widest">{blog.month}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Padding for overlap space */}
        <div className="pt-20 md:pt-28"></div>
      </div>
    </section>
  );
};

export default Blog;
