
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { highlightsData } from "@/data/eventHighlightsData";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightGalleryDialog from "@/components/highlights/HighlightGalleryDialog";
import { toast } from "@/components/ui/use-toast";

const DiscussionHighlights = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDownload = (imageUrl: string, title: string) => {
    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `API-${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Your image download has started",
      duration: 3000,
    });
  };

  const handleShare = (imageUrl: string, title: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Africa Peace Initiative: ${title}`,
        text: "Check out this highlight from the Regional Dialogue on Eastern Congo",
        url: imageUrl,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(imageUrl).then(() => {
        toast({
          title: "Link copied!",
          description: "Image link copied to clipboard",
          duration: 3000,
        });
      });
    }
  };

  const navigateSlide = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % highlightsData.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + highlightsData.length) % highlightsData.length);
    }
  };

  const openFullImage = (index: number) => {
    setCurrentSlide(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-api-sage/20 to-api-cream/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
              <div>
                <Link to="/#event-highlights" className="flex items-center text-api-terracotta hover:text-api-gold transition-colors mb-4">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to Event
                </Link>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-api-midnight mb-4">
                  Key Discussion Highlights
                </h1>
                <p className="text-lg text-api-midnight/80 max-w-2xl">
                  Critical topics addressed during our March 27th Regional Dialogue on Eastern Congo
                </p>
              </div>
              
              <div className="mt-6 md:mt-0 bg-api-midnight/10 backdrop-blur-sm px-5 py-4 rounded-lg border border-api-midnight/10">
                <div className="text-api-midnight font-medium">Event Details</div>
                <div className="text-sm text-api-midnight/80 mt-1">March 27, 2025</div>
                <div className="text-sm text-api-midnight/80">Trademark Hotel, Gigiri, Nairobi</div>
              </div>
            </div>
          </div>
        </section>

        {/* Discussion Topics Grid */}
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {highlightsData.map((highlight, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <div 
                    ref={ref}
                    key={index}
                    className={`rounded-xl overflow-hidden shadow-lg border border-api-sage/20 bg-white transition-all duration-700 ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } hover:shadow-xl group cursor-pointer`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => openFullImage(index)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={highlight.image} 
                        alt={highlight.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-api-midnight/80 flex items-end justify-between p-4">
                        <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-api-midnight/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5">
                      <p className="text-api-midnight/80">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Link to Event Gallery */}
            <div className="mt-16 text-center">
              <p className="text-api-midnight/70 mb-4">Looking for event photos?</p>
              <Link 
                to="/event-gallery"
                className="inline-block bg-api-midnight text-white px-6 py-3 rounded-lg hover:bg-api-midnight/90 transition-colors"
              >
                View Event Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Full-size Image Gallery Dialog */}
      <HighlightGalleryDialog 
        isOpen={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        highlights={highlightsData}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        handleDownload={handleDownload}
        handleShare={handleShare}
        navigateSlide={navigateSlide}
      />

      <Footer />
    </div>
  );
};

export default DiscussionHighlights;
