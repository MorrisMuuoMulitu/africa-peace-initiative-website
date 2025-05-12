
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { highlightsData } from "@/data/eventHighlightsData";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DiscussionHighlights = () => {
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
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={highlight.image} 
                        alt={highlight.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 to-transparent flex items-end">
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                        </div>
                      </div>
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

      <Footer />
    </div>
  );
};

export default DiscussionHighlights;
