import React from "react";
import aboutImg from "../assets/about.jpg";
import principal from "../assets/principal.jpg";
const About = () => {
  return (
    <div>


{/* PRINCIPAL MESSAGE - TOP SECTION */}
<section className="bg-blue-50 py-16">

  <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

    {/* TEXT SIDE */}
    <div>

      <p className="text-orange-500 font-medium tracking-wider uppercase text-sm">
        Leadership
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 leading-tight">
        Message from the Principal
      </h2>

      <div className="w-16 h-1 bg-orange-400 mt-4"></div>

      <p className="text-gray-600 mt-6 leading-relaxed">
        “At our school, we focus on more than academics. We aim to build discipline,
        confidence, and strong character in every student. Education here is designed
        to prepare students for real-world success.”
      </p>

      <p className="mt-6 font-semibold text-blue-900">
        — Mr.Fida Durrani
      </p>

    </div>

    {/* IMAGE SIDE (CLEAN + MODERN) */}
    <div className="relative flex justify-center">

      <div className="relative">

        <img
          src={principal}
          alt="Principal"
          className="w-72 h-80 object-fit  rounded-2xl shadow-2xl border-4 border-white"
        />

        {/* SMALL FLOAT BADGE */}
        <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl px-4 py-2">
          <p className="text-blue-900 font-bold text-sm">Mr.Fida Durrani</p>
          <p className="text-gray-500 text-xs">Principal</p>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* MAIN ABOUT SECTION */}
      <section className="relative py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE SIDE */}
          <div className="relative">

            <img
              src={aboutImg}
              alt="About School"
              className="rounded-2xl w-full h-[420px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl p-5 w-48">
              <h3 className="text-2xl font-bold text-blue-900">5+</h3>
              <p className="text-gray-500 text-sm">Years of Excellence</p>
            </div>

          </div>

          {/* TEXT SIDE */}
          <div>

            <p className="text-orange-500 font-medium tracking-wider uppercase text-sm">
              About Us
            </p>

            <h2 className="text-4xl font-bold text-blue-900 leading-tight mt-2">
              Shaping Future Leaders<br /> Through Education
            </h2>

            <div className="w-16 h-1 bg-orange-400 mt-4"></div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              We are committed to delivering high-quality education that builds
              confidence, creativity, and discipline in students.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              With modern teaching methods, experienced educators, and a supportive
              environment, we ensure every student grows with strong values.
            </p>

            {/* HIGHLIGHTS */}
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

            <button className="mt-10 bg-blue-900 text-white px-7 py-3 rounded-full hover:bg-blue-800 transition shadow-lg">
              Explore More
            </button>

          </div>

        </div>

      </section>

      {/* PRINCIPAL SECTION (NOW BELOW - CORRECT PLACE) */}
      




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
    </div>
  );
};

export default About;