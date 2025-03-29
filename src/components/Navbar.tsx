
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-api-forest py-4 px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-api-ivory font-montserrat font-bold text-xl">Africa Peace Initiative</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#mission" className="text-api-ivory hover:text-api-gold transition-colors duration-300">Our Mission</a>
          <a href="#focus" className="text-api-ivory hover:text-api-gold transition-colors duration-300">Focus Areas</a>
          <a href="#events" className="text-api-ivory hover:text-api-gold transition-colors duration-300">Events</a>
          <Button 
            className="bg-api-terracotta hover:bg-api-gold text-api-ivory font-semibold transition-colors duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Us
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-api-ivory hover:text-api-gold focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-api-forest bg-opacity-95 absolute left-0 right-0 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#mission" 
              className="text-api-ivory hover:text-api-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </a>
            <a 
              href="#focus" 
              className="text-api-ivory hover:text-api-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Focus Areas
            </a>
            <a 
              href="#events" 
              className="text-api-ivory hover:text-api-gold transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <Button 
              className="bg-api-terracotta hover:bg-api-gold text-api-ivory font-semibold transition-colors duration-300 w-full"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
