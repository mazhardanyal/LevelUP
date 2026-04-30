import React from "react";
import aboutImg from "../assets/about.jpg";
import principal from "../assets/principal.jpg";
import { Trophy, ChevronRight } from "lucide-react";
import Reveal from "../components/Reveal";
const About = () => {
  return (
    <div>
<Reveal>

{/* PRINCIPAL MESSAGE - PREMIUM SECTION */}
<section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 overflow-hidden">

  {/* Background decorative elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-3xl" />

  <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* TEXT SIDE - ENHANCED */}
    <div className="relative z-10">
      
      {/* Quote mark decoration */}
      <div className="absolute -top-8 -left-4 text-8xl text-orange-200/50 font-serif select-none">"</div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full mb-4 relative z-10">
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
        <p className="text-orange-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">
          Leadership Voice
        </p>
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight relative z-10">
        <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
          Message from
        </span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
          The Principal
        </span>
      </h2>

      {/* Animated underline */}
      <div className="flex items-center gap-2 mt-4 mb-6">
        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
        <div className="w-2 h-1 bg-orange-300 rounded-full" />
        <div className="w-1 h-1 bg-orange-200 rounded-full" />
      </div>

      {/* Quote text with styling */}
      <div className="relative">
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed italic">
          “At our school, we focus on more than academics. We aim to build discipline,
          confidence, and strong character in every student. Education here is designed
          to prepare students for real-world success.”
        </p>
      </div>

      {/* Principal signature line */}
      <div className="mt-8 pt-4 border-t-2 border-orange-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-transparent" />
          <p className="font-bold text-blue-900 text-lg">Mr. Fida Durrani</p>
        </div>
        <p className="text-gray-500 text-sm mt-1 ml-12">Principal, School of Excellence</p>
      </div>

      {/* Stats/mini info */}
      <div className="mt-6 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full" />
          <span className="text-gray-500">10+ Years Experience</span>
        </div>
      </div>

    </div>

    {/* IMAGE SIDE - PREMIUM DESIGN */}
    <div className="relative flex justify-center group">
      
      {/* Main image container with frame effect */}
      <div className="relative">
        
        {/* Outer glow ring */}
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-orange-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
          <img
            src={principal}
            alt="Principal Mr. Fida Durrani"
            className="w-72 h-80 sm:w-80 sm:h-88 md:w-96 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Floating badge - Modern design */}
        <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl px-4 py-3 border border-orange-100 hover:shadow-orange-200/50 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-blue-900 font-bold text-sm">Mr. Fida Durrani</p>
              <p className="text-gray-500 text-xs">Principal</p>
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute -top-6 -right-6 flex gap-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full opacity-60" />
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60" />
          <div className="w-2 h-2 bg-orange-400 rounded-full opacity-60" />
        </div>

      </div>

    </div>

  </div>

  {/* Bottom decorative wave */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-50/30 to-transparent pointer-events-none" />

</section>

</Reveal>
<Reveal>

      {/* MAIN ABOUT SECTION */}
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

      {/* PRINCIPAL SECTION (NOW BELOW - CORRECT PLACE) */}
      



<Reveal>
      {/* SCHOOL STATS SECTION */}
<section className="bg-white py-20 border-t">

  <div className="max-w-6xl mx-auto px-6 md:px-10">

    {/* TITLE */}
    <div className="text-center mb-12">

      <p className="text-orange-500 font-medium tracking-wider uppercase text-sm">
        Our Impact
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
        Trusted by Hundreds of Families
      </h2>

      <div className="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>

    </div>

    {/* STATS GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      {/* CARD 1 */}
      <div className="bg-blue-50 rounded-2xl py-10 shadow-sm hover:shadow-md transition">
        <h3 className="text-4xl font-bold text-blue-900">500+</h3>
        <p className="text-gray-600 mt-2">Students</p>
      </div>

      {/* CARD 2 */}
      <div className="bg-blue-50 rounded-2xl py-10 shadow-sm hover:shadow-md transition">
        <h3 className="text-4xl font-bold text-blue-900">25+</h3>
        <p className="text-gray-600 mt-2">Qualified Teachers</p>
      </div>

      {/* CARD 3 */}
      <div className="bg-blue-50 rounded-2xl py-10 shadow-sm hover:shadow-md transition">
        <h3 className="text-4xl font-bold text-blue-900">5+</h3>
        <p className="text-gray-600 mt-2">Years Experience</p>
      </div>

      {/* CARD 4 */}
      <div className="bg-blue-50 rounded-2xl py-10 shadow-sm hover:shadow-md transition">
        <h3 className="text-4xl font-bold text-blue-900">95%</h3>
        <p className="text-gray-600 mt-2">Pass Rate</p>
      </div>

    </div>

  </div>

</section>  



</Reveal>

<Reveal>
{/* TEACHERS SECTION */}
<section className="bg-white py-20 border-t">

  <div className="max-w-6xl mx-auto px-6 md:px-10">

    {/* TITLE */}
    <div className="text-center mb-14">

      <p className="text-orange-500 font-medium tracking-wider uppercase text-sm">
        Our Teachers
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
        Experienced & Dedicated Educators
      </h2>

      <div className="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Our teachers are highly qualified and committed to shaping students with knowledge, discipline, and values.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* TEACHER 1 */}
      <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition text-center">

        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
          alt="Teacher"
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900">Mr. Ali Khan</h3>
          <p className="text-orange-500 text-sm mt-1">Mathematics Teacher</p>
          <p className="text-gray-600 mt-3 text-sm">
            Expert in logical thinking and problem-solving skills.
          </p>
        </div>

      </div>

      {/* TEACHER 2 */}
      <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition text-center">

        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          alt="Teacher"
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900">Ms. Sarah Ahmed</h3>
          <p className="text-orange-500 text-sm mt-1">English Teacher</p>
          <p className="text-gray-600 mt-3 text-sm">
            Focuses on communication and language development.
          </p>
        </div>

      </div>

      {/* TEACHER 3 */}
      <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition text-center">

        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="Teacher"
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900">Mr. Ahmed Raza</h3>
          <p className="text-orange-500 text-sm mt-1">Science Teacher</p>
          <p className="text-gray-600 mt-3 text-sm">
            Makes science simple and practical for students.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
</Reveal>
    </div>
  );
};

export default About;