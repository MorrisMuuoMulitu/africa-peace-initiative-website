
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { useBreakpoint } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Download, Share2, X, ZoomIn } from "lucide-react";
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
  const [imageIndex, setImageIndex] = useState<number>(0);

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

  // Navigate between images in the dialog
  const navigateImage = (direction: 'next' | 'prev') => {
    const currentIndex = highlights.findIndex(h => h.image === activeImage);
    if (currentIndex === -1) return;
    
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % highlights.length 
      : (currentIndex - 1 + highlights.length) % highlights.length;
      
    setActiveImage(highlights[newIndex].image);
    setImageIndex(newIndex);
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

        {isMobile ? (
          // Enhanced Mobile version with improved image display
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
                  <CarouselItem key={index} className="pl-4 sm:pl-6 md:pl-8 basis-full md:basis-4/5">
                    <Dialog>
                      <DialogTrigger className="w-full text-left">
                        <Card className={`overflow-hidden border-none rounded-xl shadow-lg transition-all duration-500 ${
                          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}>
                          <CardContent className="p-0">
                            <div className="relative">
                              {/* Better mobile aspect ratio that preserves image integrity */}
                              <AspectRatio ratio={4/3} className="bg-black/5">
                                <img
                                  src={highlight.image}
                                  alt={highlight.title}
                                  className="w-full h-full object-contain bg-black/5"
                                  loading="lazy"
                                  width="600"
                                  height="450"
                                />
                              </AspectRatio>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                                <Badge 
                                  className="self-start mb-3 bg-api-terracotta border-none text-white font-medium backdrop-blur-sm"
                                >
                                  Topic {index + 1}
                                </Badge>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-md">
                                  {highlight.title}
                                </h3>
                                <p className="text-white/90 text-sm backdrop-blur-[2px] bg-black/10 p-2 rounded-lg shadow-inner">
                                  {highlight.description}
                                </p>
                                <div className="flex items-center mt-3">
                                  <ZoomIn size={18} className="text-white mr-2" />
                                  <span className="text-white/90 text-xs">Tap to view full image</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-api-midnight/95 border-none">
                        <div className="relative w-full h-full p-1">
                          {/* Image navigation controls */}
                          <button 
                            className="absolute left-2 top-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transform -translate-y-1/2 transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateImage('prev');
                            }}
                          >
                            <ChevronLeft size={24} />
                          </button>
                          
                          <button 
                            className="absolute right-2 top-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transform -translate-y-1/2 transition-all"
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
                          
                          <div className="flex items-center justify-center h-[75vh] bg-black/40 backdrop-blur-md">
                            <img
                              src={highlight.image}
                              alt={highlight.title}
                              className="max-w-full max-h-[70vh] object-contain rounded shadow-2xl"
                              loading="lazy"
                            />
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-xl font-bold text-white">
                                {highlight.title}
                              </h3>
                              <div className="flex gap-2">
                                <button 
                                  className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(highlight.image, highlight.title);
                                  }}
                                >
                                  <Download size={18} />
                                </button>
                                <button 
                                  className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShare(highlight.image, highlight.title);
                                  }}
                                >
                                  <Share2 size={18} />
                                </button>
                              </div>
                            </div>
                            <p className="text-white/90">
                              {highlight.description}
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
              <div className="flex items-center justify-center mt-8 gap-4">
                <CarouselPrevious className="relative static transform-none mx-1 bg-white hover:bg-api-cream border-api-terracotta text-api-terracotta h-10 w-10" />
                <div className="text-api-midnight/70 text-sm">
                  Swipe for more
                </div>
                <CarouselNext className="relative static transform-none mx-1 bg-white hover:bg-api-cream border-api-terracotta text-api-terracotta h-10 w-10" />
              </div>
            </Carousel>
          </div>
        ) : (
          // Enhanced Desktop version - Creative masonry-style grid
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {highlights.map((highlight, index) => (
              <Dialog key={index}>
                <DialogTrigger className="w-full h-full text-left">
                  <div 
                    className={`overflow-hidden border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    } ${
                      // Create masonry layout by spanning some items across 2 rows or columns
                      index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : 
                      index % 5 === 0 ? 'md:col-span-1 md:row-span-2' : 'md:col-span-1 md:row-span-1'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative w-full h-full group">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6 opacity-90 group-hover:opacity-100 transition-all duration-300">
                        <Badge 
                          className="self-start mb-2 bg-api-terracotta border-none text-white font-medium backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform duration-300"
                        >
                          Topic {index + 1}
                        </Badge>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-api-cream transition-colors duration-300">
                          {highlight.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          {highlight.description}
                        </p>
                        <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn size={16} className="text-white mr-2" />
                          <span className="text-white/90 text-xs">View details</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-5xl max-h-[95vh] overflow-hidden p-0 bg-api-midnight/95 border-none rounded-xl">
                  <div className="relative w-full h-full">
                    {/* Improved controls with better positioning and styling */}
                    <button 
                      className="absolute left-4 top-1/2 z-10 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transform -translate-y-1/2 transition-all hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImage('prev');
                      }}
                    >
                      <ChevronLeft size={28} />
                    </button>
                    
                    <button 
                      className="absolute right-4 top-1/2 z-10 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transform -translate-y-1/2 transition-all hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImage('next');
                      }}
                    >
                      <ChevronRight size={28} />
                    </button>
                    
                    <button 
                      className="absolute right-4 top-4 z-10 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all hover:rotate-90"
                      onClick={() => document.querySelector('[data-state="open"] [data-radix-collection-item]')?.dispatchEvent(
                        new MouseEvent('click', { bubbles: true })
                      )}
                    >
                      <X size={24} />
                    </button>
                    
                    {/* Improved image display area with dark backdrop */}
                    <div className="flex items-center justify-center h-[75vh] bg-black/60 backdrop-blur-md p-4">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="max-w-full max-h-[75vh] object-contain rounded-md shadow-2xl"
                        loading="eager" // Load immediately when dialog opens
                      />
                    </div>
                    
                    {/* Enhanced info panel with better visual hierarchy */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-black/60 backdrop-blur-sm">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <Badge className="mb-2 bg-api-terracotta/90 border-none text-white">
                            Topic {index + 1} of {highlights.length}
                          </Badge>
                          <h3 className="text-2xl font-bold text-white">
                            {highlight.title}
                          </h3>
                        </div>
                        <div className="flex gap-3">
                          <button 
                            className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full transition-colors flex items-center gap-2 hover:shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(highlight.image, highlight.title);
                            }}
                          >
                            <Download size={20} />
                            <span className="hidden sm:inline">Download</span>
                          </button>
                          <button 
                            className="bg-api-terracotta/80 hover:bg-api-terracotta text-white p-2 rounded-full transition-colors flex items-center gap-2 hover:shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(highlight.image, highlight.title);
                            }}
                          >
                            <Share2 size={20} />
                            <span className="hidden sm:inline">Share</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-white/90 text-base leading-relaxed max-w-3xl">
                        {highlight.description}
                      </p>
                      <div className="text-white/70 text-sm mt-3">
                        March 27, 2023 • Regional Dialogue on Eastern Congo
                      </div>
                      
                      {/* Thumbnail navigation - improved style */}
                      <div className="hidden md:flex overflow-x-auto gap-3 mt-5 pb-2 px-1">
                        {highlights.map((thumb, idx) => (
                          <div 
                            key={idx}
                            className={`relative cursor-pointer flex-shrink-0 w-20 h-14 rounded-md overflow-hidden 
                              ${idx === index ? 'ring-2 ring-api-terracotta scale-110 z-10' : 
                              'opacity-60 hover:opacity-100 hover:scale-105'} transition-all duration-300`}
                            onClick={(e) => {
                              e.stopPropagation(); 
                              setActiveImage(thumb.image);
                              setImageIndex(idx);
                            }}
                          >
                            <img 
                              src={thumb.image} 
                              alt={`Thumbnail ${idx+1}`} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {idx === index && (
                              <div className="absolute inset-0 bg-api-terracotta/20 backdrop-blur-[1px]"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventHighlights;
