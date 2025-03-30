
import React from "react";
import { Users } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface CommunityFocusCardProps {
  isMobile: boolean;
}

const CommunityFocusCard = ({ isMobile }: CommunityFocusCardProps) => {
  return isMobile ? (
    <HoverCard>
      <HoverCardTrigger>
        <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-4 rounded-lg shadow-xl bg-gradient-to-br from-api-darkgreen/90 to-api-forestgreen/90 border border-api-brightgreen/20 hover:border-api-brightgreen/40">
          <div className="flex items-center mb-2">
            <Users className="text-api-cream mr-2" size={18} aria-hidden="true" />
            <h3 className="text-api-cream font-semibold text-base">Community Focus</h3>
          </div>
          <p className="text-api-cream font-medium text-sm">200+ leaders trained</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="bg-gradient-to-br from-api-darkgreen/90 to-api-forestgreen/90 text-api-cream border-api-brightgreen/20">
        200+ community leaders trained in conflict resolution and reconciliation strategies
      </HoverCardContent>
    </HoverCard>
  ) : (
    <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-6 rounded-lg shadow-xl bg-gradient-to-br from-api-darkgreen/90 to-api-forestgreen/90 border border-api-brightgreen/20 hover:border-api-brightgreen/40">
      <div className="flex items-center mb-3">
        <Users className="text-api-cream mr-3" size={22} aria-hidden="true" />
        <h3 className="text-api-cream font-semibold text-lg drop-shadow-sm">Community Focus</h3>
      </div>
      <p className="text-api-cream font-medium text-base drop-shadow-sm">200+ community leaders trained in conflict resolution and reconciliation strategies</p>
    </div>
  );
};

export default CommunityFocusCard;
