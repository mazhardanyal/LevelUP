import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg"; 
import image4 from "../assets/image4.jpg";
  
const ContactSection = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col lg:flex-row p-4 gap-5 max-w-[1100px] mx-auto rounded-3xl my-10 border border-gray-100 shadow-md overflow-hidden">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-[340px] bg-[#0b1d39] text-white rounded-3xl p-8 flex-col justify-between relative overflow-hidden">

        {/* FLOATING CIRCLES BACKGROUND */}
        <div className="absolute inset-0">

         {[
    image1,
    image2,
    image3,
    image4,
  ,
  ].map((img, i) => (
    <div
      key={i}
      className="absolute w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-lg"
      style={{
        top: `${20 + i * 15}%`,
        left: `${20 + (i % 2 === 0 ? 10 : 50)}%`,
      }}
    >
      <img
        src={img}
        className="w-full h-full object-cover"
        alt="user"
      />
            </div>
          ))}

          {/* soft glow effect */}
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        {/* TOP LOGO */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">The Level Up School System</h2>
        </div>

        {/* SOCIAL */}
        <div className="relative z-10 flex gap-3">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-400 transition cursor-pointer"
            >
              <Icon />
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT PANEL (FORM AREA - UI ONLY) */}
      <div className="flex-1 bg-white rounded-3xl p-6 lg:p-10 shadow-sm border">

        <h1 className="text-2xl font-bold text-[#0b1d39]">
          Contact Us
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Send us your message anytime
        </p>

        {/* INPUT MOCK UI ONLY (NO LOGIC) */}
        <div className="space-y-4">

          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded-xl" placeholder="First Name" />
            <input className="border p-3 rounded-xl" placeholder="Last Name" />
          </div>

          <input className="w-full border p-3 rounded-xl" placeholder="Email" />
          <input className="w-full border p-3 rounded-xl" placeholder="Phone" />

                 <textarea
            rows="4"
            className="w-full border p-3 rounded-xl"
            placeholder="Message"
          />

          <button className="w-full bg-[#0b1d39] text-white py-3 rounded-xl hover:bg-orange-400 transition">
            Send Message
          </button>

        </div>

      </div>
    </div>
  );
};

export default ContactSection;