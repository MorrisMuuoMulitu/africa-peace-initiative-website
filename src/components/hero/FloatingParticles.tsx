
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 4,
      color: ['#f97316', '#fbbf24', '#34d399', '#60a5fa'][Math.floor(Math.random() * 4)],
      speed: Math.random() * 2 + 1,
      direction: Math.random() * 360,
    }));

    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        const distanceToMouse = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        );

        let newX = particle.x + Math.cos(particle.direction) * particle.speed;
        let newY = particle.y + Math.sin(particle.direction) * particle.speed;

        // Mouse attraction
        if (distanceToMouse < 100) {
          const angle = Math.atan2(mousePosition.y - particle.y, mousePosition.x - particle.x);
          newX += Math.cos(angle) * 0.5;
          newY += Math.sin(angle) * 0.5;
        }

        // Boundary collision
        if (newX < 0 || newX > window.innerWidth) {
          particle.direction = Math.PI - particle.direction;
        }
        if (newY < 0 || newY > window.innerHeight) {
          particle.direction = -particle.direction;
        }

        return {
          ...particle,
          x: Math.max(0, Math.min(window.innerWidth, newX)),
          y: Math.max(0, Math.min(window.innerHeight, newY)),
        };
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(animateParticles, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [isMobile, mousePosition.x, mousePosition.y]);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60 animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transition: 'all 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
