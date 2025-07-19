
import React, { useEffect, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import ParallaxBackground from "@/components/hero/ParallaxBackground";
import EnhancedTypography from "@/components/hero/EnhancedTypography";
import InteractiveHotspots from "@/components/hero/InteractiveHotspots";
import FloatingParticles from "@/components/hero/FloatingParticles";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import FloatingImpactCards from "@/components/hero/FloatingImpactCards";

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

        {/* Dynamic Mouse Following Light */}
        {!isMobile && (
          <div
            className="absolute pointer-events-none opacity-30 transition-opacity duration-500 z-5"
            style={{
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(251,191,36,0.2) 40%, transparent 70%)',
              transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
              filter: 'blur(40px)',
            }}
          />
        )}

        {/* Animated African Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-5">
          <div className="absolute inset-0 animate-float"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15L65 35L85 35L70 50L75 70L50 60L25 70L30 50L15 35L35 35Z' fill='%23f97316' fill-opacity='0.3'/%3E%3C/svg%3E")`,
                 backgroundSize: '80px 80px',
               }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              
              {/* Main Content - Enhanced Typography */}
              <div className={`max-w-4xl mx-auto transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <EnhancedTypography onScrollToSection={scrollToSection} />
                
                {/* Social Links */}
                <div className="mt-8 flex justify-center">
                  <div className="glass-morphism-ultra p-4 rounded-2xl border border-white/10 hover-lift">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <ScrollIndicator onScrollToSection={scrollToSection} />

        {/* Refined Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default Hero;
