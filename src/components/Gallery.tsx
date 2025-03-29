
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "events", label: "Events" },
    { id: "trainings", label: "Trainings" },
    { id: "communities", label: "Communities" },
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
      className={`py-24 px-4 sm:px-6 bg-gradient-to-t from-api-cream/30 to-white transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="gallery"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Peace in Action
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Visual stories from our work across communities, showcasing the faces and places of our peace initiatives.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mt-12">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-api-cream/20">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-2 data-[state=active]:bg-api-terracotta data-[state=active]:text-white"
                >
                  {category.label}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages
                  .filter(
                    (img) => category.id === "all" || img.category === category.id
                  )
                  .map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="relative rounded-lg overflow-hidden cursor-pointer group shadow-lg h-64 transform transition-transform duration-300 hover:scale-[1.02]"
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
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-api-cream font-medium">{image.alt}</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-2 bg-transparent border-none">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>

              {/* Empty state if no images in category */}
              {galleryImages.filter(img => category.id === "all" || img.category === category.id).length === 0 && (
                <div className="text-center py-16">
                  <p className="text-api-midnight/70">No images available in this category yet.</p>
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
