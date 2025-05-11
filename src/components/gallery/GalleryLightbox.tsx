
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GalleryImage } from '@/lib/gallery-utils';
import { ChevronLeft, ChevronRight, Download, Share2, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { downloadImage, shareImage } from '@/utils/imageUtils';

interface GalleryLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: GalleryImage[];
  initialIndex: number;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  open,
  onOpenChange,
  images,
  initialIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, open]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onOpenChange(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!currentImage) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl md:max-w-6xl max-h-[95vh] p-0 bg-black/95 backdrop-blur-md border-none rounded-xl">
        <div className="relative w-full h-full flex flex-col">
          {/* Top Controls */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Badge className="bg-api-terracotta/90 border-none">
                {currentIndex + 1} / {images.length}
              </Badge>
              <h3 className="font-semibold text-white hidden sm:block line-clamp-1">
                {currentImage.alt}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-api-terracotta/20 hidden sm:flex"
                onClick={() => downloadImage(currentImage.src, `regional-dialogue-${currentImage.id}`)}
              >
                <Download size={18} className="mr-1" />
                Download
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-api-terracotta/20 hidden sm:flex"
                onClick={() => shareImage(currentImage.src, currentImage.alt)}
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

          {/* Main Image Display */}
          <div className="flex-1 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-[65vh] object-contain rounded transition-opacity duration-300"
                key={`lightbox-${currentIndex}`}
              />
            </div>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 z-10 bg-black/50 hover:bg-api-terracotta text-white p-3 rounded-full transform -translate-y-1/2 transition-all"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 z-10 bg-black/50 hover:bg-api-terracotta text-white p-3 rounded-full transform -translate-y-1/2 transition-all"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Caption and Info */}
          <div className="p-4 md:p-6 bg-black border-t border-white/10">
            <h3 className="text-xl font-bold text-white sm:hidden mb-2 line-clamp-1">
              {currentImage.alt}
            </h3>
            <p className="text-white/90 text-sm md:text-base mb-4">
              {currentImage.caption || currentImage.alt}
            </p>
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-white/70 text-xs md:text-sm mb-3 md:mb-0">
                March 27, 2025 • Regional Dialogue on Eastern Congo
              </div>
              <div className="flex items-center gap-2 sm:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white/20 hover:bg-api-terracotta/20"
                  onClick={() => downloadImage(currentImage.src, `regional-dialogue-${currentImage.id}`)}
                >
                  <Download size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white/20 hover:bg-api-terracotta/20"
                  onClick={() => shareImage(currentImage.src, currentImage.alt)}
                >
                  <Share2 size={16} />
                </Button>
              </div>
            </div>

            {/* Thumbnails Navigation - Only on larger screens */}
            <div className="hidden md:flex overflow-x-auto gap-2 mt-4 pb-1 -mx-6 px-6">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className={`relative cursor-pointer flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden 
                    ${idx === currentIndex ? 'ring-2 ring-api-terracotta scale-105 z-10' : 
                    'opacity-50 hover:opacity-80'} transition-all duration-300`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <img
                    src={image.thumbSrc || image.src}
                    alt={`Thumbnail ${idx+1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile Dots Navigation */}
            <div className="flex md:hidden justify-center mt-4 gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "w-6 bg-api-terracotta" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;
