
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
      {/* Layer 1: Deep Background with Patterns */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.1}px) translateX(${mousePosition.x * 0.01}px)`,
        }}
      />
      
      {/* Layer 2: Main Hero Image with Advanced Effects */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486"
          alt="Africa Peace Initiative team working together for peace"
          className="w-full h-full object-cover transition-all duration-1000"
          style={{
            transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.3}px)`,
            filter: `brightness(0.7) contrast(1.2) saturate(1.1) blur(${scrollY * 0.01}px)`,
          }}
          loading="lazy"
        />
        
        {/* Cinematic Vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, transparent 20%, rgba(0,0,0,0.8) 70%)`,
          }}
        />
      </div>

      {/* Layer 3: Dynamic Color Overlays */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-40"
        style={{
          background: `linear-gradient(${45 + scrollY * 0.1}deg, 
            hsl(var(--api-terracotta)) 0%, 
            hsl(var(--api-forestgreen)) 50%, 
            hsl(var(--api-gold)) 100%)`,
        }}
      />

      {/* Layer 4: Interactive Light Beam */}
      {!isMobile && (
        <div
          className="absolute pointer-events-none opacity-20 transition-opacity duration-500"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
            filter: 'blur(20px)',
          }}
        />
      )}

      {/* Layer 5: Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${scrollY * 0.1 + i * 30}deg)`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div 
              className={`w-${4 + i} h-${4 + i} bg-api-gold/30 rotate-45`}
              style={{
                clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'circle(50%)',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ParallaxBackground;
