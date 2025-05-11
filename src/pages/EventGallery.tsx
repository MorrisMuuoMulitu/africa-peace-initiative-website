import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GooglePhotosPromo from "@/components/gallery/GooglePhotosPromo";
import ImageGrid from "@/components/gallery/ImageGrid";
import { GalleryImage } from "@/components/gallery/ImageGrid";

const EventGallery = () => {
  // Google Photos album link
  const googlePhotosUrl = "https://photos.app.goo.gl/GjGzUHHmWyhWSar66";
  
  // Featured images for the Google Photos promo section
  const featuredImages = [
    "/lovable-uploads/55c5d508-2db4-4beb-aca1-440e70ea6a10.png",
    "/lovable-uploads/a70f4303-1fde-4409-abc3-6a4926f5aaa1.png",
    "/lovable-uploads/7f85cab1-22d9-4382-b44b-17cb430eef56.png"
  ];
  
  // Updated gallery images - organized collection of all event photos
  const galleryImages: GalleryImage[] = [{
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <GalleryHero 
          title="Regional Dialogue Photo Gallery"
          description="A visual journey through our March 27, 2025 regional peace dialogue on the conflict in Eastern Congo"
          eventDate="March 27, 2025"
          location="Trademark Hotel, Gigiri, Nairobi"
        />
        
        {/* Google Photos Link Section */}
        <GooglePhotosPromo 
          googlePhotosUrl={googlePhotosUrl}
          featuredImages={featuredImages}
        />
        
        {/* Gallery Grid */}
        <ImageGrid images={galleryImages} />
      </main>

      <Footer />
    </div>
  );
};

export default EventGallery;
