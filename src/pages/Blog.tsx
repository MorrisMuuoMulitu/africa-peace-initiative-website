
import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const blogPosts = [
    {
      id: 1,
      title: "Regional Dialogue: The Conflict in Eastern Congo",
      excerpt: "Our inaugural event brought together participants from 5 African nations to analyze the complexities of the conflict in Eastern Congo and identify solutions for sustainable peace.",
      date: "March 27, 2025",
      time: "9:00 AM",
      location: "Trademark Hotel, Gigiri, Nairobi",
      category: "Upcoming Event",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Preparing for the Regional Dialogue Series",
      excerpt: "We're excited to announce our first major initiative: a series of regional dialogues focusing on key conflicts in East Africa, starting with Eastern Congo.",
      date: "February 15, 2025",
      time: "10:30 AM",
      location: "Virtual Event",
      category: "Announcement",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The Launch of Africa Peace Initiative",
      excerpt: "Today marks the official launch of the Africa Peace Initiative, a new organization dedicated to fostering peace and dialogue across East Africa.",
      date: "February 1, 2025",
      time: "2:00 PM",
      location: "Nairobi, Kenya",
      category: "Organization News",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div 
        className="pt-32 pb-24 px-4 sm:px-6 bg-api-cream/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            {/* Fix: Using Link as a wrapper */}
            <Link 
              to="/" 
              className="inline-flex items-center text-api-terracotta hover:text-api-terracotta/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="w-16 h-1 bg-api-terracotta mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-api-midnight mb-4 tracking-tight">
              News & Updates
            </h1>
            <p className="text-lg text-api-midnight/80 max-w-2xl">
              Follow our journey as we work to foster peace and dialogue across East Africa.
            </p>
          </div>

          <div 
            ref={ref}
            className={`grid grid-cols-1 gap-10 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
          >
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className={`border-none rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="h-64 lg:h-full overflow-hidden bg-api-green/10">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-8 col-span-2">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="outline" className={`
                        ${post.category === "Upcoming Event" ? "bg-api-terracotta" : 
                          post.category === "Announcement" ? "bg-api-gold" : "bg-api-green"}
                        text-white border-none font-medium px-4 py-1
                      `}>
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl text-api-midnight mb-4 font-montserrat font-bold">{post.title}</CardTitle>
                    
                    <CardDescription className="text-api-midnight/70 text-base mb-6 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center text-api-midnight/80">
                        <Calendar className="h-5 w-5 mr-2 text-api-terracotta" />
                        <span className="font-medium">{post.date}</span>
                      </div>
                      {post.time && (
                        <div className="flex items-center text-api-midnight/80">
                          <Clock className="h-5 w-5 mr-2 text-api-terracotta" />
                          <span className="font-medium">{post.time}</span>
                        </div>
                      )}
                      {post.location && (
                        <div className="flex items-center text-api-midnight/80">
                          <MapPin className="h-5 w-5 mr-2 text-api-terracotta" />
                          <span className="font-medium">{post.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      variant="default" 
                      className="bg-api-terracotta hover:bg-api-terracotta/90 text-white rounded-full px-6"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
