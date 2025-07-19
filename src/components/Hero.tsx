import React, { useEffect, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import ParallaxBackground from "@/components/hero/ParallaxBackground";
import EnhancedTypography from "@/components/hero/EnhancedTypography";
import InteractiveHotspots from "@/components/hero/InteractiveHotspots";
import FloatingParticles from "@/components/hero/FloatingParticles";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    // Staggered entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, []);
  return <>
      {/* SEO and Social Meta Tags */}
      <meta property="og:title" content="Africa Peace Initiative - Building Peace Across Africa" />
      <meta property="og:description" content="Uniting communities through dialogue, action, and diplomacy to create lasting peace across 15+ African nations." />
      <meta property="og:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />
      <meta property="og:url" content="https://africapeaceinitiative.org" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Africa Peace Initiative - Building Peace Across Africa" />
      <meta name="twitter:description" content="Uniting communities through dialogue, action, and diplomacy to create lasting peace." />
      <meta name="twitter:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />

      <section className="relative min-h-screen overflow-hidden" aria-label="Hero section showcasing Africa Peace Initiative">
        {/* Multi-Layer Parallax Background System */}
        <ParallaxBackground />
        
        {/* Interactive Hotspots */}
        <InteractiveHotspots />
        
        {/* Floating Particles (Desktop Only) */}
        <FloatingParticles />

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content - Enhanced Typography */}
              <div className={`lg:col-span-7 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <EnhancedTypography onScrollToSection={scrollToSection} />
                
                {/* Social Links */}
                <div className="mt-8 flex justify-center lg:justify-start">
                  <div className="backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Right Content - Enhanced Impact Display */}
              <div className={`lg:col-span-5 transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <div className="relative">
                  {/* 3D Floating Cards Stack */}
                  <div className="space-y-6 perspective-1000">
                    {[{
                    title: "Peace Dialogues",
                    value: "250+",
                    desc: "Community conversations",
                    color: "from-api-terracotta to-api-clay",
                    delay: "0ms"
                  }, {
                    title: "Youth Programs",
                    value: "100+",
                    desc: "Next-gen peace builders",
                    color: "from-api-gold to-api-sand",
                    delay: "200ms"
                  }, {
                    title: "Policy Changes",
                    value: "25+",
                    desc: "Systemic improvements",
                    color: "from-api-forestgreen to-api-sage",
                    delay: "400ms"
                  }].map((card, index) => {})}
                  </div>

                  {/* Floating Achievement Badges */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-api-gold to-api-terracotta rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl animate-pulse">
                    15+
                    <span className="text-xs ml-1">Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <ScrollIndicator onScrollToSection={scrollToSection} />

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent pointer-events-none" />
      </section>
    </>;
};
export default Hero;