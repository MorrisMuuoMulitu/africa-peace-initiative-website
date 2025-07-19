
import React from "react";
import { ArrowDown, MousePointer } from "lucide-react";

interface ScrollIndicatorProps {
  onScrollToSection: (sectionId: string) => void;
}

const ScrollIndicator = ({ onScrollToSection }: ScrollIndicatorProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div 
        className="group cursor-pointer flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300"
        onClick={() => onScrollToSection("mission")}
      >
        {/* Animated Scroll Icon */}
        <div className="relative">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
        
        {/* Text */}
        <div className="flex items-center space-x-2 text-sm font-medium">
          <MousePointer className="w-4 h-4 group-hover:animate-pulse" />
          <span>Explore Our Impact</span>
        </div>
        
        {/* Arrow */}
        <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
