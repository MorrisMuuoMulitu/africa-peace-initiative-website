
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
      role: "Community Leader, Nairobi",
      image: "",
      quote: "The Africa Peace Initiative transformed our community's approach to conflict resolution. Their training programs equipped us with practical skills that we use every day.",
    },
    {
      name: "Dr. Emmanuel Osei",
      role: "Academic Researcher, Ghana",
      image: "",
      quote: "Their methodologies blend traditional wisdom with modern conflict resolution techniques. The impact of their work extends beyond immediate conflicts to building lasting peace.",
    },
    {
      name: "Amina Hassan",
      role: "Youth Advocate, Somalia",
      image: "",
      quote: "As a young person, I never thought my voice mattered in peace processes. API created space for youth leadership and now we're driving positive change in our communities.",
    },
    {
      name: "Patel Foundation",
      role: "Partner Organization",
      image: "",
      quote: "Working alongside API has amplified our impact. Their approach to partnership is truly collaborative, respecting local expertise while bringing valuable external perspectives.",
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
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-cream mb-4">
            Voices of Impact
          </h2>
          <p className="text-lg text-api-sage/90 max-w-2xl mx-auto">
            Hear from community leaders, partners, and individuals whose lives have been transformed
            through our peace-building initiatives.
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
                          <AvatarFallback className="bg-api-terracotta/20 text-api-cream">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <div className="text-api-cream font-medium">{testimonial.name}</div>
                          <div className="text-api-sage/70 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-api-gold fill-api-gold" />
                        ))}
                      </div>
                      <p className="text-api-ivory/90 italic leading-relaxed">"{testimonial.quote}"</p>
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
