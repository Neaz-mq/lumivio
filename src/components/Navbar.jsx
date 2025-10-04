import { useState } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1f1f1f] text-white relative z-50">
      {/* Blur overlay for rest of the content */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-lg transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-lime-400 rotate-45"></div>
          <span className="text-xl font-semibold">Lumivio</span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-lime-400 transition-colors">Demos</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Pages</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Services</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Blog</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="z-50 cursor-pointer flex flex-col items-end gap-[5px]"
          onClick={() => setIsOpen(true)}
        >
          <span className="w-4 h-[2px] bg-white rounded"></span>
          <span className="w-6 h-[2px] bg-white rounded"></span>
          <span className="w-3 h-[2px] bg-white rounded"></span>
        </div>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-[#111] text-white p-6 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl cursor-pointer"
        >
          <IoMdClose />
        </button>

        {/* Sidebar Content */}
        <div className="mt-8 space-y-6 text-base">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-lime-400 rotate-45"></div>
            <span className="text-xl font-semibold">Lumivio</span>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg uppercase tracking-wide">Address</h4>
            <p className="text-gray-300 text-base">California, TX 70240</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg uppercase tracking-wide">Email</h4>
            <p className="text-gray-300 text-base">support@validtheme.com</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg uppercase tracking-wide">Contact</h4>
            <p className="text-gray-300 text-base">+44-20-7328-4499</p>
          </div>

          {/* Subscribe */}
          <div className="pt-4">
            <h4 className="font-semibold text-lg mb-2">Get Subscribed!</h4>
            <form className="flex border border-gray-600">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="bg-transparent flex-1 px-3 py-2 text-base focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 bg-transparent hover:text-lime-400 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="#"
              className="border border-gray-600 p-2 rounded-full hover:text-lime-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="border border-gray-600 p-2 rounded-full hover:text-lime-400 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="border border-gray-600 p-2 rounded-full hover:text-lime-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="border border-gray-600 p-2 rounded-full hover:text-lime-400 transition"
            >
              <FaBehance />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
