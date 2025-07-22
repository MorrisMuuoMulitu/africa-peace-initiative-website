
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
    <div className="relative z-20 w-full max-w-5xl">
      <div className="text-left space-y-6 md:space-y-8">
        
        {/* Enhanced Brand Identifier with Dynamic Backdrop */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-3 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/25 shadow-2xl"
               style={{
                 boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)'
               }}>
            <Heart className="w-4 h-4 text-teal-400 drop-shadow-lg" />
            <span className="text-white font-montserrat font-semibold tracking-wide text-sm drop-shadow-lg">
              Africa Peace Initiative
            </span>
            <div className="h-3 w-px bg-teal-400/80" />
            <span className="text-teal-300 font-montserrat text-xs font-semibold drop-shadow-lg">Since 2025</span>
          </div>
        </div>

        {/* Ultimate Headline with Dynamic Backdrop */}
        <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative">
            {/* Dynamic backdrop for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent blur-xl transform scale-110 rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 rounded-2xl" />
            
            <h1 className="relative font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 px-4 py-2">
              <span className="block mb-2 bg-gradient-to-r from-teal-300 via-teal-200 to-amber-300 bg-clip-text text-transparent font-black"
                    style={{
                      textShadow: '0 0 20px rgba(20,184,166,0.5), 0 4px 12px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.4)',
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6)) drop-shadow(0 0 15px rgba(20,184,166,0.3))',
                      WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                    }}>
                We Believe Peace Is Possible
              </span>
              <span className="block text-white font-black"
                    style={{
                      textShadow: '0 0 25px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.7), 0 8px 32px rgba(0,0,0,0.5)',
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))',
                      WebkitTextStroke: '1px rgba(0,0,0,0.2)'
                    }}>
                In The Great Lakes Region
              </span>
            </h1>
          </div>
        </div>

        {/* Enhanced Tagline with Backdrop */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-lg rounded-xl transform scale-110" />
            <p className="relative text-teal-100 font-montserrat text-lg md:text-xl font-semibold tracking-wide px-4 py-2"
               style={{
                 textShadow: '0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
                 filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))'
               }}>
              Building Peace Through Unity
            </p>
          </div>
        </div>

        {/* Harmonious Action Buttons */}
        <div className={`pt-4 transition-all duration-1000 delay-600 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            
            {/* Enhanced Primary CTA */}
            <button
              onClick={() => onScrollToSection("contact")}
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-montserrat font-bold text-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-3xl border border-white/20"
              style={{
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.4), 0 8px 25px rgba(0,0,0,0.3)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <span className="flex items-center gap-3">
                Join Our Mission
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
              </span>
            </button>
            
            {/* Enhanced Secondary CTA */}
            <button
              onClick={() => onScrollToSection("mission")}
              className="group px-7 py-3.5 backdrop-blur-xl bg-black/40 border-2 border-white/30 text-white font-montserrat font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-black/50 hover:border-white/40 hover:scale-105 shadow-xl"
              style={{
                textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <span className="flex items-center gap-2">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Volunteer Call-to-Action */}
        <div className={`transition-all duration-1000 delay-800 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mt-6 p-6 bg-gradient-to-r from-amber-500/30 to-teal-500/30 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl"
               style={{
                 boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
               }}>
            <p className="text-white font-montserrat text-base mb-4 font-medium"
               style={{ 
                 textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                 filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))'
               }}>
              Ready to make a difference? Join our volunteer community and help build lasting peace.
            </p>
            <a
              href="https://forms.gle/28ko3vUntu9z5A7e6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 backdrop-blur-sm rounded-lg text-amber-200 hover:text-amber-100 font-montserrat font-bold text-sm transition-all duration-300 border border-amber-400/30 hover:border-amber-400/50 hover:bg-amber-400/30 shadow-lg"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <Heart className="w-4 h-4 drop-shadow-lg" />
              Volunteer With Us
            </a>
          </div>
        </div>

        {/* Enhanced Inspirational Description */}
        <div className={`transition-all duration-1000 delay-1000 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative inline-block max-w-2xl">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl transform scale-105" />
            <p className="relative text-white font-open-sans text-base md:text-lg leading-relaxed px-6 py-4 font-medium"
               style={{
                 textShadow: '0 0 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)',
                 filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))'
               }}>
              Through collaborative dialogue, community engagement, and diplomatic excellence, 
              we're fostering lasting peace and understanding across the Great Lakes region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHeroTypography;
