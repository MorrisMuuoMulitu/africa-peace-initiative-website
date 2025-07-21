import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dynamic Light Orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-api-gold/20 via-api-gold/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{
          left: `${20 + mousePosition.x * 0.1}%`,
          top: `${30 + mousePosition.y * 0.05}%`,
          animationDuration: '4s'
        }}
      />
      
      <div 
        className="absolute w-64 h-64 bg-gradient-radial from-blue-500/15 via-blue-400/8 to-transparent rounded-full blur-2xl animate-pulse"
        style={{
          right: `${15 + mousePosition.x * 0.08}%`,
          bottom: `${20 + mousePosition.y * 0.06}%`,
          animationDuration: '6s',
          animationDelay: '2s'
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-api-gold/40 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-api-gold/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/3 right-1/5 w-24 h-24 border border-white/15 rotate-12 animate-pulse" 
           style={{ animationDuration: '5s' }} />
      
      {/* Africa-inspired patterns */}
      <div className="absolute top-1/2 right-1/4 w-16 h-16">
        <div className="w-full h-full border-2 border-api-gold/25 rounded-full animate-ping" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute inset-2 border border-white/20 rounded-full animate-ping" 
             style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Dynamic Lines */}
      <div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-api-gold/30 to-transparent transform origin-left animate-pulse"
        style={{
          top: `${40 + Math.sin(Date.now() / 2000) * 10}%`,
          animationDuration: '3s'
        }}
      />
      
      <div 
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform origin-top animate-pulse"
        style={{
          left: `${60 + Math.cos(Date.now() / 2500) * 15}%`,
          animationDuration: '4s',
          animationDelay: '1.5s'
        }}
      />
    </div>
  );
};

export default FloatingElements;