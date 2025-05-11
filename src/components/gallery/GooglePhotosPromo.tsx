
import React, { useState } from "react";
import { ExternalLink, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface GooglePhotosPromoProps {
  googlePhotosUrl: string;
  featuredImages: string[];
}

const GooglePhotosPromo: React.FC<GooglePhotosPromoProps> = ({ 
  googlePhotosUrl,
  featuredImages = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-api-terracotta/10 to-api-gold/5">
      <div className="max-w-7xl mx-auto">
        <a 
          href={googlePhotosUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          onClick={e => {
            // Prevents mobile devices from requiring double tap
            if (window.innerWidth < 768) {
              if (!isHovered) {
                e.preventDefault();
                setIsHovered(true);
              }
            }
          }}
        >
          <div className={cn("relative overflow-hidden rounded-xl border border-api-terracotta/20 shadow-lg transition-all duration-500", 
            isHovered ? "shadow-xl shadow-api-terracotta/20 scale-[1.01]" : "")}>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-api-midnight to-api-terracotta/90 opacity-95"></div>
            
            {/* Floating image cloud effect */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-gradient-to-br from-api-gold/20 to-api-terracotta/30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-gradient-to-tr from-api-midnight/30 to-api-gold/20 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-10 overflow-hidden">
              <div className="flex-1 mb-6 md:mb-0 mr-0 md:mr-8 text-center md:text-left">
                <div className="mb-3 flex items-center justify-center md:justify-start gap-3">
                  <div className="bg-white/90 p-2 rounded-full">
                    <Images size={28} className="text-api-terracotta" />
                  </div>
                  <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Google Photos Album</div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  View More Event Photos
                </h3>
                <p className="text-white/80 mb-5 max-w-lg">
                  Explore our complete collection of high-resolution photos from the Regional Dialogue event. 
                  Relive the moments and discussions that shaped our approach to peace in Eastern Congo.
                </p>
                
                <div className={cn("inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full transition-all duration-500", 
                  isHovered ? "bg-api-terracotta text-white" : "text-white")}>
                  <span>View Full Album</span> 
                  <ExternalLink size={16} className={cn("transition-all duration-500", 
                    isHovered ? "translate-x-1" : "")} />
                </div>
              </div>
              
              {/* Image collage effect */}
              <div className="relative h-52 md:h-64 w-full md:w-80 lg:w-96 perspective-1000">
                {featuredImages.length >= 3 ? (
                  <>
                    <div className={cn("absolute top-0 left-0 h-40 w-32 md:h-48 md:w-40 rounded-lg shadow-lg transform rotate-[-6deg] transition-all duration-700", 
                      isHovered ? "rotate-[-12deg] translate-x-[-10px]" : "")}>
                      <img src={featuredImages[0]} alt="Event photo" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className={cn("absolute top-0 left-1/4 h-44 w-36 md:h-52 md:w-44 rounded-lg shadow-lg transform rotate-[3deg] z-20 transition-all duration-700", 
                      isHovered ? "rotate-[8deg] translate-y-[-5px]" : "")}>
                      <img src={featuredImages[1]} alt="Event photo" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className={cn("absolute top-4 left-1/2 h-36 w-32 md:h-44 md:w-40 rounded-lg shadow-lg transform rotate-[10deg] z-10 transition-all duration-700", 
                      isHovered ? "rotate-[16deg] translate-x-[10px] translate-y-[-8px]" : "")}>
                      <img src={featuredImages[2]} alt="Event photo" className="h-full w-full object-cover rounded-lg" />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    <div className="bg-white/10 rounded-lg p-6">
                      <Images size={40} className="text-white/60 mx-auto" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default GooglePhotosPromo;
