
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Hero Image - Clean and Prominent */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/Hero/API-02901.jpg?updatedAt=1751614266486"
          alt="Africa Peace Initiative team working together for peace"
          className="w-full h-full object-cover transition-all duration-1000"
          style={{
            transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.1}px)`,
            filter: `brightness(1.1) contrast(1.1) saturate(1.1)`,
          }}
          loading="lazy"
        />
      </div>

      {/* Subtle Pattern Overlay - Minimal */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20L70 40L50 60L30 40L50 20Z' fill='%23f97316' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          transform: `translateY(${scrollY * 0.03}px)`,
        }}
      />

      {/* Clean Geometric Accents - Reduced */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-5"
              style={{
                top: `${20 + i * 20}%`,
                right: `${10 + i * 15}%`,
                transform: `translateY(${scrollY * (0.05 + i * 0.02)}px) rotate(${scrollY * 0.02 + i * 45}deg)`,
              }}
            >
              <div 
                className="w-8 h-8 bg-api-gold/30"
                style={{
                  clipPath: i % 2 === 0 
                    ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                    : 'circle(50%)',
                }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ParallaxBackground;
