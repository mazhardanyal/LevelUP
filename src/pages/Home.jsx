import React from "react";
import { Link } from "react-router-dom";
   import { BookOpen, Users, Trophy, ShieldCheck } from "lucide-react";

   import homeImg from "../assets/home.jpg";
import aboutImg from "../assets/about.jpg"; // put any school image here
import { ArrowRight } from "lucide-react";

   const Home = () => {
  return (
    <div className="bg-white">

      

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
   <img
  src={homeImg}
  className="w-full h-full object-cover"
  alt="school"
/>
  </div>

  {/* DARK + BLUR OVERLAY (LEFT TO RIGHT FADE) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

  {/* EXTRA BLUR EFFECT ON LEFT SIDE */}
  <div className="absolute inset-0 backdrop-blur-sm [mask-image:linear-gradient(to_right,black_40%,transparent_80%)]"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-xl px-10 text-white">

    <h1 className="text-5xl font-bold leading-tight">
      Nurturing Minds.<br />
      Building Futures.<br />
      <span className="text-orange-400">Inspiring Excellence.</span>
    </h1>

    <p className="mt-6 text-gray-200">
      Modern education with discipline, creativity and real-world skills for future leaders.
    </p>

   <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center">

  <Link
    to="/gallery"
    className="bg-orange-400 text-black px-6 py-3 rounded-full font-medium text-center w-full sm:w-auto hover:scale-105 transition"
  >
    Explore School
  </Link>

  <Link
    to="/gallery"
    className="border border-white text-white px-6 py-3 rounded-full text-center w-full sm:w-auto hover:bg-white hover:text-[#0b1d39] transition"
  >
    Watch Video
  </Link>

</div>

  </div>

</section>
      {/* FEATURES */}
   
<section className="px-6 md:px-10 py-16 bg-gray-50">

  {/* TITLE */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Why Choose Our School
    </h2>
    <p className="text-gray-500 mt-2">
      Building future leaders with modern education
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-4 gap-6">

    {/* CARD 1 */}
    <div className="group bg-white border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-900 text-white mb-4">
        <BookOpen size={22} />
      </div>

      <h3 className="font-bold text-blue-900 group-hover:text-orange-500 transition">
        Quality Education
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        Strong academic foundation with modern learning methods.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="group bg-white border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-900 text-white mb-4">
        <Users size={22} />
      </div>

      <h3 className="font-bold text-blue-900 group-hover:text-orange-500 transition">
        Expert Teachers
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        Highly skilled teachers guiding every student.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="group bg-white border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-900 text-white mb-4">
        <Trophy size={22} />
      </div>

      <h3 className="font-bold text-blue-900 group-hover:text-orange-500 transition">
        Sports & Excellence
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        Balanced growth through academics and sports.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="group bg-white border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-900 text-white mb-4">
        <ShieldCheck size={22} />
      </div>

      <h3 className="font-bold text-blue-900 group-hover:text-orange-500 transition">
        Safe Environment
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        Secure and supportive campus for students.
      </p>
    </div>

  </div>

</section>      {/* STATS */}
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

<section className="relative py-24 bg-white">

  <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE SIDE (MODERN STYLE) */}
    <div className="relative">

      <img
        src={aboutImg}
        alt="About School"
        className="rounded-2xl w-full h-[420px] object-cover shadow-2xl"
      />

      {/* FLOATING CARD */}
      <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl p-5 w-48">
        <h3 className="text-2xl font-bold text-blue-900">5+</h3>
        <p className="text-gray-500 text-sm">Years of Excellence</p>
      </div>

    </div>

    {/* TEXT SIDE */}
    <div>

      {/* SMALL LABEL */}
      <p className="text-orange-500 font-medium tracking-wider uppercase text-sm">
        About Us
      </p>

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-blue-900 leading-tight mt-2">
        Shaping Future Leaders<br /> Through Education
      </h2>

      {/* LINE ACCENT */}
      <div className="w-16 h-1 bg-orange-400 mt-4"></div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-6 leading-relaxed">
        We are committed to delivering high-quality education that builds
        confidence, creativity, and discipline in students. Our goal is to
        prepare children for real-world success, not just exams.
      </p>

      <p className="text-gray-600 mt-4 leading-relaxed">
        With modern teaching methods, experienced educators, and a supportive
        environment, we ensure every student grows with strong values and skills.
      </p>

      {/* HIGHLIGHTS (BETTER STYLE) */}
      <div className="mt-8 space-y-4">

        <div className="flex items-start gap-3">
          <div className="w-3 h-3 mt-2 bg-orange-400 rounded-full"></div>
          <p className="text-gray-700">
            Modern learning system with practical education approach
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-3 h-3 mt-2 bg-orange-400 rounded-full"></div>
          <p className="text-gray-700">
            Highly qualified teachers with real experience
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-3 h-3 mt-2 bg-orange-400 rounded-full"></div>
          <p className="text-gray-700">
            Safe, disciplined and student-friendly environment
          </p>
        </div>

      </div>

      {/* BUTTON */}
      <button className="mt-10 bg-blue-900 text-white px-7 py-3 rounded-full hover:bg-blue-800 transition shadow-lg">
        Explore More
      </button>

    </div>

  </div>

</section>



<section className="px-6 md:px-10 py-24 bg-gradient-to-b from-gray-50 to-white">

  {/* TITLE */}
  <div className="text-center mb-14">
    <h2 className="text-4xl font-bold text-blue-900">
      Academic Levels
    </h2>
    <div className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
    <p className="text-gray-500 mt-4">
      Education from foundation to grade 7
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* CARD */}
    {[
      {
        title: "Nursery",
        desc: "Early childhood learning with focus on basic skills and activities.",
      },
      {
        title: "Primary (Class 1–5)",
        desc: "Strong foundation in English, Math, Science and basic life skills.",
      },
      {
        title: "Middle School (Class 6–7)",
        desc: "Advanced learning preparing students for higher education levels.",
      },
    ].map((item, i) => (
      
      <div
        key={i}
        className="relative bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group"
      >

        {/* ACCENT BAR */}
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-900 rounded-t-2xl"></div>

        <h3 className="text-xl font-bold text-blue-900 mt-3">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {item.desc}
        </p>

        <a
          href="/programs"
          className="inline-flex items-center gap-2 mt-6 text-orange-500 font-medium group-hover:gap-3 transition"
        >
          Learn More <ArrowRight size={18} />
        </a>

      </div>

    ))}

  </div>

</section>
    </div>
  );
};

export default Home;