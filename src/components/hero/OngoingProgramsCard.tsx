
import React from "react";
import { Heart } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface OngoingProgramsCardProps {
  isMobile: boolean;
}

const OngoingProgramsCard = ({ isMobile }: OngoingProgramsCardProps) => {
  return isMobile ? (
    <HoverCard>
      <HoverCardTrigger>
        <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-4 rounded-lg shadow-xl bg-gradient-to-br from-api-terracotta/95 to-api-clay/95 border border-api-gold/20 hover:border-api-gold/40">
          <div className="flex items-center mb-2">
            <Heart className="text-white mr-2" size={18} aria-hidden="true" />
            <h3 className="text-white font-semibold text-base">Ongoing Programs</h3>
          </div>
          <p className="text-white font-medium text-sm">12+ peace initiatives</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="bg-gradient-to-br from-api-terracotta/95 to-api-clay/95 text-white border-api-gold/20">
        12+ peace-building initiatives with measurable conflict reduction in fragile regions
      </HoverCardContent>
    </HoverCard>
  ) : (
    <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-6 rounded-lg shadow-xl bg-gradient-to-br from-api-terracotta/95 to-api-clay/95 border border-api-gold/20 hover:border-api-gold/40">
      <div className="flex items-center mb-3">
        <Heart className="text-white mr-3" size={22} aria-hidden="true" />
        <h3 className="text-white font-semibold text-lg drop-shadow-sm">Ongoing Programs</h3>
      </div>
      <p className="text-white font-medium text-base drop-shadow-sm">12+ peace-building initiatives with measurable conflict reduction in fragile regions</p>
    </div>
  );
};

export default OngoingProgramsCard;
