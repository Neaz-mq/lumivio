import React from "react";
import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-black via-neutral-900 to-zinc-950 text-white border-t border-white/10 overflow-hidden">
      {/* ✨ Animated Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 animate-[pulse_3s_infinite]" />

      {/* 🌌 Floating Background Gradient Blobs */}
      <div className="absolute -top-20 right-0 w-60 h-60 bg-lime-500/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        {/* 1️⃣ Brand Section */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-lime-400 rounded-lg rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg shadow-lime-500/30" />
            <span className="text-2xl font-black tracking-tight">Lumivio</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting digital experiences that inspire, connect, and elevate brands globally.
          </p>

          {/* Socials */}
          <div className="flex space-x-4 pt-3">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2.5 bg-white/5 hover:bg-lime-400/20 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} className="text-lime-400 hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* 2️⃣ Offices */}
        <div className="space-y-5 text-sm">
          <h3 className="text-lg font-semibold mb-3 text-lime-400">Our Offices</h3>
          <div>
            <p className="font-semibold text-white">Australia</p>
            <p className="text-gray-400">Travel World House, Level 7, 17 Jones St, NSW, 2060</p>
          </div>
          <div>
            <p className="font-semibold text-white">Dubai</p>
            <p className="text-gray-400">Sheikh Mohammed bin Salah, #234 B - Downtown - Dubai</p>
          </div>
        </div>

        {/* 3️⃣ Useful Links */}
        <div className="text-sm">
          <h3 className="text-lg font-semibold mb-3 text-lime-400">Useful Links</h3>
          <ul className="space-y-2">
            {["About Us", "FAQs", "Terms & Conditions", "Careers"].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Newsletter */}
        <div className="text-sm">
          <h3 className="text-lg font-semibold mb-3 text-lime-400">Stay in the Loop</h3>
          <p className="text-gray-400 mb-3">
            Subscribe for updates, news, and creative inspiration.
          </p>

          <div className="relative group">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
            />
            <button className="absolute right-2 top-1.5 bg-lime-400 text-black font-semibold px-4 py-1.5 rounded-lg hover:bg-lime-300 transition-all duration-300">
              Join
            </button>
          </div>

          <div className="flex items-center gap-3 mt-5 text-gray-400">
            <Mail size={16} className="text-lime-400" />
            info@lumivio.com
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Phone size={16} className="text-lime-400" /> +47 333 78 901
          </div>
        </div>
      </div>

      {/* 🌿 Bottom Section */}
      <div className="border-t border-white/10 text-center py-5 text-xs text-gray-500 relative z-10">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-lime-400 font-semibold">Lumivio</span> — Developed {" "}
          <span className="animate-pulse text-lime-400"></span> by Neaz Morshed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
