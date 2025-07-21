
import React from "react";

const ParallaxBackground = () => {
  return (
    <>
      {/* Subtle Pattern Overlay - Very Minimal */}
      <div 
        className="absolute inset-0 opacity-3 pointer-events-none z-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20L70 40L50 60L30 40L50 20Z' fill='%23f97316' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Minimal Geometric Accent - Single Element */}
      <div className="absolute top-1/3 right-8 opacity-5 pointer-events-none z-5 hidden lg:block">
        <div 
          className="w-16 h-16 bg-api-gold/20 rotate-45"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      </div>
    </>
  );
};

export default ParallaxBackground;
