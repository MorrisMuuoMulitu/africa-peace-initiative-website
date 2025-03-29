
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // In a real application, we would submit this to a backend
      toast({
        title: "Success!",
        description: "Thank you for joining us! We'll be in touch soon.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <div className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-montserrat font-bold text-api-terracotta text-center mb-8">
          Join Us to Shape East Africa's Peaceful Future
        </h2>
        
        {isSubmitted ? (
          <div className="text-center p-6 bg-api-ivory rounded-lg animate-fade-in">
            <CheckCircle size={48} className="mx-auto mb-4 text-api-forest" />
            <h3 className="text-xl font-montserrat font-semibold text-api-forest mb-2">
              Thank You for Joining!
            </h3>
            <p className="text-api-midnight">
              We've received your information and will keep you updated on our events and initiatives.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-api-gold hover:bg-api-terracotta text-api-midnight"
            >
              Sign Up Another Person
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="border-api-midnight"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Your Email" 
                required 
                className="border-api-midnight"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="flex items-center">
                Organization
                <span className="text-sm text-gray-500 ml-2">(Optional)</span>
              </Label>
              <Input 
                id="organization" 
                name="organization" 
                placeholder="Your Organization" 
                className="border-api-midnight"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-api-gold hover:bg-api-terracotta text-api-midnight hover:text-api-ivory font-semibold py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
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
