
import React from "react";
import { Globe } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface RegionalImpactCardProps {
  isMobile: boolean;
}

const RegionalImpactCard = ({ isMobile }: RegionalImpactCardProps) => {
  return isMobile ? (
    <HoverCard>
      <HoverCardTrigger>
        <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-4 rounded-lg shadow-xl bg-gradient-to-br from-api-forestgreen/95 to-api-green/95 border border-api-sage/20 hover:border-api-sage/40">
          <div className="flex items-center mb-2">
            <Globe className="text-api-cream mr-2" size={18} aria-hidden="true" />
            <h3 className="text-api-cream font-semibold text-base">Regional Impact</h3>
          </div>
          <p className="text-api-cream font-medium text-sm">Cross-border dialogue in 5 countries</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="bg-gradient-to-br from-api-forestgreen/95 to-api-green/95 text-api-cream border-api-sage/30">
        Facilitating cross-border dialogue in 5 East African countries with expanding influence
      </HoverCardContent>
    </HoverCard>
  ) : (
    <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-6 rounded-lg shadow-xl bg-gradient-to-br from-api-forestgreen/95 to-api-green/95 border border-api-sage/20 hover:border-api-sage/40">
      <div className="flex items-center mb-3">
        <Globe className="text-api-cream mr-3" size={22} aria-hidden="true" />
        <h3 className="text-api-cream font-semibold text-lg drop-shadow-sm">Regional Impact</h3>
      </div>
      <p className="text-api-cream font-medium text-base drop-shadow-sm">Facilitating cross-border dialogue in 5 East African countries with expanding influence</p>
    </div>
  );
};

export default RegionalImpactCard;
