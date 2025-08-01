
import React, { useState, useEffect } from "react";
import { Users, Heart, Globe, MapPin, Sparkles, Target } from "lucide-react";

const InteractiveHeroHotspots = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const hotspots = [
    {
      id: 1,
      x: "15%",
      y: "25%",
      icon: Users,
      title: "Community Leaders",
      description: "Local peace ambassadors driving grassroots change in their communities",
      quote: "Peace begins with understanding our shared humanity",
      color: "api-teal",
      delay: 0
    },
    {
      id: 2,
      x: "75%",
      y: "35%",
      icon: Heart,
      title: "Youth Engagement",
      description: "Empowering the next generation of peace builders across Africa",
      quote: "Young voices are the future of sustainable peace",
      color: "api-gold",
      delay: 200
    },
    {
      id: 3,
      x: "45%",
      y: "65%",
      icon: Globe,
      title: "Continental Reach",
      description: "Building bridges across 15+ African nations for lasting unity",
      quote: "Unity in diversity is our greatest strength",
      color: "api-forestgreen",
      delay: 400
    },
    {
      id: 4,
      x: "25%",
      y: "75%",
      icon: Target,
      title: "Strategic Impact",
      description: "Focused initiatives creating measurable change in conflict zones",
      quote: "Every small action contributes to lasting peace",
      color: "api-terracotta",
      delay: 600
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
      {hotspots.map((hotspot) => {
        const Icon = hotspot.icon;
        return (
          <div
            key={hotspot.id}
            className={`absolute pointer-events-auto group cursor-pointer transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ 
              left: hotspot.x, 
              top: hotspot.y,
              animationDelay: `${hotspot.delay}ms`
            }}
            onMouseEnter={() => setActiveHotspot(hotspot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            {/* Animated Ripple Effect */}
            <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2">
              <div className={`absolute inset-0 rounded-full bg-${hotspot.color}/30 animate-ping group-hover:animate-none`} />
              <div className={`absolute inset-2 rounded-full bg-${hotspot.color}/20 animate-ping`} 
                   style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
            </div>
            
            {/* Main Hotspot Button */}
            <div className={`relative w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full glass-morphism-modern bg-${hotspot.color}/80 border-2 border-white/60 flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-300 hover:shadow-3xl group-hover:border-white/80`}>
              <Icon className="w-7 h-7 text-white drop-shadow-lg" />
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-full bg-${hotspot.color}/40 blur-md group-hover:blur-lg transition-all duration-300`} />
            </div>

            {/* Enhanced Tooltip */}
            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 w-80 transition-all duration-500 ${
              activeHotspot === hotspot.id 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <div className="glass-morphism-modern p-6 rounded-2xl border border-white/30 shadow-2xl backdrop-blur-xl bg-black/60">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-${hotspot.color}/20 border border-${hotspot.color}/40`}>
                    <Icon className={`w-5 h-5 text-${hotspot.color}`} />
                  </div>
                  <h3 className="text-white font-montserrat font-bold text-lg">{hotspot.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-white/90 font-open-sans text-sm leading-relaxed mb-4">
                  {hotspot.description}
                </p>
                
                {/* Quote */}
                <div className={`border-l-4 border-${hotspot.color}/60 pl-4 py-2 bg-${hotspot.color}/10 rounded-r-lg`}>
                  <p className="text-white/80 font-montserrat text-sm italic leading-relaxed">
                    "{hotspot.quote}"
                  </p>
                </div>
                
                {/* Sparkle Decoration */}
                <div className="absolute -top-2 -right-2">
                  <Sparkles className={`w-6 h-6 text-${hotspot.color} animate-pulse`} />
                </div>
              </div>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black/60" />
              </div>
            </div>

            {/* Mobile Touch Indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
              <div className="px-2 py-1 bg-black/60 rounded text-white text-xs font-montserrat">
                Tap to explore
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveHeroHotspots;
