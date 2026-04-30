import React from "react";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Reveal from "../components/Reveal";

const Contact = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">

     <Reveal>
      {/* CONTACT FORM SECTION */}
      <div className="w-full flex justify-center px-4 md:px-0">
        <ContactSection />
      </div>
</Reveal>

<Reveal>
      {/* MAP SECTION (FULL WIDTH CLEAN) */}
      <div className="w-full">
        <MapSection />
      </div>

    </Reveal>

    </div>
  );
};

export default Contact;