
import React from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Download, Share2, X } from "lucide-react";
import { downloadImage, shareImage } from "@/utils/imageUtils";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  thumbSrc: string;
}

interface ImageGridProps {
  images: GalleryImage[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref} 
      className={`py-12 px-4 sm:px-6 bg-white transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map(image => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 ring-1 ring-gray-200">
                  <AspectRatio ratio={4 / 3} className="bg-gray-100">
                    <img 
                      src={image.thumbSrc} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      loading="lazy" 
                    />
                  </AspectRatio>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-1 sm:p-2 bg-black border-none">
                <button 
                  className="absolute right-2 top-2 z-10 bg-black/50 text-white p-1 rounded-full hover:bg-black" 
                  onClick={() => document.querySelector('[data-state="open"] [data-radix-collection-item]')?.dispatchEvent(
                    new MouseEvent('click', { bubbles: true })
                  )}
                >
                  <X size={20} />
                </button>
                <div className="relative w-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full max-h-[80vh] object-contain rounded" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white flex justify-between items-center">
                    <p className="text-sm sm:text-base">{image.alt}</p>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-white hover:bg-white/20" 
                        onClick={() => downloadImage(image.src, `regional-dialogue-${image.id}`)}
                      >
                        <Download size={18} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-white hover:bg-white/20" 
                        onClick={() => shareImage(image.src, image.alt)}
                      >
                        <Share2 size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
