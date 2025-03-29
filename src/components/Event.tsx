
import React from "react";
import { CalendarDays } from "lucide-react";

const Event = () => {
  return (
    <div className="py-16 px-4 sm:px-6 bg-api-gold">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="text-api-midnight">
          <CalendarDays size={48} />
        </div>
        <div>
          <h2 className="text-2xl font-montserrat font-bold text-api-midnight mb-2">
            Next Event: Shared Responsibility, Shared Future
          </h2>
          <p className="text-lg font-lora text-api-midnight">
            Virtual Conversation, Feb 27th/March 6th, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
