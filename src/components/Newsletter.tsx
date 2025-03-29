
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Mail, ChevronRight, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically handle the subscription
    // For now, we'll just show a success message
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter list.",
      variant: "success"
    });
    
    setIsSubscribed(true);
    setEmail("");
  };

  const previewNewsletters = [
    {
      id: 1,
      title: "Peace Initiatives Monthly: April 2023",
      date: "April 28, 2023",
      excerpt: "Updates from our Eastern Congo dialogue, new educational resources, and upcoming events in Nairobi and Kigali.",
      image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 2,
      title: "Peace Initiatives Monthly: March 2023",
      date: "March 31, 2023",
      excerpt: "Special edition covering the Women for Peace conference and South Sudan community reconciliation project results.",
      image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Peace Initiatives Monthly: February 2023",
      date: "February 28, 2023",
      excerpt: "Youth peace education program launch, new research publication, and partner spotlight featuring our collaboration with UNESCO.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-api-green transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-api-cream/30 rounded-full -mt-20 -mr-20 z-0"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-api-terracotta/10 rounded-full -mb-10 -ml-10 z-0"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-6">
                  Stay Informed with Our Newsletter
                </h2>
                <p className="text-api-midnight/80 mb-8">
                  Subscribe to receive updates on our peace initiatives, research findings, and upcoming events across Africa.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-api-midnight/50" />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="pl-10 py-6 border-api-cream"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button type="submit" className="bg-api-green hover:bg-api-darkgreen text-white px-8 py-6">
                      Subscribe
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon" className="border-api-cream">
                          <Info className="h-4 w-4 text-api-midnight/70" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-montserrat text-api-midnight">
                            Newsletter Preview
                          </DialogTitle>
                          <DialogDescription>
                            Browse previous newsletters to see what you'll receive
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="py-4 space-y-6">
                          {previewNewsletters.map((newsletter) => (
                            <Card key={newsletter.id} className="overflow-hidden">
                              <CardContent className="p-0">
                                <div className="flex flex-col sm:flex-row">
                                  <div className="sm:w-1/3 h-36 sm:h-auto">
                                    <img 
                                      src={newsletter.image} 
                                      alt={newsletter.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="sm:w-2/3 p-4 sm:p-6">
                                    <div className="text-xs text-api-midnight/60 mb-2">
                                      {newsletter.date}
                                    </div>
                                    <h3 className="text-lg font-semibold font-montserrat text-api-midnight mb-2">
                                      {newsletter.title}
                                    </h3>
                                    <p className="text-sm text-api-midnight/80">
                                      {newsletter.excerpt}
                                    </p>
                                    <Button variant="link" className="p-0 h-auto mt-2 text-api-green">
                                      Read full newsletter <ChevronRight className="h-3 w-3 ml-1" />
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        
                        <DialogFooter>
                          <Button type="button" onClick={() => document.getElementById('email-input')?.focus()}>
                            Subscribe Now
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </form>
                
                <p className="text-xs text-api-midnight/60 mt-4">
                  By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
                </p>
              </div>
              
              <div className="md:w-1/2 bg-api-cream/20 rounded-xl p-6 border border-api-cream">
                <h3 className="text-lg font-semibold font-montserrat text-api-midnight mb-4">
                  What You'll Receive:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Monthly updates on our peace initiatives and events",
                    "New research and educational resources",
                    "Stories and testimonials from program participants",
                    "Opportunities to get involved and support our work",
                    "Analysis of current peace and conflict issues in Africa"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-api-terracotta/20 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                        <ChevronRight className="h-3 w-3 text-api-terracotta" />
                      </div>
                      <span className="text-api-midnight/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
