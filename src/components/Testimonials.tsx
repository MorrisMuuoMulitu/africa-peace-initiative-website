
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MessageSquare } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Conference Attendee, Kenya",
      image: "",
      quote: "The Regional Dialogue on Eastern Congo was well-organized and brought together diverse perspectives. I'm looking forward to future events by API.",
    },
    {
      name: "Dr. Emmanuel Osei",
      role: "Conflict Resolution Expert, Ghana",
      image: "",
      quote: "As a participant in API's first dialogue, I was impressed by the depth of discussion and the commitment to finding practical solutions.",
    },
    {
      name: "Amina Hassan",
      role: "Youth Representative, Somalia",
      image: "",
      quote: "API created an inclusive space where young voices like mine were valued. The dialogue was a crucial first step toward regional cooperation.",
    },
    {
      name: "Jean-Claude Muhindo",
      role: "Community Advocate, DRC",
      image: "",
      quote: "The discussion on Eastern Congo addressed real challenges faced by our communities. I appreciate API's initiative in bringing stakeholders together.",
    },
  ];

  return (
    <div
      ref={ref}
      className={`py-28 px-4 sm:px-6 bg-gradient-to-b from-api-darkgreen to-api-darkgreen/90 relative transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-api-terracotta opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-api-gold opacity-[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-api-cream opacity-10 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-api-terracotta opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-8 h-8 bg-api-gold opacity-10 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <MessageSquare className="w-12 h-12 text-api-terracotta/30 mx-auto mb-4" />
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4 tracking-tight">
            Voices of Impact
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Hear from participants of our inaugural Regional Dialogue on the conflict in Eastern Congo.
          </p>
        </div>

        <div className="mt-12">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                  style={{ 
                    transitionDelay: `${index * 100}ms`, 
                    transitionDuration: "700ms" 
                  }}
                >
                  <Card className="bg-api-green border-none rounded-xl shadow-lg overflow-hidden h-full transform hover:scale-[1.02] transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="p-7">
                        <div className="flex items-center mb-5">
                          <div className="relative">
                            <Avatar className="h-16 w-16 border-4 border-white shadow-md bg-api-darkgreen">
                              <AvatarFallback className="text-white font-bold text-xl">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="ml-4">
                            <div className="text-white font-semibold text-xl">{testimonial.name}</div>
                            <div className="text-white/80 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                        
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="text-api-gold fill-api-gold mr-1" />
                          ))}
                        </div>
                        
                        <p className="text-white/95 leading-relaxed text-lg font-medium">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-api-cream hover:bg-api-gold text-api-forest shadow-md" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-api-cream hover:bg-api-gold text-api-forest shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
