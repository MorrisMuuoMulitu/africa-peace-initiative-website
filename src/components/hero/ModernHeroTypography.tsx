
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
        
        {/* Clean Brand Identifier */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-3 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15">
            <Heart className="w-4 h-4 text-teal-400" />
            <span className="text-white font-montserrat font-medium tracking-wide text-sm">
              Africa Peace Initiative
            </span>
            <div className="h-3 w-px bg-teal-400/60" />
            <span className="text-teal-400 font-montserrat text-xs font-medium">Since 2025</span>
          </div>
        </div>

        {/* Modern Main Headline */}
        <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="block mb-2 bg-gradient-to-r from-teal-400 via-teal-300 to-amber-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                  }}>
              We Believe Peace Is Possible
            </span>
            <span className="block text-white font-semibold"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)'
                  }}>
              In The Great Lakes Region
            </span>
          </h1>
        </div>

        {/* Elegant Tagline */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-teal-100 font-montserrat text-lg md:text-xl font-medium tracking-wide"
             style={{
               textShadow: '0 1px 4px rgba(0,0,0,0.4)'
             }}>
            Building Peace Through Unity
          </p>
        </div>

        {/* Harmonious Action Buttons */}
        <div className={`pt-4 transition-all duration-1000 delay-600 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            
            {/* Primary CTA - Clean Design */}
            <button
              onClick={() => onScrollToSection("contact")}
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-montserrat font-semibold text-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              style={{
                boxShadow: '0 8px 25px rgba(20, 184, 166, 0.3)'
              }}
            >
              <span className="flex items-center gap-3">
                Join Our Mission
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
            
            {/* Secondary CTA - Glass Effect */}
            <button
              onClick={() => onScrollToSection("mission")}
              className="group px-7 py-3.5 backdrop-blur-sm bg-white/10 border border-white/20 text-white font-montserrat font-medium text-lg rounded-xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              <span className="flex items-center gap-2">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Volunteer Call-to-Action */}
        <div className={`transition-all duration-1000 delay-800 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl border border-white/10">
            <p className="text-white/90 font-montserrat text-base mb-3"
               style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              Ready to make a difference? Join our volunteer community and help build lasting peace.
            </p>
            <a
              href="https://forms.gle/28ko3vUntu9z5A7e6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-montserrat font-semibold text-sm transition-colors duration-300 underline decoration-2 underline-offset-2 hover:decoration-amber-200"
            >
              <Heart className="w-4 h-4" />
              Volunteer With Us
            </a>
          </div>
        </div>

        {/* Inspirational Description */}
        <div className={`transition-all duration-1000 delay-1000 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-white/85 font-open-sans text-base md:text-lg leading-relaxed max-w-2xl"
             style={{
               textShadow: '0 1px 4px rgba(0,0,0,0.4)'
             }}>
            Through collaborative dialogue, community engagement, and diplomatic excellence, 
            we're fostering lasting peace and understanding across the Great Lakes region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernHeroTypography;
