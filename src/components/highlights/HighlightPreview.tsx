
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Image } from "lucide-react";
import { Highlight } from "@/data/eventHighlightsData";
import { Link } from "react-router-dom";

interface HighlightPreviewProps {
  highlight: Highlight;
  onClick: () => void;
  totalCount: number;
}

const HighlightPreview: React.FC<HighlightPreviewProps> = ({ 
  highlight, 
  onClick, 
  totalCount 
}) => {
  return (
    <Link to="/event-gallery">
      <Card 
        className="overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" 
        onClick={onClick}
      >
        <div className="relative">
          <AspectRatio ratio={16/9} className="bg-api-midnight/5">
            <img
              src={highlight.image}
              alt="Regional Dialogue Gallery Preview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 via-api-midnight/40 to-transparent flex flex-col justify-end p-6">
              <Badge className="self-start mb-3 bg-api-terracotta text-white border-none">
                View Gallery
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-api-cream mb-2 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-white/90 line-clamp-2 mb-4 max-w-lg">
                {highlight.description}
              </p>
              <div className="flex items-center gap-2 text-white bg-api-terracotta/90 px-4 py-2 rounded-full w-fit group-hover:bg-api-terracotta transition-colors duration-300">
                <Image size={18} />
                <span className="font-medium">View all {totalCount} photos in gallery</span>
                <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
              </div>
            </div>
          </AspectRatio>
        </div>
      </Card>
    </Link>
  );
};

export default HighlightPreview;
