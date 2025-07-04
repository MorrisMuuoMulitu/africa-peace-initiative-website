import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, Play, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import FloatingImpactCards from "@/components/hero/FloatingImpactCards";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Inject CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        
        @keyframes gradient-bg {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 3s ease infinite;
        }
        
        .hero-glass-morphism {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 45px rgba(0,0,0,0.1);
        }
        
        .hero-gradient-text {
          background: linear-gradient(135deg, #fb923c 0%, #ef4444 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradient-bg 3s ease infinite;
        }
        
        .hero-gradient-text-alt {
          background: linear-gradient(135deg, #fbbf24 0%, #fb923c 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradient-bg 3s ease infinite;
        }
        
        .hero-button-primary {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
        }
        
        .hero-button-primary:hover {
          background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.4);
        }
        
        .hero-button-secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hero-button-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 35px rgba(255, 255, 255, 0.1);
        }
        
        .hero-brand-line {
          background: linear-gradient(90deg, #fb923c 0%, #ef4444 100%);
          height: 4px;
          width: 64px;
          transition: width 0.3s ease;
        }
        
        .hero-brand-line:hover {
          width: 80px;
        }
        
        .hero-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
          opacity: 0.6;
        }
        
        .hero-particle:nth-child(1) {
          top: 20%;
          left: 20%;
          width: 8px;
          height: 8px;
          background: #fb923c;
          animation-delay: 0s;
        }
        
        .hero-particle:nth-child(2) {
          top: 40%;
          right: 40%;
          width: 4px;
          height: 4px;
          background: #3b82f6;
          animation-delay: 2s;
        }
        
        .hero-particle:nth-child(3) {
          bottom: 40%;
          left: 40%;
          width: 6px;
          height: 6px;
          background: #10b981;
          animation-delay: 4s;
        }
        
        .hero-particle:nth-child(4) {
          bottom: 20%;
          right: 20%;
          width: 8px;
          height: 8px;
          background: #fbbf24;
          animation-delay: 6s;
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        aria-label="Hero section"
      >
        {/* Dynamic Background Particles */}
        <div className="hero-particles">
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
          <div className="hero-particle"></div>
        </div>

        {/* Hero Background with Group Photo */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486"
              alt="Africa Peace Initiative team members working together"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
              style={{
                contain: 'paint composite',
                filter: 'brightness(0.7) contrast(1.1) saturate(1.2)'
              }}
            />

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>

            {/* Dynamic Light Effect */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
              }}
            ></div>
          </div>

          {/* Subtle Africa outline */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center opacity-5 bg-contain"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M40 20 C 45 15, 55 15, 60 20 C 65 25, 65 35, 60 40 C 55 45, 45 45, 40 40 C 35 35, 35 25, 40 20 Z' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/></svg>")`
            }}
          ></div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 min-h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12">
          {/* Left Content Area */}
          <div className="md:col-span-2 lg:col-span-5 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-0">
            <div className={`w-full max-w-lg transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Glassmorphism Background Panel */}
              <div className="absolute inset-0 hero-glass-morphism rounded-3xl"></div>
              <div className="relative z-10 p-6 md:p-8">

                {/* Brand Mark with Animation */}
                <div className="flex items-center mb-6 group">
                  <div className="hero-brand-line mr-4 group-hover:w-20"></div>
                  <span className="text-white font-medium tracking-wider uppercase text-sm flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-orange-400 animate-pulse" />
                    Africa Peace Initiative
                  </span>
                </div>

                {/* Main Heading with Gradient Text */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white drop-shadow-lg">Building</span>{" "}
                  <span className="hero-gradient-text">Peace</span>{" "}
                  <span className="text-white drop-shadow-lg">Across</span>{" "}
                  <span className="hero-gradient-text-alt">Africa</span>
                </h1>

                {/* Subtitle with Enhanced Typography */}
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md leading-relaxed font-light">
                  {isMobile ?
                    "Creating stability through dialogue and community action" :
                    "Creating stability through dialogue, community action, and collaborative diplomacy—transforming conflict into cooperation"
                  }
                </p>

                {/* Social Links */}
                <div className="mb-8">
                  <SocialLinks />
                </div>

                {/* Enhanced Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={scrollToMission}
                    className="hero-button-primary text-white font-semibold px-8 py-6 rounded-2xl text-lg group"
                    aria-label="Learn about our approach"
                  >
                    Our Approach
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    })}
                    className="hero-button-secondary text-white font-semibold px-8 py-6 rounded-2xl text-lg group"
                    aria-label="Join our efforts"
                  >
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Join Our Efforts
                  </Button>
                </div>

                {/* Enhanced Scroll Indicator */}
                <div className="mt-16 hidden lg:flex items-center text-white/80 group cursor-pointer" onClick={scrollToMission}>
                  <ArrowDown className="mr-3 animate-bounce group-hover:animate-pulse" />
                  <span className="text-sm font-medium group-hover:text-white transition-colors">Scroll to explore our work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area - Floating Impact Cards */}
          <div className="md:col-span-3 lg:col-span-7 relative">
            <div className={`transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <FloatingImpactCards />
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-5"></div>
      </section>
    </>
  );
};

export default Hero;