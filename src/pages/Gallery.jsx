import React from "react";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#0b1d39] py-24 text-center text-white">

        <p className="text-orange-400 uppercase tracking-widest text-sm">
          School Gallery
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Moments of Learning & Growth
        </h1>

        <div className="w-24 h-1 bg-orange-400 mx-auto mt-5"></div>

        <p className="text-gray-300 mt-6 max-w-xl mx-auto">
          A glimpse into classrooms, activities, achievements, and student life.
        </p>

      </section>

      {/* FEATURE STRIP */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-orange-500 uppercase text-sm tracking-widest">
              Experience
            </p>

            <h2 className="text-4xl font-bold text-blue-900 mt-3">
              Learning Beyond Classrooms
            </h2>

            <div className="w-16 h-1 bg-orange-400 mt-4"></div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              We focus on practical learning, discipline, and creativity.
              Every student is encouraged to grow academically and personally.
            </p>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">

            <img
              src={images[1]}
              className="w-full h-[350px] object-cover"
            />

          </div>

        </div>

      </section>

      {/* VIDEO SECTION (NEW ADDITION 🔥) */}
      <section className="bg-[#0b1d39] py-20 text-white">

        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

          <p className="text-orange-400 uppercase tracking-widest text-sm">
            Campus Tour
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Watch Our School in Action
          </h2>

          <div className="w-20 h-1 bg-orange-400 mx-auto mt-5"></div>

          <p className="text-gray-300 mt-6 max-w-xl mx-auto">
            Experience our classrooms, events, and student activities in real time.
          </p>

          {/* VIDEO */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl">

            <iframe
              className="w-full h-[450px]"
              src="https://www.youtube.com/embed/5MgBikgcWnY"
              title="School Tour Video"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      {/* IMAGE GRID */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >

              <img
                src={img}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#0b1d39]/40 opacity-0 group-hover:opacity-100 transition flex items-end p-5">

                <div>
                  <p className="text-orange-400 text-sm uppercase tracking-wider">
                    School Life
                  </p>
                  <p className="text-white font-semibold">
                    Student Moment #{i + 1}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Gallery;