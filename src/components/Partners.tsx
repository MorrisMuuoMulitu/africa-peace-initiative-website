
import React from "react";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Konrad Adenauer Stiftung",
      avatar: "/kas-logo.png",
      fallback: "KAS",
      url: "https://www.kas.de/en/home",
      description: "A German political foundation committed to promoting democracy, dialogue and development worldwide."
    },
    {
      id: 2,
      name: "Bosch Alumni Network",
      avatar: "/bosch-logo.png",
      fallback: "BAN",
      url: "https://www.boschalumni.net/",
      description: "A platform connecting former and current Bosch Fellows fostering collaboration and knowledge exchange."
    },
    {
      id: 3,
      name: "National Endowment for Democracy",
      avatar: "/ned-logo.png",
      fallback: "NED",
      url: "https://www.ned.org/",
      description: "Supporting freedom around the world through grants that promote democratic institutions."
    },
    {
      id: 4,
      name: "United Nations Development Programme",
      avatar: "/placeholder.svg",
      fallback: "UNDP",
      url: "https://www.undp.org/",
      description: "Working to eradicate poverty and reduce inequalities through sustainable development."
    }
  ];

  return (
    <section id="partners" className="py-24 px-4 sm:px-6 bg-api-cream/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/africa-outline.svg')] bg-no-repeat bg-[length:400px] bg-center"></div>
        <div className="absolute -top-56 -left-40 w-96 h-96 bg-api-sage rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-api-green rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-1 w-10 bg-api-darkgreen"></div>
            <span className="mx-4 text-api-darkgreen font-medium text-sm tracking-wider uppercase">Trusted Collaborators</span>
            <div className="h-1 w-10 bg-api-darkgreen"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-api-darkgreen mb-6">Our Partners</h2>
          <p className="text-lg max-w-3xl mx-auto text-api-gray font-lora">
            We collaborate with trusted organizations worldwide to advance peace 
            and security initiatives across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={partner.id} 
              className="group bg-white hover:bg-gradient-to-b from-white to-api-cream/30 border border-api-sage/20 hover:border-api-green/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 rounded-full bg-api-cream/50 border border-api-sage/20 transform group-hover:scale-105 transition-transform duration-300">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={partner.avatar} alt={partner.name} />
                    <AvatarFallback className="bg-api-sage text-api-darkgreen font-bold text-xl">
                      {partner.fallback}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-api-darkgreen mb-3 group-hover:text-api-green transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-sm text-api-gray mb-4 flex-grow font-lora">
                  {partner.description}
                </p>

                <a 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-api-green hover:text-api-darkgreen font-medium text-sm transition-colors"
                >
                  Visit Website <ExternalLink size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
