
import React, { useEffect, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import SocialLinks from "@/components/SocialLinks";

// Lazy loaded card components to reduce initial JavaScript
const RegionalImpactCard = lazy(() => import("@/components/hero/RegionalImpactCard"));
const CommunityFocusCard = lazy(() => import("@/components/hero/CommunityFocusCard"));
const OngoingProgramsCard = lazy(() => import("@/components/hero/OngoingProgramsCard"));

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Delay animation slightly for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section 
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-api-darkgreen via-api-forestgreen to-api-green"
      aria-label="Hero section"
    >
      {/* Optimized background elements - simplified and reduced for better performance */}
      <div className="absolute inset-0 z-0">
        {/* Map overlay - optimized with reduced opacity for better performance */}
        <div className="absolute inset-0 bg-[url('/africa-outline.svg')] bg-no-repeat bg-center opacity-20 bg-contain" aria-hidden="true"></div>
        
        {/* Single radial gradient for improved performance */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-api-darkgreen/30 opacity-70" aria-hidden="true"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 md:py-0 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className={`lg:col-span-7 text-left transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-6">
              <div className="h-1 w-20 bg-api-terracotta mr-4" aria-hidden="true"></div>
              <span className="text-api-cream font-medium tracking-wider uppercase text-sm drop-shadow-md">
                Africa Peace Initiative
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-montserrat mb-6 lg:mb-8 leading-tight">
              <span className="text-white">Building Peace</span>{" "}
              <span className="text-api-terracotta">Across</span>{" "}
              <span className="text-api-ivory">Africa</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl font-lora text-api-cream mb-8 lg:mb-10 max-w-xl leading-relaxed drop-shadow-md">
              {isMobile ? 
                "Creating stability through dialogue and community action" : 
                "Creating stability through dialogue, community action, and collaborative diplomacy—transforming conflict into cooperation"
              }
            </p>
            
            {/* Social links - Adding your organization's social links */}
            <div className="mb-6">
              <SocialLinks />
            </div>
            
            <div className="flex flex-wrap gap-4 lg:gap-5">
              <Button 
                onClick={scrollToMission} 
                className="bg-api-terracotta hover:bg-api-clay text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg group"
                aria-label="Learn about our approach"
              >
                Our Approach
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })} 
                variant="outline" 
                className="bg-transparent hover:bg-white/15 border-2 border-api-cream text-api-cream font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg group"
                aria-label="Join our efforts"
              >
                Join Our Efforts
                <span className="w-0 h-0.5 bg-api-cream absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full opacity-50" aria-hidden="true"></span>
              </Button>
            </div>
            
            <div className="mt-16 lg:mt-20 hidden lg:flex items-center text-api-cream" aria-hidden="true">
              <ArrowDown className="mr-3 animate-bounce" />
              <span className="text-sm font-medium">Scroll to explore our work</span>
            </div>
          </div>
          
          {/* Right content - Impact cards with improved performance through lazy loading */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-96 md:h-[28rem]">
              {/* Suspense fallback for better UX during lazy loading */}
              <Suspense fallback={<div className="h-96 md:h-[28rem] animate-pulse bg-api-forestgreen/20 rounded-lg"></div>}>
                {/* Regional Impact Card */}
                <div className="absolute -top-6 -right-4 rotate-3">
                  <RegionalImpactCard isMobile={isMobile} />
                </div>
                
                {/* Community Focus Card */}
                <div className="absolute top-1/3 left-0 -rotate-2 z-10">
                  <CommunityFocusCard isMobile={isMobile} />
                </div>
                
                {/* Ongoing Programs Card */}
                <div className="absolute bottom-0 right-8 rotate-2">
                  <OngoingProgramsCard isMobile={isMobile} />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element - simplified for better performance */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-api-darkgreen via-api-forestgreen/70 to-transparent z-0" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
