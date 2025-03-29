
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[60vh] bg-api-forest bg-sankofa flex items-center justify-center">
      <div className="absolute inset-0 bg-api-forest opacity-60 z-0 animate-pulse-slow"></div>
      <div 
        className={`max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 transition-opacity duration-5000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-api-terracotta mb-4 animate-fade-in">
          Rethinking Peace in Africa
        </h1>
        <p className="text-xl md:text-2xl font-lora text-api-ivory mb-6 animate-fade-in">
          Building stability through dialogue, innovation, and collaboration—starting in East Africa
        </p>
        <Button 
          className="bg-api-gold hover:bg-api-terracotta text-api-midnight font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
