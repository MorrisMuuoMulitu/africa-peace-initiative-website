
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Sparkles, Users, Globe } from "lucide-react";

const FloatingImpactCards = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [counters, setCounters] = useState({ builders: 0, countries: 0, lives: 0 });

  // Enhanced animated counter effect
  useEffect(() => {
    if (inView) {
      const targetValues = { builders: 500, countries: 15, lives: 1000 };
      const duration = 2500;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = Math.min(step / steps, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        
        setCounters({
          builders: Math.floor(targetValues.builders * easeOut),
          countries: Math.floor(targetValues.countries * easeOut),
          lives: Math.floor(targetValues.lives * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const impactCards = [
    {
      title: "Peace Builders",
      value: counters.builders,
      icon: Users,
      color: "from-api-terracotta via-api-clay to-api-terracotte",
      description: "Community leaders driving change"
    },
    {
      title: "Countries Reached", 
      value: counters.countries,
      icon: Globe,
      color: "from-api-forestgreen via-api-sage to-api-brightgreen",
      description: "Nations united for peace"
    },
    {
      title: "Lives Transformed",
      value: counters.lives,
      icon: Sparkles,
      color: "from-api-gold via-api-sand to-api-cream",
      description: "Individual stories of hope"
    }
  ];

  return (
    <div ref={ref} className="relative h-full min-h-[400px]">
      {/* Enhanced Desktop 3D Cards */}
      <div className="hidden lg:block relative h-full">
        {impactCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index}
              className={`absolute transition-all duration-1000 transform-3d hover-lift ${
                inView 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-20 opacity-0'
              }`}
              style={{ 
                top: `${index * 25 + 10}%`,
                right: `${index % 2 === 0 ? '5%' : '25%'}`,
                transform: `translateZ(${index * 30}px) rotateY(${index * 10 - 10}deg)`,
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className={`glass-morphism-dark p-8 rounded-3xl border border-white/20 shadow-2xl hover-glow bg-gradient-to-br ${card.color} min-w-[280px]`}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-2xl mr-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1 animate-text-glow">
                      {card.value}+
                    </div>
                    <div className="text-white/90 font-semibold text-lg">
                      {card.title}
                    </div>
                  </div>
                </div>
                <div className="text-white/80 text-sm leading-relaxed">
                  {card.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Mobile Horizontal Slider */}
      <div className="lg:hidden">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4 scrollbar-hide">
          {impactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="flex-none w-72 snap-center">
                <div className={`glass-morphism-dark p-6 rounded-2xl shadow-xl bg-gradient-to-br ${card.color} hover-lift`}>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-white/20 rounded-xl mr-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        {card.value}+
                      </div>
                      <div className="text-white/90 font-semibold">
                        {card.title}
                      </div>
                    </div>
                  </div>
                  <div className="text-white/80 text-sm">
                    {card.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FloatingImpactCards;
