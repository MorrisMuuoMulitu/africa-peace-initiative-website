
import React, { useEffect, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import ParallaxBackground from "@/components/hero/ParallaxBackground";
import ModernHeroTypography from "@/components/hero/ModernHeroTypography";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import CleanImageSlider from "@/components/hero/CleanImageSlider";
import InteractiveHeroHotspots from "@/components/hero/InteractiveHeroHotspots";
import MagneticFloatingElements from "@/components/hero/MagneticFloatingElements";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
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

  return (
    <>
      {/* Enhanced SEO and Social Meta Tags */}
      <meta property="og:title" content="Africa Peace Initiative - We Believe Peace Is Possible In The Great Lakes Regions And Africa" />
      <meta property="og:description" content="We are committed to work together towards sustainable peace through unity, dialogue, and collaborative action." />
      <meta property="og:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />
      <meta property="og:url" content="https://africapeaceinitiative.org" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Africa Peace Initiative - We Believe Peace Is Possible" />
      <meta name="twitter:description" content="Building lasting peace in the Great Lakes regions and Africa through unity and collaboration." />
      <meta name="twitter:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />

      <section className="relative min-h-screen overflow-hidden" aria-label="Hero section - Africa Peace Initiative">
        {/* Enhanced Image Slider Background with Dynamic Color Temperature */}
        <CleanImageSlider />
        
        {/* Interactive Hotspots */}
        <InteractiveHeroHotspots />
        
        {/* Magnetic Floating Elements (Desktop Only) */}
        <MagneticFloatingElements />
        
        {/* Subtle Pattern Overlay */}
        <ParallaxBackground />

        {/* Main Content Container - Revolutionary Asymmetrical Layout */}
        <div className="relative z-20 min-h-screen">
          <div className="container mx-auto h-full">
            <ModernHeroTypography onScrollToSection={scrollToSection} />
          </div>
        </div>

        {/* Enhanced Social Links with Mobile-Optimized Positioning */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 sm:bottom-28 sm:left-1/2 sm:transform sm:-translate-x-1/2 lg:bottom-6 lg:left-12 lg:transform-none xl:left-16 z-30">
          <div className={`transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="glass-morphism-modern p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/30 hover:border-white/40 transition-all duration-300 hover:scale-105 bg-black/40 backdrop-blur-md shadow-2xl">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <ScrollIndicator onScrollToSection={scrollToSection} />

        {/* Dynamic Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 pointer-events-none z-5" />
      </section>
    </>
  );
};

export default Hero;
