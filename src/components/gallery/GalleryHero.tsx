
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface GalleryHeroProps {
  title: string;
  description: string;
  eventDate: string;
  location: string;
}

const GalleryHero: React.FC<GalleryHeroProps> = ({ 
  title, 
  description, 
  eventDate, 
  location 
}) => {
  return (
    <section className="bg-gradient-to-b from-api-sage/20 to-api-cream/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <Link to="/#events" className="flex items-center text-api-terracotta hover:text-api-gold transition-colors mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Event
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-api-midnight mb-4">
              {title}
            </h1>
            <p className="text-lg text-api-midnight/80 max-w-2xl">
              {description}
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 bg-api-midnight/10 backdrop-blur-sm px-5 py-4 rounded-lg border border-api-midnight/10">
            <div className="text-api-midnight font-medium">Event Details</div>
            <div className="text-sm text-api-midnight/80 mt-1">{eventDate}</div>
            <div className="text-sm text-api-midnight/80">{location}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
