
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Image, X, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EnhancedGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("photos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      alt: "Community members engaged in dialogue",
      caption: "Community dialogue session in Eastern DRC",
      category: "dialogue"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      alt: "Women attending a workshop",
      caption: "Women's peace advocacy training in Kigali",
      category: "training"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Youth peace conference",
      caption: "East African Youth Peace Conference 2023",
      category: "conference"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Rural community meeting",
      caption: "Community reconciliation ceremony in South Sudan",
      category: "community"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Policy discussion with officials",
      caption: "Regional policy forum on conflict prevention",
      category: "policy"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80",
      alt: "Children in a peace education class",
      caption: "Peace education program in Kenyan schools",
      category: "education"
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1518758132040-f7a9a6afb816?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Community Reconciliation Process",
      duration: "4:22",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube embed IDs
      category: "documentary"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Women's Peace Coalition",
      duration: "6:15",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube embed IDs
      category: "testimonial"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Youth Peace Ambassadors",
      duration: "5:38",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube embed IDs
      category: "testimonial"
    }
  ];

  const filteredPhotos = (category) => {
    if (category === "all") return photos;
    return photos.filter(photo => photo.category === category);
  };

  const filteredVideos = (category) => {
    if (category === "all") return videos;
    return videos.filter(video => video.category === category);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-api-cream/20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Media Gallery
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Visual documentation of our peace-building work across Africa
          </p>
        </div>

        <Tabs defaultValue="photos" onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mx-auto w-full max-w-xs">
            <TabsTrigger value="photos" className="flex-1">Photos</TabsTrigger>
            <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === "photos" && (
          <>
            <div className="flex justify-center mb-8 flex-wrap gap-2">
              {["all", "dialogue", "training", "conference", "community", "policy", "education"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="m-1 capitalize"
                  onClick={() => {}}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPhotos("all").map((photo, index) => (
                <div
                  key={photo.id}
                  className="relative group overflow-hidden rounded-lg h-64 cursor-pointer transform transition hover:scale-[1.02] hover:shadow-lg"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white font-medium">{photo.caption}</p>
                      <span className="text-white/80 text-sm">{photo.category}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-2">
                      <Image className="h-6 w-6 text-api-midnight" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "videos" && (
          <>
            <div className="flex justify-center mb-8 flex-wrap gap-2">
              {["all", "documentary", "testimonial"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="m-1 capitalize"
                  onClick={() => {}}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos("all").map((video) => (
                <div
                  key={video.id}
                  className="relative group overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-lg transition"
                >
                  <div className="aspect-video relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-api-midnight/30 group-hover:bg-api-midnight/50 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-8 w-8 text-api-terracotta" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-api-midnight text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-montserrat font-medium text-api-midnight mb-1">{video.title}</h4>
                    <p className="text-api-midnight/70 text-sm capitalize">{video.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none shadow-none">
            <div className="relative flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 z-10 bg-white/80 hover:bg-white border-none rounded-full"
                onClick={goToPreviousImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="relative w-full">
                <img
                  src={photos[currentImageIndex]?.src}
                  alt={photos[currentImageIndex]?.alt}
                  className="w-full rounded-lg max-h-[80vh] object-contain"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white border-none rounded-full"
                  onClick={closeLightbox}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 z-10 bg-white/80 hover:bg-white border-none rounded-full"
                onClick={goToNextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="bg-white rounded-b-lg p-4">
              <p className="font-medium text-api-midnight">{photos[currentImageIndex]?.caption}</p>
              <p className="text-sm text-api-midnight/70 capitalize">{photos[currentImageIndex]?.category}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EnhancedGallery;
