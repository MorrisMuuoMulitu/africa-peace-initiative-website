
import React, { useEffect, useState, useCallback } from 'react';

const MagneticFloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDesktop) return;
    
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
    });
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove, isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
      {/* Magnetic Light Orbs with African Colors */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-api-gold/25 via-api-gold/15 to-transparent rounded-full blur-3xl animate-pulse transition-all duration-1000 ease-out"
        style={{
          left: `${15 + mousePosition.x * 0.15}%`,
          top: `${25 + mousePosition.y * 0.08}%`,
          animationDuration: '5s'
        }}
      />
      
      <div 
        className="absolute w-80 h-80 bg-gradient-radial from-api-terracotta/20 via-api-terracotta/10 to-transparent rounded-full blur-2xl animate-pulse transition-all duration-1200 ease-out"
        style={{
          right: `${10 + mousePosition.x * 0.12}%`,
          bottom: `${15 + mousePosition.y * 0.1}%`,
          animationDuration: '7s',
          animationDelay: '2s'
        }}
      />

      <div 
        className="absolute w-64 h-64 bg-gradient-radial from-api-forestgreen/15 via-api-forestgreen/8 to-transparent rounded-full blur-xl animate-pulse transition-all duration-800 ease-out"
        style={{
          left: `${60 + mousePosition.x * 0.08}%`,
          top: `${60 + mousePosition.y * 0.06}%`,
          animationDuration: '6s',
          animationDelay: '4s'
        }}
      />

      {/* Floating Particles with Magnetic Behavior */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float transition-all duration-500 ease-out"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            backgroundColor: i % 3 === 0 ? 'rgba(249, 115, 22, 0.6)' : 
                            i % 3 === 1 ? 'rgba(255, 255, 255, 0.4)' : 
                            'rgba(224, 122, 95, 0.5)',
            left: `${(i * 4.5) % 90 + 5 + (mousePosition.x * 0.03)}%`,
            top: `${(i * 3.7) % 80 + 10 + (mousePosition.y * 0.02)}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + (i % 4)}s`,
            filter: 'blur(0.5px)',
            boxShadow: i % 3 === 0 ? '0 0 10px rgba(249, 115, 22, 0.8)' : 
                      i % 3 === 1 ? '0 0 8px rgba(255, 255, 255, 0.6)' : 
                      '0 0 6px rgba(224, 122, 95, 0.7)'
          }}
        />
      ))}

      {/* African-Inspired Geometric Shapes */}
      <div 
        className="absolute w-32 h-32 border-2 border-api-gold/30 rotate-45 animate-spin-slow transition-all duration-700 ease-out"
        style={{
          left: `${20 + mousePosition.x * 0.05}%`,
          top: `${30 + mousePosition.y * 0.03}%`,
          transform: `rotate(${45 + mousePosition.x * 0.1}deg)`
        }}
      />
      
      <div 
        className="absolute w-24 h-24 border border-white/20 rotate-12 animate-pulse transition-all duration-900 ease-out"
        style={{
          right: `${25 + mousePosition.x * 0.07}%`,
          bottom: `${35 + mousePosition.y * 0.04}%`,
          animationDuration: '8s',
          transform: `rotate(${12 + mousePosition.y * 0.1}deg)`
        }}
      />

      {/* Adinkra Symbol-Inspired Elements */}
      <div 
        className="absolute w-20 h-20 transition-all duration-600 ease-out"
        style={{
          right: `${15 + mousePosition.x * 0.06}%`,
          top: `${45 + mousePosition.y * 0.05}%`
        }}
      >
        <div className="w-full h-full border-2 border-api-terracotta/40 rounded-full animate-ping" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute inset-3 border border-api-gold/30 rounded-full animate-ping" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute inset-6 border border-white/25 rounded-full animate-ping" 
             style={{ animationDuration: '3s', animationDelay: '2s' }} />
      </div>

      {/* Dynamic Lines with Magnetic Effect */}
      <div 
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-api-gold/40 to-transparent animate-pulse transition-all duration-1000 ease-out"
        style={{
          top: `${35 + Math.sin(Date.now() / 3000) * 15 + mousePosition.y * 0.1}%`,
          animationDuration: '4s',
          transform: `rotate(${mousePosition.x * 0.05}deg)`
        }}
      />
      
      <div 
        className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse transition-all duration-1200 ease-out"
        style={{
          left: `${65 + Math.cos(Date.now() / 3500) * 20 + mousePosition.x * 0.08}%`,
          animationDuration: '5s',
          animationDelay: '2s',
          transform: `rotate(${mousePosition.y * 0.03}deg)`
        }}
      />

      {/* Ambient Glow Effect */}
      <div 
        className="absolute w-full h-full bg-gradient-radial from-api-gold/5 via-transparent to-api-terracotta/5 animate-pulse transition-all duration-2000 ease-out"
        style={{
          animationDuration: '8s',
          transform: `translate(${mousePosition.x * 0.02}%, ${mousePosition.y * 0.02}%)`
        }}
      />
    </div>
  );
};

export default MagneticFloatingElements;
