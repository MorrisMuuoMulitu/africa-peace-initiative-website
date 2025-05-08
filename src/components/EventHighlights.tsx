
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBreakpoint } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Download, Share2, X, Image, ArrowRight } from "lucide-react";

const EventHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useBreakpoint("md");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

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

  // Navigate slides in gallery view
  const navigateSlide = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
    }
  };

  // Jump to a specific slide
  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle opening the gallery modal
  const openGallery = (index: number = 0) => {
    setCurrentSlide(index);
    setIsGalleryOpen(true);
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
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto mb-6">
            Critical topics addressed during our March 27th Regional Dialogue on Eastern Congo
          </p>
          
          {/* Preview Card */}
          <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
            <DialogTrigger asChild>
              <div className="mx-auto max-w-md md:max-w-lg relative cursor-pointer group hover:scale-[1.02] transition-all duration-300" onClick={() => openGallery()}>
                <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-api-terracotta/30">
                  <AspectRatio ratio={16/9} className="bg-api-midnight/5">
                    <img 
                      src={highlights[0].image} 
                      alt="Gallery Preview"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/90 via-api-midnight/50 to-transparent flex flex-col justify-end p-5">
                      <div className="flex items-center justify-center mb-4">
                        <Badge className="bg-api-terracotta/90 text-white border-none">
                          View Gallery
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/90 font-medium text-sm md:text-base">
                          7 Discussion Topics
                        </span>
                        <div className="flex items-center gap-2 text-white/90 bg-api-terracotta/80 px-3 py-1.5 rounded-full text-sm">
                          <Image size={16} />
                          <span>View all</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Image Thumbnails Overlay */}
                    <div className="absolute top-0 left-0 right-0 p-4 flex gap-1 overflow-hidden">
                      {highlights.slice(0, 5).map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${idx === 0 ? 'bg-api-terracotta' : 'bg-white/70'}`}
                        />
                      ))}
                      <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-white/70 flex items-center justify-center text-[8px] text-api-midnight">
                        +{highlights.length - 5}
                      </div>
                    </div>
                  </AspectRatio>
                </div>
                <div className="mt-4 text-api-midnight text-center">
                  <span className="text-api-terracotta/90 text-sm font-medium">Click to explore</span> all discussion topics from the Regional Dialogue
                </div>
              </div>
            </DialogTrigger>

            {/* Fullscreen Gallery Dialog */}
            <DialogContent className="max-w-[95vw] sm:max-w-4xl md:max-w-6xl max-h-[95vh] p-0 bg-api-midnight/95 backdrop-blur-md border-none rounded-xl">
              <div className="relative w-full h-full flex flex-col">
                {/* Top Controls */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-api-midnight">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-api-terracotta/90 border-none">
                      {currentSlide + 1} / {highlights.length}
                    </Badge>
                    <h3 className="font-semibold text-white hidden sm:block">
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
                      onClick={() => setIsGalleryOpen(false)}
                    >
                      <X size={20} />
                    </Button>
                  </div>
                </div>

                {/* Main Image Display */}
                <div className="flex-1 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={highlights[currentSlide].image}
                      alt={highlights[currentSlide].title}
                      className="max-w-full max-h-[65vh] object-contain rounded transition-opacity duration-300"
                      key={currentSlide}
                    />
                  </div>

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
                
                {/* Caption and Info */}
                <div className="p-4 md:p-6 bg-api-midnight border-t border-white/10">
                  <h3 className="text-xl font-bold text-white sm:hidden mb-2">
                    {highlights[currentSlide].title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mb-4">
                    {highlights[currentSlide].description}
                  </p>
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="text-white/70 text-xs md:text-sm mb-3 md:mb-0">
                      March 27, 2023 • Regional Dialogue on Eastern Congo
                    </div>
                    <div className="flex items-center gap-2 sm:hidden">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-white border-white/20 hover:bg-api-terracotta/20"
                        onClick={() => handleDownload(highlights[currentSlide].image, highlights[currentSlide].title)}
                      >
                        <Download size={16} />
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="text-white border-white/20 hover:bg-api-terracotta/20"
                        onClick={() => handleShare(highlights[currentSlide].image, highlights[currentSlide].title)}
                      >
                        <Share2 size={16} />
                      </Button>
                    </div>
                  </div>

                  {/* Thumbnails Navigation - Only on larger screens */}
                  <div className="hidden md:flex overflow-x-auto gap-2 mt-4 pb-1 -mx-6 px-6">
                    {highlights.map((highlight, idx) => (
                      <div 
                        key={idx}
                        className={`relative cursor-pointer flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden 
                          ${idx === currentSlide ? 'ring-2 ring-api-terracotta scale-105 z-10' : 
                          'opacity-50 hover:opacity-80'} transition-all duration-300`}
                        onClick={() => jumpToSlide(idx)}
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
                  <div className="flex md:hidden justify-center mt-4 gap-1.5">
                    {highlights.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => jumpToSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentSlide ? "w-6 bg-api-terracotta" : "bg-white/30"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Topic Cards Preview (responsive grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {highlights.slice(0, isMobile ? 3 : 6).map((topic, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openGallery(index)}
            >
              <div className="relative cursor-pointer group">
                <AspectRatio ratio={3/2} className="bg-api-midnight/5">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 via-api-midnight/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                </AspectRatio>
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <Badge className="mb-1.5 bg-api-terracotta/90 border-none text-white">
                    Topic {index + 1}
                  </Badge>
                  <h3 className="text-lg font-semibold text-white group-hover:text-api-cream transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {topic.description}
                  </p>
                </div>
                
                {/* Overlay view button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-api-midnight/60 text-white border-white/30 hover:bg-api-terracotta/90 hover:border-transparent"
                  >
                    <Image size={16} className="mr-1" />
                    View Gallery
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-8 md:mt-10 text-center">
          <Button 
            onClick={() => openGallery(0)}
            className="bg-api-terracotta hover:bg-api-terracotta/90 text-white border-none"
          >
            <Image size={18} className="mr-2" />
            View All Discussion Topics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventHighlights;
