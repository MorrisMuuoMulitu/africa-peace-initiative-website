
import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const heroImages = [
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486",
    alt: "Africa Peace Initiative team collaboration",
    focus: "center center"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-03023.jpg?updatedAt=1751614266384",
    alt: "Community dialogue and peacebuilding session",
    focus: "center top"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02388.jpg?updatedAt=1753126544654",
    alt: "Peace initiative workshop participants",
    focus: "center center"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02706.jpg?updatedAt=1753126586183",
    alt: "Great Lakes region community gathering",
    focus: "center bottom"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02914.jpg?updatedAt=1751614266284",
    alt: "Peacebuilding training and capacity development",
    focus: "center center"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02984.jpg?updatedAt=1753127515108",
    alt: "Community empowerment and leadership development",
    focus: "center center"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-03009.jpg?updatedAt=1753127520218",
    alt: "Regional peace building collaborative efforts",
    focus: "center top"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02966.jpg?updatedAt=1753127521563",
    alt: "Youth engagement in peace processes",
    focus: "center center"
  }
];

const CleanImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Slider */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {heroImages.map((image, index) => (
            <div 
              key={index} 
              className="embla__slide flex-none w-full h-full relative"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out"
                  style={{
                    transform: selectedIndex === index ? 'scale(1.05)' : 'scale(1)',
                    filter: selectedIndex === index 
                      ? 'brightness(1.1) contrast(1.1) saturate(1.05)' 
                      : 'brightness(0.9) contrast(1) saturate(0.95)',
                    objectPosition: image.focus
                  }}
                  loading={index <= 2 ? 'eager' : 'lazy'}
                />
                
                {/* Clean Overlay for Text Readability */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.2) 100%)',
                    opacity: 0.6
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="pointer-events-auto opacity-0 hover:opacity-100 transition-all duration-300 bg-black/15 hover:bg-black/25 border-white/10 text-white h-10 w-10 rounded-full backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="pointer-events-auto opacity-0 hover:opacity-100 transition-all duration-300 bg-black/15 hover:bg-black/25 border-white/10 text-white h-10 w-10 rounded-full backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Clean Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
        <div className="flex space-x-2 p-2 rounded-full backdrop-blur-sm bg-black/15 border border-white/10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? 'w-6 h-2 bg-teal-400'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleanImageSlider;
