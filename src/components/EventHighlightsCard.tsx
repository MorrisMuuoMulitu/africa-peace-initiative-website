
import React from "react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface HighlightImage {
  image: string;
  title: string;
  description: string;
  date?: string;
  speaker?: string;
}

interface EventHighlightsCardProps {
  highlight: HighlightImage;
  index: number;
  inView: boolean;
  onOpenGallery: () => void;
}

const EventHighlightsCard: React.FC<EventHighlightsCardProps> = ({
  highlight,
  index,
  inView,
  onOpenGallery
}) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full text-left" onClick={onOpenGallery}>
        <Card
          className={`overflow-hidden border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-0">
            <div className="relative">
              <AspectRatio ratio={16/9}>
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="338"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <Badge 
                  className="self-start mb-3 bg-api-terracotta border-none text-white font-medium"
                >
                  Topic {index + 1}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-white/90 text-sm line-clamp-2">
                  {highlight.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
    </Dialog>
  );
};

export default EventHighlightsCard;
