
import React from "react";
import { CalendarDays, Clock, MapPin, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Event = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  return (
    <div ref={ref} id="events" className="py-20 px-4 sm:px-6 bg-white">
      <div className={`max-w-6xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Card className="overflow-hidden border-none rounded-xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-api-cream/20 p-0">
              <AspectRatio ratio={4/3} className="w-full h-full">
                <img 
                  src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-800,h-600,fo-auto"
                  alt="Regional Peace Dialogue participants"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                  srcSet="
                    https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-400,h-300,fo-auto 400w,
                    https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-800,h-600,fo-auto 800w
                  "
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </AspectRatio>
            </div>
            
            <div className="p-8 lg:p-10">
              <Badge variant="outline" className="bg-api-terracotta text-white border-none font-medium px-4 py-1 mb-6">
                Recent Event
              </Badge>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-api-midnight mb-6 tracking-tight leading-tight">
                Regional Dialogue: The Conflict in Eastern Congo
              </h2>
              
              <p className="text-api-midnight/80 text-base sm:text-lg mb-8 leading-relaxed">
                Our inaugural event brought together participants from 5 African nations to analyze the complexities of the conflict in Eastern Congo and identify solutions for sustainable peace.
              </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-center text-api-midnight/80">
                  <CalendarDays className="h-5 w-5 mr-4 text-api-terracotta" />
                  <span className="font-medium">March 27, 2025</span>
                </div>
                <div className="flex items-center text-api-midnight/80">
                  <Clock className="h-5 w-5 mr-4 text-api-terracotta" />
                  <span className="font-medium">9:00 AM</span>
                </div>
                <div className="flex items-center text-api-midnight/80">
                  <MapPin className="h-5 w-5 mr-4 text-api-terracotta" />
                  <span className="font-medium">Trademark Hotel, Gigiri, Nairobi</span>
                </div>
              </div>
              
              <Button variant="outline" className="rounded-full border-api-green text-api-green hover:bg-api-green/10">
                <FileText className="mr-2 h-4 w-4" /> Event Report
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Event;
