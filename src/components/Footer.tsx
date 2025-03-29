
import React from "react";
import { Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-16 pb-8 px-4 sm:px-6 bg-api-forest relative">
      <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-montserrat text-api-ivory mb-6 font-semibold">About Us</h3>
            <p className="text-api-ivory/80 text-sm leading-relaxed">
              The Africa Peace Initiative is committed to rethinking peace and security across the continent, 
              with a focus on East Africa. We bring together diverse stakeholders to address conflict's root causes.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-montserrat text-api-ivory mb-6 font-semibold">Our Partners</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* These would be actual images in a real application */}
              <div className="w-40 h-16 bg-api-ivory bg-opacity-10 rounded flex items-center justify-center text-api-ivory text-sm hover:bg-opacity-20 transition-all cursor-pointer">
                Konrad Adenauer Stiftung
              </div>
              <div className="w-40 h-16 bg-api-ivory bg-opacity-10 rounded flex items-center justify-center text-api-ivory text-sm hover:bg-opacity-20 transition-all cursor-pointer">
                Bosch Alumni Network
              </div>
              <div className="w-40 h-16 bg-api-ivory bg-opacity-10 rounded flex items-center justify-center text-api-ivory text-sm hover:bg-opacity-20 transition-all cursor-pointer">
                National Endowment for Democracy
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-montserrat text-api-ivory mb-6 font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-3 items-center md:items-end">
              <a 
                href="mailto:info@africapeaceinitiative.org" 
                className="text-api-ivory hover:text-api-gold transition-colors duration-300 flex items-center gap-2 justify-center md:justify-end"
              >
                <Mail size={18} />
                <span>info@africapeaceinitiative.org</span>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-api-ivory hover:text-api-gold transition-colors duration-300 flex items-center gap-2 justify-center md:justify-end"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
                <span>@AfricaPeaceInit</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-api-ivory/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-api-ivory/70 text-sm">© {new Date().getFullYear()} Africa Peace Initiative. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-api-ivory/70 hover:text-api-gold flex items-center gap-2 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
