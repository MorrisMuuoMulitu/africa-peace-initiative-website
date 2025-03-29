
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Linkedin, Twitter, Mail, Globe, BookOpen, MapPin, Briefcase } from "lucide-react";

const TeamMembers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Amina Osei",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      location: "Nairobi, Kenya",
      bio: "Dr. Amina Osei has over 15 years of experience in conflict resolution and peace-building across East Africa. She holds a PhD in International Relations from the University of Nairobi and has worked with various UN agencies before founding the Africa Peace Initiative.",
      expertise: ["Conflict Resolution", "Policy Development", "Cross-Cultural Communication"],
      publications: [
        "Community-Based Approaches to Peace-Building in East Africa (2020)",
        "The Role of Women in Post-Conflict Reconciliation (2018)",
        "Engaging Youth in Peace Processes (2016)"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amina@africapeaceinitiative.org"
      }
    },
    {
      id: 2,
      name: "Ibrahim Mohammed",
      role: "Director of Programs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      location: "Kigali, Rwanda",
      bio: "Ibrahim Mohammed oversees all program implementation at API. With a background in international development and conflict studies from the University of Cape Town, he specializes in designing community-based dialogue processes and peace education curriculum.",
      expertise: ["Program Design", "Monitoring & Evaluation", "Peace Education"],
      publications: [
        "Measuring Impact in Peace-Building Initiatives (2021)",
        "Dialogue Facilitation Handbook (2019)"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ibrahim@africapeaceinitiative.org"
      }
    },
    {
      id: 3,
      name: "Sophia Kimani",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      location: "Addis Ababa, Ethiopia",
      bio: "Prof. Sophia Kimani leads API's research initiatives, focusing on evidence-based approaches to conflict resolution. She has a PhD in Peace Studies from the University of Manchester and previously worked with the African Union Peace and Security Department.",
      expertise: ["Conflict Analysis", "Research Methodology", "Academic Publishing"],
      publications: [
        "Understanding Root Causes of Conflict in the Horn of Africa (2022)",
        "Traditional Mechanisms of Conflict Resolution (2019)",
        "Peace Education Impact Assessment (2017)"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sophia@africapeaceinitiative.org"
      }
    },
    {
      id: 4,
      name: "Jean-Claude Nkunda",
      role: "Field Operations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      location: "Goma, DRC",
      bio: "Jean-Claude Nkunda coordinates API's field operations in conflict zones. With over a decade of experience working in Eastern DRC, he specializes in community engagement, security protocols, and facilitating dialogue between opposing groups in active conflict areas.",
      expertise: ["Field Operations", "Security Management", "Community Engagement"],
      publications: [
        "Field Guide for Peace Practitioners in Conflict Zones (2020)"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jeanclaude@africapeaceinitiative.org"
      }
    },
    {
      id: 5,
      name: "Grace Achieng",
      role: "Youth Programs Coordinator",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      location: "Nairobi, Kenya",
      bio: "Grace Achieng leads API's youth-focused initiatives. With a background in education and psychology, she develops programs that engage young people in peace-building and conflict prevention. She previously worked with UNICEF on child protection in conflict zones.",
      expertise: ["Youth Engagement", "Peace Education", "Trauma-Informed Approaches"],
      publications: [
        "Engaging Youth as Peace Ambassadors (2021)",
        "Peace Education Curriculum for Secondary Schools (2019)"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "grace@africapeaceinitiative.org"
      }
    },
    {
      id: 6,
      name: "Dr. Emmanuel Diop",
      role: "Training & Capacity Building",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      location: "Accra, Ghana",
      bio: "Dr. Diop leads API's training programs for peace practitioners across Africa. With a PhD in Adult Education and conflict studies, he has developed comprehensive methodologies for building capacity in mediation, dialogue facilitation, and peace advocacy.",
      expertise: ["Training Design", "Facilitation", "Mediation"],
      publications: [
        "Training Manual for Peace Practitioners (2022)",
        "Building Capacity for Sustainable Peace (2020)",
        "Mediation Techniques in Community Conflicts (2018)"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emmanuel@africapeaceinitiative.org"
      }
    }
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-white transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="team"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Our Team
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Meet the dedicated professionals working to build peace across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Dialog key={member.id}>
              <DialogTrigger asChild>
                <Card 
                  className={`overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 transform ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`} 
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-api-midnight/80 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold font-montserrat mb-1">{member.name}</h3>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-api-terracotta border-none">
                          {member.role}
                        </Badge>
                      </div>
                      <div className="flex items-center mt-2 text-white/80 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {member.location}
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-montserrat text-api-midnight">
                    {member.name}
                  </DialogTitle>
                  <DialogDescription className="text-api-midnight/80">
                    {member.role} • {member.location}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-api-charcoal mb-4">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="bg-api-cream/30 text-api-charcoal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-api-darkgreen mb-3 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-api-terracotta" />
                      Publications
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-api-charcoal">
                      {member.publications.map((pub, idx) => (
                        <li key={idx}>{pub}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 flex justify-center gap-4">
                    <a href={member.social.linkedin} className="text-api-green hover:text-api-darkgreen transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-api-green hover:text-api-darkgreen transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-api-green hover:text-api-darkgreen transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
