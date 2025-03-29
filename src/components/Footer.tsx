
import React from "react";
import { Twitter, Mail, ArrowUp, ExternalLink, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-20 pb-8 px-4 sm:px-6 bg-api-forest relative">
      <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-montserrat text-api-ivory mb-6 font-semibold">About Us</h3>
            <p className="text-api-ivory/80 text-sm leading-relaxed">
              The Africa Peace Initiative is committed to rethinking peace and security across the continent, 
              with a focus on East Africa. We bring together diverse stakeholders to address conflict's root causes.
            </p>
            <div className="mt-8 flex flex-col space-y-3 items-center md:items-start">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-api-ivory/70 hover:text-api-gold transition-colors duration-300 flex items-center gap-2"
              >
                <MapPin size={18} />
                <span>Nairobi, Kenya</span>
              </a>
              <a 
                href="tel:+254123456789" 
                className="text-api-ivory/70 hover:text-api-gold transition-colors duration-300 flex items-center gap-2"
              >
                <Phone size={18} />
                <span>+254 123 456 789</span>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-montserrat text-api-ivory mb-8 font-semibold">Our Partners</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="partner-card group">
                <div className="p-4 bg-api-ivory/5 backdrop-blur-sm rounded-lg border border-api-ivory/10 hover:border-api-gold/30 transition-all duration-300 flex flex-col items-center justify-center h-full">
                  <Avatar className="h-16 w-16 mb-3 bg-white/10">
                    <AvatarImage src="/kas-logo.png" alt="Konrad Adenauer Stiftung" />
                    <AvatarFallback className="bg-api-ivory/10 text-api-ivory font-bold">KAS</AvatarFallback>
                  </Avatar>
                  <h4 className="text-api-ivory text-sm font-medium group-hover:text-api-gold transition-colors">
                    Konrad Adenauer Stiftung
                  </h4>
                  <a 
                    href="https://www.kas.de/en/home" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-2 inline-flex items-center text-xs text-api-ivory/50 hover:text-api-gold"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Visit
                  </a>
                </div>
              </div>
              
              <div className="partner-card group">
                <div className="p-4 bg-api-ivory/5 backdrop-blur-sm rounded-lg border border-api-ivory/10 hover:border-api-gold/30 transition-all duration-300 flex flex-col items-center justify-center h-full">
                  <Avatar className="h-16 w-16 mb-3 bg-white/10">
                    <AvatarImage src="/bosch-logo.png" alt="Bosch Alumni Network" />
                    <AvatarFallback className="bg-api-ivory/10 text-api-ivory font-bold">BAN</AvatarFallback>
                  </Avatar>
                  <h4 className="text-api-ivory text-sm font-medium group-hover:text-api-gold transition-colors">
                    Bosch Alumni Network
                  </h4>
                  <a 
                    href="https://www.boschalumni.net/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-2 inline-flex items-center text-xs text-api-ivory/50 hover:text-api-gold"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Visit
                  </a>
                </div>
              </div>
              
              <div className="partner-card group">
                <div className="p-4 bg-api-ivory/5 backdrop-blur-sm rounded-lg border border-api-ivory/10 hover:border-api-gold/30 transition-all duration-300 flex flex-col items-center justify-center h-full">
                  <Avatar className="h-16 w-16 mb-3 bg-white/10">
                    <AvatarImage src="/ned-logo.png" alt="National Endowment for Democracy" />
                    <AvatarFallback className="bg-api-ivory/10 text-api-ivory font-bold">NED</AvatarFallback>
                  </Avatar>
                  <h4 className="text-api-ivory text-sm font-medium group-hover:text-api-gold transition-colors">
                    National Endowment for Democracy
                  </h4>
                  <a 
                    href="https://www.ned.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-2 inline-flex items-center text-xs text-api-ivory/50 hover:text-api-gold"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-montserrat text-api-ivory mb-6 font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-4 items-center md:items-end">
              <a 
                href="mailto:info@africapeaceinitiative.org" 
                className="text-api-ivory hover:text-api-gold transition-colors duration-300 flex items-center gap-2 justify-center md:justify-end group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>info@africapeaceinitiative.org</span>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-api-ivory hover:text-api-gold transition-colors duration-300 flex items-center gap-2 justify-center md:justify-end group"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                <span>@AfricaPeaceInit</span>
              </a>
            </div>
            
            <div className="mt-8 bg-api-ivory/5 backdrop-blur-sm rounded-lg border border-api-ivory/10 p-4">
              <h4 className="text-api-ivory font-medium mb-3">Stay Connected</h4>
              <p className="text-api-ivory/70 text-xs mb-4">Sign up for our newsletter to receive updates about our initiatives and events.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-3 py-2 bg-api-ivory/10 text-api-ivory placeholder:text-api-ivory/50 rounded border border-api-ivory/20 focus:outline-none focus:border-api-gold/40 text-sm flex-grow"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-api-gold text-api-midnight font-medium rounded text-sm hover:bg-api-terracotta transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <Separator className="bg-api-ivory/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-api-ivory/70 text-sm">&copy; {new Date().getFullYear()} Africa Peace Initiative. All rights reserved.</p>
            <div className="flex gap-4 mt-2 text-xs text-api-ivory/50">
              <a href="#" className="hover:text-api-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-api-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-api-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-api-ivory/5 hover:bg-api-ivory/10 rounded-full text-api-ivory/70 hover:text-api-gold transition-all duration-300"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
