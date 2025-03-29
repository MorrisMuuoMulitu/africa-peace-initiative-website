
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} id="mission" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-api-ivory to-white">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-api-midnight mb-8">Our Mission</h2>
          <p className="text-lg md:text-xl font-lora text-api-midnight leading-relaxed mb-10">
            The Africa Peace Initiative transforms peace and security by addressing conflict's root causes, 
            fostering inclusive dialogue, and empowering communities. From the DRC to East Africa, 
            we blend indigenous wisdom with modern solutions to tackle political, social, and economic 
            drivers of instability.
          </p>
          
          <Card className="bg-white/50 backdrop-blur-sm border border-api-terracotta/20 shadow-md mt-12 max-w-2xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="relative border-l-4 border-api-terracotta p-6">
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-api-terracotta transform -translate-x-[8px]"></div>
                <div className="absolute top-0 right-0 w-12 h-12 text-api-terracotta/10 font-serif text-6xl leading-none">"</div>
                <Separator className="absolute top-0 right-12 left-6 bg-api-terracotta/10" />
                <p className="italic text-api-midnight font-lora text-lg relative z-10">
                  "A resilient, just, and peaceful Africa where communities thrive in dignity, security, and mutual respect."
                </p>
                <div className="absolute bottom-0 right-4 w-8 h-8 text-api-terracotta/10 font-serif text-6xl leading-none">"</div>
                <Separator className="absolute bottom-0 right-6 left-12 bg-api-terracotta/10" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mission;
