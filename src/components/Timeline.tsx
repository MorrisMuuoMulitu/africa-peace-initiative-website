
import React from "react";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";
import { Award, Book, Flag } from "lucide-react";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isMobile = useIsMobile();

  const milestones = [
    {
      year: "Feb 2025",
      title: "Foundation",
      description: "The Africa Peace Initiative was established to address emerging conflicts in East Africa.",
      icon: <Flag className="w-6 h-6 text-api-terracotta" />,
    },
    {
      year: "Mar 2025",
      title: "Regional Dialogue",
      description: "Hosted our first event on 'The Conflict in Eastern Congo' with participants from 5 African nations.",
      icon: <Book className="w-6 h-6 text-api-terracotta" />,
    },
    {
      year: "Apr 2025",
      title: "Planning Phase",
      description: "Currently planning our next series of regional dialogues and community engagement initiatives.",
      icon: <Award className="w-6 h-6 text-api-terracotta" />,
    },
  ];

  return (
    <div
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-api-darkgreen/95 to-api-darkgreen relative transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-30"></div>
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-api-gold opacity-[0.03] blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-api-terracotta opacity-[0.03] blur-3xl"></div>
        
        {/* Add subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0h2v2H1V0zm4 0h2v2H5V0zm4 0h2v2H9V0zm4 0h2v2h-2V0zm4 0h2v2h-2V0zm-16 4h2v2H1V4zm4 0h2v2H5V4zm4 0h2v2H9V4zm4 0h2v2h-2V4zm4 0h2v2h-2V4zm-16 4h2v2H1V8zm4 0h2v2H5V8zm4 0h2v2H9V8zm4 0h2v2h-2V8zm4 0h2v2h-2V8zm-16 4h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-16 4h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z\' fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16 transform transition-all duration-700" 
             style={{ transitionDelay: "100ms" }}>
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-4xl font-bold font-montserrat text-white mb-4 md:mb-6 tracking-tight">
            Our Journey
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Though we're just beginning, we've already taken important first steps in our mission to foster peace and dialogue.
          </p>
        </div>

        {isMobile ? (
          // Mobile timeline layout
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative pl-10 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`, 
                  transitionDuration: "800ms", 
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" 
                }}
              >
                {/* Icon on the left */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-api-green border-2 border-white/20 flex items-center justify-center shadow-lg">
                  {milestone.icon}
                </div>
                
                {/* Line connecting to next item */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-api-terracotta/70 to-api-terracotta/10"></div>
                )}
                
                {/* Content */}
                <div className="bg-gradient-to-br from-api-green/90 to-api-green/80 border border-white/10 rounded-xl p-5 shadow-xl">
                  <div className="inline-block bg-api-terracotta/20 text-api-terracotta font-semibold text-sm py-1 px-3 rounded-full mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg text-white font-bold mb-2 tracking-tight">{milestone.title}</h3>
                  <Separator className="mb-2 bg-white/20" />
                  <p className="text-white/90 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop timeline layout
          <div className="relative mt-20">
            {/* Timeline center line with animation */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-api-terracotta/10 via-api-terracotta/70 to-api-terracotta/10 top-0 rounded-full"></div>

            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex items-center mb-20 relative ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`, 
                    transitionDuration: "800ms", 
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" 
                  }}
                >
                  {/* Year marker with icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-api-green border-2 border-white/20 z-10 flex items-center justify-center shadow-lg">
                    {milestone.icon}
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? "pr-16 text-right" : "pl-16 text-left"}`}>
                    <div className="bg-gradient-to-br from-api-green/90 to-api-green/80 border border-white/10 rounded-xl p-7 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                      <div className="inline-block bg-api-terracotta/20 text-api-terracotta font-semibold text-sm py-1 px-3 rounded-full mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl text-white font-bold mb-2 tracking-tight">{milestone.title}</h3>
                      <Separator className="mb-3 bg-white/20" />
                      <p className="text-white/90 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Empty space on the other side */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
