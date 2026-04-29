import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#08152b] text-white pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-12">
        {/* SCHOOL INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white">
           The Level Up School System
          </h2>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Providing quality education from Nursery to Class 7 with focus on
            discipline, learning, and student growth.
          </p>
          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition cursor-pointer hover:scale-110">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition cursor-pointer hover:scale-110">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition cursor-pointer hover:scale-110">
              <FaYoutube />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition cursor-pointer hover:scale-110">
              <FaLinkedinIn />
            </div>
          </div>{" "}
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Programs
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Admissions
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span>info@school.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Peshawar, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Bright Future School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
