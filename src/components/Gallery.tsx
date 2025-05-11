
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

  // Updated gallery images with new uploaded photos
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
    // New photos added from uploads
    {
      id: 7,
      src: "/lovable-uploads/0c9f4719-201d-414a-83ab-4c74ab2f6100.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/0c9f4719-201d-414a-83ab-4c74ab2f6100.png",
    },
    {
      id: 8,
      src: "/lovable-uploads/d38c2d1d-1fe3-4c29-aed3-30c3fa67bc93.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/d38c2d1d-1fe3-4c29-aed3-30c3fa67bc93.png",
    },
    {
      id: 9,
      src: "/lovable-uploads/06f666f4-a2e2-41a8-9df9-6c90063d41ad.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/06f666f4-a2e2-41a8-9df9-6c90063d41ad.png",
    },
    {
      id: 10,
      src: "/lovable-uploads/836e9718-7f45-4608-8bb2-e99a0cf107e0.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/836e9718-7f45-4608-8bb2-e99a0cf107e0.png",
    },
    {
      id: 11,
      src: "/lovable-uploads/6714b51b-8eef-4f22-bfec-2ff9904ba3d1.png",
      alt: "Regional Peace Dialogue",
      category: "communities",
      thumbSrc: "/lovable-uploads/6714b51b-8eef-4f22-bfec-2ff9904ba3d1.png",
    },
    {
      id: 12,
      src: "/lovable-uploads/d54cd3b5-1e74-4462-8633-0a3c45d9bd42.png",
      alt: "Regional Peace Dialogue",
      category: "communities",
      thumbSrc: "/lovable-uploads/d54cd3b5-1e74-4462-8633-0a3c45d9bd42.png",
    },
    {
      id: 13,
      src: "/lovable-uploads/8140545d-a465-4538-9d25-01e3e0f2116f.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/8140545d-a465-4538-9d25-01e3e0f2116f.png",
    },
    {
      id: 14,
      src: "/lovable-uploads/926c72e8-6ee7-4b98-b023-e52646328277.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/926c72e8-6ee7-4b98-b023-e52646328277.png",
    },
    {
      id: 15,
      src: "/lovable-uploads/55e9b107-2405-4017-ab7c-17e93467407f.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/55e9b107-2405-4017-ab7c-17e93467407f.png",
    },
    {
      id: 16,
      src: "/lovable-uploads/336e3867-557c-4619-8811-a7dc035f9bc9.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/336e3867-557c-4619-8811-a7dc035f9bc9.png",
    },
    {
      id: 17,
      src: "/lovable-uploads/baf35163-f00d-4a7e-818f-c6138278d77c.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/baf35163-f00d-4a7e-818f-c6138278d77c.png",
    },
    {
      id: 18,
      src: "/lovable-uploads/116135a1-d58e-45a0-aa05-afa236c6fb8d.png",
      alt: "Regional Peace Dialogue",
      category: "communities",
      thumbSrc: "/lovable-uploads/116135a1-d58e-45a0-aa05-afa236c6fb8d.png",
    },
    {
      id: 19,
      src: "/lovable-uploads/3fae06e1-4d11-4419-9744-1e5aa17085ad.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/3fae06e1-4d11-4419-9744-1e5aa17085ad.png",
    },
    {
      id: 20,
      src: "/lovable-uploads/0e1250e2-a686-4e2e-b06d-f6a0964f4e92.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/0e1250e2-a686-4e2e-b06d-f6a0964f4e92.png",
    },
    {
      id: 21,
      src: "/lovable-uploads/53f242bd-2682-4162-98a3-86e61561ef23.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/53f242bd-2682-4162-98a3-86e61561ef23.png",
    },
    {
      id: 22,
      src: "/lovable-uploads/c093f878-d6f8-4571-8105-aca4c14ed619.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/c093f878-d6f8-4571-8105-aca4c14ed619.png",
    },
    {
      id: 23,
      src: "/lovable-uploads/6633392c-69c3-4d08-98b5-435b2465260d.png",
      alt: "Regional Peace Dialogue",
      category: "events",
      thumbSrc: "/lovable-uploads/6633392c-69c3-4d08-98b5-435b2465260d.png",
    },
    {
      id: 24,
      src: "/lovable-uploads/a0023ca4-330d-4f5a-a830-0abd1ac7f709.png",
      alt: "Regional Peace Dialogue",
      category: "communities",
      thumbSrc: "/lovable-uploads/a0023ca4-330d-4f5a-a830-0abd1ac7f709.png",
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {images
                  .filter(
                    (img) => category.id === "all" || img.category === category.id
                  )
                  .map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] border border-api-sage/20 touch-manipulation bg-white"
                          style={{ 
                            transitionDelay: `${index * 50}ms`,
                            animationDelay: `${index * 50}ms`
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
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 sm:group-active:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-2 w-full flex justify-center">
                              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <Camera size={16} className="text-white" />
                              </div>
                            </div>
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
                            />
                          </AspectRatio>
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
