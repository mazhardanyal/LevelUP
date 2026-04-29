import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
 import homeImg from "../assets/home.jpg";
 import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="bg-[#0b1d39] text-white text-sm hidden md:flex justify-between px-10 py-2">

        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@school.com</span>
          </div>
        </div>

        <div className="flex gap-4 text-gray-300">
          <span className="cursor-pointer hover:text-white transition">Facebook</span>
          <span className="cursor-pointer hover:text-white transition">LinkedIn</span>
          <span className="cursor-pointer hover:text-white transition">YouTube</span>
        </div>

      </div>

      {/* MAIN NAV */}
      <nav className="bg-white shadow-md flex items-center justify-between px-6 md:px-10 py-4">

        {/* LOGO */}
     <div className="flex items-center gap-3">

  {/* LOGO WRAPPER */}
  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-900">

    <img
      src={homeImg}
      alt="school logo"
      className="w-full h-full object-cover"
    />

  </div>

  {/* TEXT */}
  <div>
    <h1 className="font-bold text-blue-900 leading-tight">
     The Level Up
    </h1>
    <p className="text-xs text-orange-500">
      School System
    </p>
  </div>

</div>

        {/* DESKTOP LINKS */}
       <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

  <li>
    <Link to="/" className="text-blue-900 border-b-2 border-orange-400 pb-1">
      Home
    </Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-blue-900 transition">
      About
    </Link>
  </li>

  <li>
    <Link to="/programs" className="hover:text-blue-900 transition">
      Programs
    </Link>
  </li>

  <li>
    <Link to="/gallery" className="hover:text-blue-900 transition">
      Gallery
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-blue-900 transition">
      Contact
    </Link>
  </li>

</ul>
        {/* BUTTON */}
         <Link to="/contact" className="hidden md:block bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
          Apply Now
        </Link>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {open && (
      <div className="md:hidden bg-white shadow-lg px-6 py-5 space-y-4">

  <Link to="/" className="block font-medium">Home</Link>
  <Link to="/about" className="block font-medium">About</Link>
  <Link to="/programs" className="block font-medium">Programs</Link>
  <Link to="/gallery" className="block font-medium">Gallery</Link>
  <Link to="/contact" className="block font-medium">Contact</Link>

  <Link to="/contact" className="border border-[#0b1d39] text-[#0b1d39] px-6 py-2 rounded-full text-center hover:bg-[#0b1d39] hover:text-white transition">
    Apply Now
  </Link>

</div>
      )}

    </header>
  );
};

export default Navbar;