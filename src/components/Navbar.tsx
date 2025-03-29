
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Check if scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/", hash: null },
    { name: "About", href: "/#mission", hash: "mission" },
    { name: "Focus Areas", href: "/#focus", hash: "focus" },
    { name: "Events", href: "/#events", hash: "events" },
    { name: "News", href: "/#news", hash: "news" },
    { name: "Gallery", href: "/#gallery", hash: "gallery" },
    { name: "Contact", href: "/#contact", hash: "contact" },
    { name: "Blog", href: "/blog", hash: null },
  ];

  const scrollToSection = (sectionId) => {
    closeMenu();
    if (!isHomePage) return; // Don't scroll if not on home page
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-api-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">API</span>
          </div>
          <div className="font-montserrat font-bold text-api-midnight">
            <div className="text-lg">Africa Peace</div>
            <div className="text-sm -mt-1">Initiative</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.hash ? (
                  <button
                    onClick={() => scrollToSection(link.hash)}
                    className={`text-api-midnight relative group transition-colors hover:text-api-green ${
                      isScrolled ? "py-2" : "py-4"
                    }`}
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-api-green scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-api-midnight relative group transition-colors hover:text-api-green ${
                      isScrolled ? "py-2" : "py-4"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-api-green scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side elements - always visible */}
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <Button
            className="bg-api-terracotta hover:bg-api-terracotta/90 text-white hidden md:flex"
            asChild
          >
            <Link to="/donate">Donate</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="p-2 md:hidden text-api-midnight hover:text-api-terracotta"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden p-4 rounded-b-lg transition-all duration-300 transform origin-top border-t border-api-cream">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.hash ? (
                    <button
                      onClick={() => scrollToSection(link.hash)}
                      className="text-api-midnight hover:text-api-green w-full text-left py-2"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-api-midnight hover:text-api-green block py-2"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Button
                  className="bg-api-terracotta hover:bg-api-terracotta/90 text-white w-full"
                  asChild
                >
                  <Link to="/donate" onClick={closeMenu}>
                    Donate
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
