
import React from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { highlightsData } from "@/data/eventHighlightsData";

const EventHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Select a random highlight image for the background
  const randomHighlight = highlightsData[Math.floor(Math.random() * highlightsData.length)];

  return (
    <div
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-api-sage/10 to-api-cream/20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="event-highlights"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="w-20 h-1.5 bg-gradient-to-r from-api-terracotta to-api-gold mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Key Discussion Highlights
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto mb-6">
            Critical topics addressed during our March 27th Regional Dialogue on Eastern Congo
          </p>
        </div>

        {/* Interactive Gallery Link Card - Changed to point to discussion-highlights */}
        <Link 
          to="/discussion-highlights"
          className="block max-w-4xl mx-auto group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg border border-api-sage/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-api-terracotta/10 group-hover:border-api-terracotta/40">
            {/* Background Image with Gradient Overlay */}
            <div className="h-80 md:h-96 w-full relative">
              <div className="absolute inset-0 bg-api-midnight/70 backdrop-filter backdrop-blur-sm group-hover:bg-api-midnight/60 transition-all duration-500"></div>
              <img 
                src={randomHighlight.image} 
                alt="Regional Dialogue Event" 
                className="w-full h-full object-cover object-center opacity-50 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Topic Flow Diagram (Simplified) */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                <div className="relative w-full h-full">
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full stroke-white/30 stroke-[1.5]" viewBox="0 0 800 500">
                    <line x1="200" y1="150" x2="400" y2="250" />
                    <line x1="600" y1="150" x2="400" y2="250" />
                    <line x1="200" y1="350" x2="400" y2="250" />
                    <line x1="600" y1="350" x2="400" y2="250" />
                    <circle cx="400" cy="250" r="40" className="fill-api-terracotta/30 stroke-api-terracotta" />
                    <circle cx="200" cy="150" r="25" className="fill-white/10 stroke-white" />
                    <circle cx="600" cy="150" r="25" className="fill-white/10 stroke-white" />
                    <circle cx="200" cy="350" r="25" className="fill-white/10 stroke-white" />
                    <circle cx="600" cy="350" r="25" className="fill-white/10 stroke-white" />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-white text-sm mb-4">
                  7 Key Topics Discussed
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-xl group-hover:text-api-cream transition-colors duration-300">
                  Explore Our Discussion Highlights
                </h3>
                <p className="text-white/80 max-w-xl mb-8 md:mb-10">
                  Visual overview of the key topics addressed during our efforts to resolve conflict in Eastern Congo.
                </p>
                
                {/* Button/CTA */}
                <div className="transition-all duration-500 bg-api-terracotta/90 text-white px-6 py-3 rounded-full flex items-center gap-2 group-hover:bg-api-terracotta group-hover:shadow-lg group-hover:shadow-api-terracotta/30 group-hover:translate-y-[-2px]">
                  <span className="font-medium">View Discussion Topics</span>
                  <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
                </div>
                
                {/* Floating indicator lights */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        i === 0 ? "bg-api-terracotta" : "bg-white/40"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventHighlights;
