
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    // Staggered entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

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
      <meta property="og:title" content="Africa Peace Initiative - Building Peace Across Africa" />
      <meta property="og:description" content="Uniting communities through dialogue, action, and diplomacy to create lasting peace across 15+ African nations." />
      <meta property="og:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />
      <meta property="og:url" content="https://africapeaceinitiative.org" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Africa Peace Initiative - Building Peace Across Africa" />
      <meta name="twitter:description" content="Uniting communities through dialogue, action, and diplomacy to create lasting peace." />
      <meta name="twitter:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />

      <section className="relative min-h-screen overflow-hidden" aria-label="Hero section showcasing Africa Peace Initiative">
        {/* Enhanced Multi-Layer Parallax Background System */}
        <ParallaxBackground />
        
        {/* Interactive Hotspots */}
        <InteractiveHotspots />
        
        {/* Floating Particles (Desktop Only) */}
        <FloatingParticles />

        {/* Clean Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-5" />

        {/* Dynamic Mouse Following Light */}
        {!isMobile && (
          <div
            className="absolute pointer-events-none opacity-20 transition-opacity duration-500 z-5"
            style={{
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(251,191,36,0.1) 40%, transparent 70%)',
              transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
              filter: 'blur(60px)',
            }}
          />
        )}

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Left-aligned layout matching reference design */}
            <div className="w-full">
              <EnhancedTypography onScrollToSection={scrollToSection} />
            </div>
          </div>
        </div>

        {/* Social Links - Positioned at bottom left */}
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 xl:left-12 z-20">
          <div className={`transition-all duration-1200 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="backdrop-blur-sm bg-white/5 p-3 rounded-xl border border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <ScrollIndicator onScrollToSection={scrollToSection} />

        {/* Subtle Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-5" />
      </section>
    </>
  );
};

export default Hero;
