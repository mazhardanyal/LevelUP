import React from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">

     
      {/* CONTACT FORM SECTION */}
      <div className="w-full flex justify-center px-4 md:px-0">
        <ContactSection />
      </div>

      {/* MAP SECTION (FULL WIDTH CLEAN) */}
      <div className="w-full">
        <MapSection />
      </div>

    

    </div>
  );
};

export default Contact;