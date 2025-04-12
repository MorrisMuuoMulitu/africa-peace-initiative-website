
import React from "react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Share2, Download } from "lucide-react";

interface HighlightImage {
  image: string;
  title: string;
  description: string;
  date?: string;
  speaker?: string;
}

interface EventHighlightsGalleryProps {
  images: HighlightImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

const EventHighlightsGallery: React.FC<EventHighlightsGalleryProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const currentImage = images[currentIndex];
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentImage.title,
        text: currentImage.description,
        url: window.location.href.split('#')[0] + '#event-highlights'
      }).catch(err => console.warn("Share failed:", err));
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="relative flex-1 bg-black">
        {/* Main image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={currentImage.image} 
            alt={currentImage.title}
            className="max-h-[75vh] max-w-full object-contain"
            loading="eager"
          />
        </div>

        {/* Navigation arrows - larger, more visible targets */}
        <button 
          className="absolute top-1/2 left-2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
          onClick={() => onNavigate('prev')}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </button>
        
        <button 
          className="absolute top-1/2 right-2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
          onClick={() => onNavigate('next')}
          disabled={currentIndex === images.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </button>
      </div>

      {/* Image info panel */}
      <div className="bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Badge className="mb-2 bg-api-terracotta border-none text-white">
              {currentIndex + 1} of {images.length}
            </Badge>
            <h3 className="text-xl font-bold">{currentImage.title}</h3>
          </div>
          <div className="flex space-x-2">
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={handleShare}
              className="rounded-full"
              title="Share"
            >
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              title="Download"
              onClick={() => {
                const link = document.createElement('a');
                link.href = currentImage.image;
                link.download = `${currentImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="h-5 w-5" />
              <span className="sr-only">Download</span>
            </Button>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{currentImage.description}</p>
        
        {currentImage.speaker && (
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium">Speaker:</span> {currentImage.speaker}
          </div>
        )}
        
        {currentImage.date && (
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium">Date:</span> {currentImage.date}
          </div>
        )}
      </div>

      {/* Thumbnail navigation */}
      <div className="overflow-x-auto p-2 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 hidden md:block">
        <div className="flex space-x-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-api-terracotta ${
                idx === currentIndex ? 'ring-2 ring-api-terracotta' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => onNavigate(idx > currentIndex ? 'next' : 'prev')}
            >
              <img 
                src={image.image} 
                alt={`Thumbnail ${idx + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHighlightsGallery;
