
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Leaf, Users, X, Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Photos", icon: <Camera size={18} /> },
    { id: "events", label: "Events", icon: <Calendar size={18} /> },
    { id: "communities", label: "Communities", icon: <Users size={18} /> },
  ];

  // Updated gallery images with simplified alt text
  const images = [
    {
      id: 1,
      src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02902.jpg?updatedAt=1743316868447&tr=w-800,h-600,fo-auto",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02902.jpg?updatedAt=1743316868447&tr=w-400,h-300,fo-auto",
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03031.jpg?updatedAt=1743316868270&tr=w-800,h-600,fo-auto",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03031.jpg?updatedAt=1743316868270&tr=w-400,h-300,fo-auto",
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03023.jpg?updatedAt=1743316868160&tr=w-800,h-600,fo-auto",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03023.jpg?updatedAt=1743316868160&tr=w-400,h-300,fo-auto",
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02746.jpg?updatedAt=1743317508937&tr=w-800,h-600,fo-auto",
      alt: "Regional Peace Dialogue",
      category: "communities",
      thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02746.jpg?updatedAt=1743317508937&tr=w-400,h-300,fo-auto",
    },
    {
      id: 5,
      src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02926.jpg?updatedAt=1743317508934&tr=w-800,h-600,fo-auto",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02926.jpg?updatedAt=1743317508934&tr=w-400,h-300,fo-auto",
    },
    {
      id: 6,
      src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02403.jpg?updatedAt=1743317508583&tr=w-800,h-600,fo-auto",
      alt: "Regional Peace Dialogue",
      category: "communities",
      thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02403.jpg?updatedAt=1743317508583&tr=w-400,h-300,fo-auto",
    },
  ];

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
              {/* Improved responsive grid with consistent aspect ratio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {images
                  .filter(
                    (img) => category.id === "all" || img.category === category.id
                  )
                  .map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] border border-api-sage/20 touch-manipulation"
                          style={{ 
                            transitionDelay: `${index * 100}ms`,
                            animationDelay: `${index * 100}ms`
                          }}
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <AspectRatio ratio={4/3} className="w-full">
                            <img
                              src={image.thumbSrc || image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              width="400"
                              height="300"
                              srcSet={`${image.thumbSrc} 400w, ${image.src} 800w`}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                          </AspectRatio>
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
                        <div className="relative w-full">
                          <AspectRatio ratio={4/3} className="w-full">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full rounded-lg shadow-2xl object-contain bg-api-midnight/80"
                              loading="lazy"
                              width="800"
                              height="600"
                            />
                          </AspectRatio>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-api-midnight/70 text-white rounded-b-lg">
                            <p className="text-sm sm:text-base">{image.alt}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>

              {/* Tablet-friendly empty state */}
              {images.filter(img => category.id === "all" || img.category === category.id).length === 0 && (
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
