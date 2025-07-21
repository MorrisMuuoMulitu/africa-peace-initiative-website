
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
    <div className="relative z-20 w-full max-w-4xl">
      {/* Clean Left-Aligned Layout */}
      <div className="text-left space-y-6 md:space-y-8">
        
        {/* Small Brand Identifier */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-3">
            <div className="h-0.5 w-12 bg-api-gold rounded-full" />
            <span className="text-white/80 font-medium tracking-wider uppercase text-sm">
              Africa Peace Initiative
            </span>
          </div>
        </div>

        {/* Massive Primary Headline */}
        <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-white">
            We believe peace is possible in the{" "}
            <span className="text-api-gold">Great Lakes region</span>
          </h1>
        </div>

        {/* Single Primary CTA */}
        <div className={`pt-4 transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            onClick={() => onScrollToSection("mission")}
            size="lg"
            className="bg-api-gold hover:bg-api-gold/90 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center">
              Discover Our Mission
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTypography;
