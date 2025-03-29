
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Award } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SuccessStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 1,
      title: "Community Reconciliation in South Sudan",
      year: "2023",
      location: "Juba, South Sudan",
      participants: 150,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      shortDesc: "Facilitating dialogue between farming and pastoral communities to resolve land disputes.",
      fullDesc: "In early 2023, we facilitated a series of dialogue sessions between farming and pastoral communities in South Sudan who had been engaged in violent conflicts over land and water rights for generations. Through our structured dialogue process, community leaders established a local council for resource sharing and created an early warning system to prevent future conflicts.",
      outcomes: [
        "Creation of joint resource management committee",
        "50% reduction in violent incidents within 6 months",
        "Shared grazing and farming schedule implemented",
        "Youth exchange program established"
      ]
    },
    {
      id: 2,
      title: "Women for Peace in Rwanda",
      year: "2022",
      location: "Kigali, Rwanda",
      participants: 220,
      image: "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      shortDesc: "Empowering women as peace advocates in post-conflict communities.",
      fullDesc: "Our 'Women for Peace' initiative trained 220 women from different communities in Rwanda to become peace advocates. Participants received training in conflict resolution, mediation, and community organizing. These women have since established 15 local peace committees and have been instrumental in resolving over 50 potential conflicts at the community level before they escalated to violence.",
      outcomes: [
        "15 local peace committees established",
        "50+ conflicts resolved through mediation",
        "Increase in women's representation in local governance",
        "Creation of a regional women's peace network"
      ]
    },
    {
      id: 3,
      title: "Youth Peace Education in Kenya",
      year: "2021",
      location: "Nairobi, Kenya",
      participants: 1500,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      shortDesc: "Implementing peace education curriculum in schools across Kenya.",
      fullDesc: "In partnership with the Kenyan Ministry of Education, we developed and implemented a peace education curriculum in 25 schools across the country. The program reached over 1,500 students aged 12-18, teaching conflict resolution skills, cultural understanding, and peace advocacy. Follow-up assessments showed a 65% improvement in students' ability to peacefully resolve conflicts, with many schools reporting reduced incidents of bullying and violence.",
      outcomes: [
        "25 schools adopted comprehensive peace education",
        "65% improvement in conflict resolution skills",
        "Reduction in school violence incidents",
        "Student-led peace clubs established in all 25 schools"
      ]
    },
    {
      id: 4,
      title: "Cross-Border Peace Initiative",
      year: "2020",
      location: "Ethiopia-Kenya Border",
      participants: 300,
      image: "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      shortDesc: "Mediating conflicts between pastoral communities across national borders.",
      fullDesc: "Our cross-border peace initiative brought together elders and youth from pastoral communities along the Ethiopia-Kenya border who had been engaged in cattle raiding and violent disputes. Through a series of peace dialogues and cultural exchange activities, we facilitated the creation of a cross-border peace accord that established shared grazing rights, mechanisms for the return of stolen cattle, and joint cultural celebrations.",
      outcomes: [
        "Cross-border peace accord signed by 12 community groups",
        "70% reduction in cattle raiding incidents",
        "Joint grazing management system implemented",
        "Annual cross-border peace celebration established"
      ]
    }
  ];

  const handlePrevStory = () => {
    setActiveStory((prev) => (prev > 0 ? prev - 1 : stories.length - 1));
  };

  const handleNextStory = () => {
    setActiveStory((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
  };

  const activeStoryData = stories[activeStory];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-gradient-to-b from-api-cream/20 to-white transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="success-stories"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Real impact from our peace-building initiatives across Africa
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-10 pointer-events-none">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-lg border-none pointer-events-auto opacity-80 hover:opacity-100"
              onClick={handlePrevStory}
            >
              <ChevronLeft className="h-5 w-5 text-api-midnight" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-lg border-none pointer-events-auto opacity-80 hover:opacity-100" 
              onClick={handleNextStory}
            >
              <ChevronRight className="h-5 w-5 text-api-midnight" />
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <div className="transition-all duration-500 ease-in-out flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={activeStoryData.image}
                  alt={activeStoryData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/70 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-api-terracotta border-none">
                  {activeStoryData.year}
                </Badge>
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-api-midnight mb-3">
                    {activeStoryData.title}
                  </h3>
                  <p className="text-api-midnight/80 mb-4">
                    {activeStoryData.shortDesc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-api-midnight/70">
                      <MapPin className="h-4 w-4 mr-2 text-api-terracotta" />
                      <span className="text-sm">{activeStoryData.location}</span>
                    </div>
                    <div className="flex items-center text-api-midnight/70">
                      <Users className="h-4 w-4 mr-2 text-api-terracotta" />
                      <span className="text-sm">{activeStoryData.participants} Participants</span>
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-api-green hover:bg-api-darkgreen text-white">
                      Read Full Story
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-montserrat text-api-midnight">
                        {activeStoryData.title}
                      </DialogTitle>
                      <DialogDescription className="text-api-midnight/70">
                        {activeStoryData.year} • {activeStoryData.location}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-6">
                      <img 
                        src={activeStoryData.image} 
                        alt={activeStoryData.title} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-api-charcoal">
                        {activeStoryData.fullDesc}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-api-darkgreen mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-api-terracotta" />
                          Key Outcomes
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-api-charcoal">
                          {activeStoryData.outcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`h-3 w-3 rounded-full mx-1 transition-all ${
                  index === activeStory
                    ? "bg-api-terracotta w-6"
                    : "bg-api-terracotta/30"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
