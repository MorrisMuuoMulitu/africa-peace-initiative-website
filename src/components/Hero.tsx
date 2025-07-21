
import React, { useEffect, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import ParallaxBackground from "@/components/hero/ParallaxBackground";
import EnhancedTypography from "@/components/hero/EnhancedTypography";
import InteractiveHotspots from "@/components/hero/InteractiveHotspots";
import FloatingParticles from "@/components/hero/FloatingParticles";
import FloatingElements from "@/components/hero/FloatingElements";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import HeroImageSlider from "@/components/hero/HeroImageSlider";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
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

  return (
    <>
      {/* SEO and Social Meta Tags */}
      <meta property="og:title" content="Africa Peace Initiative - We believe peace is possible in the Great Lakes region" />
      <meta property="og:description" content="Building peace across the Great Lakes region through dialogue, action, and diplomacy." />
      <meta property="og:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />
      <meta property="og:url" content="https://africapeaceinitiative.org" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Africa Peace Initiative - Building Peace in the Great Lakes" />
      <meta name="twitter:description" content="We believe peace is possible in the Great Lakes region." />
      <meta name="twitter:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />

      <section className="relative min-h-screen overflow-hidden" aria-label="Hero section - Africa Peace Initiative">
        {/* Dynamic Image Slider Background */}
        <HeroImageSlider />
        
        {/* Subtle Pattern Overlays */}
        <ParallaxBackground />
        
        {/* Enhanced Interactive Elements */}
        <FloatingElements />
        {!isMobile && <InteractiveHotspots />}
        {!isMobile && <FloatingParticles />}

        {/* Main Content Container - Left Aligned */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="w-full flex justify-start">
              <EnhancedTypography onScrollToSection={scrollToSection} />
            </div>
          </div>
        </div>

        {/* Social Links - Bottom Left */}
        <div className="absolute bottom-8 left-6 sm:left-8 lg:left-12 xl:left-16 z-20">
          <div className={`transition-all duration-1200 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="backdrop-blur-sm bg-white/5 p-3 rounded-xl border border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator onScrollToSection={scrollToSection} />
      </section>
    </>
  );
};

export default Hero;
