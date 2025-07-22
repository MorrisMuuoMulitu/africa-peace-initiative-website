
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

const HeroImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 40,
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
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
                  className="w-full h-full object-cover transition-all duration-2000 ease-out"
                  style={{
                    transform: selectedIndex === index 
                      ? 'scale(1.08) rotate(0.5deg)' 
                      : 'scale(1.02) rotate(-0.2deg)',
                    filter: selectedIndex === index 
                      ? 'brightness(1.15) contrast(1.2) saturate(1.1)' 
                      : 'brightness(0.85) contrast(1.05) saturate(0.9)',
                    objectPosition: image.focus
                  }}
                  loading={index <= 2 ? 'eager' : 'lazy'}
                />
                
                {/* Dynamic Light Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: selectedIndex === index 
                      ? `
                        radial-gradient(circle at 20% 80%, rgba(249,115,22,0.4) 0%, transparent 40%),
                        radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 50%),
                        linear-gradient(45deg, rgba(249,115,22,0.1) 0%, transparent 30%, rgba(59,130,246,0.1) 70%, transparent 100%)
                      `
                      : 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)',
                    opacity: selectedIndex === index ? 0.8 : 0.6,
                    transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                
                {/* Animated Particles */}
                {selectedIndex === index && (
                  <>
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-api-gold/60 rounded-full animate-pulse" 
                         style={{ animationDelay: '0s', animationDuration: '3s' }} />
                    <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" 
                         style={{ animationDelay: '1s', animationDuration: '4s' }} />
                    <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-api-gold/40 rounded-full animate-pulse" 
                         style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                  </>
                )}
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

      {/* Dynamic Progressive Overlay */}
      <div 
        className="absolute inset-0 z-5 pointer-events-none transition-all duration-2000"
        style={{
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.8) 100%),
            radial-gradient(ellipse at center top, rgba(249,115,22,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at center bottom, rgba(59,130,246,0.1) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-6 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-api-gold/20 rotate-45 animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 border border-white/10 rotate-12 animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-api-gold/15 -rotate-12 animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default HeroImageSlider;
