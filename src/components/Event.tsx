import React, { useState } from "react";
import { CalendarDays, Clock, MapPin, FileText, ArrowRight, History, Images } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
const Event = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [isHovered, setIsHovered] = useState(false);
  return <div ref={ref} id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-api-cream/20">
      <div className={`max-w-6xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="w-16 h-1 bg-api-terracotta mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-api-midnight mb-4 tracking-tight">
              Our Past Event
            </h2>
            <p className="text-lg text-api-midnight/80 max-w-xl">
              Learn about our most recent regional peace dialogue event.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 border-api-terracotta text-api-terracotta hover:bg-api-terracotta/10">
            <Link to="/events" className="flex items-center">
              View All Events <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Card className={`overflow-hidden border-none rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-api-cream/20">
              <AspectRatio ratio={4 / 3} className="w-full h-full">
                <img src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-800,h-600,fo-auto" alt="Regional Peace Dialogue participants" className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'} grayscale-[30%]`} loading="lazy" width="800" height="600" srcSet="
                    https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-400,h-300,fo-auto 400w,
                    https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/RegionalDialogue/API-02634.jpg?updatedAt=1743317508870&tr=w-800,h-600,fo-auto 800w
                  " sizes="(max-width: 1023px) 100vw, 50vw" />
              </AspectRatio>
              <Badge variant="outline" className="absolute top-4 left-4 bg-gray-600 text-white border-none font-medium px-4 py-1.5 rounded-full shadow-md">
                Past Event
              </Badge>
            </div>
            
            <div className="p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-api-cream/30">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-api-midnight mb-6 tracking-tight leading-tight">
                  Regional Dialogue: The Conflict in Eastern Congo
                </h2>
                
                <p className="text-api-midnight/80 text-base sm:text-lg mb-8 leading-relaxed">
                  Our inaugural event brought together participants from 5 African nations to analyze the complexities of the conflict in Eastern Congo and identify solutions for sustainable peace.
                </p>
                
                <div className="space-y-5 mb-8 bg-gray-100/80 p-6 rounded-xl shadow-inner">
                  <div className="flex items-center text-api-midnight/80">
                    <CalendarDays className="h-5 w-5 mr-4 text-gray-600" />
                    <span className="font-medium">March 27, 2025</span>
                  </div>
                  <div className="flex items-center text-api-midnight/80">
                    <Clock className="h-5 w-5 mr-4 text-gray-600" />
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-api-midnight/80">
                    <MapPin className="h-5 w-5 mr-4 text-gray-600" />
                    <span className="font-medium">Trademark Hotel, Gigiri, Nairobi</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Button className="bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-md px-6">
                  <History className="mr-2 h-4 w-4" /> Event Concluded
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-api-midnight font-montserrat">
                        Regional Dialogue: The Conflict in Eastern Congo
                      </DialogTitle>
                      <DialogDescription className="text-api-midnight/70">
                        March 27, 2025 at Trademark Hotel, Gigiri, Nairobi
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Event Summary</h3>
                        <p className="text-api-charcoal">The regional dialogue on the conflict in Eastern Congo brought together 50+ participants from Kenya, DRC, Rwanda, Uganda, and Ghana. The day-long event featured presentations from conflict resolution experts, testimonials from affected communities, and interactive workshops aimed at developing actionable peace initiatives.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Outcomes</h3>
                        <ul className="list-disc pl-5 space-y-2 text-api-charcoal">
                          <li>Creation of a cross-border community engagement framework</li>
                          <li>Establishment of a regional early warning system for conflict prevention</li>
                          <li>Development of policy recommendations for the East African Community</li>
                          <li>Formation of a youth ambassador program for peace advocacy</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Next Steps</h3>
                        <p className="text-api-charcoal">Following this successful dialogue, we are planning follow-up sessions in Rwanda and Uganda to continue building momentum for our peace initiatives in the region.</p>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                          Download Event Report
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Link to="/event-gallery">
                  <Button variant="outline" className="border-gray-500 text-gray-700 hover:bg-gray-100 rounded-full px-6 w-full">
                    <Images className="mr-2 h-4 w-4" /> View Photo Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};
export default Event;