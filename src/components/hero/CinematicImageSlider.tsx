
import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const cinematicHeroImages = [
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486",
    alt: "Africa Peace Initiative team collaboration - Building bridges for lasting peace",
    focus: "center center",
    story: "Collaborative Leadership"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-03023.jpg?updatedAt=1751614266384",
    alt: "Community dialogue and peacebuilding session - Voices of change",
    focus: "center top",
    story: "Community Dialogue"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02388.jpg?updatedAt=1753126544654",
    alt: "Peace initiative workshop participants - Empowering local voices",
    focus: "center center",
    story: "Capacity Building"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02706.jpg?updatedAt=1753126586183",
    alt: "Great Lakes region community gathering - Unity in diversity",
    focus: "center bottom",
    story: "Regional Unity"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02914.jpg?updatedAt=1751614266284",
    alt: "Peacebuilding training and capacity development - Skills for peace",
    focus: "center center",
    story: "Peace Training"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02984.jpg?updatedAt=1753127515108",
    alt: "Community empowerment and leadership development - Future leaders",
    focus: "center center",
    story: "Youth Leadership"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-03009.jpg?updatedAt=1753127520218",
    alt: "Regional peace building collaborative efforts - Cross-border cooperation",
    focus: "center top",
    story: "Regional Cooperation"
  },
  {
    url: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02966.jpg?updatedAt=1753127521563",
    alt: "Youth engagement in peace processes - The next generation of peacemakers",
    focus: "center center",
    story: "Next Generation"
  }
];

const CinematicImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 50,
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

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
      {/* Cinematic Letterbox Effect */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent z-30 pointer-events-none" />
      
      {/* Main Slider */}
      <div 
        className="embla h-full" 
        ref={emblaRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="embla__container h-full flex">
          {cinematicHeroImages.map((image, index) => (
            <div 
              key={index} 
              className="embla__slide flex-none w-full h-full relative overflow-hidden"
            >
              <div className="relative w-full h-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-3000 ease-out"
                  style={{
                    transform: selectedIndex === index 
                      ? 'scale(1.15)' 
                      : 'scale(1.05)',
                    filter: selectedIndex === index 
                      ? 'brightness(1.2) contrast(1.3) saturate(1.15)' 
                      : 'brightness(0.8) contrast(1.1) saturate(0.9)',
                    objectPosition: image.focus
                  }}
                  loading={index <= 2 ? 'eager' : 'lazy'}
                />
                
                {/* Ken Burns Effect Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-all duration-3000"
                  style={{
                    background: selectedIndex === index 
                      ? `
                        radial-gradient(circle at 30% 70%, rgba(249,115,22,0.3) 0%, transparent 50%),
                        radial-gradient(circle at 70% 30%, rgba(59,130,246,0.2) 0%, transparent 60%),
                        linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(249,115,22,0.1) 80%, transparent 100%)
                      `
                      : 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
                    opacity: selectedIndex === index ? 0.9 : 0.8
                  }}
                />
                
                {/* Floating Story Label */}
                {selectedIndex === index && (
                  <div className="absolute top-8 right-8 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full border border-white/20 animate-fade-in">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-api-gold" />
                      <span className="text-white font-inter text-sm font-medium">{image.story}</span>
                    </div>
                  </div>
                )}
                
                {/* Dynamic Particles */}
                {selectedIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-api-gold/60 rounded-full animate-float"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${30 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${4 + (i % 3)}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Navigation Controls */}
      <div className={`absolute inset-0 flex items-center justify-between px-6 md:px-12 pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="pointer-events-auto bg-black/30 hover:bg-black/50 border border-white/20 text-white h-14 w-14 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-7 w-7" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="pointer-events-auto bg-black/30 hover:bg-black/50 border border-white/20 text-white h-14 w-14 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="h-7 w-7" />
        </Button>
      </div>

      {/* Cinematic Progress Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-auto">
        <div className="flex items-center space-x-3 p-4 rounded-2xl backdrop-blur-md bg-black/30 border border-white/20">
          {cinematicHeroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-700 ease-out rounded-full relative overflow-hidden ${
                index === selectedIndex
                  ? 'w-12 h-3 bg-api-gold shadow-lg shadow-api-gold/50'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
              }`}
              aria-label={`Go to image ${index + 1}: ${cinematicHeroImages[index].story}`}
            >
              {index === selectedIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-api-gold animate-shimmer" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Autoplay Control */}
      <div className="absolute top-8 right-8 z-40 pointer-events-auto hidden md:block">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleAutoplay}
          className="backdrop-blur-md bg-black/30 hover:bg-black/50 border border-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-2">
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="font-inter text-sm">{isPlaying ? 'Pause' : 'Play'}</span>
          </div>
        </Button>
      </div>

      {/* Ultimate Progressive Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-all duration-3000"
        style={{
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.9) 100%),
            radial-gradient(ellipse at 20% 80%, rgba(249,115,22,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 60%)
          `
        }}
      />
      
      {/* African-Inspired Geometric Overlays */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/8 w-40 h-40 border-2 border-api-gold/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 border border-white/20 rotate-12 animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-api-gold/25 -rotate-12 animate-bounce-slow" />
        
        {/* African Pattern Elements */}
        <div className="absolute top-1/3 left-1/3 w-24 h-24 opacity-40">
          <div className="w-full h-full border-2 border-api-gold/40 rounded-full animate-ping" 
               style={{ animationDuration: '4s' }} />
          <div className="absolute inset-4 border border-white/30 rounded-full animate-ping" 
               style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute inset-8 border border-api-gold/50 rounded-full animate-ping" 
               style={{ animationDuration: '3s', animationDelay: '2s' }} />
        </div>
      </div>
    </div>
  );
};

export default CinematicImageSlider;
