
import React from "react";
import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const milestones = [
    {
      year: "Feb 2025",
      title: "Foundation",
      description: "The Africa Peace Initiative was established to address emerging conflicts in East Africa.",
    },
    {
      year: "Mar 2025",
      title: "Regional Dialogue",
      description: "Hosted our first event on 'The Conflict in Eastern Congo' with participants from 5 African nations.",
    },
    {
      year: "Apr 2025",
      title: "Planning Phase",
      description: "Currently planning our next series of regional dialogues and community engagement initiatives.",
    },
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-api-forest relative transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-30"></div>
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-api-gold opacity-[0.03] blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-api-terracotta opacity-[0.03] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Though we're just beginning, we've already taken important first steps in our mission to foster peace and dialogue.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-api-terracotta/30 top-0"></div>

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex items-center mb-12 relative ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms`, transitionDuration: "700ms", transitionTimingFunction: "ease-out" }}
              >
                {/* Year marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-api-terracotta z-10 flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">{milestone.year}</span>
                </div>

                {/* Content */}
                <div className={`w-5/12 ${isEven ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div className="bg-api-forest border border-api-sage/20 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl text-white font-bold mb-2">{milestone.title}</h3>
                    <Separator className="mb-3 bg-api-terracotta/30" />
                    <p className="text-white">{milestone.description}</p>
                  </div>
                </div>

                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
