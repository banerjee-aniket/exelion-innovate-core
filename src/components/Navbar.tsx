
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Divisions", href: "#divisions", id: "divisions" },
    { name: "Values", href: "#values", id: "values" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-exelion-DEFAULT bg-opacity-95 shadow-md py-2 animate-fade-in" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-2xl font-bold text-exelion-foreground group">
          <span className="inline-block transition-transform duration-300 group-hover:scale-110">E</span>
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 delay-[50ms]">X</span>
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 delay-100">E</span>
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 delay-150">L</span>
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 delay-200">I</span>
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 delay-[250ms]">O</span>
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 delay-300">N</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={cn(
                "text-exelion-foreground hover:text-exelion-accent transition-colors nav-link transform transition-transform hover:scale-105",
                activeLink === link.id && "text-exelion-accent"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-exelion-foreground transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="animate-fade-in" />
          ) : (
            <Menu size={24} className="animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-exelion-DEFAULT bg-opacity-95 absolute w-full animate-fade-in-up">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-exelion-foreground hover:text-exelion-accent transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
