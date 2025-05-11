import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, Download, ExternalLink, Images, Share2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { downloadImage, shareImage } from "@/utils/imageUtils";
import { cn } from "@/lib/utils";
const EventGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [googlePhotosHovered, setGooglePhotosHovered] = useState(false);

  // Updated gallery images - removed the last 5 images and added the new uploaded photos
  const galleryImages = [{
    id: 1,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02902.jpg?updatedAt=1743316868447&tr=w-1200,h-900,fo-auto",
    alt: "Panel discussion at the Regional Peace Dialogue",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02902.jpg?updatedAt=1743316868447&tr=w-400,h-300,fo-auto"
  }, {
    id: 2,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03031.jpg?updatedAt=1743316868270&tr=w-1200,h-900,fo-auto",
    alt: "Attendees participating in a workshop session",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03031.jpg?updatedAt=1743316868270&tr=w-400,h-300,fo-auto"
  }, {
    id: 3,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03023.jpg?updatedAt=1743316868160&tr=w-1200,h-900,fo-auto",
    alt: "Keynote speech at the Regional Peace Dialogue",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-03023.jpg?updatedAt=1743316868160&tr=w-400,h-300,fo-auto"
  }, {
    id: 4,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02746.jpg?updatedAt=1743317508937&tr=w-1200,h-900,fo-auto",
    alt: "Community representatives discussing conflict resolution",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02746.jpg?updatedAt=1743317508937&tr=w-400,h-300,fo-auto"
  }, {
    id: 5,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02926.jpg?updatedAt=1743317508934&tr=w-1200,h-900,fo-auto",
    alt: "Interactive session on peace initiatives",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02926.jpg?updatedAt=1743317508934&tr=w-400,h-300,fo-auto"
  }, {
    id: 6,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02403.jpg?updatedAt=1743317508583&tr=w-1200,h-900,fo-auto",
    alt: "Delegates from various countries at the dialogue",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02403.jpg?updatedAt=1743317508583&tr=w-400,h-300,fo-auto"
  }, {
    id: 7,
    src: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-1200,h-900,fo-auto",
    alt: "Group discussion on conflict resolution strategies",
    thumbSrc: "https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-400,h-300,fo-auto"
  },
  // New uploaded images
  {
    id: 13,
    src: "/lovable-uploads/f35ed5ea-da1f-465c-a9f2-485fb5dd07c0.png",
    alt: "Delegates in discussion at the Regional Dialogue",
    thumbSrc: "/lovable-uploads/f35ed5ea-da1f-465c-a9f2-485fb5dd07c0.png"
  }, {
    id: 14,
    src: "/lovable-uploads/55c5d508-2db4-4beb-aca1-440e70ea6a10.png",
    alt: "Africa Peace Initiative representatives at the event",
    thumbSrc: "/lovable-uploads/55c5d508-2db4-4beb-aca1-440e70ea6a10.png"
  }, {
    id: 15,
    src: "/lovable-uploads/a70f4303-1fde-4409-abc3-6a4926f5aaa1.png",
    alt: "Speaker addressing participants at the Regional Dialogue",
    thumbSrc: "/lovable-uploads/a70f4303-1fde-4409-abc3-6a4926f5aaa1.png"
  }, {
    id: 16,
    src: "/lovable-uploads/9533dbfb-235d-4130-8ff2-1c7b925c0d8b.png",
    alt: "Delegate sharing insights during the discussion session",
    thumbSrc: "/lovable-uploads/9533dbfb-235d-4130-8ff2-1c7b925c0d8b.png"
  }, {
    id: 17,
    src: "/lovable-uploads/0b5b8b62-905b-4993-8336-b78bdeec3129.png",
    alt: "Speaker in yellow suit addressing the Regional Dialogue",
    thumbSrc: "/lovable-uploads/0b5b8b62-905b-4993-8336-b78bdeec3129.png"
  }, {
    id: 18,
    src: "/lovable-uploads/7f85cab1-22d9-4382-b44b-17cb430eef56.png",
    alt: "Woman speaker in colorful attire at the Regional Dialogue",
    thumbSrc: "/lovable-uploads/7f85cab1-22d9-4382-b44b-17cb430eef56.png"
  }, {
    id: 19,
    src: "/lovable-uploads/9ebed94d-d6e0-48cd-a519-5867d69d386a.png",
    alt: "Woman in denim jacket speaking at the Regional Dialogue",
    thumbSrc: "/lovable-uploads/9ebed94d-d6e0-48cd-a519-5867d69d386a.png"
  }, {
    id: 20,
    src: "/lovable-uploads/2101fe52-d0b5-4b7b-a356-79ef2f5a0c6a.png",
    alt: "Delegate with API sash addressing participants",
    thumbSrc: "/lovable-uploads/2101fe52-d0b5-4b7b-a356-79ef2f5a0c6a.png"
  }, {
    id: 21,
    src: "/lovable-uploads/d59261a6-dc39-4b39-85f2-6486cf0dbe30.png",
    alt: "Delegate addressing the forum on regional solutions",
    thumbSrc: "/lovable-uploads/d59261a6-dc39-4b39-85f2-6486cf0dbe30.png"
  }, {
    id: 22,
    src: "/lovable-uploads/0454baac-59fc-4ee7-b30d-7e18843a33e3.png",
    alt: "Delegate speaking while others listen at conference table",
    thumbSrc: "/lovable-uploads/0454baac-59fc-4ee7-b30d-7e18843a33e3.png"
  }, {
    id: 23,
    src: "/lovable-uploads/ef8132fe-148a-4c7f-bf5f-5c760f1dc4b4.png",
    alt: "Senior delegate speaking at the Regional Dialogue",
    thumbSrc: "/lovable-uploads/ef8132fe-148a-4c7f-bf5f-5c760f1dc4b4.png"
  }, {
    id: 24,
    src: "/lovable-uploads/1ca65399-e362-4cd0-83d3-27e1cd415803.png",
    alt: "Delegates examining documents at the peace conference",
    thumbSrc: "/lovable-uploads/1ca65399-e362-4cd0-83d3-27e1cd415803.png"
  }, {
    id: 25,
    src: "/lovable-uploads/75982bf5-063d-4413-b148-79232e0106e8.png",
    alt: "Delegate in patterned shirt addressing the audience",
    thumbSrc: "/lovable-uploads/75982bf5-063d-4413-b148-79232e0106e8.png"
  }, {
    id: 26,
    src: "/lovable-uploads/cfb4d379-9e90-41c0-b97b-64749614bcc9.png",
    alt: "Speaker addressing participants at conference",
    thumbSrc: "/lovable-uploads/cfb4d379-9e90-41c0-b97b-64749614bcc9.png"
  }, {
    id: 27,
    src: "/lovable-uploads/b5d3589f-1545-4f18-b76d-4ea1ab96ccab.png",
    alt: "Africa Peace Initiative representatives at the dialogue",
    thumbSrc: "/lovable-uploads/b5d3589f-1545-4f18-b76d-4ea1ab96ccab.png"
  }, {
    id: 28,
    src: "/lovable-uploads/474b7f79-77fb-4145-8aac-fb43f3c0bdcc.png",
    alt: "Woman delegate with API sash at the conference",
    thumbSrc: "/lovable-uploads/474b7f79-77fb-4145-8aac-fb43f3c0bdcc.png"
  }];
  const googlePhotosUrl = "https://photos.app.goo.gl/GjGzUHHmWyhWSar66";
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-api-sage/20 to-api-cream/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
              <div>
                <Link to="/#events" className="flex items-center text-api-terracotta hover:text-api-gold transition-colors mb-4">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to Event
                </Link>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-api-midnight mb-4">
                  Regional Dialogue Photo Gallery
                </h1>
                <p className="text-lg text-api-midnight/80 max-w-2xl">
                  A visual journey through our March 27, 2025 regional peace dialogue on the conflict in Eastern Congo
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
        
        {/* Google Photos Link Section */}
        <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-api-terracotta/10 to-api-gold/5">
          <div className="max-w-7xl mx-auto">
            <a href={googlePhotosUrl} target="_blank" rel="noopener noreferrer" className="block" onMouseEnter={() => setGooglePhotosHovered(true)} onMouseLeave={() => setGooglePhotosHovered(false)} onClick={e => {
            // Prevents mobile devices from requiring double tap
            if (window.innerWidth < 768) {
              if (!googlePhotosHovered) {
                e.preventDefault();
                setGooglePhotosHovered(true);
              }
            }
          }}>
              <div className={cn("relative overflow-hidden rounded-xl border border-api-terracotta/20 shadow-lg transition-all duration-500", googlePhotosHovered ? "shadow-xl shadow-api-terracotta/20 scale-[1.01]" : "")}>
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
                    
                    <div className={cn("inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full transition-all duration-500", googlePhotosHovered ? "bg-api-terracotta text-white" : "text-white")}>
                      <span>View Full Album</span> 
                      <ExternalLink size={16} className={cn("transition-all duration-500", googlePhotosHovered ? "translate-x-1" : "")} />
                    </div>
                  </div>
                  
                  {/* Image collage effect */}
                  <div className="relative h-52 md:h-64 w-full md:w-80 lg:w-96 perspective-1000">
                    <div className={cn("absolute top-0 left-0 h-40 w-32 md:h-48 md:w-40 rounded-lg shadow-lg transform rotate-[-6deg] transition-all duration-700", googlePhotosHovered ? "rotate-[-12deg] translate-x-[-10px]" : "")}>
                      <img src="/lovable-uploads/55c5d508-2db4-4beb-aca1-440e70ea6a10.png" alt="Event photo" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className={cn("absolute top-0 left-1/4 h-44 w-36 md:h-52 md:w-44 rounded-lg shadow-lg transform rotate-[3deg] z-20 transition-all duration-700", googlePhotosHovered ? "rotate-[8deg] translate-y-[-5px]" : "")}>
                      <img src="/lovable-uploads/a70f4303-1fde-4409-abc3-6a4926f5aaa1.png" alt="Event photo" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className={cn("absolute top-4 left-1/2 h-36 w-32 md:h-44 md:w-40 rounded-lg shadow-lg transform rotate-[10deg] z-10 transition-all duration-700", googlePhotosHovered ? "rotate-[16deg] translate-x-[10px] translate-y-[-8px]" : "")}>
                      <img src="/lovable-uploads/7f85cab1-22d9-4382-b44b-17cb430eef56.png" alt="Event photo" className="h-full w-full object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section ref={ref} className={`py-12 px-4 sm:px-6 bg-white transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map(image => <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 ring-1 ring-gray-200">
                      <AspectRatio ratio={4 / 3} className="bg-gray-100">
                        <img src={image.thumbSrc} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </AspectRatio>
                      <div className="p-3 bg-white">
                        
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-1 sm:p-2 bg-black border-none">
                    <button className="absolute right-2 top-2 z-10 bg-black/50 text-white p-1 rounded-full hover:bg-black" onClick={() => document.querySelector('[data-state="open"] [data-radix-collection-item]')?.dispatchEvent(new MouseEvent('click', {
                  bubbles: true
                }))}>
                      <X size={20} />
                    </button>
                    <div className="relative w-full">
                      <img src={image.src} alt={image.alt} className="w-full max-h-[80vh] object-contain rounded" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white flex justify-between items-center">
                        <p className="text-sm sm:text-base">{image.alt}</p>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => downloadImage(image.src, `regional-dialogue-${image.id}`)}>
                            <Download size={18} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => shareImage(image.src, image.alt)}>
                            <Share2 size={18} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default EventGallery;