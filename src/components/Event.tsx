
import React, { useState } from "react";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Event = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div id="events" className="py-16 px-4 sm:px-6 bg-api-gold">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="text-api-midnight">
          <CalendarDays size={48} />
        </div>
        <div>
          <h2 className="text-2xl font-montserrat font-bold text-api-midnight mb-2">
            Next Event: Shared Responsibility, Shared Future
          </h2>
          <p className="text-lg font-lora text-api-midnight mb-4">
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
            <div className="mt-4 bg-api-ivory bg-opacity-70 p-4 rounded-md text-api-midnight animate-fade-in">
              <p className="text-base font-lora mb-2">
                Join our virtual conversation on the challenges and opportunities for peace in East Africa.
              </p>
              <p className="text-base font-lora mb-2">
                <strong>Speakers:</strong> Regional experts and peace practitioners
              </p>
              <p className="text-base font-lora">
                <strong>Registration:</strong> Fill out the form below to receive the Zoom link
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
