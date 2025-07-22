
import React, { useEffect, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import ParallaxBackground from "@/components/hero/ParallaxBackground";
import UltimateTypography from "@/components/hero/UltimateTypography";
import InteractiveHotspots from "@/components/hero/InteractiveHotspots";
import FloatingParticles from "@/components/hero/FloatingParticles";
import MagneticFloatingElements from "@/components/hero/MagneticFloatingElements";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import CinematicImageSlider from "@/components/hero/CinematicImageSlider";

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
      {/* Enhanced SEO and Social Meta Tags */}
      <meta property="og:title" content="Africa Peace Initiative - We Believe Peace Is Possible In The Great Lakes Region" />
      <meta property="og:description" content="Building bridges of understanding, fostering dialogue, and creating lasting peace through collaborative action and diplomatic excellence." />
      <meta property="og:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />
      <meta property="og:url" content="https://africapeaceinitiative.org" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Africa Peace Initiative - We Believe Peace Is Possible" />
      <meta name="twitter:description" content="Building lasting peace in the Great Lakes region through dialogue and collaboration." />
      <meta name="twitter:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />

      <section className="relative min-h-screen overflow-hidden" aria-label="Hero section - Africa Peace Initiative">
        {/* Cinematic Image Slider Background */}
        <CinematicImageSlider />
        
        {/* Minimal Pattern Overlays */}
        <ParallaxBackground />
        
        {/* Enhanced Interactive Elements */}
        <MagneticFloatingElements />
        {!isMobile && <InteractiveHotspots />}
        {!isMobile && <FloatingParticles />}

        {/* Main Content Container - Ultimate Typography */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="w-full flex justify-start">
              <UltimateTypography onScrollToSection={scrollToSection} />
            </div>
          </div>
        </div>

        {/* Social Links - Enhanced Design */}
        <div className="absolute bottom-8 left-6 sm:left-8 lg:left-12 xl:left-16 z-30">
          <div className={`transition-all duration-1500 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="backdrop-blur-md bg-black/20 p-4 rounded-2xl border border-white/20 shadow-2xl">
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
