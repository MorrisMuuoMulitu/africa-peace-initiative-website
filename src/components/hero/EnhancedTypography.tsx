import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnhancedTypographyProps {
  onScrollToSection: (sectionId: string) => void;
}

const EnhancedTypography = ({ onScrollToSection }: EnhancedTypographyProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative z-20 w-full max-w-5xl">
      {/* Clean Left-Aligned Layout */}
      <div className="text-left space-y-6 md:space-y-8">
        
        {/* Small Brand Identifier */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-3">
            <div className="h-0.5 w-12 bg-api-gold rounded-full animate-pulse" />
            <span className="text-white/80 font-medium tracking-wider uppercase text-sm backdrop-blur-sm">
              Africa Peace Initiative
            </span>
          </div>
        </div>

        {/* Revolutionary Typography */}
        <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            {/* Floating Background Text */}
            <div className="absolute -top-8 -left-8 text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[18rem] font-black text-white/5 -z-10 select-none pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
              PEACE
            </div>
            
            {/* Main Headline with Enhanced Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.8] mb-6 lg:mb-8">
              <span className="block text-white drop-shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <span className="relative">
                  We believe
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-api-gold/60 via-api-gold to-api-gold/60 transform scale-x-0 animate-pulse" 
                       style={{ animationDelay: '0.5s', animationDuration: '2s', animationFillMode: 'forwards' }} />
                </span>
              </span>
              <span className="block text-transparent bg-gradient-to-r from-api-gold via-yellow-400 to-api-gold bg-clip-text drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 delay-200">
                <span className="relative animate-pulse" style={{ animationDuration: '3s' }}>
                  peace is possible
                  <div className="absolute inset-0 bg-gradient-to-r from-api-gold/20 via-yellow-400/20 to-api-gold/20 blur-xl -z-10" />
                </span>
              </span>
              <span className="block text-white/90 drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 delay-300">
                <span className="relative">
                  in the <span className="text-api-gold font-extrabold animate-pulse" style={{ animationDuration: '2s' }}>Great Lakes</span> region
                  <div className="absolute -top-1 -left-1 w-full h-full border-2 border-api-gold/20 -z-10 animate-pulse" 
                       style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
                </span>
              </span>
            </h1>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className={`pt-4 transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-6 items-start mt-8">
            <button
              onClick={() => onScrollToSection("contact")}
              className="group relative px-10 py-5 bg-gradient-to-r from-api-gold via-yellow-500 to-api-gold text-black font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-api-gold/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Join Our Mission
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-api-gold to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <button
              onClick={() => onScrollToSection("mission")}
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-api-gold hover:bg-api-gold/10 transition-all duration-500 backdrop-blur-sm hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTypography;