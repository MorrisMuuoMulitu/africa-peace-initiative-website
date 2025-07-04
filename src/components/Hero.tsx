
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import FloatingImpactCards from "@/components/hero/FloatingImpactCards";
import LanguageSelector from "@/components/hero/LanguageSelector";
import heroGroupPhoto from "@/assets/hero-group-photo.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section 
      className="relative min-h-[100vh] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Hero Background with Group Photo */}
      <div className="absolute inset-0 z-0">
        <picture>
          <img
            src={heroGroupPhoto}
            alt="Africa Peace Initiative team members working together"
            className="w-full h-full object-cover parallax-element textile-mask"
            loading="eager"
            style={{ contain: 'paint composite' }}
          />
        </picture>
        
        {/* Diagonal overlay gradient */}
        <div className="absolute inset-0 hero-diagonal-overlay" aria-hidden="true"></div>
        
        {/* Subtle map overlay for depth */}
        <div className="absolute inset-0 bg-[url('/africa-outline.svg')] bg-no-repeat bg-center opacity-5 bg-contain" aria-hidden="true"></div>
      </div>
      
      {/* Main Content Grid */}
      <div className="relative z-10 min-h-[100vh] grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12">
        {/* Left Content Area - Diagonal Split */}
        <div className="md:col-span-2 lg:col-span-5 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-0">
          <div className={`w-full max-w-lg transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Language Selector - Top Right */}
            <div className="flex justify-end mb-6 md:mb-8">
              <LanguageSelector />
            </div>
            
            {/* Brand Mark */}
            <div className="flex items-center mb-6 adinkra-border">
              <div className="h-1 w-16 bg-api-terracotta mr-4" aria-hidden="true"></div>
              <span className="text-white font-medium tracking-wider uppercase text-sm hero-text-shadow">
                Africa Peace Initiative
              </span>
            </div>
            
            {/* Main Heading with Fluid Typography */}
            <h1 className="hero-fluid-text font-bold font-montserrat mb-6 leading-tight hero-text-shadow">
              <span className="text-white">Building Peace</span>{" "}
              <span className="text-api-terracotta">Across</span>{" "}
              <span className="text-api-ivory">Africa</span>
            </h1>
            
            {/* Subtitle with Responsive Text */}
            <p className="hero-subtitle-fluid font-lora text-white mb-8 max-w-md leading-relaxed hero-text-shadow">
              {isMobile ? 
                "Creating stability through dialogue and community action" : 
                "Creating stability through dialogue, community action, and collaborative diplomacy—transforming conflict into cooperation"
              }
            </p>
            
            {/* Social Links */}
            <div className="mb-8">
              <SocialLinks />
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToMission} 
                className="bg-api-terracotta hover:bg-api-clay text-white font-semibold px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group transform hover:scale-105"
                aria-label="Learn about our approach"
              >
                Our Approach
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })} 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg backdrop-blur-md transform hover:scale-105"
                aria-label="Join our efforts"
              >
                Join Our Efforts
              </Button>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-16 hidden lg:flex items-center text-white/80" aria-hidden="true">
              <ArrowDown className="mr-3 animate-bounce" />
              <span className="text-sm font-medium hero-text-shadow">Scroll to explore our work</span>
            </div>
          </div>
        </div>
        
        {/* Right Content Area - Floating Impact Cards */}
        <div className="md:col-span-3 lg:col-span-7 relative perspective-1000">
          <div className={`transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <FloatingImpactCards />
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-api-darkgreen/80 via-transparent to-transparent z-5" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
