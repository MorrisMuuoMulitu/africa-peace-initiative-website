
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { useBreakpoint } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EventHighlightsGallery from "./EventHighlightsGallery";
import EventHighlightsCard from "./EventHighlightsCard";
import EventHighlightsFilter from "./EventHighlightsFilter";

const EventHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useBreakpoint("md");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState("all");

  // Enhanced data with more metadata for each highlight
  const highlights = [
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/1.jpeg?updatedAt=1744466094011",
      title: "Regional Security Cooperation",
      description: "Discussion on cross-border security frameworks and joint operations to stabilize the Eastern DRC region.",
      category: "security",
      date: "March 27, 2025 - Morning Session",
      speaker: "Col. James Nyawira, Security Expert"
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/2.jpeg?updatedAt=1744466096764",
      title: "Peace Process Mediation",
      description: "Exploring diplomatic channels and multi-stakeholder engagement for sustainable peace negotiations.",
      category: "diplomacy",
      date: "March 27, 2025 - Afternoon Session",
      speaker: "Dr. Amina Mohammed, UN Special Envoy"
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/3.jpeg?updatedAt=1744466097353",
      title: "Community-Based Solutions",
      description: "Grassroots approaches to conflict resolution and the role of local communities in peacebuilding.",
      category: "community",
      date: "March 27, 2025 - Panel Discussion",
      speaker: "Community Leaders Panel"
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/6.jpeg?updatedAt=1744466097577",
      title: "Governance & Accountability",
      description: "Strengthening governance systems and promoting accountability in conflict-affected regions.",
      category: "governance",
      date: "March 27, 2025 - Plenary Session",
      speaker: "Hon. Marie Uwase, Minister of Justice"
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/5.jpeg?updatedAt=1744466097581",
      title: "Resource Management",
      description: "Equitable distribution and sustainable management of natural resources to prevent conflict.",
      category: "resources",
      date: "March 27, 2025 - Workshop",
      speaker: "Prof. Jean-Luc Kabila, Resource Economist"
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/4.jpeg?updatedAt=1744466095905",
      title: "Youth & Gender Inclusion",
      description: "Empowering women and youth to participate in peace processes and post-conflict reconstruction.",
      category: "inclusion",
      date: "March 27, 2025 - Breakout Session",
      speaker: "Youth and Women Leaders Panel"
    },
    {
      image: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/EventDiscussed/7.jpeg?updatedAt=1744466095793",
      title: "Humanitarian Response",
      description: "Addressing the humanitarian crisis and supporting displaced communities in the Eastern DRC.",
      category: "humanitarian",
      date: "March 27, 2025 - Closing Session",
      speaker: "Dr. Pascal Kambale, Humanitarian Coordinator"
    }
  ];

  // Filter options derived from highlight categories
  const filterOptions = [
    { value: "all", label: "All Topics" },
    { value: "security", label: "Security" },
    { value: "diplomacy", label: "Diplomacy" },
    { value: "community", label: "Community" },
    { value: "governance", label: "Governance" },
    { value: "resources", label: "Resources" },
    { value: "inclusion", label: "Inclusion" },
    { value: "humanitarian", label: "Humanitarian" }
  ];

  // Filtered highlights based on selected category
  const filteredHighlights = filterCategory === "all" 
    ? highlights 
    : highlights.filter(highlight => highlight.category === filterCategory);

  const handleOpenGallery = (index: number) => {
    setCurrentIndex(index);
    setGalleryOpen(true);
  };

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentIndex < highlights.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Image preloading for smoother gallery experience
  React.useEffect(() => {
    // Preload adjacent images
    const preloadImages = () => {
      // Preload current image
      const img = new Image();
      img.src = highlights[currentIndex].image;
      
      // Preload next image if available
      if (currentIndex < highlights.length - 1) {
        const nextImg = new Image();
        nextImg.src = highlights[currentIndex + 1].image;
      }
      
      // Preload previous image if available
      if (currentIndex > 0) {
        const prevImg = new Image();
        prevImg.src = highlights[currentIndex - 1].image;
      }
    };
    
    if (galleryOpen) {
      preloadImages();
    }
  }, [currentIndex, galleryOpen, highlights]);

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

        {/* Filter bar */}
        <div className="mb-6 flex justify-center">
          <EventHighlightsFilter
            options={filterOptions}
            selectedValue={filterCategory}
            onChange={setFilterCategory}
          />
        </div>

        {isMobile ? (
          // Mobile version - Full-width carousel with better image presentation
          <div className="mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {filteredHighlights.map((highlight, index) => (
                  <CarouselItem key={index} className="pl-4 sm:pl-6 md:basis-4/5 lg:basis-1/2">
                    <Card className={`overflow-hidden border-none rounded-xl shadow-lg transition-all duration-500 ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}>
                      <CardContent className="p-0">
                        <Dialog open={galleryOpen && currentIndex === index} onOpenChange={(open) => {
                          setGalleryOpen(open);
                          if (open) setCurrentIndex(index);
                        }}>
                          <DialogTrigger className="w-full text-left block">
                            <div className="relative">
                              <AspectRatio ratio={16/9}>
                                <img
                                  src={highlight.image}
                                  alt={highlight.title}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                  width="600"
                                  height="450"
                                />
                              </AspectRatio>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                <Badge 
                                  className="self-start mb-3 bg-api-terracotta border-none text-white font-medium"
                                >
                                  Topic {filteredHighlights.indexOf(highlight) + 1}
                                </Badge>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                  {highlight.title}
                                </h3>
                                <p className="text-white/90 text-sm">
                                  {highlight.description}
                                </p>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
                            <EventHighlightsGallery 
                              images={highlights} 
                              currentIndex={currentIndex}
                              onClose={() => setGalleryOpen(false)}
                              onNavigate={handleNavigate}
                            />
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8">
                <CarouselPrevious className="relative transform-none mx-1 bg-white hover:bg-api-cream border-api-terracotta text-api-terracotta" />
                <CarouselNext className="relative transform-none mx-1 bg-white hover:bg-api-cream border-api-terracotta text-api-terracotta" />
              </div>
            </Carousel>
          </div>
        ) : (
          // Desktop version - Image grid with better presentation
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredHighlights.map((highlight, index) => (
              <Dialog 
                key={index} 
                open={galleryOpen && currentIndex === highlights.indexOf(highlight)} 
                onOpenChange={(open) => {
                  setGalleryOpen(open);
                  if (open) setCurrentIndex(highlights.indexOf(highlight));
                }}
              >
                <DialogTrigger className="w-full text-left" onClick={() => handleOpenGallery(highlights.indexOf(highlight))}>
                  <Card
                    className={`overflow-hidden border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <AspectRatio ratio={16/9}>
                          <img
                            src={highlight.image}
                            alt={highlight.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                            width="600"
                            height="338"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                          <Badge 
                            className="self-start mb-3 bg-api-terracotta border-none text-white font-medium"
                          >
                            {highlight.category.charAt(0).toUpperCase() + highlight.category.slice(1)}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {highlight.title}
                          </h3>
                          <p className="text-white/90 text-sm line-clamp-2">
                            {highlight.description}
                          </p>
                          <div className="flex items-center mt-3">
                            <span className="text-xs text-white/70 font-medium">View details</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
                  <EventHighlightsGallery 
                    images={highlights} 
                    currentIndex={currentIndex}
                    onClose={() => setGalleryOpen(false)}
                    onNavigate={handleNavigate}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}

        {/* Empty state when no images match the filter */}
        {filteredHighlights.length === 0 && (
          <div className="text-center py-20 bg-api-cream/10 rounded-xl">
            <h3 className="text-xl font-medium text-api-midnight mb-2">No matching topics found</h3>
            <p className="text-api-midnight/70">Try selecting a different filter option</p>
          </div>
        )}

        {/* View all gallery button */}
        <div className="mt-10 text-center">
          <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-api-terracotta px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-api-terracotta/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              View Complete Gallery
            </DialogTrigger>
            <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 overflow-hidden">
              <EventHighlightsGallery 
                images={highlights} 
                currentIndex={0}
                onClose={() => {}}
                onNavigate={handleNavigate}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default EventHighlights;
