
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Users, Award, Compass, Calendar } from "lucide-react";

const ImpactMetrics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [counts, setCounts] = useState({
    communities: 0,
    leaders: 0,
    years: 0,
    programs: 0,
  });

  const targetCounts = {
    communities: 48,
    leaders: 215,
    years: 7,
    programs: 12,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const intervalTime = 20;
      const steps = duration / intervalTime;
      
      const incrementCounts = () => {
        setCounts(prev => ({
          communities: Math.min(prev.communities + Math.ceil(targetCounts.communities / steps), targetCounts.communities),
          leaders: Math.min(prev.leaders + Math.ceil(targetCounts.leaders / steps), targetCounts.leaders),
          years: Math.min(prev.years + Math.ceil(targetCounts.years / steps), targetCounts.years),
          programs: Math.min(prev.programs + Math.ceil(targetCounts.programs / steps), targetCounts.programs),
        }));
      };
      
      const interval = setInterval(() => {
        incrementCounts();
        
        if (
          counts.communities === targetCounts.communities &&
          counts.leaders === targetCounts.leaders &&
          counts.years === targetCounts.years &&
          counts.programs === targetCounts.programs
        ) {
          clearInterval(interval);
        }
      }, intervalTime);
      
      return () => clearInterval(interval);
    }
  }, [inView, counts]);

  const metrics = [
    {
      icon: <Users className="h-12 w-12 text-api-terracotta" />,
      value: counts.communities,
      label: "Communities Impacted",
      suffix: "+",
    },
    {
      icon: <Award className="h-12 w-12 text-api-terracotta" />,
      value: counts.leaders,
      label: "Leaders Trained",
      suffix: "+",
    },
    {
      icon: <Calendar className="h-12 w-12 text-api-terracotta" />,
      value: counts.years,
      label: "Years of Impact",
      suffix: "",
    },
    {
      icon: <Compass className="h-12 w-12 text-api-terracotta" />,
      value: counts.programs,
      label: "Peace Programs",
      suffix: "+",
    },
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-gradient-to-b from-api-green/10 to-white transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-6">
            Our Impact By Numbers
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Through dedicated partnership and indigenous approaches to peacebuilding, 
            our work continues to transform communities across East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-lg border border-api-terracotta/10 flex flex-col items-center text-center transition-all duration-700 delay-${index * 100}`}
            >
              <div className="p-4 bg-api-cream/30 rounded-full mb-6">
                {metric.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-api-midnight mb-2">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-api-midnight/80 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;
