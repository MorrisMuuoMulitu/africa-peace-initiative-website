
import React from "react";
import { Twitter, Mail, ArrowUp, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 px-4 sm:px-6 bg-api-forest relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-api-gold opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
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
            <h3 className="text-xl font-montserrat text-api-ivory mb-6 font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a href="#mission" className="text-api-ivory/70 hover:text-api-gold transition-colors duration-300">Our Mission</a>
              <a href="#focus" className="text-api-ivory/70 hover:text-api-gold transition-colors duration-300">Focus Areas</a>
              <a href="#partners" className="text-api-ivory/70 hover:text-api-gold transition-colors duration-300">Our Partners</a>
              <a href="#contact" className="text-api-ivory/70 hover:text-api-gold transition-colors duration-300">Contact Us</a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-md font-montserrat text-api-ivory mb-4 font-medium">Follow Us</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-api-ivory/10 rounded-full hover:bg-api-gold/20 transition-colors text-api-ivory">
                  <Twitter size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-api-ivory/10 rounded-full hover:bg-api-gold/20 transition-colors text-api-ivory">
                  <Facebook size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-api-ivory/10 rounded-full hover:bg-api-gold/20 transition-colors text-api-ivory">
                  <Linkedin size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-api-ivory/10 rounded-full hover:bg-api-gold/20 transition-colors text-api-ivory">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-montserrat text-api-ivory mb-6 font-semibold">Stay Connected</h3>
            <p className="text-api-ivory/70 text-sm mb-4">
              Join our newsletter to receive updates on our initiatives, events, and impact stories.
            </p>
            
            <form className="mt-4">
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-api-ivory/10 border border-api-ivory/20 rounded-lg text-api-ivory placeholder:text-api-ivory/50 focus:outline-none focus:border-api-gold/50 transition-colors"
                  aria-label="Email for newsletter"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-api-gold hover:bg-api-terracotta text-api-midnight font-medium transition-colors"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            
            <div className="mt-8">
              <a 
                href="mailto:info@africapeaceinitiative.org" 
                className="text-api-ivory hover:text-api-gold transition-colors duration-300 flex items-center gap-2 justify-center md:justify-end group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>info@africapeaceinitiative.org</span>
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-api-ivory/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-api-ivory/70 text-sm">&copy; {currentYear} Africa Peace Initiative. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs text-api-ivory/50">
              <a href="#" className="hover:text-api-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-api-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-api-gold transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-api-gold transition-colors">Accessibility</a>
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
