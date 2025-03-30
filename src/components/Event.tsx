
import React from "react";
import { CalendarDays, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";

const Event = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  return <div ref={ref} id="events" className="py-20 px-4 sm:px-6 bg-api-cream">
      <div className={`max-w-4xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-api-darkgreen mb-4">
            Recent Events
          </h2>
          <p className="text-lg text-api-charcoal max-w-2xl mx-auto">
            Bringing together key stakeholders to foster understanding and advance peace initiatives in Africa.
          </p>
        </div>

        <Card className="overflow-hidden border-api-sage/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-api-darkgreen to-api-forestgreen text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-3">
                  Inaugural Event
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl mb-2">Regional Dialogue: The Conflict in Eastern Congo</CardTitle>
                <CardDescription className="text-white/90 text-base">
                  A critical discussion on conflict resolution and peace pathways in the Great Lakes Region.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-api-darkgreen mb-4">Event Details</h3>
                
                <div className="flex items-start gap-3">
                  <CalendarDays className="text-api-green h-5 w-5 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-api-charcoal">Date</p>
                    <p className="text-api-gray">March 27, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-api-green h-5 w-5 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-api-charcoal">Time</p>
                    <p className="text-api-gray">9:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-api-green h-5 w-5 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-api-charcoal">Venue</p>
                    <p className="text-api-gray">Trademark Hotel, Village Market</p>
                    <p className="text-api-gray">Gigiri, Nairobi</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 md:border-l md:border-api-sage/20 md:pl-6">
                <h3 className="text-lg font-semibold text-api-darkgreen mb-4">About This Event</h3>
                <p className="text-api-gray">
                  This dialogue brought together participants from 5 African nations to analyze the complexities of the conflict in Eastern Congo and identify solutions for sustainable peace.
                </p>
                
                <div className="flex items-start gap-3 mt-4">
                  <Users className="text-api-green h-5 w-5 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-api-charcoal">Attendees</p>
                    <p className="text-api-gray">57 participants from Kenya, DRC, Rwanda, Uganda, and Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mt-4">
                  <CheckCircle className="text-api-green h-5 w-5 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-api-charcoal">Status</p>
                    <p className="text-api-gray">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-api-cream/50 border-t border-api-sage/20 p-6">
            <div className="w-full">
              <p className="text-api-charcoal mb-4">
                Interested in our upcoming events? Contact us to stay informed about future dialogues and initiatives.
              </p>
              <Button className="bg-api-green hover:bg-api-darkgreen text-white transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Contact Us
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-api-darkgreen mb-4">Stay Tuned for Our Next Event</h3>
          <p className="text-api-gray max-w-2xl mx-auto">
            We're planning more dialogues and forums to promote peace and cooperation across Africa. 
            Subscribe to our newsletter to be notified about upcoming events.
          </p>
          <Button variant="outline" className="mt-6 border-api-green text-api-green hover:bg-api-green hover:text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </div>;
};

export default Event;
