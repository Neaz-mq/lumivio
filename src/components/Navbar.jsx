import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";

// Inline Close Icon
const CloseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SocialIconContainer = ({ children }) => (
  <div className="border border-gray-600 p-3 rounded-full hover:bg-lime-400 hover:text-black transition duration-200">
    {children}
  </div>
);

const Navbar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  const isMenuOpen = isMainMenuOpen || isContactMenuOpen;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenus = () => {
    setIsMainMenuOpen(false);
    setIsContactMenuOpen(false);
  };

  return (
  <nav className="fixed top-0 left-0 w-full bg-[#1f1f1f] text-white z-50">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenus}
      ></div>

      {/* Navbar Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative z-50">
        {/* Left Hamburger (Mobile) */}
        <div className="md:hidden z-50">
          <div
            className="cursor-pointer flex flex-col gap-[5px] p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMainMenuOpen(true)}
          >
            <span className="w-5 h-[2px] bg-white rounded"></span>
            <span className="w-6 h-[2px] bg-white rounded"></span>
            <span className="w-4 h-[2px] bg-white rounded"></span>
          </div>
        </div>

        {/* Logo */}
        <div
          className={`flex-1 flex justify-center md:justify-start items-center transition-all duration-300 ${
            isContactMenuOpen ? "opacity-30  pointer-events-none" : ""
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-lime-400 rounded-lg transform -rotate-12 transition-transform duration-300 hover:rotate-6"></div>
            <span className="text-2xl font-black tracking-tighter">
              Lumivio
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 text-lg font-medium transition-all duration-300 ${
            isContactMenuOpen
              ? "opacity-30  pointer-events-none"
              : "pointer-events-auto"
          }`}
        >
          {["Home", "About", "Work", "Team", "Testimonials"].map((item) => (
            <a key={item} href="#" className="relative group transition-colors">
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left blur-[2px]"></span>
            </a>
          ))}
        </div>

        {/* Right Hamburger */}
        <div className="z-50">
          <div
            className={`cursor-pointer flex flex-col items-end gap-[5px] p-2 rounded-lg hover:bg-white/10 transition-colors ${
              isContactMenuOpen ? "hidden md:hidden" : "flex"
            }`}
            onClick={() => setIsContactMenuOpen(true)}
          >
            <span className="w-4 h-[2px] bg-white rounded"></span>
            <span className="w-6 h-[2px] bg-white rounded"></span>
            <span className="w-5 h-[2px] bg-white rounded"></span>
          </div>
        </div>
      </div>

      {/* Left Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 max-w-[80vw] bg-[#111] text-white p-6 z-50 shadow-2xl md:hidden transform transition-transform duration-500 ease-in-out ${
          isMainMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={closeMenus}
          className="absolute top-4 right-4 text-3xl cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors text-lime-400"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <h3 className="text-xl font-bold mb-8 border-b border-gray-700 pb-2">
          Navigation
        </h3>
        <div className="space-y-6 text-xl font-medium">
          {["Home", "Services", "About", "Work", "Team"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={closeMenus}
              className="block hover:text-lime-400"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Right Contact Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#111] text-white p-8 z-50 shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-in-out ${
          isContactMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenus}
          className="absolute top-4 right-4 text-3xl cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors text-lime-400"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mb-10 border-b border-lime-400/50 pb-2 text-lime-400">
          Get in Touch
        </h3>

        <div className="space-y-8 text-base">
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider mb-1">
              Address
            </h4>
            <p className="text-gray-400">123 Design Blvd, Bogura, TX 70240</p>
          </div>
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider mb-1">
              Email
            </h4>
            <p className="text-lime-400">info@lumivio.com</p>
          </div>
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider mb-1">
              Contact
            </h4>
            <p className="text-gray-400">+880-178-5286-936</p>
          </div>

          {/* Subscribe */}
          <div className="pt-4 max-w-sm">
            <h4 className="font-semibold text-lg mb-2 text-white">
              Get Subscribed!
            </h4>
            <form className="flex items-center border border-white text-white">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder-white focus:outline-none"
              />
              <button
                type="submit"
                className="w-12 h-12 flex items-center justify-center border-l border-white hover:bg-white hover:text-black transition duration-200"
              >
                {/* Northeast Arrow Icon ↗ */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 19L19 5M5 5h14v14"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 pt-6">
            <a href="#" className="text-white hover:text-black">
              <SocialIconContainer>
                <FaFacebookF />
              </SocialIconContainer>
            </a>
            <a href="#" className="text-white hover:text-black">
              <SocialIconContainer>
                <FaXTwitter />
              </SocialIconContainer>
            </a>
            <a href="#" className="text-white hover:text-black">
              <SocialIconContainer>
                <FaLinkedinIn />
              </SocialIconContainer>
            </a>
            <a href="#" className="text-white hover:text-black">
              <SocialIconContainer>
                <FaBehance />
              </SocialIconContainer>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
