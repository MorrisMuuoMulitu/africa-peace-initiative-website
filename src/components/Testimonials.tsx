
import React from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Flag } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    },
    {
      quote: "The thoughtful approach to bringing diverse stakeholders together created space for honest dialogue about difficult issues affecting our region.",
      name: "Sophia Mwangi",
      role: "Policy Advisor, Ministry of Foreign Affairs",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            // Make the first testimonial full-width
            const isFullWidth = index === 0;
            
            return (
              <Card
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${isFullWidth ? "lg:col-span-2" : ""}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-api-terracotta to-api-sage"></div>
                
                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className="absolute top-0 right-0 text-api-terracotta/10 text-6xl font-serif">"</div>
                    <p className="text-api-midnight/90 font-lora text-lg leading-relaxed relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-8 border-t pt-6 border-api-cream">
                    <div className="flex-shrink-0 mr-5">
                      <Avatar className="h-16 w-16 border-2 border-api-terracotta">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-api-sage/20">
                          {testimonial.name.split(' ').map(name => name[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h4 className="text-api-midnight font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-api-midnight/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
