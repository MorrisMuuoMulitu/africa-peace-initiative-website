
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArchive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample blog post data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "Regional Dialogue: The Conflict in Eastern Congo",
      excerpt: "Our inaugural event brought together participants from 5 African nations to analyze the complexities of the conflict in Eastern Congo and identify solutions for sustainable peace.",
      date: "March 27, 2023",
      time: "9:00 AM",
      location: "Trademark Hotel, Gigiri, Nairobi",
      category: "Event Recap",
      image: "/placeholder.svg",
      tags: ["DRC", "Regional Cooperation", "Peacebuilding"]
    },
    {
      id: 2,
      title: "Women as Peacemakers: Amplifying Voices for Lasting Change",
      excerpt: "Women play a crucial role in conflict resolution and peacebuilding across East Africa. Our recent workshop focused on amplifying these efforts and creating networks of female peace advocates.",
      date: "February 15, 2023",
      time: "10:30 AM",
      location: "Serena Hotel, Kampala, Uganda",
      category: "Workshop",
      image: "/placeholder.svg",
      tags: ["Women", "Leadership", "Community Engagement"]
    },
    {
      id: 3,
      title: "Youth Empowerment for Peace: Training Future Leaders",
      excerpt: "Our youth empowerment program successfully trained 45 young leaders from Kenya, Uganda, and Tanzania in conflict resolution techniques and community organizing.",
      date: "January 20, 2023",
      time: "9:00 AM",
      location: "Virtual Event",
      category: "Training",
      image: "/placeholder.svg",
      tags: ["Youth", "Education", "Leadership"]
    },
    {
      id: 4,
      title: "Economic Recovery as a Path to Stability in Post-Conflict Areas",
      excerpt: "Economic factors are key drivers of both conflict and peace. Our research highlights practical approaches to economic development in fragile contexts.",
      date: "December 10, 2022",
      time: "11:00 AM",
      location: "Kigali Convention Center, Rwanda",
      category: "Research",
      image: "/placeholder.svg",
      tags: ["Economics", "Development", "Recovery"]
    },
    {
      id: 5,
      title: "Traditional Approaches to Conflict Resolution: Learning from Indigenous Wisdom",
      excerpt: "This symposium explored how traditional conflict resolution mechanisms can be integrated with modern peacebuilding approaches for more sustainable outcomes.",
      date: "November 5, 2022",
      time: "2:00 PM",
      location: "National Museum, Nairobi, Kenya",
      category: "Symposium",
      image: "/placeholder.svg",
      tags: ["Traditional Knowledge", "Cultural Heritage", "Mediation"]
    },
    {
      id: 6,
      title: "Media's Role in Conflict and Peace: Responsible Reporting Workshop",
      excerpt: "Media professionals from across East Africa gathered to discuss the ethics of conflict reporting and how journalism can contribute to peace rather than tension.",
      date: "October 18, 2022",
      time: "9:30 AM",
      location: "Media Council Building, Nairobi",
      category: "Workshop",
      image: "/placeholder.svg",
      tags: ["Media", "Journalism", "Ethics"]
    }
  ];

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Categories for filtering
  const categories = ["All", "Event Recap", "Workshop", "Training", "Research", "Symposium"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-api-green/10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-api-midnight mb-4">News & Updates</h1>
            <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
              Stay informed about our latest events, research, and peace initiatives across East Africa.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-api-midnight/50" size={18} />
              <Input
                type="text"
                placeholder="Search by keyword, topic, or tag..."
                className="pl-10 py-6 bg-white border-api-cream focus:border-api-terracotta"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-api-terracotta hover:bg-api-terracotta/90 text-white py-6">
              Search
            </Button>
          </div>
          
          <Tabs defaultValue="All" className="w-full animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-api-cream/20">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-6 py-2 data-[state=active]:bg-api-terracotta data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts
                    .filter(post => category === "All" || post.category === category)
                    .map((post, index) => (
                      <Card 
                        key={post.id} 
                        className="overflow-hidden border-none rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up card-hover"
                        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                      >
                        <div className="h-48 overflow-hidden bg-api-green/10">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="bg-api-terracotta text-white border-none font-medium px-3 py-1">
                              {post.category}
                            </Badge>
                            <div className="flex items-center text-api-midnight/60 text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <CardTitle className="text-xl text-api-midnight mb-2 font-montserrat font-bold line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-api-midnight/70 line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 pb-2">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                              <div key={tag} className="flex items-center text-xs text-api-midnight/70 bg-api-cream/30 px-2 py-1 rounded-full">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="px-6 pb-6 pt-0">
                          <Button 
                            variant="outline" 
                            className="w-full border-api-terracotta text-api-terracotta hover:bg-api-terracotta hover:text-white"
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
                
                {filteredPosts.filter(post => category === "All" || post.category === category).length === 0 && (
                  <div className="text-center py-12 px-4">
                    <p className="text-lg text-api-midnight/70">No results found for "{searchQuery}"</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-api-terracotta text-api-terracotta"
                      onClick={() => setSearchQuery("")}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="flex justify-center mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-api-midnight hover:bg-api-midnight/90 text-white">
              Load More
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogArchive;
