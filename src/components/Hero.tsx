
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, Globe, Users, Heart } from "lucide-react";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-api-darkgreen to-api-green/90">
      {/* Background elements with reduced opacity for better text visibility */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/africa-outline.svg')] bg-no-repeat bg-center opacity-10 bg-contain"></div>
        <div className="absolute inset-0 bg-sankofa opacity-15 bg-repeat"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[15%] left-[5%] w-72 h-72 rounded-full bg-api-gold opacity-5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-api-terracotta opacity-5 blur-3xl animate-pulse-slow"></div>
        </div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 md:py-0 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className={`lg:col-span-7 text-left transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-api-terracotta mr-4"></div>
              <span className="text-api-ivory font-medium tracking-wider uppercase text-sm animate-slide-left" style={{
              animationDelay: '0.3s'
            }}>Africa Peace Initiative</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-montserrat text-api-cream mb-6 lg:mb-8 leading-tight animate-slide-left" style={{
            animationDelay: '0.5s'
          }}>
              <span className="text-white">Building Peace</span> <span className="text-api-terracotta">Across</span> <span className="text-api-ivory">Africa</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl font-lora text-api-ivory/95 mb-8 lg:mb-10 max-w-xl animate-slide-left leading-relaxed" style={{
            animationDelay: '0.7s'
          }}>
              Creating stability through dialogue, community action, and collaborative diplomacy—transforming conflict into cooperation
            </p>
            
            <div className="flex flex-wrap gap-4 lg:gap-5 animate-slide-left" style={{
            animationDelay: '0.9s'
          }}>
              <Button onClick={scrollToMission} className="bg-api-terracotta hover:bg-api-terracotta/90 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg group">
                Our Approach
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} variant="outline" className="bg-api-darkgreen/40 hover:bg-api-green/30 border-2 border-api-ivory text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-md transition-all duration-300 text-base sm:text-lg">
                Join Our Efforts
              </Button>
            </div>
            
            <div className="mt-16 lg:mt-20 hidden lg:flex items-center text-api-ivory/90 animate-slide-left" style={{
            animationDelay: '1.1s'
          }}>
              <ArrowDown className="mr-3 animate-bounce" />
              <span className="text-sm font-medium">Scroll to explore our work</span>
            </div>
          </div>
          
          {/* Right content - Impact cards */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-96 md:h-[28rem]">
              {/* Regional Impact Card */}
              <div className="absolute -top-6 -right-4 rotate-3 animate-slide-right" style={{
              animationDelay: '0.7s'
            }}>
                <div className="glass-card bg-api-forestgreen/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20">
                  <div className="flex items-center mb-3">
                    <Globe className="text-white mr-3" size={22} />
                    <h3 className="text-white font-semibold text-lg">Regional Impact</h3>
                  </div>
                  <p className="text-white font-medium text-base">Facilitating cross-border dialogue in 5 East African countries with expanding influence</p>
                </div>
              </div>
              
              {/* Community Focus Card */}
              <div className="absolute top-1/3 left-0 -rotate-2 animate-slide-right z-10" style={{
              animationDelay: '0.9s'
            }}>
                <div className="glass-card bg-api-green/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20">
                  <div className="flex items-center mb-3">
                    <Users className="text-white mr-3" size={22} />
                    <h3 className="text-white font-semibold text-lg">Community Focus</h3>
                  </div>
                  <p className="text-white font-medium text-base">200+ community leaders trained in conflict resolution and reconciliation strategies</p>
                </div>
              </div>
              
              {/* Ongoing Programs Card */}
              <div className="absolute bottom-0 right-8 rotate-2 animate-slide-right" style={{
              animationDelay: '1.1s'
            }}>
                <div className="glass-card bg-api-terracotta/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20">
                  <div className="flex items-center mb-3">
                    <Heart className="text-white mr-3" size={22} />
                    <h3 className="text-white font-semibold text-lg">Ongoing Programs</h3>
                  </div>
                  <p className="text-white font-medium text-base">12+ peace-building initiatives with measurable conflict reduction in fragile regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-api-darkgreen to-transparent z-0"></div>
    </div>;
};
export default Hero;
