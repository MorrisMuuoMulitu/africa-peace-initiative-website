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
import { useBreakpoint } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useBreakpoint("md");

  useEffect(() => {
    // Only use advanced animations on non-mobile devices for better performance
    if (isMobile) {
      // Simplified animations for mobile
      const sections = document.querySelectorAll(".section-animate");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = entry.target;
              section.classList.add("animate-fade-in");
              section.classList.remove("opacity-0");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
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
    } else {
      // Enhanced animations for desktop
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
    }
  }, [isMobile]);

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
      <div id="events" className="section-animate" data-animation="fade-left">
        <Event />
      </div>
      <div className="section-animate" data-animation="fade-up">
        <Timeline />
      </div>
      <div className="section-animate" data-animation="fade-right">
        <Testimonials />
      </div>
      <div className="section-animate" data-animation="fade-up">
        <Partners />
      </div>
      <div className="section-animate" data-animation="fade-left">
        <Gallery />
      </div>
      <div id="contact" className="section-animate" data-animation="fade-right">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
