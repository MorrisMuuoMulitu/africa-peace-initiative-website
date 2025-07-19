
import React, { useState } from "react";
import { MapPin, Users, Heart, Globe } from "lucide-react";

const InteractiveHotspots = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: "25%",
      y: "30%",
      icon: Users,
      title: "Community Leaders",
      description: "Local peace ambassadors driving change in their communities",
      color: "api-terracotta"
    },
    {
      id: 2,
      x: "70%",
      y: "45%",
      icon: Heart,
      title: "Youth Engagement",
      description: "Empowering the next generation of peace builders",
      color: "api-gold"
    },
    {
      id: 3,
      x: "45%",
      y: "65%",
      icon: Globe,
      title: "Continental Reach",
      description: "Building bridges across 15+ African nations",
      color: "api-sage"
    },
    {
      id: 4,
      x: "15%",
      y: "75%",
      icon: MapPin,
      title: "Local Impact",
      description: "Grassroots initiatives creating lasting change",
      color: "api-forestgreen"
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {hotspots.map((hotspot) => {
        const Icon = hotspot.icon;
        return (
          <div
            key={hotspot.id}
            className="absolute pointer-events-auto group cursor-pointer"
            style={{ left: hotspot.x, top: hotspot.y }}
            onMouseEnter={() => setActiveHotspot(hotspot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            {/* Pulsing Ring */}
            <div className="absolute inset-0 w-12 h-12 rounded-full bg-white/20 animate-ping group-hover:animate-none" />
            
            {/* Main Hotspot */}
            <div 
              className={`relative w-12 h-12 rounded-full backdrop-blur-md bg-${hotspot.color}/80 border-2 border-white/40 flex items-center justify-center shadow-lg hover:scale-125 transition-all duration-300 hover:shadow-xl`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Tooltip */}
            <div 
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 p-4 backdrop-blur-xl bg-black/80 rounded-xl border border-white/20 shadow-2xl transition-all duration-300 ${
                activeHotspot === hotspot.id 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
            >
              <div className="text-white font-semibold mb-2">{hotspot.title}</div>
              <div className="text-white/80 text-sm">{hotspot.description}</div>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-black/80" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveHotspots;
