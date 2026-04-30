import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Phone, Mail, MapPin, Send, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0a1a32] via-[#08152b] to-[#061020] text-white pt-16 pb-8 mt-20 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          
          {/* SCHOOL INFO - Column 1 */}
          <div>
            {/* Logo/Title with icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TL</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Level Up<br />School System
              </h2>
            </div>
            
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Providing quality education from Nursery to Class 7 with focus on
              discipline, learning, and student growth. Building future leaders since day one.
            </p>
            
            {/* Social Icons - Enhanced */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 cursor-pointer">
                <FaFacebookF className="text-gray-300 group-hover:text-white transition text-sm" />
              </a>

              <a href="#" className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                <FaInstagram className="text-gray-300 group-hover:text-white transition text-sm" />
              </a>

              <a href="#" className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110 cursor-pointer">
                <FaYoutube className="text-gray-300 group-hover:text-white transition text-sm" />
              </a>

              <a href="#" className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 cursor-pointer">
                <FaLinkedinIn className="text-gray-300 group-hover:text-white transition text-sm" />
              </a>

              <a href="#" className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                <FaTwitter className="text-gray-300 group-hover:text-white transition text-sm" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS - Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
            </h3>

            <ul className="space-y-3">
              {["Home", "About Us", "Programs", "Admissions", "Contact", "Gallery", "Events"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & NEWSLETTER - Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Phone size={14} className="group-hover:text-orange-400 transition" />
                </div>
                <span className="text-sm">+92 345 6789012</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail size={14} className="group-hover:text-orange-400 transition" />
                </div>
                <span className="text-sm">info@thelevelup.edu.pk</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <MapPin size={14} className="group-hover:text-orange-400 transition" />
                </div>
                <span className="text-sm">Peshawar, Pakistan</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
           
          </div>
        </div>

        {/* Bottom Bar with Scroll to Top */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The Level Up School System. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition flex items-center gap-1">
              Privacy Policy
            </a>
            <span className="text-gray-600 text-xs">•</span>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition flex items-center gap-1">
              Terms of Use
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <ArrowUp size={14} className="text-gray-400 group-hover:text-white transition" />
          </button>
        </div>

      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      
    </footer>
  );
};

export default Footer;