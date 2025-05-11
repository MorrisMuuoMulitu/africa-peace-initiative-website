
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Users, Award, Compass, Calendar } from "lucide-react";

const ImpactMetrics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [counts, setCounts] = useState({
    countries: 0,
    attendees: 0,
    months: 0,
    events: 0,
  });

  const targetCounts = {
    countries: 5,
    attendees: 57,
    months: 3,
    events: 1,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const intervalTime = 20;
      const steps = duration / intervalTime;
      
      const incrementCounts = () => {
        setCounts(prev => ({
          countries: Math.min(prev.countries + Math.ceil(targetCounts.countries / steps), targetCounts.countries),
          attendees: Math.min(prev.attendees + Math.ceil(targetCounts.attendees / steps), targetCounts.attendees),
          months: Math.min(prev.months + Math.ceil(targetCounts.months / steps), targetCounts.months),
          events: Math.min(prev.events + Math.ceil(targetCounts.events / steps), targetCounts.events),
        }));
      };
      
      const interval = setInterval(() => {
        incrementCounts();
        
        if (
          counts.countries === targetCounts.countries &&
          counts.attendees === targetCounts.attendees &&
          counts.months === targetCounts.months &&
          counts.events === targetCounts.events
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
      value: counts.countries,
      label: "African Nations",
      suffix: "",
    },
    {
      icon: <Award className="h-12 w-12 text-api-terracotta" />,
      value: counts.attendees,
      label: "Event Participants",
      suffix: "",
    },
    {
      icon: <Calendar className="h-12 w-12 text-api-terracotta" />,
      value: counts.months,
      label: "Months of Operation",
      suffix: "",
    },
    {
      icon: <Compass className="h-12 w-12 text-api-terracotta" />,
      value: counts.events,
      label: "Events Hosted",
      suffix: "",
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
            Our Journey So Far
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Though we're just getting started, our inaugural event has already brought together key 
            stakeholders from across East Africa to address critical regional issues.
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
