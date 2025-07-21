
import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const heroImages = [
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486",
    alt: "Africa Peace Initiative team collaboration"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-03023.jpg?updatedAt=1751614266384",
    alt: "Community dialogue and peacebuilding session"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02388.jpg?updatedAt=1753126544654",
    alt: "Peace initiative workshop participants"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02706.jpg?updatedAt=1753126586183",
    alt: "Great Lakes region community gathering"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02914.jpg?updatedAt=1751614266284",
    alt: "Peacebuilding training and capacity development"
  }
];

const HeroImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
    setIsPlaying(!autoplay.isPlaying());
  }, [emblaApi]);

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
                    filter: selectedIndex === index ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.9) contrast(1.05)'
                  }}
                  loading={index <= 1 ? 'eager' : 'lazy'}
                />
                
                {/* Ken Burns Effect Overlay */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background: selectedIndex === index 
                      ? 'radial-gradient(circle at 30% 70%, rgba(249,115,22,0.3) 0%, transparent 50%)'
                      : 'transparent',
                    transition: 'all 1s ease-in-out'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="pointer-events-auto opacity-0 hover:opacity-100 transition-all duration-300 bg-black/20 hover:bg-black/40 border-white/20 text-white h-12 w-12 rounded-full backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="pointer-events-auto opacity-0 hover:opacity-100 transition-all duration-300 bg-black/20 hover:bg-black/40 border-white/20 text-white h-12 w-12 rounded-full backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Elegant Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
        <div className="flex space-x-2 p-2 rounded-full backdrop-blur-sm bg-black/20 border border-white/10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-500 ease-out rounded-full ${
                index === selectedIndex
                  ? 'w-8 h-2 bg-api-gold shadow-lg'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Autoplay Toggle (Mobile Hidden) */}
      <div className="absolute top-6 right-6 z-20 pointer-events-auto hidden md:block">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleAutoplay}
          className="opacity-60 hover:opacity-100 transition-all duration-300 bg-black/20 hover:bg-black/40 border-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
      </div>

      {/* Progressive Loading Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-5 pointer-events-none" />
    </div>
  );
};

export default HeroImageSlider;
