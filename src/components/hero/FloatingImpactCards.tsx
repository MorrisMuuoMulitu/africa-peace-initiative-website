import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FloatingImpactCards = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [counters, setCounters] = useState({ builders: 0, countries: 0, lives: 0 });

  // Animated counter effect
  useEffect(() => {
    if (inView) {
      const targetValues = { builders: 500, countries: 15, lives: 1000 };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          builders: Math.floor(targetValues.builders * progress),
          countries: Math.floor(targetValues.countries * progress),
          lives: Math.floor(targetValues.lives * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative h-full">
      {/* Desktop 3D Stacked Cards */}
      <div className="hidden md:block relative h-full">
        {/* Peace Builders Card */}
        <div 
          className={`absolute top-0 right-0 transform transition-all duration-1000 ${
            inView ? 'translate-x-0 opacity-100 rotate-3' : 'translate-x-20 opacity-0 rotate-12'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="backdrop-blur-md bg-api-terracotta/90 p-6 rounded-xl shadow-2xl border border-api-gold/20 hover:border-api-gold/40 transition-all duration-300 hover:scale-105 hover:rotate-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-montserrat">
                {counters.builders}+
              </div>
              <div className="text-api-cream font-medium">Peace Builders</div>
            </div>
          </div>
        </div>

        {/* Countries Card */}
        <div 
          className={`absolute top-1/3 left-8 transform transition-all duration-1000 delay-200 ${
            inView ? 'translate-x-0 opacity-100 -rotate-2' : 'translate-x-20 opacity-0 rotate-8'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="backdrop-blur-md bg-api-forestgreen/90 p-6 rounded-xl shadow-2xl border border-api-sage/20 hover:border-api-sage/40 transition-all duration-300 hover:scale-105 hover:-rotate-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-api-cream mb-2 font-montserrat">
                {counters.countries}+
              </div>
              <div className="text-api-cream font-medium">Countries</div>
            </div>
          </div>
        </div>

        {/* Lives Impacted Card */}
        <div 
          className={`absolute bottom-16 right-16 transform transition-all duration-1000 delay-400 ${
            inView ? 'translate-x-0 opacity-100 rotate-1' : 'translate-x-20 opacity-0 -rotate-8'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="backdrop-blur-md bg-api-darkgreen/90 p-6 rounded-xl shadow-2xl border border-api-brightgreen/20 hover:border-api-brightgreen/40 transition-all duration-300 hover:scale-105 hover:rotate-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-api-cream mb-2 font-montserrat">
                {counters.lives}+
              </div>
              <div className="text-api-cream font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Slider */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 scrollbar-hide">
          <div className="flex-none w-48 snap-center backdrop-blur-md bg-api-terracotta/90 p-4 rounded-xl shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1 font-montserrat">
                {counters.builders}+
              </div>
              <div className="text-api-cream text-sm font-medium">Peace Builders</div>
            </div>
          </div>
          
          <div className="flex-none w-48 snap-center backdrop-blur-md bg-api-forestgreen/90 p-4 rounded-xl shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-api-cream mb-1 font-montserrat">
                {counters.countries}+
              </div>
              <div className="text-api-cream text-sm font-medium">Countries</div>
            </div>
          </div>
          
          <div className="flex-none w-48 snap-center backdrop-blur-md bg-api-darkgreen/90 p-4 rounded-xl shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-api-cream mb-1 font-montserrat">
                {counters.lives}+
              </div>
              <div className="text-api-cream text-sm font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImpactCards;