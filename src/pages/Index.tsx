
import React, { useEffect } from "react";
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
  useEffect(() => {
    // Add scroll-based animations
    const sections = document.querySelectorAll(".section-animate");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div id="mission" className="section-animate">
        <Mission />
      </div>
      <div id="focus" className="section-animate">
        <FocusAreas />
      </div>
      <div className="section-animate">
        <ImpactMetrics />
      </div>
      <div id="events" className="section-animate">
        <Event />
      </div>
      <div className="section-animate">
        <Timeline />
      </div>
      <div className="section-animate">
        <Testimonials />
      </div>
      <div className="section-animate">
        <Partners />
      </div>
      <div className="section-animate">
        <Gallery />
      </div>
      <div className="section-animate">
        <News />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 section-animate">
        <div id="contact">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
