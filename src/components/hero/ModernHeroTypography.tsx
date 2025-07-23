
import React, { useEffect, useState } from "react";
import { ChevronRight, Users, Heart } from "lucide-react";

interface ModernHeroTypographyProps {
  onScrollToSection: (sectionId: string) => void;
}

const ModernHeroTypography = ({ onScrollToSection }: ModernHeroTypographyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setTextRevealed(true), 600);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-20 w-full max-w-6xl">
      <div className="text-left space-y-4 md:space-y-6">
        
        {/* Enhanced Brand Identifier */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-3 bg-black/70 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30 shadow-2xl"
               style={{
                 boxShadow: '0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 20px rgba(20,184,166,0.3)'
               }}>
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-teal-400 drop-shadow-lg" />
            <span className="text-white font-montserrat font-semibold tracking-wide text-xs md:text-sm drop-shadow-lg">
              Africa Peace Initiative
            </span>
            <div className="h-2 md:h-3 w-px bg-teal-400/80" />
            <span className="text-teal-300 font-montserrat text-xs font-semibold drop-shadow-lg">Since 2025</span>
          </div>
        </div>

        {/* Revolutionary Two-Part Headline */}
        <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative space-y-2 md:space-y-3">
            {/* Dynamic multi-layer backdrop for maximum visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 blur-2xl transform scale-110 rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-transparent to-amber-900/20 rounded-2xl" />
            
            <div className="relative px-3 md:px-6 py-3 md:py-4">
              {/* Part 1: Main Peace Declaration */}
              <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-2 md:mb-3">
                <span className="block bg-gradient-to-r from-teal-300 via-teal-200 to-amber-300 bg-clip-text text-transparent"
                      style={{
                        textShadow: '0 0 30px rgba(20,184,166,0.6), 0 4px 20px rgba(0,0,0,0.9)',
                        filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.8)) drop-shadow(0 0 25px rgba(20,184,166,0.4))',
                        WebkitTextStroke: '1px rgba(255,255,255,0.15)'
                      }}>
                  We Believe Peace Is Possible
                </span>
              </h1>
              
              {/* Part 2: Geographic Scope */}
              <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white mb-4 md:mb-6"
                  style={{
                    textShadow: '0 0 35px rgba(0,0,0,0.95), 0 4px 20px rgba(0,0,0,0.8), 0 8px 40px rgba(0,0,0,0.6)',
                    filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.9))',
                    WebkitTextStroke: '1px rgba(0,0,0,0.3)'
                  }}>
                In The Great Lakes Regions And Africa
              </h2>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-lg rounded-xl transform scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-xl" />
            <p className="relative text-teal-100 font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide px-4 md:px-6 py-3 md:py-4 leading-relaxed"
               style={{
                 textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)',
                 filter: 'drop-shadow(0 1px 6px rgba(0,0,0,0.6))'
               }}>
              We Are Committed To Work Together Towards Sustainable Peace
            </p>
          </div>
        </div>

        {/* Action Buttons - Mobile Optimized */}
        <div className={`pt-4 md:pt-6 transition-all duration-1000 delay-600 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start">
            
            {/* Primary CTA - Enhanced */}
            <button
              onClick={() => onScrollToSection("contact")}
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-montserrat font-bold text-base md:text-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-3xl border border-white/20"
              style={{
                boxShadow: '0 0 35px rgba(20, 184, 166, 0.5), 0 8px 30px rgba(0,0,0,0.4)',
                textShadow: '0 1px 3px rgba(0,0,0,0.6)'
              }}
            >
              <span className="flex items-center justify-center gap-2 md:gap-3">
                Join Our Mission
                <Users className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
              </span>
            </button>
            
            {/* Secondary CTA - Enhanced */}
            <button
              onClick={() => onScrollToSection("mission")}
              className="group w-full sm:w-auto px-5 md:px-7 py-3 md:py-3.5 backdrop-blur-xl bg-black/50 border-2 border-white/40 text-white font-montserrat font-semibold text-base md:text-lg rounded-xl transition-all duration-300 hover:bg-black/60 hover:border-white/50 hover:scale-105 shadow-xl"
              style={{
                textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
              </span>
            </button>
          </div>
        </div>

        {/* Volunteer Call-to-Action - Streamlined */}
        <div className={`transition-all duration-1000 delay-800 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mt-4 md:mt-6 p-4 md:p-6 bg-gradient-to-r from-amber-500/30 to-teal-500/30 backdrop-blur-xl rounded-xl border border-white/25 shadow-2xl"
               style={{
                 boxShadow: '0 8px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)'
               }}>
            <p className="text-white font-montserrat text-sm md:text-base mb-3 md:mb-4 font-medium leading-relaxed"
               style={{ 
                 textShadow: '0 1px 5px rgba(0,0,0,0.7)',
                 filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))'
               }}>
              Ready to make a difference? Join our volunteer community and help build lasting peace.
            </p>
            <a
              href="https://forms.gle/28ko3vUntu9z5A7e6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/25 backdrop-blur-sm rounded-lg text-amber-200 hover:text-amber-100 font-montserrat font-bold text-sm transition-all duration-300 border border-amber-400/40 hover:border-amber-400/60 hover:bg-amber-400/35 shadow-lg"
              style={{
                textShadow: '0 1px 3px rgba(0,0,0,0.6)'
              }}
            >
              <Heart className="w-4 h-4 drop-shadow-lg" />
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHeroTypography;
