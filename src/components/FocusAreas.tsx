
import React from "react";
import { MessageSquare, Lightbulb, Handshake } from "lucide-react";

const FocusAreaCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <div className="bg-api-forest border-2 border-api-terracotta rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-api-terracotta mb-4">
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-api-ivory mb-2">{title}</h3>
      <p className="text-api-ivory text-center">{description}</p>
    </div>
  );
};

const FocusAreas = () => {
  return (
    <div className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-montserrat font-bold text-api-terracotta text-center mb-12">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FocusAreaCard 
            title="Dialogue & Collaboration" 
            description="Convening stakeholders for peace."
            icon={MessageSquare}
          />
          <FocusAreaCard 
            title="Conflict Understanding" 
            description="Analyzing roots and regional impacts."
            icon={Lightbulb}
          />
          <FocusAreaCard 
            title="Solutions for Stability" 
            description="Co-creating pathways to peace."
            icon={Handshake}
          />
        </div>
      </div>
    </div>
  );
};

export default FocusAreas;
