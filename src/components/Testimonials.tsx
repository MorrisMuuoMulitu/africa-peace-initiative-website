
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "The Africa Peace Initiative's approach to conflict resolution is revolutionary. Their focus on inclusive dialogue has transformed how we address community tensions.",
      name: "Dr. Amina Osei",
      role: "Director, Center for Peace Studies, Nairobi",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "Working with API has given me new tools to advocate for peace in my community. Their training programs are thorough and culturally sensitive.",
      name: "Ibrahim Kabila",
      role: "Community Leader, Eastern DRC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "The thoughtful approach to bringing diverse stakeholders together created space for honest dialogue about difficult issues affecting our region.",
      name: "Sophia Mwangi",
      role: "Policy Advisor, Ministry of Foreign Affairs",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      quote: "I've witnessed firsthand how the peace education programs have transformed youth perspectives in conflict-prone regions. Their methodology builds lasting bridges.",
      name: "Emmanuel Diop",
      role: "Youth Coordinator, Pan-African Peace Network",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "The Africa Peace Initiative creates neutral spaces where opposing sides can meet as humans first, before addressing political differences. This approach has proven invaluable.",
      name: "Grace Mutumbai",
      role: "Regional Representative, UN Peace Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    }
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-api-cream/20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Voices of Impact
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Hear from those who have experienced our work firsthand
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <div
                  className={`bg-white rounded-xl shadow-lg p-6 relative overflow-hidden transform transition-all duration-500 hover:shadow-xl h-full`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-api-terracotta to-api-sage"></div>
                  <div className="absolute top-8 right-8 text-api-terracotta/10 text-6xl font-serif">"</div>
                  
                  <div className="mb-6 relative z-10">
                    <p className="text-api-midnight/90 font-lora italic">"{testimonial.quote}"</p>
                  </div>
                  
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover border-2 border-api-terracotta"
                      />
                    </div>
                    <div>
                      <h4 className="text-api-midnight font-bold">{testimonial.name}</h4>
                      <p className="text-api-midnight/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 left-0 translate-y-0" />
            <CarouselNext className="relative static ml-2 right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
