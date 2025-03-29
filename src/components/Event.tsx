
import React, { useState } from "react";
import { CalendarDays, ChevronRight, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const Event = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} id="events" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-api-gold to-amber-300">
      <div className={`max-w-3xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="text-api-gold">
              <div className="p-4 rounded-full bg-api-midnight">
                <CalendarDays size={40} />
              </div>
            </div>
            <div>
              <div className="bg-api-terracotta/10 px-4 py-1 rounded-full inline-block mb-2">
                <span className="text-sm font-medium text-api-terracotta">Upcoming Event</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-api-midnight mb-2">
                Shared Responsibility, Shared Future
              </h2>
              <p className="text-lg font-lora text-api-midnight/80 mb-6">
                Virtual Conversation, Feb 27th/March 6th, 2025
              </p>
              
              <Button 
                variant="outline" 
                className="border-api-midnight text-api-midnight hover:bg-api-terracotta hover:text-api-ivory hover:border-api-terracotta transition-all duration-300"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide Details" : "View Details"}
                <ChevronRight size={16} className={`ml-2 transition-transform duration-300 ${showDetails ? 'rotate-90' : ''}`} />
              </Button>
              
              {showDetails && (
                <div className="mt-6 bg-api-ivory rounded-lg p-6 text-api-midnight animate-fade-in">
                  <p className="text-base font-lora mb-4">
                    Join our virtual conversation on the challenges and opportunities for peace in East Africa,
                    featuring regional experts and peace practitioners from across the continent.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-api-midnight/80">
                      <MapPin size={16} />
                      <span>Online (Zoom)</span>
                    </div>
                    <div className="flex items-center gap-2 text-api-midnight/80">
                      <Users size={16} />
                      <span>Limited to 100 participants</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="bg-api-terracotta hover:bg-api-midnight text-white transition-all duration-300 w-full md:w-auto"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Register Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
