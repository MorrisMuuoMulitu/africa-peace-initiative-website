
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] bg-api-forest bg-sankofa flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-api-forest opacity-60 z-0"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-api-terracotta opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-api-gold opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div 
        className={`max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-api-ivory mb-6 leading-tight">
          <span className="text-api-terracotta">Rethinking</span> Peace in Africa
        </h1>
        <p className="text-xl md:text-2xl font-lora text-api-ivory mb-8 max-w-2xl mx-auto">
          Building stability through dialogue, innovation, and collaboration—starting in East Africa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToMission}
            className="bg-api-gold hover:bg-api-terracotta text-api-midnight font-semibold px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
          >
            Learn More
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
