
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, MapPin } from "lucide-react";

const News = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const newsItem = {
    title: "Regional Dialogue: The Conflict in Eastern Congo",
    excerpt: "Our inaugural event brought together participants from 5 African nations to analyze the complexities of the conflict in Eastern Congo and identify solutions for sustainable peace.",
    date: "March 27, 2025",
    time: "9:00 AM",
    location: "Trademark Hotel, Gigiri, Nairobi",
    category: "Upcoming Event",
    image: "/placeholder.svg"
  };

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-api-cream/20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="news"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="w-16 h-1 bg-api-terracotta mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4 tracking-tight">
              Latest Update
            </h2>
            <p className="text-lg text-api-midnight/80 max-w-xl">
              Our most important upcoming event.
            </p>
          </div>
          <Button 
            variant="outline"
            className="mt-6 md:mt-0 border-api-terracotta text-api-terracotta hover:bg-api-terracotta/10"
          >
            View All Updates
          </Button>
        </div>

        <Card 
          className={`border-none rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full overflow-hidden bg-api-green/10 min-h-[300px]">
              <img 
                src={newsItem.image} 
                alt={newsItem.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-between mb-6">
                <Badge variant="outline" className="bg-api-terracotta text-white border-none font-medium px-4 py-1">
                  {newsItem.category}
                </Badge>
              </div>
              
              <CardTitle className="text-2xl md:text-3xl text-api-midnight mb-4 font-montserrat font-bold">{newsItem.title}</CardTitle>
              
              <CardDescription className="text-api-midnight/70 text-base mb-6 leading-relaxed">
                {newsItem.excerpt}
              </CardDescription>
              
              <div className="space-y-4 mb-8 bg-api-cream/40 p-4 rounded-lg border border-api-cream">
                <div className="flex items-center text-api-midnight/80">
                  <Calendar className="h-5 w-5 mr-3 text-api-terracotta" />
                  <span className="font-medium">{newsItem.date}</span>
                </div>
                <div className="flex items-center text-api-midnight/80">
                  <Clock className="h-5 w-5 mr-3 text-api-terracotta" />
                  <span className="font-medium">{newsItem.time}</span>
                </div>
                <div className="flex items-center text-api-midnight/80">
                  <MapPin className="h-5 w-5 mr-3 text-api-terracotta" />
                  <span className="font-medium">{newsItem.location}</span>
                </div>
              </div>
              
              <Button 
                variant="default" 
                className="bg-api-terracotta hover:bg-api-terracotta/90 text-white rounded-full px-6"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default News;
