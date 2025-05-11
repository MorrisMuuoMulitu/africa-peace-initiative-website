
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import HighlightPreview from "@/components/highlights/HighlightPreview";
import TopicIndicators from "@/components/highlights/TopicIndicators";
import { highlightsData } from "@/data/eventHighlightsData";
import { Link } from "react-router-dom";

const EventHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  // Jump to a specific slide
  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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

        {/* Main Gallery Preview */}
        <div className="max-w-2xl mx-auto">
          <HighlightPreview 
            highlight={highlightsData[currentSlide]}
            onClick={() => {}}
            totalCount={highlightsData.length}
          />

          {/* Topic indicators */}
          <TopicIndicators 
            totalCount={highlightsData.length}
            activeIndex={currentSlide}
            onSelect={jumpToSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default EventHighlights;
