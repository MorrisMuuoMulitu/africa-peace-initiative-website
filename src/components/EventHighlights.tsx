
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import HighlightGalleryDialog from "@/components/highlights/HighlightGalleryDialog";
import HighlightPreview from "@/components/highlights/HighlightPreview";
import TopicIndicators from "@/components/highlights/TopicIndicators";
import { highlightsData } from "@/data/eventHighlightsData";
import { downloadImage, shareImage } from "@/utils/imageUtils";

const EventHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate slides in gallery view
  const navigateSlide = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % highlightsData.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + highlightsData.length) % highlightsData.length);
    }
  };

  // Jump to a specific slide
  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsGalleryOpen(true);
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
            onClick={() => setIsGalleryOpen(true)}
            totalCount={highlightsData.length}
          />

          {/* Topic indicators */}
          <TopicIndicators 
            totalCount={highlightsData.length}
            activeIndex={currentSlide}
            onSelect={jumpToSlide}
          />
        </div>

        {/* Fullscreen Gallery Dialog */}
        <HighlightGalleryDialog 
          isOpen={isGalleryOpen}
          onOpenChange={setIsGalleryOpen}
          highlights={highlightsData}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          handleDownload={downloadImage}
          handleShare={shareImage}
          navigateSlide={navigateSlide}
        />
      </div>
    </div>
  );
};

export default EventHighlights;
