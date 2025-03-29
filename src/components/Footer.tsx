
import React from "react";
import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-api-forest">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl font-montserrat text-api-ivory mb-6">Our Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* These would be actual images in a real application */}
            <div className="w-40 h-16 bg-api-ivory bg-opacity-10 rounded flex items-center justify-center text-api-ivory">
              Konrad Adenauer Stiftung
            </div>
            <div className="w-40 h-16 bg-api-ivory bg-opacity-10 rounded flex items-center justify-center text-api-ivory">
              Bosch Alumni Network
            </div>
            <div className="w-40 h-16 bg-api-ivory bg-opacity-10 rounded flex items-center justify-center text-api-ivory">
              National Endowment for Democracy
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-api-terracotta hover:text-api-gold transition-colors duration-300"
            aria-label="Follow us on Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
        <div className="text-center mt-8">
          <p className="text-api-ivory text-sm">© {new Date().getFullYear()} Africa Peace Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
