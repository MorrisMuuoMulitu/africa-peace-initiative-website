
import React, { useEffect, useState } from "react";
import { ChevronRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnhancedTypographyProps {
  onScrollToSection: (sectionId: string) => void;
}

const EnhancedTypography = ({ onScrollToSection }: EnhancedTypographyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    "Building Peace Across Africa",
    "Uniting Communities",
    "Creating Lasting Change",
    "Fostering Dialogue"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-20 space-y-8">
      {/* Enhanced Glassmorphism Container */}
      <div className="glass-morphism-content p-8 md:p-12 rounded-3xl border border-white/15 shadow-2xl adinkra-pattern">
        
        {/* Animated Brand Mark */}
        <div className="flex items-center mb-8 group">
          <div className="h-1 bg-gradient-to-r from-api-terracotta to-api-gold rounded-full transition-all duration-500 group-hover:w-24 w-16 mr-4 particle-glow" />
          <span className="text-white/95 font-semibold tracking-widest uppercase text-sm flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-api-gold animate-pulse" />
            Africa Peace Initiative
          </span>
        </div>

        {/* Revolutionary Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block text-hero-primary mb-2">
              Building
            </span>
            <span className="block text-hero-accent mb-2">
              Peace
            </span>
            <span className="block text-hero-primary">
              Across 
              <span className="ml-4 text-hero-accent">
                Africa
              </span>
            </span>
          </h1>
        </div>

        {/* Morphing Subtitle */}
        <div className="mb-8 h-16 flex items-center">
          <p 
            className={`text-lg md:text-xl text-hero-subtitle font-light leading-relaxed transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            key={currentPhrase}
          >
            {phrases[currentPhrase]} through dialogue, action, and diplomacy
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            onClick={() => onScrollToSection("mission")}
            className="btn-hero-primary group relative overflow-hidden text-white font-semibold px-8 py-6 rounded-2xl text-lg shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              Our Mission
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>

          <Button
            onClick={() => onScrollToSection("contact")}
            className="group relative overflow-hidden glass-morphism-ultra border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-6 rounded-2xl text-lg shadow-xl transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Join Our Impact
            </span>
          </Button>
        </div>

        {/* Enhanced Stats Preview */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { number: "500+", label: "Peace Builders" },
            { number: "15+", label: "Countries" },
            { number: "1000+", label: "Lives Changed" }
          ].map((stat, index) => (
            <div key={index} className="group floating-card-3d">
              <div className="text-2xl md:text-3xl font-bold text-hero-accent group-hover:scale-110 transition-transform duration-300 particle-glow">
                {stat.number}
              </div>
              <div className="text-hero-subtitle text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedTypography;
