
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, Globe, Users, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-api-darkgreen via-api-forestgreen to-api-green">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        {/* Pattern and map overlays */}
        <div className="absolute inset-0 bg-[url('/africa-outline.svg')] bg-no-repeat bg-center opacity-20 bg-contain"></div>
        <div className="absolute inset-0 bg-sankofa opacity-20 bg-repeat"></div>
        
        {/* Animated circular elements with refined colors */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[15%] left-[5%] w-80 h-80 rounded-full bg-api-gold/40 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-api-terracotta/30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-[60%] right-[20%] w-64 h-64 rounded-full bg-api-clay/25 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-[40%] left-[30%] w-72 h-72 rounded-full bg-api-brightgreen/20 blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
        </div>
        
        {/* Shimmering light effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[30%] w-1 h-[40%] bg-api-gold/40 rotate-[30deg] blur-sm animate-pulse"></div>
          <div className="absolute top-[40%] right-[25%] w-1 h-[30%] bg-api-clay/40 rotate-[-45deg] blur-sm animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-[60%] left-[40%] w-1 h-[35%] bg-api-sage/30 rotate-[15deg] blur-sm animate-pulse" style={{ animationDelay: "2.2s" }}></div>
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-api-darkgreen/30 opacity-70"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 md:py-0 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className={`lg:col-span-7 text-left transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-6">
              <div className="h-1 w-20 bg-api-terracotta mr-4"></div>
              <span className="text-api-cream font-medium tracking-wider uppercase text-sm animate-slide-left drop-shadow-md" style={{
                animationDelay: '0.3s',
                textShadow: '0 2px 4px rgba(0,0,0,0.4)'
              }}>Africa Peace Initiative</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-montserrat mb-6 lg:mb-8 leading-tight animate-slide-left" style={{
              animationDelay: '0.5s',
              textShadow: '0 3px 6px rgba(0,0,0,0.5)'
            }}>
              <span className="text-white">Building Peace</span>{" "}
              <span className="text-api-terracotta">Across</span>{" "}
              <span className="text-api-ivory">Africa</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl font-lora text-api-cream mb-8 lg:mb-10 max-w-xl animate-slide-left leading-relaxed drop-shadow-md" style={{
              animationDelay: '0.7s',
              textShadow: '0 2px 4px rgba(0,0,0,0.4)'
            }}>
              {isMobile ? 
                "Creating stability through dialogue and community action" : 
                "Creating stability through dialogue, community action, and collaborative diplomacy—transforming conflict into cooperation"
              }
            </p>
            
            <div className="flex flex-wrap gap-4 lg:gap-5 animate-slide-left" style={{
              animationDelay: '0.9s'
            }}>
              <Button onClick={scrollToMission} className="bg-api-terracotta hover:bg-api-clay text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg group">
                Our Approach
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })} variant="outline" className="bg-transparent hover:bg-white/15 border-2 border-api-cream text-api-cream font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg group">
                Join Our Efforts
                <span className="w-0 h-0.5 bg-api-cream absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full opacity-50"></span>
              </Button>
            </div>
            
            <div className="mt-16 lg:mt-20 hidden lg:flex items-center text-api-cream animate-slide-left" style={{
              animationDelay: '1.1s',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              <ArrowDown className="mr-3 animate-bounce" />
              <span className="text-sm font-medium">Scroll to explore our work</span>
            </div>
          </div>
          
          {/* Right content - Impact cards with improved styling */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-96 md:h-[28rem]">
              {/* Regional Impact Card */}
              <div className="absolute -top-6 -right-4 rotate-3 animate-slide-right" style={{
                animationDelay: '0.7s'
              }}>
                {isMobile ? (
                  <HoverCard>
                    <HoverCardTrigger>
                      <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-4 rounded-lg shadow-xl bg-gradient-to-br from-api-forestgreen/95 to-api-green/95 border border-api-sage/20 hover:border-api-sage/40">
                        <div className="flex items-center mb-2">
                          <Globe className="text-api-cream mr-2" size={18} />
                          <h3 className="text-api-cream font-semibold text-base">Regional Impact</h3>
                        </div>
                        <p className="text-api-cream font-medium text-sm">Cross-border dialogue in 5 countries</p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-gradient-to-br from-api-forestgreen/95 to-api-green/95 text-api-cream border-api-sage/30">
                      Facilitating cross-border dialogue in 5 East African countries with expanding influence
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-6 rounded-lg shadow-xl bg-gradient-to-br from-api-forestgreen/95 to-api-green/95 border border-api-sage/20 hover:border-api-sage/40">
                    <div className="flex items-center mb-3">
                      <Globe className="text-api-cream mr-3" size={22} />
                      <h3 className="text-api-cream font-semibold text-lg drop-shadow-sm">Regional Impact</h3>
                    </div>
                    <p className="text-api-cream font-medium text-base drop-shadow-sm">Facilitating cross-border dialogue in 5 East African countries with expanding influence</p>
                  </div>
                )}
              </div>
              
              {/* Community Focus Card */}
              <div className="absolute top-1/3 left-0 -rotate-2 animate-slide-right z-10" style={{
                animationDelay: '0.9s'
              }}>
                {isMobile ? (
                  <HoverCard>
                    <HoverCardTrigger>
                      <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-4 rounded-lg shadow-xl bg-gradient-to-br from-api-darkgreen/90 to-api-forestgreen/90 border border-api-brightgreen/20 hover:border-api-brightgreen/40">
                        <div className="flex items-center mb-2">
                          <Users className="text-api-cream mr-2" size={18} />
                          <h3 className="text-api-cream font-semibold text-base">Community Focus</h3>
                        </div>
                        <p className="text-api-cream font-medium text-sm">200+ leaders trained</p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-gradient-to-br from-api-darkgreen/90 to-api-forestgreen/90 text-api-cream border-api-brightgreen/20">
                      200+ community leaders trained in conflict resolution and reconciliation strategies
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-6 rounded-lg shadow-xl bg-gradient-to-br from-api-darkgreen/90 to-api-forestgreen/90 border border-api-brightgreen/20 hover:border-api-brightgreen/40">
                    <div className="flex items-center mb-3">
                      <Users className="text-api-cream mr-3" size={22} />
                      <h3 className="text-api-cream font-semibold text-lg drop-shadow-sm">Community Focus</h3>
                    </div>
                    <p className="text-api-cream font-medium text-base drop-shadow-sm">200+ community leaders trained in conflict resolution and reconciliation strategies</p>
                  </div>
                )}
              </div>
              
              {/* Ongoing Programs Card */}
              <div className="absolute bottom-0 right-8 rotate-2 animate-slide-right" style={{
                animationDelay: '1.1s'
              }}>
                {isMobile ? (
                  <HoverCard>
                    <HoverCardTrigger>
                      <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-4 rounded-lg shadow-xl bg-gradient-to-br from-api-terracotta/95 to-api-clay/95 border border-api-gold/20 hover:border-api-gold/40">
                        <div className="flex items-center mb-2">
                          <Heart className="text-white mr-2" size={18} />
                          <h3 className="text-white font-semibold text-base">Ongoing Programs</h3>
                        </div>
                        <p className="text-white font-medium text-sm">12+ peace initiatives</p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-gradient-to-br from-api-terracotta/95 to-api-clay/95 text-white border-api-gold/20">
                      12+ peace-building initiatives with measurable conflict reduction in fragile regions
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <div className="hover:translate-y-[-5px] transition-transform duration-300 backdrop-blur-md p-6 rounded-lg shadow-xl bg-gradient-to-br from-api-terracotta/95 to-api-clay/95 border border-api-gold/20 hover:border-api-gold/40">
                    <div className="flex items-center mb-3">
                      <Heart className="text-white mr-3" size={22} />
                      <h3 className="text-white font-semibold text-lg drop-shadow-sm">Ongoing Programs</h3>
                    </div>
                    <p className="text-white font-medium text-base drop-shadow-sm">12+ peace-building initiatives with measurable conflict reduction in fragile regions</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-api-darkgreen via-api-forestgreen/70 to-transparent z-0"></div>
    </div>
  );
};

export default Hero;
