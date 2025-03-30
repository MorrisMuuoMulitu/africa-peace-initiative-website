
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Leaf, Users, X } from "lucide-react";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Photos", icon: <Camera size={18} /> },
    { id: "events", label: "Events", icon: <Leaf size={18} /> },
    { id: "communities", label: "Communities", icon: <Users size={18} /> },
  ];

  // Placeholder images - replace with your actual image paths
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      alt: "Peace conference in Nairobi",
      category: "events",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Community training session",
      category: "trainings",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      alt: "Village elder meeting",
      category: "communities",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Youth peace forum",
      category: "events",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Women's leadership training",
      category: "trainings",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Rural community gathering",
      category: "communities",
    },
  ];

  // Use placeholder images if needed
  const galleryImages = images;

  return (
    <div
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-api-clay/10 to-api-cream/30 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="gallery"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4 md:mb-6">
            Peace in Action
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Visual stories from our work across communities, showcasing the faces and places of our peace initiatives.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mt-8 md:mt-12">
          {/* Improved tab navigation for better touch experience */}
          <div className="flex justify-center mb-8 md:mb-10">
            <TabsList className="bg-api-cream/30 backdrop-blur-sm border border-api-sage/20 p-1 shadow-md overflow-x-auto max-w-full flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 sm:px-6 py-2.5 data-[state=active]:bg-api-terracotta data-[state=active]:text-white flex items-center gap-2 min-w-[100px] justify-center touch-manipulation"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.id === 'all' ? 'All' : category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className={`transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Improved grid for tablet responsiveness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {galleryImages
                  .filter(
                    (img) => category.id === "all" || img.category === category.id
                  )
                  .map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg h-64 sm:h-72 transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] border border-api-sage/20 touch-manipulation"
                          style={{ 
                            transitionDelay: `${index * 100}ms`,
                            animationDelay: `${index * 100}ms`
                          }}
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 sm:group-active:opacity-100 transition-opacity duration-300 flex items-end p-5">
                            <p className="text-api-cream font-medium text-lg">{image.alt}</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-1 sm:p-2 bg-transparent border-none">
                        <button 
                          className="absolute right-2 top-2 z-10 bg-api-midnight/70 text-white p-1 rounded-full hover:bg-api-midnight" 
                          onClick={() => document.querySelector('[data-state="open"] [data-radix-collection-item]')?.dispatchEvent(
                            new MouseEvent('click', { bubbles: true })
                          )}
                        >
                          <X size={20} />
                        </button>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto rounded-lg shadow-2xl"
                          loading="lazy"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>

              {/* Tablet-friendly empty state */}
              {galleryImages.filter(img => category.id === "all" || img.category === category.id).length === 0 && (
                <div className="text-center py-12 md:py-16 bg-white/30 backdrop-blur-sm rounded-lg border border-api-sage/20 shadow-md mx-auto max-w-md">
                  <Camera className="mx-auto text-api-terracotta/50 mb-4" size={48} />
                  <p className="text-api-midnight/70 font-medium">No images available in this category yet.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
