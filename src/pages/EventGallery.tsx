
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image, Images, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import GalleryMasonry from "@/components/gallery/GalleryMasonry";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import { eventGalleryImages, GalleryImage, getImageCategories } from "@/lib/gallery-utils";

const EventGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = getImageCategories();

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          className="bg-gradient-to-b from-api-sage/20 to-api-cream/10 py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
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
              
              <Card className="mt-6 md:mt-0 bg-api-midnight/10 backdrop-blur-sm p-5 rounded-lg border border-api-midnight/10">
                <div className="flex items-center gap-3 text-api-midnight font-medium">
                  <Calendar className="h-5 w-5 text-api-terracotta" />
                  Event Details
                </div>
                <div className="text-sm text-api-midnight/80 mt-2">March 27, 2025</div>
                <div className="text-sm text-api-midnight/80">Trademark Hotel, Gigiri, Nairobi</div>
              </Card>
            </div>
          </div>
        </motion.section>
        
        {/* Gallery Section */}
        <section 
          ref={ref}
          className={`py-12 px-4 sm:px-6 bg-white transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Gallery Stats */}
            <div className="flex flex-wrap justify-between items-center mb-8">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold text-api-midnight flex items-center gap-2">
                  <Images className="h-6 w-6 text-api-terracotta" />
                  Event Gallery
                </h2>
                <p className="text-api-midnight/70">
                  {eventGalleryImages.length} photos from our regional dialogue
                </p>
              </div>
              
              <Button
                variant="outline"
                className="border-api-sage text-api-midnight hover:bg-api-sage/10"
                onClick={() => window.open('https://photos.app.goo.gl/GjGzUHHmWyhWSar66', '_blank')}
              >
                <Image className="mr-2 h-4 w-4" />
                View on Google Photos
              </Button>
            </div>
            
            {/* Filters */}
            <GalleryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Gallery Grid */}
            <GalleryMasonry 
              images={eventGalleryImages}
              onImageClick={handleImageClick}
              selectedCategory={selectedCategory}
            />

            {/* Lightbox */}
            <GalleryLightbox
              open={isLightboxOpen}
              onOpenChange={setIsLightboxOpen}
              images={eventGalleryImages}
              initialIndex={selectedImageIndex}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventGallery;
