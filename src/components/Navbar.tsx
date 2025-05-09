
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <nav className={`py-3 px-4 sm:px-6 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-api-ivory shadow-md' : 'bg-api-ivory/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="https://ik.imagekit.io/5zp8ovb7c/Africa%20Peace%20Initiative/API%20logo-12.png?updatedAt=1741074058148" 
              alt="Africa Peace Initiative Logo" 
              className="w-auto max-h-16 object-contain" 
              width="200"
              height="56"
            />
          </a>
        </div>

        {/* Contact Info - Desktop */}
        <div className="hidden md:flex items-center mr-4">
          <a href="tel:+254706767226" className="flex items-center text-api-charcoal hover:text-api-terracotta transition-colors duration-300">
            <Phone size={18} className="mr-2" />
            <span className="text-api-charcoal">+254 706 767226</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#mission" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 relative link-underline">
            Our Mission
          </a>
          <a href="#focus" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 relative link-underline">
            Focus Areas
          </a>
          <a href="#gallery" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 relative link-underline">
            Gallery
          </a>
          <a href="#news" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 relative link-underline">
            News
          </a>
          <a href="#events" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 relative link-underline">
            Events
          </a>
          <Button className="bg-api-terracotta hover:bg-api-clay text-white font-semibold transition-colors duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
            Join Us
          </Button>
          <Link to="/donate">
            <Button variant="outline" className="border-api-forestgreen text-api-forestgreen hover:bg-api-forestgreen/10 hover:border-api-green transition-all duration-300">
              Donate
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-api-charcoal hover:text-api-terracotta focus:outline-none" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden mt-4 bg-api-ivory/95 backdrop-blur-md absolute left-0 right-0 p-6 shadow-lg border-t border-api-sage/20 animate-fade-in">
          <div className="flex flex-col space-y-5">
            <a href="tel:+254706767226" className="flex items-center text-api-charcoal hover:text-api-terracotta transition-colors duration-300 py-2">
              <Phone size={18} className="mr-2" />
              <span>+254 706 767226</span>
            </a>
            <a href="#mission" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Our Mission
            </a>
            <a href="#focus" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Focus Areas
            </a>
            <a href="#gallery" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </a>
            <a href="#news" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              News
            </a>
            <a href="#events" className="text-api-charcoal hover:text-api-terracotta transition-colors duration-300 py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Events
            </a>
            <Button className="bg-api-terracotta hover:bg-api-clay text-white font-semibold transition-colors duration-300 w-full mt-2" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
              setIsMenuOpen(false);
            }}>
              Join Us
            </Button>
            <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="border-api-forestgreen text-api-forestgreen hover:bg-api-forestgreen/10 hover:border-api-green transition-all duration-300 w-full">
                Donate
              </Button>
            </Link>
          </div>
        </div>}
    </nav>;
};

export default Navbar;
