import React, { useState } from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle
} from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg"; 
import image4 from "../assets/image4.jpg";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    // Reset form or handle submission here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* LEFT PANEL - PREMIUM DESIGN */}
        <div className="hidden lg:flex w-[380px] bg-gradient-to-br from-[#0b1d39] via-[#0e2a4a] to-[#0b1d39] text-white rounded-3xl p-8 flex-col justify-between relative overflow-hidden group">
          
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Floating circles background */}
          <div className="absolute inset-0">
            {[
              { img: image1, top: 15, left: 10, delay: 0 },
              { img: image2, top: 45, left: 65, delay: 2 },
              { img: image3, top: 70, left: 20, delay: 4 },
              { img: image4, top: 25, left: 75, delay: 1 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: item.delay, duration: 0.5 }}
                className="absolute w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{
                  top: `${item.top}%`,
                  left: `${item.left}%`,
                }}
              >
                <img src={item.img} className="w-full h-full object-cover" alt="user" />
              </motion.div>
            ))}
            
            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.2)_100%)]" />
          </div>

          {/* Top Logo/Badge */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium">Contact Us</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Level Up
              <br />
              School System
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mt-3" />
          </div>

          {/* Contact Details */}
          <div className="relative z-10 mt-8 space-y-3">
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <FaMapMarkerAlt size={12} />
              </div>
              <span>Peshawar, Pakistan</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <FaPhoneAlt size={12} />
              </div>
              <span>+92 345 6789012</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <FaEnvelope size={12} />
              </div>
              <span>info@thelevelup.edu.pk</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="relative z-10 mt-8">
            <div className="flex gap-2">
              {[
                { Icon: FaFacebookF, color: "hover:bg-blue-600" },
                { Icon: FaTwitter, color: "hover:bg-sky-500" },
                { Icon: FaLinkedinIn, color: "hover:bg-blue-700" },
                { Icon: FaInstagram, color: "hover:bg-pink-600" },
                { Icon: FaYoutube, color: "hover:bg-red-600" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ${item.color} transition-all duration-300 cursor-pointer group`}
                >
                  <item.Icon className="text-gray-300 group-hover:text-white text-sm transition" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-400">500+</div>
                <div className="text-xs text-gray-400">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">40+</div>
                <div className="text-xs text-gray-400">Teachers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">100%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL - FORM (ENHANCED) */}
        <div className="flex-1 bg-white rounded-3xl p-6 lg:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
          
          {/* Decorative top line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
          
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#0b1d39] to-blue-800 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                We'd love to hear from you
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
              <FaPaperPlane className="text-orange-500" />
            </div>
          </div>

          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mt-2" />

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2"
              >
                <FaCheckCircle className="text-green-500" />
                <span className="text-green-700 text-sm">Message sent successfully!</span>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">First Name *</label>
                <input 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50/50 hover:bg-white"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Last Name *</label>
                <input 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50/50 hover:bg-white"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50/50 hover:bg-white"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50/50 hover:bg-white"
                placeholder="+92 300 1234567"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Your Message *</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none bg-gray-50/50 hover:bg-white resize-none"
                placeholder="Tell us how we can help..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#0b1d39] to-[#0e2a4a] text-white py-3.5 rounded-xl hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>

            <p className="text-center text-gray-400 text-xs mt-4">
              By submitting, you agree to our <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;