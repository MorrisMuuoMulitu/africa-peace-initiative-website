
import React, { useEffect, useState } from "react";
import { ChevronRight, Users, Heart, Sparkles } from "lucide-react";

interface ModernHeroTypographyProps {
  onScrollToSection: (sectionId: string) => void;
}

const ModernHeroTypography = ({ onScrollToSection }: ModernHeroTypographyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const [particleAnimation, setParticleAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setTextRevealed(true);
        setTimeout(() => setParticleAnimation(true), 400);
      }, 800);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-20 w-full h-full min-h-screen flex">
      {/* Asymmetrical Grid Layout */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        
        {/* Left Section - Main Content (2/3 on desktop) */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12 pb-20 sm:pb-16 lg:py-16 relative">
          
          {/* Floating Brand Card */}
          <div className={`mb-6 lg:mb-8 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="inline-block">
              <div className="glass-morphism-modern px-4 py-3 lg:px-6 lg:py-4 rounded-2xl shadow-2xl backdrop-blur-xl bg-black/40 border border-white/20">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="relative">
                    <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-api-gold animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 lg:w-5 lg:h-5 bg-api-gold/30 rounded-full animate-ping" />
                  </div>
                  <span className="text-white font-montserrat font-bold tracking-wide text-sm lg:text-base">
                    Africa Peace Initiative
                  </span>
                  <div className="h-4 w-px bg-api-teal/60" />
                  <span className="text-api-teal font-montserrat text-xs lg:text-sm font-semibold">Since 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revolutionary Staggered Headlines */}
          <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
            
            {/* Primary Headline Part 1 */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent blur-xl rounded-3xl transform scale-110" />
                 <h1 className="relative font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
                   <span className="block bg-gradient-to-r from-api-teal via-api-gold to-api-teal bg-clip-text text-transparent animate-shimmer"
                         style={{
                           backgroundSize: '200% 100%',
                           textShadow: '0 0 40px rgba(20,184,166,0.6)',
                           filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.8))',
                           WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                         }}>
                     We Believe Peace Is Possible
                   </span>
                 </h1>
              </div>
            </div>
            
            {/* Primary Headline Part 2 */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative ml-4 lg:ml-8">
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent blur-lg rounded-2xl" />
                 <h2 className="relative font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-black leading-tight text-white"
                     style={{
                       textShadow: '0 0 30px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7)',
                       filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.8))'
                     }}>
                   In The Great Lakes Regions And Africa
                 </h2>
              </div>
            </div>
          </div>

          {/* Enhanced Commitment Statement Card */}
          <div className={`transition-all duration-1000 delay-700 ${textRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-api-teal/20 via-api-gold/15 to-api-teal/10 blur-lg rounded-2xl" />
              <div className="relative glass-morphism-modern px-6 py-4 lg:px-8 lg:py-6 rounded-2xl border border-white/25 backdrop-blur-xl bg-black/30">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-api-gold animate-pulse" />
                  </div>
                   <p className="text-white font-montserrat text-base sm:text-lg lg:text-xl xl:text-2xl font-bold leading-relaxed"
                      style={{
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                      }}>
                     We Are Committed To Work Together Towards Sustainable Peace
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons - Mobile Optimized */}
          <div className={`mt-6 sm:mt-8 lg:mt-10 transition-all duration-1000 delay-900 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 max-w-lg sm:max-w-none">
              
              {/* Primary CTA with 3D Effect */}
              <button
                onClick={() => onScrollToSection("contact")}
                className="group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-api-teal to-api-gold hover:from-api-gold hover:to-api-teal text-white font-montserrat font-bold text-base sm:text-lg lg:text-xl rounded-xl lg:rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl border border-white/20"
                style={{
                  boxShadow: '0 0 30px rgba(20, 184, 166, 0.3), 0 8px 25px rgba(0,0,0,0.4)',
                  textShadow: '0 2px 4px rgba(0,0,0,0.6)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  Join Our Mission
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
              
              {/* Secondary CTA with Glass Effect */}
              <button
                onClick={() => onScrollToSection("mission")}
                className="group px-5 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 glass-morphism-modern text-white font-montserrat font-semibold text-base sm:text-lg lg:text-xl rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 border border-white/30 hover:border-white/50 hover:bg-white/10"
                style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Stats Cards - Only visible on mobile */}
          <div className="lg:hidden mt-8 grid grid-cols-3 gap-3 max-w-sm mx-auto">
            <div className={`glass-morphism-modern p-3 rounded-lg border border-api-teal/30 text-center transition-all duration-1200 delay-1000 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-lg sm:text-xl font-black text-api-teal mb-1">15+</div>
              <div className="text-white/90 font-montserrat text-xs font-medium">Nations</div>
            </div>
            <div className={`glass-morphism-modern p-3 rounded-lg border border-api-gold/30 text-center transition-all duration-1200 delay-1100 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-lg sm:text-xl font-black text-api-gold mb-1">500+</div>
              <div className="text-white/90 font-montserrat text-xs font-medium">Ambassadors</div>
            </div>
            <div className={`glass-morphism-modern p-3 rounded-lg border border-white/30 text-center transition-all duration-1200 delay-1200 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-lg sm:text-xl font-black text-white mb-1">2025</div>
              <div className="text-white/90 font-montserrat text-xs font-medium">Founded</div>
            </div>
          </div>
        </div>

        {/* Right Section - Interactive Elements (1/3 on desktop, hidden on mobile) */}
        <div className="hidden lg:flex w-1/3 flex-col justify-center items-center px-6 py-16 relative">
          
          {/* Floating Stats Cards */}
          <div className={`space-y-6 transition-all duration-1200 delay-1000 ${particleAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Impact Card */}
            <div className="glass-morphism-modern p-6 rounded-2xl border border-api-teal/30 hover:border-api-teal/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="text-3xl font-black text-api-teal mb-2">15+</div>
                <div className="text-white/90 font-montserrat text-sm font-medium">African Nations</div>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="glass-morphism-modern p-6 rounded-2xl border border-api-gold/30 hover:border-api-gold/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="text-3xl font-black text-api-gold mb-2">500+</div>
                <div className="text-white/90 font-montserrat text-sm font-medium">Peace Ambassadors</div>
              </div>
            </div>
            
            {/* Growth Card */}
            <div className="glass-morphism-modern p-6 rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">2025</div>
                <div className="text-white/90 font-montserrat text-sm font-medium">Year Founded</div>
              </div>
            </div>
          </div>

          {/* Volunteer Call-to-Action - Redesigned */}
          <div className={`mt-8 transition-all duration-1000 delay-1200 ${particleAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-morphism-modern p-6 rounded-2xl border border-api-gold/30 hover:border-api-gold/50 transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-4">
                <Heart className="w-8 h-8 text-api-gold mx-auto animate-pulse" />
                <p className="text-white/90 font-montserrat text-sm leading-relaxed">
                  Ready to make a difference?
                </p>
                <a
                  href="https://forms.gle/28ko3vUntu9z5A7e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-api-gold/20 hover:bg-api-gold/30 backdrop-blur-sm rounded-lg text-api-gold hover:text-white font-montserrat font-bold text-sm transition-all duration-300 border border-api-gold/40 hover:border-api-gold/60"
                >
                  <Heart className="w-4 h-4" />
                  Volunteer With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      {particleAnimation && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float opacity-60"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                backgroundColor: i % 3 === 0 ? '#14b8a6' : i % 3 === 1 ? '#f59e0b' : '#ffffff',
                left: `${(i * 8) % 90 + 5}%`,
                top: `${(i * 7) % 80 + 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + (i % 4)}s`,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${4 + i}px currentColor`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernHeroTypography;
