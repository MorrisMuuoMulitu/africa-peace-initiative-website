
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Flag, Quote } from "lucide-react";
import { useBreakpoint } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const isMobile = useBreakpoint("md");
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedQuotes, setExpandedQuotes] = useState<Record<number, boolean>>({});

  const testimonials = [
    {
      quote: "The recent event stood out as an inclusive platform, thematically rich in its integration of multisectoral aspects of peacebuilding, including the role of gender in the pursuit of peace. This inclusivity was also reflected in the geographical diversity of the participants and panelists, who came from the DRC 🇨🇩, Rwanda 🇷🇼, Burundi 🇧🇮, Kenya 🇰🇪, Tanzania 🇹🇿, South Sudan 🇸🇸, and included development partners. The high quality of the panelists' contributions, the depth of the discussions, and the concrete outcomes from the breakout sessions gave this event a distinct mark of excellence.",
      name: "Mick Mutiki Kilumba",
      role: "Security Governance Expert, President of the Civil Society Consultation Framework in South Kivu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "This event couldn't have come at a better time. It provided a critical platform to reflect deeply on the ongoing conflicts in Eastern DRC. By bringing together political leaders and civil society actors from the region, it addressed the pressing challenges posed by armed conflicts and opened space for exploring alternative pathways to peace and security. What stood out for me was the event's ability to unpack both the internal and external drivers of conflict, allowing participants to formulate concrete, relevant recommendations for sustainable peace. The organization was top-notch—the themes were timely and contextual, the panelists were expertly chosen, and the quality of the discussions was remarkably high. The thoughtful selection of participants elevated the entire experience, making the debates rich, insightful, and impactful.",
      name: "Eric Mikalano",
      role: "Executive Secretary, Initiative for Good Governance of Natural Resources in Kivu (IBGRN/K)",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleQuoteExpansion = (index: number) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Function to determine if a quote should be truncated
  const shouldTruncate = (quote: string) => {
    return quote.length > 180;
  };

  // Function to get truncated quote
  const getTruncatedQuote = (quote: string) => {
    if (quote.length <= 180) return quote;
    return quote.substring(0, 180) + "...";
  };

  return (
    <div
      ref={ref}
      className={`py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-white via-api-cream/10 to-api-sage/10 transition-all duration-700 overflow-hidden ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-20 h-1.5 bg-gradient-to-r from-api-terracotta to-api-gold mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-montserrat text-api-midnight mb-4">
            What Our Participants Say
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Reflections from those who experienced our work firsthand
          </p>
        </div>

        {isMobile ? (
          // Mobile Version - Card Slider
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <TestimonialCard 
                        testimonial={testimonial} 
                        isExpanded={!!expandedQuotes[index]}
                        onToggleExpansion={() => toggleQuoteExpansion(index)}
                        shouldTruncate={shouldTruncate}
                        getTruncatedQuote={getTruncatedQuote}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-api-terracotta w-8" 
                      : "bg-api-cream"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Version - Staggered Grid
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transform transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isExpanded={!!expandedQuotes[index]}
                  onToggleExpansion={() => toggleQuoteExpansion(index)}
                  shouldTruncate={shouldTruncate}
                  getTruncatedQuote={getTruncatedQuote}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: { 
    quote: string; 
    name: string; 
    role: string; 
    image: string 
  };
  isExpanded: boolean;
  onToggleExpansion: () => void;
  shouldTruncate: (quote: string) => boolean;
  getTruncatedQuote: (quote: string) => string;
}

const TestimonialCard = ({ 
  testimonial, 
  isExpanded, 
  onToggleExpansion, 
  shouldTruncate, 
  getTruncatedQuote
}: TestimonialCardProps) => {
  const needsTruncation = shouldTruncate(testimonial.quote);
  
  return (
    <Card className="bg-white backdrop-blur-sm bg-opacity-70 rounded-2xl overflow-hidden shadow-lg border-0 ring-1 ring-black/5 hover:shadow-xl transition-all duration-500">
      <CardContent className="p-8 sm:p-10">
        <div className="relative mb-6">
          <Quote className="absolute top-0 left-0 text-api-terracotta/10 h-16 w-16 -translate-x-6 -translate-y-6" />
          <div className="text-api-midnight/90 font-lora text-lg leading-relaxed relative z-10 pl-4 border-l-2 border-api-terracotta">
            "{isExpanded || !needsTruncation ? testimonial.quote : getTruncatedQuote(testimonial.quote)}"
            
            {needsTruncation && (
              <Button 
                variant="link" 
                onClick={onToggleExpansion}
                className="ml-2 text-api-terracotta hover:text-api-gold font-medium flex items-center mt-2 p-0 h-auto"
              >
                {isExpanded ? (
                  <>
                    Read less <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read more <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex items-center mt-8 pt-6 border-t border-api-cream/60">
          <div className="flex-shrink-0 mr-5">
            <Avatar className="h-16 w-16 ring-2 ring-api-terracotta ring-offset-2">
              <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
              <AvatarFallback className="bg-api-sage/20 text-api-forestgreen font-semibold">
                {testimonial.name.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h4 className="text-api-forestgreen font-bold text-lg">{testimonial.name}</h4>
            <p className="text-api-midnight/70 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
