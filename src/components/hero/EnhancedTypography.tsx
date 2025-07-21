
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
    <div className="relative z-20 w-full">
      {/* Main Hero Content - Left Aligned */}
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Small Brand Identifier */}
        <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-3">
            <div className="h-0.5 w-12 bg-api-gold rounded-full" />
            <span className="text-white/80 font-medium tracking-wider uppercase text-sm">
              Africa Peace Initiative
            </span>
          </div>
        </div>

        {/* Massive Main Headline */}
        <div className={`mb-8 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight">
            <span className="block text-white mb-2">
              Building
            </span>
            <span className="block text-white mb-2">
              Peace
            </span>
            <span className="block">
              <span className="text-white">Across </span>
              <span className="text-api-gold">Africa</span>
            </span>
          </h1>
        </div>

        {/* Clean Subtitle */}
        <div className={`mb-12 transition-all duration-1200 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Uniting communities through dialogue, action, and diplomacy to create lasting peace across 15+ African nations.
            </p>
          </div>
        </div>

        {/* Single Primary CTA */}
        <div className={`mb-16 transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            onClick={() => onScrollToSection("mission")}
            className="bg-api-gold hover:bg-api-gold/90 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center">
              Discover Our Impact
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Minimal Stats Row */}
        <div className={`transition-all duration-1200 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap gap-8 text-white/70">
            {[
              { number: "500+", label: "Peace Builders" },
              { number: "15+", label: "Countries" },
              { number: "1000+", label: "Lives Changed" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">{stat.number}</span>
                <span className="text-sm font-medium uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTypography;
