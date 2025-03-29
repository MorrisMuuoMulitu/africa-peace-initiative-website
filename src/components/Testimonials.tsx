
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
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
      className={`py-20 px-4 sm:px-6 bg-api-forest transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Voices of Impact
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="bg-api-forest border border-api-sage/20 shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 border-2 border-api-terracotta/50">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-api-terracotta/20 text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <div className="text-white font-semibold">{testimonial.name}</div>
                          <div className="text-white/80 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-api-gold fill-api-gold" />
                        ))}
                      </div>
                      <p className="text-white leading-relaxed font-medium italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-api-cream hover:bg-api-gold text-api-forest" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-api-cream hover:bg-api-gold text-api-forest" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
