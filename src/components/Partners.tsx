
import React from "react";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <section id="partners" className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-api-gold rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-api-terracotta rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16`}>
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-api-midnight mb-6">Our Partners</h2>
          <p className="text-lg max-w-3xl mx-auto text-api-midnight/80 font-lora">
            We collaborate with trusted organizations worldwide to advance peace 
            and security initiatives across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <Card key={partner.id} className="group bg-white border border-gray-200 hover:border-api-gold/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 rounded-full bg-gray-50 border border-gray-100">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={partner.avatar} alt={partner.name} />
                    <AvatarFallback className="bg-api-ivory text-api-forest font-bold text-xl">
                      {partner.fallback}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-api-midnight mb-3 group-hover:text-api-terracotta transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {partner.description}
                </p>

                <a 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-api-forest hover:text-api-terracotta font-medium text-sm transition-colors"
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
