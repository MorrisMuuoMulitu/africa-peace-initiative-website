
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Download, FileText, Film, Book, Search, Globe, BookOpen, FileType2 } from "lucide-react";

const ResourceLibrary = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const resources = [
    // Research Papers
    {
      id: 1,
      title: "Community-Based Approaches to Conflict Resolution in East Africa",
      type: "research",
      format: "PDF",
      date: "March 2023",
      author: "Dr. Amina Osei",
      description: "This research paper examines grassroots conflict resolution mechanisms in East African communities and their effectiveness.",
      fileSize: "3.2 MB",
      url: "#",
      icon: FileText
    },
    {
      id: 2,
      title: "The Role of Women in Post-Conflict Reconciliation",
      type: "research",
      format: "PDF",
      date: "November 2022",
      author: "Prof. Sarah Kimani",
      description: "Comprehensive analysis of how women's participation strengthens peace processes across Africa.",
      fileSize: "4.7 MB",
      url: "#",
      icon: FileText
    },
    {
      id: 3,
      title: "Youth Engagement in Peace-Building: Case Studies from Rwanda",
      type: "research",
      format: "PDF",
      date: "July 2023",
      author: "Dr. Emmanuel Ntaganda",
      description: "Research on successful youth-led peace initiatives in Rwanda and their long-term impact.",
      fileSize: "2.8 MB",
      url: "#",
      icon: FileText
    },
    
    // Educational Resources
    {
      id: 4,
      title: "Peace Education Curriculum for Secondary Schools",
      type: "educational",
      format: "ZIP",
      date: "January 2023",
      author: "API Education Team",
      description: "Complete curriculum package for implementing peace education in secondary schools.",
      fileSize: "15.6 MB",
      url: "#",
      icon: Book
    },
    {
      id: 5,
      title: "Conflict Resolution Training Manual",
      type: "educational",
      format: "PDF",
      date: "May 2023",
      author: "Ibrahim Mohammed",
      description: "Step-by-step training manual for community-based conflict resolution facilitators.",
      fileSize: "8.1 MB",
      url: "#",
      icon: BookOpen
    },
    {
      id: 6,
      title: "Dialogue Facilitation Toolkit",
      type: "educational",
      format: "PDF",
      date: "September 2022",
      author: "API Facilitation Team",
      description: "Comprehensive guide for facilitating productive dialogue between conflicting parties.",
      fileSize: "6.3 MB",
      url: "#",
      icon: BookOpen
    },
    
    // Media Resources
    {
      id: 7,
      title: "Voices for Peace: Stories from the Ground",
      type: "media",
      format: "Video",
      date: "April 2023",
      author: "API Media Team",
      description: "Documentary featuring testimonials from participants in our peace-building programs.",
      duration: "28:45",
      url: "#",
      icon: Film
    },
    {
      id: 8,
      title: "Peace Radio Program Series",
      type: "media",
      format: "Audio",
      date: "February-June 2023",
      author: "API Communications",
      description: "Radio series on conflict resolution and peace-building aired across East Africa.",
      episodes: 12,
      url: "#",
      icon: FileType2
    },
    {
      id: 9,
      title: "Digital Storytelling for Peace",
      type: "media",
      format: "Website",
      date: "Ongoing",
      author: "API Digital Team",
      description: "Interactive web platform sharing personal narratives from conflict-affected regions.",
      url: "#",
      icon: Globe
    }
  ];

  const filteredResources = (type) => {
    return resources
      .filter(resource => resource.type === type)
      .filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (resource.author && resource.author.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  };

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-white transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="resource-library"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Resource Library
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Access our collection of research papers, educational materials, and media resources
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-api-midnight/50" />
            <Input
              type="text"
              placeholder="Search resources..."
              className="pl-10 border-api-cream"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="research">
          <TabsList className="mb-6 grid w-full grid-cols-3 bg-api-cream/30">
            <TabsTrigger value="research">Research Papers</TabsTrigger>
            <TabsTrigger value="educational">Educational Materials</TabsTrigger>
            <TabsTrigger value="media">Media Resources</TabsTrigger>
          </TabsList>
          
          {["research", "educational", "media"].map((tabValue) => (
            <TabsContent key={tabValue} value={tabValue} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources(tabValue).length > 0 ? (
                  filteredResources(tabValue).map((resource) => {
                    const Icon = resource.icon;
                    return (
                      <Card key={resource.id} className="border-api-cream hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-start">
                            <Icon className="mr-2 h-5 w-5 text-api-terracotta shrink-0 mt-1" />
                            <span>{resource.title}</span>
                          </CardTitle>
                          <CardDescription className="text-xs flex justify-between items-center mt-2">
                            <span>{resource.date}</span>
                            <span className="bg-api-cream/40 px-2 py-0.5 rounded text-api-midnight/70">{resource.format}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-api-midnight/80">
                          <p>{resource.description}</p>
                          {resource.author && (
                            <p className="text-api-midnight/70 text-xs mt-2">
                              By: {resource.author}
                            </p>
                          )}
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="outline" className="w-full border-api-green text-api-green hover:bg-api-green/10">
                            <Download className="mr-2 h-4 w-4" />
                            Download {resource.fileSize && `(${resource.fileSize})`}
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })
                ) : (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                    <p className="text-api-midnight/70">No resources found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ResourceLibrary;
