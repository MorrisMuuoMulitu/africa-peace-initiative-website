
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FocusAreas from "@/components/FocusAreas";
import Event from "@/components/Event";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div id="mission">
        <Mission />
      </div>
      <div id="focus">
        <FocusAreas />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Event />
        <div id="contact">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
