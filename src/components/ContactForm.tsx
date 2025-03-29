
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Mail, User, Building, ArrowRight, Users, BookOpen } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
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
        duration: 5000
      });
    }, 1000);
  };

  return <div ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-api-ivory/50">
      <div className={`max-w-7xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-4xl font-montserrat font-bold text-api-terracotta mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-api-midnight mb-6 max-w-3xl mx-auto">
            Shape East Africa's peaceful future together. Join our network of peacebuilders, activists, and community leaders working towards a more harmonious region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-start">
          {/* Left Content - Why Join */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-gradient-to-br from-api-ivory/80 to-white shadow-md border-none overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-api-forest mb-6 flex items-center">
                  <span className="bg-api-gold/20 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-api-forest" />
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
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-api-sage/10 shadow-md border-none overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-api-forest mb-6 flex items-center">
                  <span className="bg-api-gold/20 p-2 rounded-full mr-3">
                    <BookOpen className="h-5 w-5 text-api-forest" />
                  </span>
                  What You'll Receive
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-api-midnight">Monthly newsletter with peace initiatives and opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-api-midnight">Invitations to virtual and in-person networking events</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-api-gold mt-1 mr-3 flex-shrink-0" />
                    <p className="text-api-midnight">Early access to our research publications and resources</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Content - Sign Up Form */}
          <div className="lg:col-span-4">
            {isSubmitted ? <Card className="text-center p-8 bg-gradient-to-br from-api-ivory/50 to-white rounded-xl shadow-lg animate-fade-in h-full border-none">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-api-forest mb-8">
                  <CheckCircle size={40} className="text-api-gold" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold text-api-forest mb-4">
                  Thank You for Joining!
                </h3>
                <p className="text-api-midnight mb-8 text-lg">
                  We've received your information and will keep you updated on our events and initiatives. Welcome to our community of peacebuilders!
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-api-gold hover:bg-api-terracotta text-api-midnight hover:text-white transition-all duration-300 px-8 py-6 text-base" size="lg">
                  Sign Up Another Person
                </Button>
              </Card> : <Card className="shadow-lg border-none overflow-hidden bg-white h-full">
                <div className="bg-api-gold/10 py-5 px-6 border-b border-api-gold/30">
                  <h3 className="text-xl font-montserrat font-semibold text-api-forest flex items-center">
                    <Mail className="h-5 w-5 text-api-terracotta mr-2" />
                    Sign Up for Updates
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 p-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-api-midnight font-semibold flex items-center gap-2">
                      <User size={16} className="text-api-terracotta" />
                      Name
                    </Label>
                    <Input id="name" name="name" placeholder="Your Full Name" required className="border-gray-200 focus:border-api-terracotta focus:ring-api-terracotta/20 rounded-md py-3 text-base shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-api-midnight font-semibold flex items-center gap-2">
                      <Mail size={16} className="text-api-terracotta" />
                      Email
                    </Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email Address" required className="border-gray-200 focus:border-api-terracotta focus:ring-api-terracotta/20 rounded-md py-3 text-base shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-api-midnight font-semibold flex items-center gap-2">
                      <Building size={16} className="text-api-terracotta" />
                      Organization <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                    </Label>
                    <Input id="organization" name="organization" placeholder="Your Organization" className="border-gray-200 focus:border-api-terracotta focus:ring-api-terracotta/20 rounded-md py-3 text-base shadow-sm" />
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-4">By joining, you agree to receive updates from us. We respect your privacy and will never share your information.</p>
                    
                    <Button type="submit" className="w-full bg-api-gold hover:bg-api-terracotta text-api-midnight hover:text-white font-semibold py-6 text-base rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Join Our Community"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </Card>}
          </div>
        </div>
      </div>
    </div>;
};
export default ContactForm;
