
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, we would submit this to a backend
    toast({
      title: "Success!",
      description: "Thank you for joining us! We'll be in touch soon.",
      duration: 5000,
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <div className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-montserrat font-bold text-api-terracotta text-center mb-8">
          Join Us to Shape East Africa's Peaceful Future
        </h2>
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
          <Button 
            type="submit" 
            className="w-full bg-api-gold hover:bg-api-terracotta text-api-midnight hover:text-api-ivory font-semibold py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Join Now"
          >
            Join Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
