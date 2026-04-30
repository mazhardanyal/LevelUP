import React from "react";
import { Link } from "react-router-dom";
   import {
  Sparkles,
  Star,
  ChevronRight,
  Play,
  Calendar,
  MapPin,
  Award,
  Trophy
} from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Reveal from "../components/Reveal";
   import homeImg from "../assets/home.jpg";
import aboutImg from "../assets/about.jpg"; // put any school image here
import { ArrowRight } from "lucide-react";
import ContactSection from "../components/ContactSection";

 const Home = () => {
  // Mouse follow effect for 3D card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-500, 500], [15, -15]);
  const rotateY = useTransform(mouseX, [-500, 500], [-15, 15]);

  const springConfig = { damping: 30, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="bg-white">
      <Reveal>
      {/* PREMIUM HERO SECTION */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        
        {/* BACKGROUND IMAGE WITH ZOOM + BLUR EFFECT */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={homeImg} className="w-full h-full object-cover" alt="school" />
          
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_black_100%)]" />
        </motion.div>

        {/* Animated Light Rays */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent blur-sm" />
          <div className="absolute top-0 left-2/4 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent blur-sm" />
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent blur-sm" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* MAIN CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            
          </motion.div>

          {/* MAIN TITLE with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white">Nurturing Minds.</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Building Futures.
              </span>
              <br />
              <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl">
                Inspiring Excellence.
              </span>
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-gray-200 text-lg max-w-2xl leading-relaxed"
          >
            Modern education with discipline, creativity and real-world skills for future leaders. 
            Join us in shaping tomorrow's innovators today.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/gallery"
              className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Virtual Tour
            </Link>
          </motion.div>

          {/* QUICK INFO STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex flex-wrap gap-6 text-white/80"
          >
           
          </motion.div>
        </div>

        {/* FLOATING 3D CARD (INTERACTIVE) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute bottom-10 right-10 hidden lg:block perspective-1000"
        >
          <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-80 border border-white/50">
            
            {/* School stats card */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Excellence Record</h3>
                <p className="text-xs text-gray-500">Recognized nationally</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-2xl font-bold text-orange-600">400+</div>
                <div className="text-xs text-gray-500">Students Enrolled</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">20+</div>
                <div className="text-xs text-gray-500">Expert Faculty</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-xs text-gray-500">Pass Rate</div>
              </div>
              <div>
              
              </div>
            </div>

            <Link 
              to="/achievements" 
              className="text-orange-600 text-sm font-medium flex items-center gap-1 group"
            >
              View achievements
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>

      </section>
     
</Reveal> 

 <Reveal>     {/* STATS */}
      <section className="bg-[#0b1d39] py-16 text-white">

  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

    {/* CARD 1 */}
    <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition">
      <h2 className="text-4xl font-bold text-orange-400">400+</h2>
      <p className="text-gray-300 mt-2">Students</p>
    </div>

    {/* CARD 2 */}
    <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition">
      <h2 className="text-4xl font-bold text-orange-400">20+</h2>
      <p className="text-gray-300 mt-2">Teachers</p>
    </div>

    {/* CARD 3 */}
    <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition">
      <h2 className="text-4xl font-bold text-orange-400">5+</h2>
      <p className="text-gray-300 mt-2">Years Experience</p>
    </div>

    {/* CARD 4 */}
    <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition">
      <h2 className="text-4xl font-bold text-orange-400">15+</h2>
      <p className="text-gray-300 mt-2">Facilities</p>
    </div>

  </div>

</section>
</Reveal>
<Reveal>
<section className="relative py-24 bg-gradient-to-br from-white via-blue-50/20 to-white overflow-hidden">

  {/* Background decorative elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

  <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* IMAGE SIDE */}
    <div className="relative group">

      {/* Main image */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
        <img
          src={aboutImg}
          alt="About School"
          className="w-full h-[420px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Border effect */}
      <div className="absolute -top-4 -left-4 w-full h-full border border-orange-400/20 rounded-3xl -z-10" />

      {/* Floating card */}
      <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-5 w-52 border border-orange-100 hover:shadow-orange-200/40 transition-all duration-300">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-md">
            <Trophy className="w-5 h-5 text-white" />
          </div>

          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              5+
            </h3>
            <p className="text-gray-500 text-xs">Years of Excellence</p>
          </div>
        </div>

      </div>

      {/* Floating dots */}
      <div className="absolute -top-6 -right-6 flex gap-2 opacity-80">
        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
      </div>

    </div>

    {/* TEXT SIDE */}
    <div>

      {/* LABEL */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full mb-5">
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
        <p className="text-orange-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">
          About Us
        </p>
      </div>

      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
          Shaping Future Leaders
        </span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
          Through Education
        </span>
      </h2>

      {/* ACCENT LINE */}
      <div className="flex items-center gap-2 mt-4 mb-6">
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
        <div className="w-2 h-1 bg-orange-300 rounded-full" />
        <div className="w-1 h-1 bg-orange-200 rounded-full" />
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
        We are committed to delivering high-quality education that builds
        confidence, creativity, and discipline in students. Our goal is to
        prepare children for real-world success, not just exams.
      </p>

      <p className="text-gray-600 mt-4 leading-relaxed">
        With modern teaching methods, experienced educators, and a supportive
        environment, we ensure every student grows with strong values and skills.
      </p>

      {/* HIGHLIGHTS */}
      <div className="mt-8 space-y-4">

        {[
          "Modern learning system with practical education approach",
          "Highly qualified teachers with real experience",
          "Safe, disciplined and student-friendly environment"
        ].map((text, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {text}
            </p>
          </div>
        ))}

      </div>

      {/* STATS */}
      <div className="mt-8 flex flex-wrap items-center gap-6 pt-5 border-t border-gray-100">

        <div>
          <div className="text-2xl font-bold text-orange-500">500+</div>
          <div className="text-xs text-gray-400">Happy Students</div>
        </div>

        <div className="w-px h-8 bg-gray-200" />

        <div>
          <div className="text-2xl font-bold text-orange-500">40+</div>
          <div className="text-xs text-gray-400">Expert Faculty</div>
        </div>

        <div className="w-px h-8 bg-gray-200" />

        <div>
          <div className="text-2xl font-bold text-orange-500">100%</div>
          <div className="text-xs text-gray-400">Satisfaction</div>
        </div>

      </div>

      {/* BUTTON */}
      <button className="group mt-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-3.5 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
        <span>Explore More</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

    </div>

  </div>

  {/* bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-50/30 to-transparent pointer-events-none" />

</section>
</Reveal>
<Reveal>
<section className="relative px-6 md:px-10 py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">

  {/* Background decorative elements */}
  <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl" />

  {/* TITLE SECTION */}
  <div className="text-center mb-16 relative z-10">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full mb-4">
      <Sparkles className="w-4 h-4 text-orange-500" />
      <span className="text-orange-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">
        Our Programs
      </span>
    </div>
    
    <h2 className="text-4xl sm:text-5xl font-bold">
      <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
        Academic Levels
      </span>
    </h2>
    
    <div className="flex items-center justify-center gap-2 mt-4 mb-4">
      <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
      <div className="w-2 h-1 bg-orange-300 rounded-full" />
      <div className="w-1 h-1 bg-orange-200 rounded-full" />
    </div>
    
    <p className="text-gray-500 max-w-md mx-auto">
      Education from foundation to grade 7
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">

    {/* CARD 1 - Nursery */}
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2">
      
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 group-hover:from-blue-50/30 group-hover:to-orange-50/30 transition-all duration-500" />
      
      {/* Icon section */}
      <div className="relative pt-8 px-7">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">🎓</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 pt-0">
        <h3 className="text-xl font-bold text-blue-900 group-hover:text-orange-500 transition-colors duration-300">
          Nursery
        </h3>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Early childhood learning with focus on basic skills and activities. 
          Play-based curriculum for holistic development.
        </p>

        {/* Features list */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-orange-400 rounded-full" />
            <span>Age: 3-4 years</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-orange-400 rounded-full" />
            <span>Duration: Full day</span>
          </div>
        </div>

        <a
          href="/programs"
          className="inline-flex items-center gap-2 mt-5 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all duration-300 hover:text-orange-600"
        >
          Learn More 
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-2xl" />
    </div>

    {/* CARD 2 - Primary (Featured Card) */}
    <div className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 overflow-hidden hover:-translate-y-2 ring-1 ring-orange-200/50">
      
      {/* Featured badge */}
      <div className="absolute top-4 right-4 z-20">
       
      </div>

      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 group-hover:from-blue-50/50 group-hover:to-orange-50/50 transition-all duration-500" />
      
      {/* Icon section */}
      <div className="relative pt-8 px-7">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
          <span className="text-3xl">📚</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 pt-0">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
          Primary (Class 1–5)
        </h3>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Strong foundation in English, Math, Science and basic life skills. 
          Interactive learning with modern teaching methods.
        </p>

        {/* Features list */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-orange-400 rounded-full" />
            <span>Age: 5-10 years</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-orange-400 rounded-full" />
            <span>Smart classrooms</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-orange-400 rounded-full" />
            <span>STEM focused</span>
          </div>
        </div>

        <a
          href="/programs"
          className="inline-flex items-center gap-2 mt-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium text-sm px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300 group-hover:gap-3"
        >
          Learn More 
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-400/5 to-transparent rounded-tr-2xl" />
    </div>

    {/* CARD 3 - Middle School */}
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2">
      
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-orange-50/0 group-hover:from-blue-50/30 group-hover:to-orange-50/30 transition-all duration-500" />
      
      {/* Icon section */}
      <div className="relative pt-8 px-7">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">🚀</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 pt-0">
        <h3 className="text-xl font-bold text-blue-900 group-hover:text-orange-500 transition-colors duration-300">
          Middle School (Class 6–7)
        </h3>

        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Advanced learning preparing students for higher education levels. 
          Critical thinking and practical application focus.
        </p>

        {/* Features list */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-orange-400 rounded-full" />
            <span>Age: 11-13 years</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-orange-400 rounded-full" />
            <span>Career counseling</span>
          </div>
        </div>

        <a
          href="/programs"
          className="inline-flex items-center gap-2 mt-5 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all duration-300 hover:text-orange-600"
        >
          Learn More 
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-2xl" />
    </div>

  </div>



  {/* Bottom decorative element */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-50/20 to-transparent pointer-events-none" />

</section>
</Reveal>

<ContactSection />
    </div>
  );
};

export default Home;