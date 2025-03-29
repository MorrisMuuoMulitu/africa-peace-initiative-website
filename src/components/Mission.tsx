
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="py-20 px-4 sm:px-6 bg-gradient-to-b from-api-ivory to-white">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-api-midnight mb-8">Our Mission</h2>
          <p className="text-lg md:text-xl font-lora text-api-midnight leading-relaxed mb-10">
            The Africa Peace Initiative transforms peace and security by addressing conflict's root causes, 
            fostering inclusive dialogue, and empowering communities. From the DRC to East Africa, 
            we blend indigenous wisdom with modern solutions to tackle political, social, and economic 
            drivers of instability.
          </p>
          <div className="relative border-l-2 border-api-terracotta pt-6 pl-6 mt-10 max-w-xl mx-auto text-left">
            <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-api-terracotta transform -translate-x-[7px]"></div>
            <p className="italic text-api-midnight font-lora text-lg">
              "A resilient, just, and peaceful Africa where communities thrive in dignity, security, and mutual respect."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
