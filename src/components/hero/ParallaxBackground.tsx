
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <>
      {/* Layer 1: Deep Background with Subtle Patterns */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * 0.005}px)`,
        }}
      />
      
      {/* Layer 2: Main Hero Image with Enhanced Visibility */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486"
          alt="Africa Peace Initiative team working together for peace"
          className="w-full h-full object-cover transition-all duration-1000"
          style={{
            transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.2}px)`,
            filter: `brightness(0.9) contrast(1.15) saturate(1.05) blur(${scrollY * 0.005}px)`,
          }}
          loading="lazy"
        />
        
        {/* Subtle Cinematic Vignette - Much Lighter */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, transparent 30%, rgba(0,0,0,0.3) 80%)`,
          }}
        />
      </div>

      {/* Layer 3: Gentle Color Overlays */}
      <div 
        className="absolute inset-0 mix-blend-soft-light opacity-15"
        style={{
          background: `linear-gradient(${35 + scrollY * 0.05}deg, 
            hsl(15 85% 65% / 0.1) 0%, 
            hsl(145 60% 45% / 0.05) 50%, 
            hsl(45 90% 60% / 0.1) 100%)`,
        }}
      />

      {/* Layer 4: Enhanced Interactive Light Beam */}
      {!isMobile && (
        <div
          className="absolute pointer-events-none opacity-25 transition-opacity duration-700"
          style={{
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(251,191,36,0.1) 50%, transparent 70%)',
            transform: `translate(${mousePosition.x - 125}px, ${mousePosition.y - 125}px)`,
            filter: 'blur(30px)',
          }}
        />
      )}

      {/* Layer 5: Dynamic Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              top: `${15 + i * 12}%`,
              left: `${8 + i * 11}%`,
              transform: `translateY(${scrollY * (0.08 + i * 0.03)}px) rotate(${scrollY * 0.05 + i * 25}deg)`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            <div 
              className={`w-${3 + i % 3} h-${3 + i % 3} bg-api-gold/20 rotate-45`}
              style={{
                clipPath: i % 3 === 0 
                  ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                  : i % 3 === 1
                  ? 'circle(50%)'
                  : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                filter: `blur(${i % 2}px)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 6: Cultural Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 animate-morph-bg"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 20L80 40L100 20L80 0L60 20ZM20 60L40 80L20 100L0 80L20 60ZM100 60L120 80L100 100L80 80L100 60ZM60 100L80 120L60 140L40 120L60 100Z' fill='%23f97316' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          transform: `translateY(${scrollY * 0.02}px) rotate(${scrollY * 0.01}deg)`,
        }}
      />
    </>
  );
};

export default ParallaxBackground;
