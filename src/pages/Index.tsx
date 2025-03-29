
import React from "react";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FocusAreas from "@/components/FocusAreas";
import Event from "@/components/Event";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <FocusAreas />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Event />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
