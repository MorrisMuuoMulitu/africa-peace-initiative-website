
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Download, Share2, X, Image, ArrowRight } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const EventHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
        </div>

        {/* Main Gallery Preview */}
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => setIsGalleryOpen(true)}>
            <div className="relative">
              <AspectRatio ratio={16/9} className="bg-api-midnight/5">
                <img
                  src={highlights[0].image}
                  alt="Regional Dialogue Gallery Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 via-api-midnight/40 to-transparent flex flex-col justify-end p-6">
                  <Badge className="self-start mb-3 bg-api-terracotta text-white border-none">
                    View Gallery
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-api-cream mb-2 transition-colors duration-300">
                    {highlights[0].title}
                  </h3>
                  <p className="text-white/90 line-clamp-2 mb-4 max-w-lg">
                    {highlights[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-white bg-api-terracotta/90 px-4 py-2 rounded-full w-fit">
                    <Image size={18} />
                    <span className="font-medium">View all {highlights.length} discussion topics</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </AspectRatio>
            </div>
          </Card>

          {/* Topic indicators */}
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {highlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpToSlide(idx)}
                className={`rounded-full transition-all ${
                  idx === 0 ? "w-10 bg-api-terracotta" : "w-3 bg-api-midnight/20 hover:bg-api-midnight/40"
                } h-3`}
                aria-label={`View topic ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Fullscreen Gallery Dialog */}
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-4xl md:max-w-6xl max-h-[95vh] p-0 bg-api-midnight/95 backdrop-blur-md border-none rounded-xl">
            <DialogTitle className="sr-only">
              <VisuallyHidden>
                Regional Dialogue Gallery - {highlights[currentSlide].title}
              </VisuallyHidden>
            </DialogTitle>
            <DialogDescription className="sr-only">
              <VisuallyHidden>
                Gallery of images from the Regional Dialogue on Eastern Congo
              </VisuallyHidden>
            </DialogDescription>
            
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
    </div>
  );
};

export default EventHighlights;
