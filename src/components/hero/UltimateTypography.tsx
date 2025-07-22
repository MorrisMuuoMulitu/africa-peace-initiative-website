
import React, { useEffect, useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

interface UltimateTypographyProps {
  onScrollToSection: (sectionId: string) => void;
}

const UltimateTypography = ({ onScrollToSection }: UltimateTypographyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setTextRevealed(true), 800);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-20 w-full max-w-6xl">
      <div className="text-left space-y-8 md:space-y-12">
        
        {/* Premium Brand Identifier */}
        <div className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-4 backdrop-blur-md bg-black/30 px-6 py-3 rounded-full border border-white/20">
            <Sparkles className="w-5 h-5 text-api-gold animate-pulse" />
            <span className="text-white font-inter font-semibold tracking-wider uppercase text-sm">
              Africa Peace Initiative
            </span>
            <div className="h-4 w-px bg-api-gold/60" />
            <span className="text-api-gold font-inter text-xs">Since 2010</span>
          </div>
        </div>

        {/* Revolutionary Main Headline */}
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative">
            {/* Floating Background Text */}
            <div className="absolute -top-12 -left-12 text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] font-black text-white/3 -z-10 select-none pointer-events-none font-oswald tracking-tighter">
              PEACE
            </div>
            
            {/* Main Headline with Ultimate Visibility */}
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.85] mb-8 lg:mb-12 text-transform-capitalize">
              
              {/* First Line - "We Believe" */}
              <span className="block mb-2 lg:mb-4 group">
                <span className="relative inline-block text-white font-extrabold transform transition-all duration-700 hover:scale-105" 
                      style={{
                        textShadow: `
                          3px 3px 0px rgba(0,0,0,1),
                          6px 6px 0px rgba(0,0,0,0.8),
                          9px 9px 20px rgba(0,0,0,0.6),
                          0 0 30px rgba(255,255,255,0.3),
                          0 0 60px rgba(249,115,22,0.4)
                        `,
                        WebkitTextStroke: '1px rgba(0,0,0,0.8)'
                      }}>
                  We Believe
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-api-gold via-yellow-400 to-api-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full shadow-lg" />
                </span>
              </span>

              {/* Second Line - "Peace Is Possible" - Enhanced Visibility */}
              <span className="block mb-2 lg:mb-4 group">
                <span className="relative inline-block font-black transform transition-all duration-700 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #f59e0b 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: `
                          2px 2px 0px rgba(0,0,0,1),
                          4px 4px 0px rgba(0,0,0,0.8),
                          6px 6px 15px rgba(0,0,0,0.6),
                          0 0 40px rgba(249,115,22,0.8),
                          0 0 80px rgba(251,191,36,0.6)
                        `,
                        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,1)) drop-shadow(0 0 20px rgba(249,115,22,0.8))'
                      }}>
                  Peace Is Possible
                  <div className="absolute inset-0 bg-gradient-to-r from-api-gold/30 via-yellow-400/30 to-api-gold/30 blur-2xl -z-10 animate-pulse" 
                       style={{ animationDuration: '3s' }} />
                </span>
              </span>

              {/* Third Line - "In The Great Lakes Region" */}
              <span className="block group">
                <span className="relative inline-block text-white font-extrabold transform transition-all duration-700 hover:scale-105"
                      style={{
                        textShadow: `
                          3px 3px 0px rgba(0,0,0,1),
                          6px 6px 0px rgba(0,0,0,0.8),
                          9px 9px 20px rgba(0,0,0,0.6),
                          0 0 30px rgba(255,255,255,0.3)
                        `,
                        WebkitTextStroke: '1px rgba(0,0,0,0.8)'
                      }}>
                  In The{' '}
                  <span className="relative text-api-gold font-black animate-pulse inline-block" 
                        style={{ 
                          animationDuration: '2s',
                          textShadow: `
                            2px 2px 0px rgba(0,0,0,1),
                            4px 4px 0px rgba(0,0,0,0.8),
                            0 0 30px rgba(249,115,22,1),
                            0 0 60px rgba(249,115,22,0.6)
                          `
                        }}>
                    Great Lakes
                    <div className="absolute -top-2 -left-2 w-full h-full border-3 border-api-gold/40 -z-10 animate-pulse rounded-lg" 
                         style={{ animationDelay: '1s', animationDuration: '4s' }} />
                  </span>{' '}
                  Region
                </span>
              </span>
            </h1>
          </div>
        </div>

        {/* Revolutionary Call to Action Buttons */}
        <div className={`pt-6 transition-all duration-1500 delay-800 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            
            {/* Primary CTA - Ultimate Design */}
            <button
              onClick={() => onScrollToSection("contact")}
              className="group relative px-12 py-6 bg-gradient-to-r from-api-gold via-yellow-500 to-api-gold text-black font-bold text-xl font-inter rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-api-gold/50"
              style={{
                boxShadow: `
                  0 20px 40px rgba(249,115,22,0.4),
                  inset 0 1px 0 rgba(255,255,255,0.3),
                  0 0 0 1px rgba(0,0,0,0.1)
                `
              }}
            >
              <span className="relative z-10 flex items-center gap-4 font-oswald tracking-wide">
                Join Our Mission
                <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-api-gold/50 to-yellow-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </button>
            
            {/* Secondary CTA - Glass Morphism */}
            <button
              onClick={() => onScrollToSection("mission")}
              className="group px-10 py-5 backdrop-blur-md bg-white/10 border border-white/30 text-white font-semibold font-inter text-lg rounded-xl transition-all duration-500 hover:bg-white/20 hover:border-api-gold hover:scale-105 hover:-translate-y-1"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                boxShadow: `
                  0 8px 25px rgba(0,0,0,0.3),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `
              }}
            >
              <span className="flex items-center gap-3">
                <span className="font-oswald tracking-wider">Learn More</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Inspirational Subtitle */}
        <div className={`transition-all duration-1500 delay-1200 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/95 font-inter text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl"
             style={{
               textShadow: `
                 2px 2px 4px rgba(0,0,0,0.9),
                 0 0 20px rgba(0,0,0,0.6)
               `
             }}>
            Building bridges of understanding, fostering dialogue, and creating lasting peace through 
            <span className="text-api-gold font-semibold"> collaborative action</span> and 
            <span className="text-api-gold font-semibold"> diplomatic excellence</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimateTypography;
