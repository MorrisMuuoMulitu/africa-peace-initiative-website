
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const newsItems = [
    {
      title: "New Peace Dialog Initiative Launched in Somalia",
      excerpt: "API announces a major new dialog initiative bringing together tribal leaders from across Somalia's south region.",
      date: "June 12, 2023",
      category: "Program Launch",
      image: "/placeholder.svg"
    },
    {
      title: "Research Report: Women's Role in East African Peace Processes",
      excerpt: "Our new study reveals the critical impact of women's involvement in sustainable peace agreements across the region.",
      date: "May 23, 2023",
      category: "Research",
      image: "/placeholder.svg"
    },
    {
      title: "API Partners with United Nations Development Programme",
      excerpt: "Strategic partnership formed to enhance conflict early warning systems in border communities.",
      date: "April 8, 2023",
      category: "Partnership",
      image: "/placeholder.svg"
    },
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-api-cream/20 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="news"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="w-16 h-1 bg-api-terracotta mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
              Latest Updates
            </h2>
            <p className="text-lg text-api-midnight/80 max-w-xl">
              News and insights from our ongoing peace initiatives and research.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex mt-6 md:mt-0 border-api-terracotta text-api-terracotta hover:bg-api-terracotta hover:text-white"
          >
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className={`border border-api-terracotta/10 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-api-terracotta/10 text-api-terracotta border-api-terracotta/20">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-api-midnight/60 text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl text-api-midnight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-api-midnight/70">
                  {item.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="link" 
                  className="p-0 text-api-terracotta hover:text-api-midngiht font-medium"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            className="md:hidden border-api-terracotta text-api-terracotta hover:bg-api-terracotta hover:text-white"
          >
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
