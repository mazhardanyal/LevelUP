import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

      {/* PROGRAM CARDS */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Academic Levels
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {programs.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 shadow-md border hover:shadow-2xl transition"
            >

              <div className="w-3 h-3 bg-orange-400 rounded-full mb-4"></div>

              <h3 className="text-2xl font-bold text-blue-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.desc}
              </p>

              <a
                href="/programs"
                className="inline-flex items-center gap-2 mt-6 text-orange-500 font-medium hover:gap-3 transition"
              >
                Explore <ArrowRight size={18} />
              </a>

            </div>
          ))}

        </div>

      </section>

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

      {/* CTA */}
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
    </div>
  );
};

export default Programs;