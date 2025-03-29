
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Mail, User, Building, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

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
    <div ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className={`max-w-6xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-4xl font-montserrat font-bold text-api-terracotta mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-api-midnight mb-6 max-w-2xl mx-auto">
            Shape East Africa's peaceful future together. Join our network of peacebuilders, activists, and community leaders working towards a more harmonious region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="bg-api-ivory/50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-api-forest mb-4 flex items-center">
                <span className="bg-api-gold/20 p-2 rounded-full mr-3">
                  <Mail className="h-5 w-5 text-api-forest" />
                </span>
                Why Join Our Network?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                  <p className="text-api-midnight">Connect with peacebuilders from across East Africa</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                  <p className="text-api-midnight">Access exclusive resources and training opportunities</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                  <p className="text-api-midnight">Participate in regional peace forums and events</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                  <p className="text-api-midnight">Contribute to policy discussions and advocacy efforts</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                  <p className="text-api-midnight">Be part of a movement transforming communities</p>
                </li>
              </ul>
            </div>
          </div>
          
          {isSubmitted ? (
            <Card className="text-center p-10 bg-gradient-to-br from-api-ivory to-white rounded-xl shadow-md animate-fade-in">
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
            </Card>
          ) : (
            <Card className="overflow-hidden shadow-lg border border-gray-100 rounded-lg">
              <CardContent className="p-0">
                <div className="bg-api-forest/10 py-4 px-6 border-b border-gray-100">
                  <h3 className="text-xl font-montserrat font-semibold text-api-forest">Sign Up for Updates</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 p-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-api-midnight font-semibold flex items-center gap-2">
                      <User size={16} className="text-api-terracotta" />
                      Name
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="border-gray-200 focus:border-api-terracotta focus:ring-api-terracotta/20 rounded-md py-3 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-api-midnight font-semibold flex items-center gap-2">
                      <Mail size={16} className="text-api-terracotta" />
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      className="border-gray-200 focus:border-api-terracotta focus:ring-api-terracotta/20 rounded-md py-3 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-api-midnight font-semibold flex items-center gap-2">
                      <Building size={16} className="text-api-terracotta" />
                      Organization <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                    </Label>
                    <Input 
                      id="organization" 
                      name="organization" 
                      placeholder="Your Organization" 
                      className="border-gray-200 focus:border-api-terracotta focus:ring-api-terracotta/20 rounded-md py-3 text-base"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-api-gold hover:bg-api-terracotta text-api-midnight hover:text-white font-semibold py-6 text-base rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Join Now"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
