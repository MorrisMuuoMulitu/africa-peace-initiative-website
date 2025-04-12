
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

const EventHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useBreakpoint("md");
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
                {highlights.map((highlight, index) => (
                  <CarouselItem key={index} className="pl-4 sm:pl-6 md:basis-4/5 lg:basis-1/2">
                    <Card className={`overflow-hidden border-none rounded-xl shadow-lg transition-all duration-500 ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}>
                      <CardContent className="p-0">
                        <Dialog>
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
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                                <Badge 
                                  className="self-start mb-3 bg-api-terracotta border-none text-white font-medium"
                                >
                                  Topic {index + 1}
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
                          <DialogContent className="sm:max-w-4xl max-h-[90vh] p-2 overflow-hidden">
                            <div className="relative w-full h-full">
                              <img
                                src={highlight.image}
                                alt={highlight.title}
                                className="w-full h-auto object-contain rounded-lg max-h-[80vh]"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                <h3 className="text-xl font-bold text-white">
                                  {highlight.title}
                                </h3>
                                <p className="text-white/90">
                                  {highlight.description}
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8">
                <CarouselPrevious className="static transform-none mx-1 bg-white hover:bg-api-cream border-api-terracotta text-api-terracotta" />
                <CarouselNext className="static transform-none mx-1 bg-white hover:bg-api-cream border-api-terracotta text-api-terracotta" />
              </div>
            </Carousel>
          </div>
        ) : (
          // Desktop version - Image grid with better presentation
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <Dialog key={index}>
                <DialogTrigger className="w-full text-left">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                          <Badge 
                            className="self-start mb-3 bg-api-terracotta border-none text-white font-medium"
                          >
                            Topic {index + 1}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {highlight.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl max-h-[90vh] p-2 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-auto object-contain rounded-lg max-h-[80vh]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">
                        {highlight.title}
                      </h3>
                      <p className="text-white/90">
                        {highlight.description}
                      </p>
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
