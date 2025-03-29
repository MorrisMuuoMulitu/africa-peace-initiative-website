
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const InteractiveMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mapContainerRef = useRef(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  // Placeholder for locations where API has initiatives
  const initiatives = [
    {
      id: 1,
      country: "Kenya",
      region: "East Africa",
      location: "Nairobi",
      coordinates: { x: 67, y: 48 }, // Percentage coordinates on SVG
      description: "Regional headquarters with dialogue facilitation and training programs",
      initiatives: ["Peace Education in Schools", "Community Dialogue Programs", "Youth Leadership Training"],
      scale: 14,
    },
    {
      id: 2,
      country: "Rwanda",
      region: "East Africa",
      location: "Kigali",
      coordinates: { x: 63, y: 53 }, // Percentage coordinates on SVG
      description: "Post-conflict reconciliation and women's empowerment programs",
      initiatives: ["Women for Peace Initiative", "Post-Conflict Healing Circles", "Economic Empowerment"],
      scale: 12,
    },
    {
      id: 3,
      country: "DRC",
      region: "Central Africa",
      location: "Eastern Congo",
      coordinates: { x: 60, y: 50 }, // Percentage coordinates on SVG
      description: "Conflict resolution and community rebuilding projects",
      initiatives: ["Resource Conflict Mediation", "Trauma Healing Workshops", "Cross-Border Dialogue"],
      scale: 15,
    },
    {
      id: 4,
      country: "South Sudan",
      region: "East Africa",
      location: "Juba",
      coordinates: { x: 63, y: 42 }, // Percentage coordinates on SVG
      description: "Peace and reconciliation initiatives for communities affected by civil conflict",
      initiatives: ["Community Reconciliation", "Youth Peace Ambassadors", "Trauma Recovery"],
      scale: 10,
    },
    {
      id: 5,
      country: "Ghana",
      region: "West Africa",
      location: "Accra",
      coordinates: { x: 41, y: 47 }, // Percentage coordinates on SVG
      description: "Training center for peace practitioners and research hub",
      initiatives: ["Mediation Training", "Peace Research", "Capacity Building"],
      scale: 8,
    }
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-api-cream/20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="interactive-map"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Our Peace Initiatives
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Explore where we're working to build lasting peace across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div 
              ref={mapContainerRef} 
              className={`bg-white rounded-xl p-4 shadow-lg transition-all duration-700 relative h-[500px] md:h-[600px] overflow-hidden ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Africa outline SVG map */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                style={{ 
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                }}
              >
                <path 
                  d="M35.5,16.4c-0.3,0.3-0.9,0.5-1.4,0.5c-1.9,0-3.1,1.6-2.7,3.7c0.3,1.9,0.1,2.1-1.5,1.5c-1.7-0.7-4.7,0.8-4.7,2.2 c0,0.4-0.7,0.8-1.5,0.8s-1.5,0.5-1.5,1c0,0.6-0.7,1-1.5,1s-1.5,0.5-1.5,1c0,0.6-0.4,1-0.9,1c-1.1,0-2.3,3-1.6,4c0.3,0.5-0.3,1.2-1.2,1.5 c-1,0.4-1.4,1.2-1.1,2.1c0.4,0.8,0.1,1.4-0.6,1.4c-0.7,0-1,0.4-0.7,0.9c0.4,0.5,0.1,1.1-0.5,1.3c-0.6,0.2-0.8,0.8-0.5,1.3c0.4,0.5,0.2,0.9-0.4,0.9 c-0.6,0-0.8,0.4-0.5,1c0.3,0.5,0.1,1-0.5,1c-0.7,0-0.9,0.9-0.6,2.4c0.4,1.7,0.2,2.7-0.6,3.1c-0.8,0.3-0.8,0.5,0.1,0.5c0.7,0.1,1.3,0.6,1.3,1.2 c0,0.5,0.5,0.7,1.2,0.3c0.7-0.4,0.8-0.3,0.4,0.4c-0.4,0.7-0.3,1.2,0.3,1.2c0.5,0,1.1,0.9,1.3,2c0.2,1.2,1,2,1.8,1.9c1.1-0.2,1.3,0.3,0.9,1.8 c-0.6,1.9-0.5,2,1.5,1.4c1.3-0.5,2.1-0.4,2.1,0.3c0,0.5,0.9,1.1,2,1.2c1.3,0.2,1.8,0.8,1.5,1.8c-0.4,1.3-0.3,1.3,0.9,0.2c1.1-1,1.6-1,1.9-0.1 c0.3,0.7,1.3,1.3,2.2,1.3c1.7,0,2.1,1.8,0.5,2.4c-0.5,0.2-0.4,0.2,0.4,0.1c1.4-0.3,3.6,1.9,3.6,3.5c0,0.5,0.7,1,1.5,1s1.5,0.5,1.5,1 c0,0.6,0.7,1,1.5,1c0.9,0,1.5,0.9,1.5,2.5c0,1.4,0.4,2.5,0.9,2.5c1.1,0,2.3,6.3,1.3,7.3c-0.4,0.4-0.7,1.1-0.7,1.6c0,0.5,0.5,0.6,1,0.3 c0.6-0.3,1,0.1,1,1c0,0.9,0.9,1.9,2,2.2c1.5,0.4,2,1.4,2,3.7c0,1.7,0.4,3.6,1,4.2c0.5,0.5,1,2.8,0.9,5c0,2.2,0.4,4.2,0.9,4.5 c0.7,0.5,0.7,1.1,0,2.1c-0.6,0.7-0.7,1.4-0.4,1.7c0.4,0.2,0.7,4.3,0.8,8.9c0.1,8.7,0.1,8.9,3.3,11.7c3.6,3.1,4.7,3.3,2.5,0.5 c-1.3-1.7-1.3-1.7,0.5,0c1.1,0.9,2.5,1.7,3.3,1.7c0.7,0,2.1,0.9,3,2c1.6,2,1.7,2,3.5,0.1c1.1-1.1,2.2-1.7,2.6-1.4c0.3,0.4,0.6,0.1,0.6-0.6 c0-0.7,1.1-2.5,2.5-4c2.3-2.5,2.5-3.2,2.5-11.9c0-8.3-0.3-9.8-2.9-14.2c-1.6-2.7-3.1-6.2-3.3-7.8c-0.3-2.6-0.1-3,3.4-3.8c2.1-0.5,3.8-1.2,3.8-1.5 c0-0.4,1.3-0.9,3-1.1c1.6-0.3,3-1,3-1.5c0-0.6-0.5-0.8-1.2-0.4c-0.6,0.4-0.8,0.3-0.4-0.4c0.7-1.2,3.6-1.6,3.6-0.5c0,0.3,0.7,0.6,1.5,0.6 c0.8,0,1.2,0.6,0.9,1.5c-0.4,1.2,0,1.5,1.6,1.1c2.1-0.5,2.1-0.5,0.2,0.8c-1.8,1.3-1.8,1.4-0.2,0.8c1.8-0.6,2.3-0.1,1.1,1.1c-0.4,0.4,0.2,0.4,1.3,0 c1.5-0.5,2-0.2,2,1.3c0,1.1,0.4,1.4,1.1,0.6c0.8-0.8,1.2-0.7,1.6,0.2c0.4,0.9,1.3,1.1,3.1,0.5c1.9-0.5,2.9-0.1,4.1,1.5c1.3,1.7,2.2,2,4.5,1.6 c1.7-0.4,3.5-0.2,4.2,0.5c1,1,0.9,1.1-0.3,0.5c-1.3-0.6-1.3-0.5,0,0.9c0.8,0.8,2.5,1.8,3.7,2.2c2.5,0.8,2.6,0.8,5.8-1.5 c1.5-1.1,3.4-1.6,5.1-1.3c1.5,0.3,3.1,0.1,3.4-0.4c0.4-0.8,0.6-0.7,0.6,0.1c0.1,0.7,0.6,1,1.1,0.7c0.5-0.3,1-0.1,1,0.5s0.4,0.8,0.9,0.5 c0.5-0.3,1.2-0.1,1.6,0.5c0.4,0.7,1.2,0.6,2.6-0.3c1.6-1.1,1.9-1.1,1.4,0.2c-0.4,1,0,1.3,1.6,0.8c1.1-0.3,2.7-0.6,3.5-0.6c0.9,0.1,1.3-0.3,0.9-0.9 c-0.4-0.6,0.5-1,2.3-1c1.6,0,3.2-0.5,3.5-1c0.3-0.6,1.1-1,1.6-1c0.6,0,0.7,0.5,0.4,1c-0.3,0.6-0.1,1,0.5,1s1.1,0.7,1.1,1.5c0,0.8,0.7,1.5,1.5,1.5 c1.1,0,1.5-1.1,1.5-4c0-2.2,0.5-4,1-4c0.6,0,1-0.6,1-1.4c0-0.8,0.9-2.4,2-3.6c1.1-1.2,2-3.1,2-4.3c0-1.2,0.5-3.1,1-4.2 c0.9-1.8,0.8-2.2-0.5-2.7c-1.2-0.5-1.5-1.5-1.1-4.1c0.3-1.9,0.9-3.7,1.3-3.9c0.5-0.3,0.9-1.8,0.9-3.3c0-1.5,0.7-4,1.5-5.5 c0.8-1.5,1.5-3.3,1.5-4.1c0-0.7,0.9-1.9,2-2.6c1.1-0.7,2-1.9,2-2.7c0-0.7,0.9-2.2,2-3.3c1.1-1,2-2.6,2-3.5c0-0.9,0.9-2.7,2-4 c1.1-1.3,2-3,2-3.8c0-0.8,0.4-1.5,0.9-1.5c0.9,0,2.3-5.2,1.6-5.9c-0.2-0.2-0.1-1,0.3-1.7c1.3-2.5,1.1-3.4-0.8-3.4c-1,0-2-0.4-2.2-0.9 c-0.1-0.5-1.3-1.2-2.5-1.6c-1.2-0.3-2.9-1.3-3.7-2.2c-0.8-0.8-2.1-1.2-2.9-0.9c-0.8,0.3-2-0.4-2.7-1.5c-1.1-1.6-1.7-1.8-3.5-1 c-1.7,0.8-2.6,0.7-3.9-0.5c-1.4-1.2-1.7-1.3-1.7-0.1c0,0.8-0.3,1.1-0.6,0.8c-0.4-0.3-1.6,0.1-2.8,1c-2.1,1.5-2.5,1.5-4.1,0.1 c-1.8-1.5-1.8-1.5-1.2,0.3c0.5,1.6,0.2,1.9-1.7,1.9c-1.2,0-2.6-0.5-3-1c-0.5-0.7-1.2-0.7-2.1-0.1c-1,0.6-1.6,0.5-2.1-0.5 c-0.4-0.8-1.4-1.5-2.2-1.5c-0.9,0-2.2-0.9-2.9-2c-0.8-1.1-1.4-1.3-1.4-0.6c-0.1,0.9-0.8,0.8-2.7-0.5c-1.4-0.9-2.9-1.4-3.3-1c-0.4,0.4-1.6,0.1-2.6-0.7 c-1.6-1.3-1.7-1.3-1.1,0.1c0.6,1.2,0.5,1.3-0.6,0.3c-0.7-0.7-2.1-1.3-3-1.3c-1.1,0-2.5-1.1-3.4-2.5c-0.9-1.4-2.1-2.5-2.6-2.5 c-0.6,0-1.9-0.9-3-2c-1.1-1.1-2.3-2-2.8-2c-0.4,0-1-0.7-1.4-1.5c-0.3-0.8-1.2-1.5-2.1-1.5c-0.8,0-1.5-0.4-1.5-1c0-0.5-0.9-1-1.9-1 c-1.1,0-2.3-0.8-2.6-1.7c-0.4-1-1.2-1.4-1.9-1.1c-0.6,0.4-1.9,0.1-2.9-0.7c-1-0.8-2.8-1.5-4-1.5c-1.2,0-3-0.7-4-1.5c-1-0.8-2.6-1.5-3.5-1.5 c-1,0-2.8-0.7-4-1.5c-1.3-0.8-3.3-1.5-4.5-1.5c-1.3,0-3.7-0.7-5.5-1.5c-1.8-0.8-4.7-1.5-6.5-1.5c-1.8,0-3.7-0.5-4.1-1 c-0.8-1.3-3.5-1.3-3.5,0c0,0.5-1.1,1-2.5,1s-2.5,0.5-2.5,1c0,0.6-0.7,1-1.5,1s-1.5,0.5-1.5,1c0,0.6-0.7,1-1.5,1c-0.8,0-1.5,0.5-1.5,1 c0,0.6-0.4,0.9-0.9,0.5C36.9,15.7,36,16,35.5,16.4z" 
                  className="fill-api-sage stroke-api-green"
                  strokeWidth="0.7"
                />
                
                {/* Location markers */}
                {initiatives.map((initiative) => (
                  <g 
                    key={initiative.id} 
                    onClick={() => setSelectedRegion(initiative)}
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-125"
                    style={{ transformOrigin: `${initiative.coordinates.x}% ${initiative.coordinates.y}%` }}
                  >
                    <circle 
                      cx={`${initiative.coordinates.x}%`} 
                      cy={`${initiative.coordinates.y}%`} 
                      r={`${initiative.scale * 0.1}%`} 
                      className="fill-api-terracotta/20"
                    />
                    <circle 
                      cx={`${initiative.coordinates.x}%`} 
                      cy={`${initiative.coordinates.y}%`} 
                      r="1%" 
                      className="fill-api-terracotta stroke-white" 
                      strokeWidth="0.3"
                    />
                  </g>
                ))}
              </svg>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-api-midnight">API Peace Initiatives</h3>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-api-midnight/60">
                Click on a location to learn more
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {selectedRegion ? (
              <Card className={`h-full transform transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-api-terracotta rounded-full p-2 text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-montserrat text-api-midnight">
                        {selectedRegion.location}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="bg-api-cream/30 text-api-midnight border-api-cream">
                          {selectedRegion.country}
                        </Badge>
                        <span className="text-sm text-api-midnight/60">{selectedRegion.region}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-api-midnight/80 mb-6">
                    {selectedRegion.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-api-darkgreen mb-3">Active Initiatives:</h4>
                    <ul className="space-y-3">
                      {selectedRegion.initiatives.map((initiative, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-api-green/20 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-api-green"></div>
                          </div>
                          <span className="text-sm text-api-midnight/80">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className={`h-full flex flex-col justify-center items-center p-6 transform transition-all duration-500 border-dashed border-api-cream ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}>
                <MapPin className="h-12 w-12 text-api-terracotta/30 mb-4" />
                <h3 className="text-xl font-medium font-montserrat text-api-midnight text-center mb-2">
                  Select a Location
                </h3>
                <p className="text-api-midnight/70 text-center text-sm">
                  Click on a marker to view details about our initiatives in that region
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
