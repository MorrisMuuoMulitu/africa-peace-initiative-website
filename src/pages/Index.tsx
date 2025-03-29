
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FocusAreas from "@/components/FocusAreas";
import Partners from "@/components/Partners";
import Event from "@/components/Event";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ImpactMetrics from "@/components/ImpactMetrics";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import News from "@/components/News";

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
      <ImpactMetrics />
      <div id="events">
        <Event />
      </div>
      <Timeline />
      <Testimonials />
      <Partners />
      <Gallery />
      <News />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div id="contact">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
