
import React, { useEffect, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: "Konrad Adenauer Stiftung",
      avatar: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/konrad.png?updatedAt=1741679164315",
      fallback: "KAS",
      url: "https://www.kas.de/en/home",
      description: "A German political foundation committed to promoting democracy, dialogue and development worldwide."
    },
    {
      id: 2,
      name: "Bosch Alumni Network",
      avatar: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/bosch.png?updatedAt=1741675559148",
      fallback: "BAN",
      url: "https://www.boschalumni.net/",
      description: "A platform connecting former and current Bosch Fellows fostering collaboration and knowledge exchange."
    }
  ];

  return (
    <section 
      id="partners" 
      ref={ref} 
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, rgba(234,230,215,1) 0%, rgba(255,255,255,1) 100%)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/africa-outline.svg')] bg-no-repeat bg-[length:400px] bg-center"></div>
        <div className="absolute -top-56 -left-40 w-96 h-96 bg-api-sage rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-api-green rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-1 w-10 bg-api-darkgreen"></div>
            <span className="mx-4 text-api-darkgreen font-medium text-sm tracking-wider uppercase">Trusted Collaborators</span>
            <div className="h-1 w-10 bg-api-darkgreen"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-api-darkgreen to-api-green mb-6">
            Our Partners
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto text-api-gray font-lora">
            We collaborate with trusted organizations worldwide to advance peace 
            and security initiatives across Africa.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className={`transform transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
              style={{ transitionDelay: `${0.2 * index}s` }}
            >
              <div className="group hover:scale-[1.02] transition-all duration-500 ease-out">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-100">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-api-sage to-api-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="p-8 flex flex-col items-center">
                    <div className="mb-8 w-full max-w-[220px] h-[120px] flex items-center justify-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                      <img 
                        src={partner.avatar} 
                        alt={partner.name} 
                        className="w-full h-auto object-contain max-h-full transition-all duration-300"
                      />
                    </div>
                    
                    <h3 className="font-montserrat font-semibold text-xl text-api-darkgreen mb-4 text-center">
                      {partner.name}
                    </h3>
                    
                    <p className="text-api-gray/90 text-center mb-6 font-lora">
                      {partner.description}
                    </p>
                    
                    <a 
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="group mt-auto inline-flex items-center gap-2 text-api-green font-medium hover:text-api-darkgreen transition-colors duration-300"
                    >
                      Visit Website 
                      <ExternalLink 
                        size={16} 
                        className="group-hover:rotate-12 transition-transform duration-300" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          <Button 
            className="bg-api-darkgreen hover:bg-api-green text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Become a Partner</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
