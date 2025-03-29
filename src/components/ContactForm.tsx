
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // In a real application, we would submit this to a backend
      toast({
        title: "Thank you for joining us!",
        description: "We'll keep you updated on our events and initiatives.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <div ref={ref} className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className={`max-w-md mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-10">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-api-terracotta mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-api-midnight">
            Shape East Africa's peaceful future together
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="text-center p-10 bg-gradient-to-br from-api-ivory to-white rounded-xl shadow-md animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-api-forest mb-6">
              <CheckCircle size={32} className="text-api-gold" />
            </div>
            <h3 className="text-2xl font-montserrat font-semibold text-api-forest mb-3">
              Thank You for Joining!
            </h3>
            <p className="text-api-midnight mb-6">
              We've received your information and will keep you updated on our events and initiatives.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-api-gold hover:bg-api-terracotta text-api-midnight hover:text-white transition-all duration-300"
            >
              Sign Up Another Person
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-api-midnight font-medium">Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="border-api-midnight/20 focus:border-api-terracotta focus:ring-api-terracotta/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-api-midnight font-medium">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Your Email" 
                required 
                className="border-api-midnight/20 focus:border-api-terracotta focus:ring-api-terracotta/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="flex items-center text-api-midnight font-medium">
                Organization
                <span className="text-sm text-gray-500 ml-2">(Optional)</span>
              </Label>
              <Input 
                id="organization" 
                name="organization" 
                placeholder="Your Organization" 
                className="border-api-midnight/20 focus:border-api-terracotta focus:ring-api-terracotta/20"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-api-gold hover:bg-api-terracotta text-api-midnight hover:text-api-ivory font-semibold py-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-lg"
              aria-label="Join Now"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join Now"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
