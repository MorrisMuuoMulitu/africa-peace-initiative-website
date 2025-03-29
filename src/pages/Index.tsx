
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
import News from "@/components/News";
import DataVisualization from "@/components/DataVisualization";
import SuccessStories from "@/components/SuccessStories";
import ResourceLibrary from "@/components/ResourceLibrary";
import EnhancedGallery from "@/components/EnhancedGallery";
import Newsletter from "@/components/Newsletter";
import InteractiveMap from "@/components/InteractiveMap";
import TeamMembers from "@/components/TeamMembers";

const Index = () => {
  useEffect(() => {
    // Enhanced scroll-based animations with varying effects
    const sections = document.querySelectorAll(".section-animate");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add specific animation classes based on section type
            const section = entry.target;
            section.classList.add("animate-fade-in");
            section.classList.remove("opacity-0");
            
            // Add additional animation classes based on data attribute
            const animationType = section.getAttribute("data-animation");
            if (animationType) {
              section.classList.add(`animate-${animationType}`);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    
    sections.forEach((section) => {
      // Set different animation types for alternating sections
      const index = Array.from(sections).indexOf(section);
      const animationTypes = ["fade-up", "fade-right", "fade-up", "fade-left"];
      section.setAttribute("data-animation", animationTypes[index % animationTypes.length]);
      
      // Set different animation delays for staggered effect
      if (section instanceof HTMLElement) {
        section.style.animationDelay = `${index * 0.1}s`;
      }
      
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
      <div id="mission" className="section-animate" data-animation="fade-up">
        <Mission />
      </div>
      <div id="focus" className="section-animate" data-animation="fade-right">
        <FocusAreas />
      </div>
      <div className="section-animate" data-animation="fade-up">
        <ImpactMetrics />
      </div>
      <div className="section-animate" data-animation="fade-left">
        <DataVisualization />
      </div>
      <div id="events" className="section-animate" data-animation="fade-up">
        <Event />
      </div>
      <div className="section-animate" data-animation="fade-right">
        <InteractiveMap />
      </div>
      <div className="section-animate" data-animation="fade-up">
        <SuccessStories />
      </div>
      <div className="section-animate" data-animation="fade-left">
        <Timeline />
      </div>
      <div className="section-animate" data-animation="fade-right">
        <TeamMembers />
      </div>
      <div className="section-animate" data-animation="fade-up">
        <Testimonials />
      </div>
      <div className="section-animate" data-animation="fade-left">
        <Partners />
      </div>
      <div className="section-animate" data-animation="fade-right">
        <ResourceLibrary />
      </div>
      <div className="section-animate" data-animation="fade-up">
        <EnhancedGallery />
      </div>
      <div className="section-animate" data-animation="fade-right">
        <News />
      </div>
      <div className="section-animate" data-animation="fade-up">
        <Newsletter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 section-animate" data-animation="fade-right">
        <div id="contact">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
