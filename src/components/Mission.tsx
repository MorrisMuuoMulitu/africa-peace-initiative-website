
import React from "react";

const Mission = () => {
  return (
    <div className="py-16 px-4 sm:px-6 bg-api-ivory">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-montserrat font-bold text-api-terracotta mb-6">Our Mission</h2>
        <p className="text-lg md:text-xl font-lora text-api-midnight mb-6">
          The Africa Peace Initiative transforms peace and security by addressing conflict's root causes, 
          fostering inclusive dialogue, and empowering communities. From the DRC to East Africa, 
          we blend indigenous wisdom with modern solutions to tackle political, social, and economic 
          drivers of instability.
        </p>
        <div className="border-t-2 border-api-terracotta w-24 mx-auto pt-6 mt-6">
          <p className="italic text-api-midnight font-lora">
            "A resilient, just, and peaceful Africa where communities thrive in dignity, security, and mutual respect."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
