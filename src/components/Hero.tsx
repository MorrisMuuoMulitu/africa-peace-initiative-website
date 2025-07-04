import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, Play, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/SocialLinks";
import FloatingImpactCards from "@/components/hero/FloatingImpactCards";

// Define types for mouse position
interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  // Handle visibility, mouse/touch events, and scroll-based parallax
  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const image = document.querySelector(".hero-image") as HTMLElement;
      if (image) {
        image.style.transform = `scale(${1 + scrollY / 1500})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Memoized scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <meta property="og:title" content="Africa Peace Initiative - Building Peace Across Africa" />
      <meta property="og:description" content="Uniting communities through dialogue, action, and diplomacy to create lasting peace." />
      <meta property="og:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />
      <meta property="og:url" content="https://africapeaceinitiative.org" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Africa Peace Initiative" />
      <meta name="twitter:description" content="Uniting communities through dialogue, action, and diplomacy to create lasting peace." />
      <meta name="twitter:image" content="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486" />

      {/* Inject CSS animations and styles */}
      <style>{`
        /* Animation Keyframes */
        @keyframes wave-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-20px) translateX(15px) rotate(2deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(-15px) rotate(-2deg); }
        }

        @keyframes glow-pulse {
          0% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 12px rgba(239, 68, 68, 0.6); }
          100% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.4); }
        }

        @keyframes lens-flare {
          0% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
          100% { opacity: 0.1; transform: scale(1); }
        }

        @keyframes svg-glow {
          0% { stroke: #ffffff; stroke-opacity: 0.2; }
          50% { stroke: #f97316; stroke-opacity: 0.35; }
          100% { stroke: #ffffff; stroke-opacity: 0.2; }
        }

        @keyframes text-fade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes particle-trail {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.65; }
          50% { transform: translateY(-10px) translateX(5px); opacity: 0.8; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.65; }
        }

        /* Animation Classes */
        .animate-wave-bg {
          background-size: 400% 400%;
          animation: wave-bg 6s ease infinite;
        }

        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-lens-flare { animation: lens-flare 3s ease-in-out infinite; }
        .animate-svg-glow { animation: svg-glow 4s ease-in-out infinite; }
        .animate-text-fade { animation: text-fade 2s ease-in-out forwards; }
        .animate-particle-trail { animation: particle-trail 4s ease-in-out infinite; }

        /* Styling */
        .hero-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: conic-gradient(from 45deg at 50% 50%, #1e293b, #3b4a6b, #1e293b);
        }

        .hero-glass-morphism {
          background: linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border-radius: 2rem;
          will-change: transform, opacity;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400% 400%;
          animation: wave-bg 6s ease infinite;
          text-shadow: 0 0 3px rgba(255, 255, 255, 0.15);
        }

        .hero-gradient-text-alt {
          background: linear-gradient(135deg, #fbd34d 0%, #fb923c 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400% 400%;
          animation: wave-bg 6s ease infinite;
          text-shadow: 0 0 3px rgba(255, 255, 255, 0.15);
        }

        .hero-button-primary {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 20px rgba(239, 68, 68, 0.5);
          border-radius: 1rem;
          will-change: transform, box-shadow;
        }

        .hero-button-primary:hover {
          background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 12px 30px rgba(239, 68, 68, 0.7);
        }

        .hero-button-primary:focus {
          outline: 3px solid #f97316;
          outline-offset: 3px;
        }

        .hero-button-secondary {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(255, 255, 255, 0.4);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 1rem;
          will-change: transform, box-shadow;
        }

        .hero-button-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.25);
        }

        .hero-button-secondary:focus {
          outline: 3px solid #ffffff;
          outline-offset: 3px;
        }

        .hero-brand-line {
          background: linear-gradient(90deg, #f97316 0%, #ef4444 100%);
          height: 5px;
          width: 70px;
          transition: width 0.4s ease, transform 0.4s ease;
          border-radius: 2px;
        }

        .hero-brand-line:hover {
          width: 90px;
          transform: scale(1.05);
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
          animation: float 6s ease-in-out infinite, particle-trail 4s ease-in-out infinite;
          opacity: 0.65;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          will-change: transform, opacity;
        }

        .hero-particle:nth-child(1) {
          top: 8%;
          left: 10%;
          width: 12px;
          height: 12px;
          background: #f97316;
          border-radius: 50%;
          animation-delay: 0s;
        }

        .hero-particle:nth-child(2) {
          top: 40%;
          right: 20%;
          width: 8px;
          height: 8px;
          background: #60a5fa;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation-delay: 1s;
        }

        .hero-particle:nth-child(3) {
          bottom: 20%;
          left: 30%;
          width: 10px;
          height: 10px;
          background: #34d399;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation-delay: 2s;
        }

        .hero-particle:nth-child(4) {
          bottom: 10%;
          right: 15%;
          width: 14px;
          height: 14px;
          background: #fb923c;
          clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
          animation-delay: 3s;
        }

        .hero-particle:nth-child(5) {
          top: 25%;
          left: 50%;
          width: 9px;
          height: 9px;
          background: #fef08a;
          border-radius: 50%;
          animation-delay: 1.5s;
        }

        .hero-image {
          transition: transform 0.8s ease, filter 0.8s ease;
          will-change: transform, filter;
        }

        .hero-image:hover {
          filter: brightness(0.95) contrast(1.2) saturate(1.4);
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.65) 100%);
        }

        .hotspot {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: transform 0.3s ease, opacity 0.3s ease;
          will-change: transform, opacity;
        }

        .hotspot:hover {
          transform: scale(1.2);
          opacity: 0.5;
        }

        .hotspot-tooltip {
          position: absolute;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
          z-index: 20;
        }

        .hotspot:hover .hotspot-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-indicator {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .scroll-indicator:hover {
          transform: scale(1.15);
          opacity: 1;
        }

        /* Reduced Motion for Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-wave-bg,
          .animate-float,
          .animate-float-delayed,
          .animate-glow-pulse,
          .animate-lens-flare,
          .animate-svg-glow,
          .animate-text-fade,
          .animate-particle-trail,
          .hero-image,
          .hero-button-primary,
          .hero-button-secondary,
          .hero-brand-line,
          .hotspot {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }

        /* Low Power Devices */
        @media (prefers-reduced-motion: no-preference) and (max-device-battery: 20%) {
          .hero-particle:nth-child(4),
          .hero-particle:nth-child(5) {
            display: none;
          }
          .animate-lens-flare {
            animation: none;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .hero-particle:nth-child(4),
          .hero-particle:nth-child(5) {
            display: none;
          }

          .hero-glass-morphism {
            backdrop-filter: blur(15px);
            border-radius: 1.5rem;
          }

          .hero-button-primary,
          .hero-button-secondary {
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
          }

          .scroll-indicator {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
          }

          .hero-image {
            object-fit: cover;
            object-position: center;
          }

          .hotspot {
            width: 30px;
            height: 30px;
          }

          .hotspot-tooltip {
            font-size: 10px;
            padding: 6px 10px;
          }

          .hero-subtitle {
            max-width: 100%;
            white-space: normal;
          }
        }
      `}</style>

      <section
        className="hero-section"
        aria-label="Hero section"
      >
        {/* Dynamic Background Particles */}
        <div className="hero-particles">
          <div className="hero-particle animate-particle-trail"></div>
          <div className="hero-particle animate-particle-trail"></div>
          <div className="hero-particle animate-particle-trail"></div>
          <div className="hero-particle animate-particle-trail"></div>
          <div className="hero-particle animate-particle-trail"></div>
        </div>

        {/* Hero Background with Group Photo */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486"
              srcSet="
                https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?tr=w-800 800w,
                https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?tr=w-1200 1200w,
                https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?tr=w-1600 1600w"
              sizes="(max-width: 768px) 800px, (max-width: 1200px) 1200px, 1600px"
              alt="Africa Peace Initiative team members working together"
              className="w-full h-full object-cover hero-image"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = "/fallback-hero.jpg")}
              style={{ contain: "paint composite" }}
            />
            <div className="vignette"></div>
            <div
              className="absolute inset-0 pointer-events-none opacity-15 animate-lens-flare"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 35%)`,
              }}
            ></div>
            {/* Hotspots for Interactive Image */}
            <div
              className="hotspot"
              style={{ top: isMobile ? "25%" : "30%", left: isMobile ? "15%" : "20%" }}
              onClick={() => alert("Community-driven peace initiatives")}
              aria-label="Community Impact Hotspot"
            >
              <span className="hotspot-tooltip" style={{ top: "-40px", left: "50%", transform: "translateX(-50%)" }}>
                Community Impact
              </span>
            </div>
            <div
              className="hotspot"
              style={{ top: isMobile ? "55%" : "60%", right: isMobile ? "20%" : "25%" }}
              onClick={() => alert("Fostering collaborative diplomacy")}
              aria-label="Diplomacy Hotspot"
            >
              <span className="hotspot-tooltip" style={{ top: "-40px", left: "50%", transform: "translateX(-50%)" }}>
                Collaborative Diplomacy
              </span>
            </div>
          </div>
          <div
            className="absolute inset-0 bg-no-repeat bg-center opacity-15 animate-svg-glow"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 10 C60 10, 70 20, 70 30 C70 40, 65 50, 55 55 C50 60, 45 60, 40 55 C30 50, 25 40, 25 30 C25 20, 35 10, 50 10 Z M40 30 C45 35, 55 35, 60 30 C55 25, 45 25, 40 30 Z M45 15 C50 18, 55 18, 60 15 C55 12, 50 12, 45 15 Z M30 45 C35 50, 40 50, 45 45 C40 40, 35 40, 30 45 Z' fill='none' stroke='%23ffffff' stroke-width='1.2' opacity='0.3'/></svg>")`,
            }}
          ></div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 min-h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12">
          {/* Left Content Area */}
          <div className="md:col-span-2 lg:col-span-5 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-0">
            <div
              className={`w-full max-w-lg transition-all duration-1200 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Glassmorphism Background Panel */}
              <div className="absolute inset-0 hero-glass-morphism"></div>
              <div className="relative z-10 p-6 sm:p-8">
                {/* Brand Mark with Animation */}
                <div className="flex items-center mb-8 group">
                  <div className="hero-brand-line mr-4 group-hover:w-20"></div>
                  <span className="text-white font-semibold tracking-widest uppercase text-sm flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-orange-400 animate-pulse" />
                    Africa Peace Initiative
                  </span>
                </div>

                {/* Main Heading with Gradient Text */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                  <span className="text-white drop-shadow-md">Building</span>{" "}
                  <span className="hero-gradient-text">Peace</span>{" "}
                  <span className="text-white drop-shadow-md">Across</span>{" "}
                  <span className="hero-gradient-text-alt">Africa</span>
                </h1>

                {/* Subtitle with Fade-In Effect */}
                <p
                  className="text-base sm:text-lg md:text-xl text-white/95 mb-8 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] leading-relaxed font-light animate-text-fade hero-subtitle"
                  id="hero-subtitle"
                >
                  {isMobile
                    ? "Uniting communities for lasting peace"
                    : "Uniting communities through dialogue, action, and diplomacy to create lasting peace"}
                </p>

                {/* Social Links */}
                <div className="mb-8">
                  <SocialLinks />
                </div>

                {/* Enhanced Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection("mission")}
                    className="hero-button-primary text-white font-semibold px-6 py-4 sm:px-8 sm:py-6 rounded-2xl text-base sm:text-lg group animate-glow-pulse"
                    aria-label="Learn about our approach"
                    aria-describedby="hero-subtitle"
                  >
                    Our Approach
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="hero-button-secondary text-white font-semibold px-6 py-4 sm:px-8 sm:py-6 rounded-2xl text-base sm:text-lg group animate-glow-pulse"
                    aria-label="Join our efforts"
                    aria-describedby="hero-subtitle"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Join Our Efforts
                  </Button>
                </div>

                {/* Enhanced Scroll Indicator */}
                <div
                  className="mt-12 flex items-center justify-center text-white/80 group cursor-pointer scroll-indicator"
                  onClick={() => scrollToSection("mission")}
                  tabIndex={0}
                  role="button"
                  aria-label="Scroll to explore our work"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      scrollToSection("mission");
                    }
                  }}
                >
                  <ArrowDown className="w-6 h-6 animate-bounce group-hover:animate-pulse" />
                  <span className="ml-2 text-sm font-medium group-hover:text-white transition-colors sm:hidden">
                    Explore
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area - Floating Impact Cards */}
          <div className="md:col-span-3 lg:col-span-7 relative">
            <div
              className={`transition-all duration-1200 ease-out delay-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <FloatingImpactCards />
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-5"></div>
      </section>
    </>
  );
};

export default Hero;