
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { useBreakpoint } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Download, Share2, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useBreakpoint("md");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const highlights = [
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/1.jpeg?updatedAt=1744466094011",
      title: "Regional Security Cooperation",
      description: "Discussion on cross-border security frameworks and joint operations to stabilize the Eastern DRC region."
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/2.jpeg?updatedAt=1744466096764",
      title: "Peace Process Mediation",
      description: "Exploring diplomatic channels and multi-stakeholder engagement for sustainable peace negotiations."
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/3.jpeg?updatedAt=1744466097353",
      title: "Community-Based Solutions",
      description: "Grassroots approaches to conflict resolution and the role of local communities in peacebuilding."
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/6.jpeg?updatedAt=1744466097577",
      title: "Governance & Accountability",
      description: "Strengthening governance systems and promoting accountability in conflict-affected regions."
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/5.jpeg?updatedAt=1744466097581",
      title: "Resource Management",
      description: "Equitable distribution and sustainable management of natural resources to prevent conflict."
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/4.jpeg?updatedAt=1744466095905",
      title: "Youth & Gender Inclusion",
      description: "Empowering women and youth to participate in peace processes and post-conflict reconstruction."
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/7.jpeg?updatedAt=1744466095793",
      title: "Humanitarian Response",
      description: "Addressing the humanitarian crisis and supporting displaced communities in the Eastern DRC."
    }
  ];

  // Handle image download
  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `Africa-Peace-Initiative-${title.replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle image sharing
  const handleShare = async (imageUrl: string, title: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Africa Peace Initiative - ${title}`,
          text: `Check out this image from Africa Peace Initiative: ${title}`,
          url: imageUrl,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(imageUrl);
      alert('Image URL copied to clipboard!');
    }
  };

  // Open image in full view and set active index
  const openImage = (index: number) => {
    setActiveImage(highlights[index].image);
    setActiveIndex(index);
  };

  // Navigate between images in the dialog
  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
    }
  };

  return (
    <div
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-api-sage/10 to-api-cream/20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="event-highlights"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="w-20 h-1.5 bg-gradient-to-r from-api-terracotta to-api-gold mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Key Discussion Highlights
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Critical topics addressed during our March 27th Regional Dialogue on Eastern Congo
          </p>
        </div>

        {/* Mobile Display - Enhanced Carousel */}
        {isMobile && (
          <div className="mt-8">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {highlights.map((highlight, index) => (
                  <CarouselItem key={index} className="px-2 sm:px-4 basis-full sm:basis-3/4">
                    <Dialog>
                      <DialogTrigger className="w-full text-left">
                        <Card className={`overflow-hidden border border-api-cream/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}>
                          <div className="relative">
                            <AspectRatio ratio={1/1} className="bg-black/5">
                              <img
                                src={highlight.image}
                                alt={highlight.title}
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                            </AspectRatio>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5">
                              <Badge 
                                className="self-start mb-2 bg-api-terracotta/95 border-none text-white font-medium backdrop-blur-sm"
                              >
                                Topic {index + 1}
                              </Badge>
                              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">
                                {highlight.title}
                              </h3>
                              <p className="text-white/90 text-sm line-clamp-2 backdrop-blur-[1px]">
                                {highlight.description}
                              </p>
                              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
                                <span className="text-white/80 text-xs flex items-center gap-1">
                                  <span className="h-1.5 w-1.5 bg-api-terracotta rounded-full animate-pulse"></span>
                                  Tap for details
                                </span>
                                <span className="text-white/80 text-xs">March 27, 2023</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-full max-h-[95vh] sm:max-w-3xl overflow-hidden p-0 bg-black/95 border-none">
                        <div className="relative w-full h-full">
                          <button 
                            className="absolute left-2 top-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transform -translate-y-1/2"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateImage('prev');
                            }}
                          >
                            <ChevronLeft size={24} />
                          </button>
                          
                          <button 
                            className="absolute right-2 top-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transform -translate-y-1/2"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateImage('next');
                            }}
                          >
                            <ChevronRight size={24} />
                          </button>
                          
                          <button 
                            className="absolute right-2 top-2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
                            onClick={() => document.querySelector('[data-state="open"] [data-radix-collection-item]')?.dispatchEvent(
                              new MouseEvent('click', { bubbles: true })
                            )}
                          >
                            <X size={20} />
                          </button>
                          
                          <div className="flex items-center justify-center h-[70vh] bg-black/90">
                            <img
                              src={highlights[activeIndex].image}
                              alt={highlights[activeIndex].title}
                              className="max-h-[70vh] max-w-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 to-transparent">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-xl font-bold text-white">
                                {highlights[activeIndex].title}
                              </h3>
                              <div className="flex gap-2">
                                <button 
                                  className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(highlights[activeIndex].image, highlights[activeIndex].title);
                                  }}
                                >
                                  <Download size={18} />
                                </button>
                                <button 
                                  className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShare(highlights[activeIndex].image, highlights[activeIndex].title);
                                  }}
                                >
                                  <Share2 size={18} />
                                </button>
                              </div>
                            </div>
                            <p className="text-white/90">
                              {highlights[activeIndex].description}
                            </p>
                            <div className="text-white/70 text-xs mt-2">
                              March 27, 2023 • Regional Dialogue on Eastern Congo
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-6 gap-2">
                <CarouselPrevious className="relative static transform-none mx-0 bg-api-cream hover:bg-api-terracotta hover:text-white border-api-terracotta text-api-terracotta h-8 w-8" />
                <div className="flex space-x-1">
                  {highlights.map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeIndex ? "w-8 bg-api-terracotta" : "w-2 bg-api-terracotta/40"
                      }`}
                      onClick={() => openImage(idx)}
                    />
                  ))}
                </div>
                <CarouselNext className="relative static transform-none mx-0 bg-api-cream hover:bg-api-terracotta hover:text-white border-api-terracotta text-api-terracotta h-8 w-8" />
              </div>
            </Carousel>
          </div>
        )}

        {/* Desktop Display - Interactive Grid Gallery */}
        {!isMobile && (
          <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
            {highlights.map((highlight, index) => {
              const spans = [
                "col-span-6 row-span-2", // 1st item - large
                "col-span-3 row-span-1", // 2nd item - small
                "col-span-3 row-span-1", // 3rd item - small
                "col-span-3 row-span-2", // 4th item - medium tall
                "col-span-3 row-span-1", // 5th item - small
                "col-span-3 row-span-1", // 6th item - small
                "col-span-6 row-span-1", // 7th item - medium wide
              ];
              
              return (
                <Dialog key={index}>
                  <DialogTrigger className="w-full h-full">
                    <div 
                      className={`${spans[index]} group overflow-hidden rounded-xl relative cursor-pointer transition-all duration-500 shadow-md hover:shadow-xl ${
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      onClick={() => openImage(index)}
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={highlight.image} 
                          alt={highlight.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                          <Badge 
                            className="w-fit mb-2 bg-api-terracotta/95 text-white font-medium transform transition-all duration-300 group-hover:-translate-y-1"
                          >
                            Topic {index + 1}
                          </Badge>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-api-cream transition-colors">
                            {highlight.title}
                          </h3>
                          <p className="text-white/90 text-xs md:text-sm line-clamp-2 group-hover:line-clamp-none transform transition-all opacity-80 group-hover:opacity-100">
                            {highlight.description}
                          </p>
                          
                          <div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white/80 text-xs">March 27, 2023</span>
                            <div className="flex items-center gap-2 text-white/90 text-xs">
                              <span className="h-1.5 w-1.5 bg-api-terracotta rounded-full animate-pulse"></span>
                              Click for details
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-full sm:max-w-5xl max-h-[95vh] overflow-hidden p-0 bg-black/95 border-none rounded-xl">
                    <div className="relative w-full h-full">
                      <button 
                        className="absolute left-4 top-1/2 z-10 bg-black/30 hover:bg-api-terracotta/80 text-white p-3 rounded-full transform -translate-y-1/2 transition-all hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage('prev');
                        }}
                      >
                        <ChevronLeft size={28} />
                      </button>
                      
                      <button 
                        className="absolute right-4 top-1/2 z-10 bg-black/30 hover:bg-api-terracotta/80 text-white p-3 rounded-full transform -translate-y-1/2 transition-all hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage('next');
                        }}
                      >
                        <ChevronRight size={28} />
                      </button>
                      
                      <button 
                        className="absolute right-4 top-4 z-10 bg-black/30 hover:bg-api-terracotta/80 text-white p-2 rounded-full transition-all"
                        onClick={() => document.querySelector('[data-state="open"] [data-radix-collection-item]')?.dispatchEvent(
                          new MouseEvent('click', { bubbles: true })
                        )}
                      >
                        <X size={24} />
                      </button>
                      
                      <div className="flex items-center justify-center h-[75vh] bg-black/80 backdrop-blur-md">
                        <img
                          src={highlights[activeIndex].image}
                          alt={highlights[activeIndex].title}
                          className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
                          loading="eager"
                        />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-black/60 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <Badge className="mb-2 bg-api-terracotta/90 border-none text-white">
                              Topic {activeIndex + 1} of {highlights.length}
                            </Badge>
                            <h3 className="text-2xl font-bold text-white">
                              {highlights[activeIndex].title}
                            </h3>
                          </div>
                          <div className="flex gap-3">
                            <button 
                              className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full transition-colors flex items-center gap-2 hover:shadow-lg"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownload(highlights[activeIndex].image, highlights[activeIndex].title);
                              }}
                            >
                              <Download size={20} />
                              <span className="hidden sm:inline">Download</span>
                            </button>
                            <button 
                              className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full transition-colors flex items-center gap-2 hover:shadow-lg"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleShare(highlights[activeIndex].image, highlights[activeIndex].title);
                              }}
                            >
                              <Share2 size={20} />
                              <span className="hidden sm:inline">Share</span>
                            </button>
                          </div>
                        </div>
                        <p className="text-white/90 text-base leading-relaxed max-w-3xl">
                          {highlights[activeIndex].description}
                        </p>
                        <div className="text-white/70 text-sm mt-3">
                          March 27, 2023 • Regional Dialogue on Eastern Congo
                        </div>
                        
                        {/* Thumbnail navigation */}
                        <div className="flex overflow-x-auto gap-2 mt-4 pb-2">
                          {highlights.map((thumb, idx) => (
                            <div 
                              key={idx}
                              className={`relative cursor-pointer flex-shrink-0 w-16 h-12 rounded overflow-hidden 
                                ${idx === activeIndex ? 'ring-2 ring-api-terracotta scale-110 z-10' : 
                                'opacity-60 hover:opacity-90'} transition-all duration-300`}
                              onClick={(e) => {
                                e.stopPropagation(); 
                                openImage(idx);
                              }}
                            >
                              <img 
                                src={thumb.image} 
                                alt={`Thumbnail ${idx+1}`} 
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventHighlights;
