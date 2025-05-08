
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, MapPin, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const News = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const eventItem = {
    title: "Regional Dialogue: The Conflict in Eastern Congo",
    excerpt: "Our inaugural event brought together participants from 5 African nations to analyze the complexities of the conflict in Eastern Congo and identify solutions for sustainable peace.",
    date: "March 27, 2025",
    time: "9:00 AM",
    location: "Trademark Hotel, Gigiri, Nairobi",
    category: "Recent Event",
    image: "/placeholder.svg",
    report: {
      summary: "The regional dialogue on the conflict in Eastern Congo was a resounding success, bringing together 57 participants from Kenya, DRC, Rwanda, Uganda, and Ghana. The day-long event featured presentations from conflict resolution experts, testimonials from affected communities, and interactive workshops aimed at developing actionable peace initiatives.",
      outcomes: ["Creation of a cross-border community engagement framework", "Establishment of a regional early warning system for conflict prevention", "Development of policy recommendations for the East African Community", "Formation of a youth ambassador program for peace advocacy"],
      nextSteps: "Following this successful dialogue, we are planning follow-up sessions in Rwanda and Uganda to continue building momentum for our peace initiatives in the region."
    }
  };
  
  return (
    <div ref={ref} className={`py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-api-cream/20 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`} id="news">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="w-16 h-1 bg-api-terracotta mb-6"></div>
            
            <p className="text-lg text-api-midnight/80 max-w-xl">
              Our most recent event and initiative.
            </p>
          </div>
          <Link to="/blog/archive">
            <Button variant="outline" className="mt-6 md:mt-0 border-api-terracotta text-api-terracotta hover:bg-api-terracotta/10">
              View All Events <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Card className={`border-none rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full overflow-hidden bg-api-green/10 min-h-[300px]">
              <img src={eventItem.image} alt={eventItem.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-between mb-6">
                <Badge variant="outline" className="bg-api-terracotta text-white border-none font-medium px-4 py-1">
                  {eventItem.category}
                </Badge>
              </div>
              
              <CardTitle className="text-2xl md:text-3xl text-api-midnight mb-4 font-montserrat font-bold">{eventItem.title}</CardTitle>
              
              <CardDescription className="text-api-midnight/70 text-base mb-6 leading-relaxed">
                {eventItem.excerpt}
              </CardDescription>
              
              <div className="space-y-4 mb-8 bg-api-cream/40 p-4 rounded-lg border border-api-cream">
                <div className="flex items-center text-api-midnight/80">
                  <Calendar className="h-5 w-5 mr-3 text-api-terracotta" />
                  <span className="font-medium">{eventItem.date}</span>
                </div>
                <div className="flex items-center text-api-midnight/80">
                  <Clock className="h-5 w-5 mr-3 text-api-terracotta" />
                  <span className="font-medium">{eventItem.time}</span>
                </div>
                <div className="flex items-center text-api-midnight/80">
                  <MapPin className="h-5 w-5 mr-3 text-api-terracotta" />
                  <span className="font-medium">{eventItem.location}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-api-green text-api-green hover:bg-api-green/10 rounded-full px-6">
                      <FileText className="mr-2 h-4 w-4" /> Event Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-api-midnight font-montserrat">
                        {eventItem.title} - Event Report
                      </DialogTitle>
                      <DialogDescription className="text-api-midnight/70">
                        Held on {eventItem.date} at {eventItem.location}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-api-darkgreen mb-2">Event Summary</h3>
                        <p className="text-api-charcoal">{eventItem.report.summary}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-api-darkgreen mb-2">Key Outcomes</h3>
                        <ul className="list-disc pl-5 space-y-2 text-api-charcoal">
                          {eventItem.report.outcomes.map((outcome, index) => <li key={index}>{outcome}</li>)}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-api-darkgreen mb-2">Next Steps</h3>
                        <p className="text-api-charcoal">{eventItem.report.nextSteps}</p>
                      </div>
                      
                      <div className="pt-4">
                        <Link to="/blog/congo-dialogue-report">
                          <Button className="w-full bg-api-green hover:bg-api-darkgreen text-white">
                            View Full Detailed Report
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default News;
