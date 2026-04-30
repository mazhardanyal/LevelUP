import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";
import Reveal from "../components/Reveal";
const Programs = () => {
  const programs = [
    {
      title: "Nursery",
      desc: "Early childhood learning with creativity, fun activities, and basic skill development.",
    },
    {
      title: "Primary (Class 1–5)",
      desc: "Strong foundation in English, Math, Science, and personality development activities.",
    },
    {
      title: "Middle School (Class 6–7)",
      desc: "Advanced learning with critical thinking, discipline, and academic excellence.",
    },
  ];

  return (
    <div className="bg-white">
<Reveal>
      {/* HERO */}
      <section className="bg-[#0b1d39] py-28 text-center text-white">

        <p className="text-orange-400 uppercase tracking-widest text-sm">
          Academic Structure
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Our Programs
        </h1>

        <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          We provide a structured education system designed to build strong academic foundations,
          confidence, and real-world skills.
        </p>

      </section>
</Reveal>

<Reveal>
      {/* STATS SECTION (MAKES PAGE BIGGER + TRUST) */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-8 text-center">

        <div className="p-8 rounded-2xl shadow-md border">
          <h2 className="text-4xl font-bold text-blue-900">500+</h2>
          <p className="text-gray-600 mt-2">Students Enrolled</p>
        </div>

        <div className="p-8 rounded-2xl shadow-md border">
          <h2 className="text-4xl font-bold text-blue-900">15+</h2>
          <p className="text-gray-600 mt-2">Qualified Teachers</p>
        </div>

        <div className="p-8 rounded-2xl shadow-md border">
          <h2 className="text-4xl font-bold text-blue-900">10+</h2>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>

      </section>
</Reveal>

<Reveal>
      {/* OVERVIEW SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-orange-500 uppercase text-sm tracking-widest">
              Education System
            </p>

            <h2 className="text-4xl font-bold text-blue-900 mt-3">
              Structured Learning Path
            </h2>

            <div className="w-16 h-1 bg-orange-400 mt-4"></div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Our education system is designed to grow students step by step.
              Each level focuses on knowledge, discipline, creativity, and confidence.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We don’t just teach subjects — we build personalities ready for real-world challenges.
            </p>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              className="w-full h-[380px] object-cover"
            />

          </div>

        </div>

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

<Reveal>
      {/* WHY CHOOSE US (MAKES PAGE BIGGER) */}
      <section className="bg-gray-50 py-20 mt-20">

        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

          <h2 className="text-3xl font-bold text-blue-900">
            Why Choose Our Programs?
          </h2>

          <div className="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              "Modern Teaching Methods",
              "Experienced Faculty",
              "Safe Learning Environment",
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-md">
                <p className="text-blue-900 font-semibold">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </section>
</Reveal>



<Reveal>      {/* CTA */}
<section className="bg-orange-400 py-16 md:py-20 text-center text-white px-6">

  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
    Start Your Child’s Future Today
  </h2>

  <p className="mt-3 text-sm md:text-base text-white/90">
    Admissions are open now
  </p>

  <div className="mt-6 flex justify-center">
    <Link
      to="/contact"
      className="bg-[#0b1d39] text-white px-8 md:px-10 py-3 rounded-full font-medium hover:scale-105 transition duration-300 w-full max-w-xs md:w-auto"
    >
      Apply Now
    </Link>
  </div>

</section>
</Reveal>
    </div>
  );
};

export default Programs;