
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, Star } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-api-darkgreen">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/africa-outline.svg')] bg-no-repeat bg-center opacity-10 bg-contain"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-api-green opacity-5 blur-3xl"></div>
          <div className="absolute bottom-[30%] right-[10%] w-80 h-80 rounded-full bg-api-sand opacity-5 blur-3xl"></div>
        </div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className={`lg:col-span-7 text-left transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <div className="h-1 w-16 bg-api-sage mr-4"></div>
              <span className="text-api-sage font-medium tracking-wider uppercase text-sm animate-slide-left" style={{ animationDelay: '0.3s' }}>Africa Peace Initiative</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-montserrat text-api-cream mb-6 leading-tight animate-slide-left" style={{ animationDelay: '0.5s' }}>
              <span className="text-api-sage">Rethinking</span> Peace <br className="hidden md:block" />in Africa
            </h1>
            
            <p className="text-xl md:text-2xl font-lora text-api-sage/90 mb-8 max-w-xl animate-slide-left" style={{ animationDelay: '0.7s' }}>
              Building stability through dialogue, innovation, and collaboration—starting in East Africa
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-left" style={{ animationDelay: '0.9s' }}>
              <Button 
                onClick={scrollToMission}
                className="bg-api-brightgreen hover:bg-api-sage text-api-cream font-semibold px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
              >
                Our Approach
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="bg-transparent hover:bg-api-green/20 border-2 border-api-sage text-api-sage font-semibold px-8 py-6 rounded-md transition-all duration-300 text-lg"
              >
                Join Our Efforts
              </Button>
            </div>
            
            <div className="mt-16 hidden lg:flex items-center text-api-sage animate-slide-left" style={{ animationDelay: '1.1s' }}>
              <ArrowDown className="mr-3 animate-bounce" />
              <span className="text-sm font-medium">Scroll to learn more</span>
            </div>
          </div>
          
          {/* Right content - Floating statistics */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -top-16 -right-8 rotate-12 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                <div className="bg-api-green/90 backdrop-blur-sm p-5 rounded-lg shadow-xl border border-api-sage/20">
                  <div className="flex items-center mb-2">
                    <Star className="text-api-cream mr-2" size={18} />
                    <h3 className="text-api-cream font-semibold">Regional Focus</h3>
                  </div>
                  <p className="text-api-sage/90 text-sm">Operating in 5 East African countries with expanding influence</p>
                </div>
              </div>
              
              <div className="animate-slide-right" style={{ animationDelay: '0.9s' }}>
                <div className="bg-api-charcoal/90 backdrop-blur-sm p-5 rounded-lg shadow-xl border border-api-sage/20">
                  <div className="flex items-center mb-2">
                    <Star className="text-api-cream mr-2" size={18} />
                    <h3 className="text-api-cream font-semibold">Key Programs</h3>
                  </div>
                  <p className="text-api-sage/90 text-sm">12+ peace-building initiatives with measurable impact in conflict zones</p>
                </div>
              </div>
              
              <div className="absolute -bottom-12 -left-4 -rotate-6 animate-slide-right" style={{ animationDelay: '1.1s' }}>
                <div className="bg-api-forestgreen/90 backdrop-blur-sm p-5 rounded-lg shadow-xl border border-api-sage/20">
                  <div className="flex items-center mb-2">
                    <Star className="text-api-cream mr-2" size={18} />
                    <h3 className="text-api-cream font-semibold">Our Impact</h3>
                  </div>
                  <p className="text-api-sage/90 text-sm">200+ community leaders trained in conflict resolution and mediation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-api-darkgreen/80 to-transparent z-0"></div>
    </div>
  );
};

export default Hero;
