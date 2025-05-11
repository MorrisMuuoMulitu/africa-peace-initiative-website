
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryImage } from "@/lib/gallery-utils";
import { Camera, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryMasonryProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage, index: number) => void;
  selectedCategory?: string;
}

const GalleryMasonry: React.FC<GalleryMasonryProps> = ({
  images,
  onImageClick,
  selectedCategory,
}) => {
  // Filter out any images without valid URLs first
  const validImages = images.filter(img => img.src && (img.src.startsWith('http') || img.src.startsWith('/')));
  
  // Then apply category filter if needed
  const filteredImages = selectedCategory && selectedCategory !== "all"
    ? validImages.filter(img => img.category === selectedCategory)
    : validImages;

  return (
    <div className="w-full">
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`cursor-pointer group overflow-hidden rounded-xl shadow-md hover:shadow-xl 
                  ${index % 5 === 0 ? 'sm:col-span-2 md:row-span-2' : ''}
                  ${index % 11 === 6 ? 'md:col-span-2' : ''}
                  transition-all duration-300 transform hover:scale-[1.02] 
                  bg-white border border-gray-100 h-fit`}
                onClick={() => onImageClick(image, index)}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <AspectRatio 
                  ratio={index % 5 === 0 ? 16/9 : 4/3} 
                  className="overflow-hidden bg-gray-100"
                >
                  <img
                    src={image.thumbSrc || image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium line-clamp-2">{image.alt}</p>
                  </div>
                </AspectRatio>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border border-gray-100">
              <Camera className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">No images in this category</h3>
              <p className="text-gray-400 mt-2">Try selecting a different category</p>
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default GalleryMasonry;
