
import React from "react";
import { MessageSquare, Lightbulb, Handshake } from "lucide-react";
import { useInView } from "react-intersection-observer";

const FocusAreaCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-api-forest border-b-4 border-api-terracotta rounded-lg shadow-xl p-8 flex flex-col items-center transform transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-api-gold mb-6 p-4 bg-api-midnight bg-opacity-30 rounded-full">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-white mb-3">{title}</h3>
      <p className="text-white opacity-90 text-center">{description}</p>
    </div>
  );
};

const FocusAreas = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="py-20 px-4 sm:px-6 bg-api-midnight">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">Our Focus Areas</h2>
          <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
            Strategic initiatives that guide our approach to building lasting peace
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <FocusAreaCard 
            title="Dialogue & Collaboration" 
            description="Convening diverse stakeholders to foster inclusive conversations and partnerships that transcend borders and divisions."
            icon={MessageSquare}
            delay={0}
          />
          <FocusAreaCard 
            title="Conflict Understanding" 
            description="Analyzing the complex roots and regional impacts of conflicts through research, local engagement, and contextual knowledge."
            icon={Lightbulb}
            delay={200}
          />
          <FocusAreaCard 
            title="Solutions for Stability" 
            description="Co-creating innovative, sustainable pathways to peace that reflect African realities and empower local communities."
            icon={Handshake}
            delay={400}
          />
        </div>
      </div>
    </div>
  );
};

export default FocusAreas;
