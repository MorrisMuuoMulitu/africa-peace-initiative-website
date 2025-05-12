
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronLeft, ChevronRight, Download, Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Highlight } from "@/data/eventHighlightsData";

interface HighlightGalleryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  highlights: Highlight[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  handleDownload: (imageUrl: string, title: string) => void;
  handleShare: (imageUrl: string, title: string) => void;
  navigateSlide: (direction: 'next' | 'prev') => void;
}

const HighlightGalleryDialog: React.FC<HighlightGalleryDialogProps> = ({
  isOpen,
  onOpenChange,
  highlights,
  currentSlide,
  setCurrentSlide,
  handleDownload,
  handleShare,
  navigateSlide
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl md:max-w-6xl max-h-[95vh] p-0 bg-api-midnight/95 backdrop-blur-md border-none rounded-xl">
        <VisuallyHidden>
          Regional Dialogue Gallery - {highlights[currentSlide].title}
        </VisuallyHidden>
        <VisuallyHidden>
          Gallery of images from the Regional Dialogue on Eastern Congo
        </VisuallyHidden>
        
        <div className="relative w-full h-full flex flex-col">
          {/* Top Controls */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-api-midnight">
            <div className="flex items-center gap-3">
              <Badge className="bg-api-terracotta/90 border-none">
                {currentSlide + 1} / {highlights.length}
              </Badge>
              <h3 className="font-semibold text-white">
                {highlights[currentSlide].title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white/80 hover:text-white hover:bg-api-terracotta/20 hidden sm:flex"
                onClick={() => handleDownload(highlights[currentSlide].image, highlights[currentSlide].title)}
              >
                <Download size={18} className="mr-1" />
                Download
              </Button>
              <Button 
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-api-terracotta/20 hidden sm:flex"
                onClick={() => handleShare(highlights[currentSlide].image, highlights[currentSlide].title)}
              >
                <Share2 size={18} className="mr-1" />
                Share
              </Button>
              <Button 
                variant="ghost"
                size="icon"
                className="rounded-full text-white/80 hover:text-white hover:bg-api-terracotta/20"
                onClick={() => onOpenChange(false)}
              >
                <X size={20} />
              </Button>
            </div>
          </div>

          {/* Main Image Display - Updated to show full image */}
          <div className="flex-1 relative overflow-auto flex items-center justify-center">
            <img
              src={highlights[currentSlide].image}
              alt={highlights[currentSlide].title}
              className="max-w-full max-h-full object-contain transition-opacity duration-300"
              key={currentSlide}
              style={{ width: "auto", height: "auto" }}
            />

            {/* Navigation buttons */}
            <button 
              className="absolute left-4 top-1/2 z-10 bg-api-midnight/50 hover:bg-api-terracotta text-white p-3 rounded-full transform -translate-y-1/2 transition-all"
              onClick={() => navigateSlide('prev')}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 top-1/2 z-10 bg-api-midnight/50 hover:bg-api-terracotta text-white p-3 rounded-full transform -translate-y-1/2 transition-all"
              onClick={() => navigateSlide('next')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Mobile Controls */}
          <div className="p-4 bg-api-midnight border-t border-white/10 md:hidden">
            <div className="flex items-center justify-between">
              <div className="text-white/70 text-xs">
                March 27, 2025 • Regional Dialogue
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-white border-white/20 hover:bg-api-terracotta/20 h-8 w-8 p-0"
                  onClick={() => handleDownload(highlights[currentSlide].image, highlights[currentSlide].title)}
                >
                  <Download size={16} />
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="text-white border-white/20 hover:bg-api-terracotta/20 h-8 w-8 p-0"
                  onClick={() => handleShare(highlights[currentSlide].image, highlights[currentSlide].title)}
                >
                  <Share2 size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Thumbnails Navigation - Only on larger screens */}
          <div className="hidden md:flex overflow-x-auto gap-2 p-4 bg-api-midnight border-t border-white/10">
            {highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className={`relative cursor-pointer flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden 
                  ${idx === currentSlide ? 'ring-2 ring-api-terracotta scale-105 z-10' : 
                  'opacity-50 hover:opacity-80'} transition-all duration-300`}
                onClick={() => setCurrentSlide(idx)}
              >
                <img 
                  src={highlight.image} 
                  alt={`Topic ${idx+1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Dots Navigation */}
          <div className="flex md:hidden justify-center p-2 bg-api-midnight">
            {highlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  idx === currentSlide ? "w-6 bg-api-terracotta" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HighlightGalleryDialog;
