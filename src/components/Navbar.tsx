
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
        // Fix: Cast section to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
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
        <a href="#" className="relative group">
          {/* SVG Exelion Logo with animation effects */}
          <svg 
            width="150" 
            height="50" 
            viewBox="0 0 800 300" 
            className="transition-transform duration-300 group-hover:scale-105"
          >
            {/* Top horizontal lines */}
            <g className="animate-pulse-accent">
              <line x1="100" y1="80" x2="500" y2="80" stroke="#9F9EA1" strokeWidth="12" />
              <line x1="520" y1="80" x2="700" y2="80" stroke="#9F9EA1" strokeWidth="12" />
              <circle cx="510" cy="80" r="15" fill="none" stroke="#9F9EA1" strokeWidth="3" />
              <circle cx="100" cy="80" r="10" fill="none" stroke="#9F9EA1" strokeWidth="3" />
              <circle cx="700" cy="80" r="10" fill="none" stroke="#9F9EA1" strokeWidth="3" />
            </g>
            
            {/* EXELION text - ensuring the correct company name */}
            <g fill="#FFFFFF" className="transition-transform duration-300">
              <path d="M150,160 H250 V180 H170 V200 H240 V220 H170 V240 H250 V260 H150 Z" className="group-hover:scale-105" />
              <path d="M270,160 L320,220 L370,160 H400 L330,240 L330,260 H310 L310,240 L240,160 Z" className="group-hover:scale-105" />
              <path d="M420,160 H520 V180 H440 V200 H510 V220 H440 V240 H520 V260 H420 Z" className="group-hover:scale-105" />
              <path d="M540,160 H560 V240 H640 V260 H540 Z" className="group-hover:scale-105" />
              <path d="M660,160 C690,160 710,180 710,210 C710,240 690,260 660,260 C630,260 610,240 610,210 C610,180 630,160 660,160 Z M660,180 C640,180 630,195 630,210 C630,225 640,240 660,240 C680,240 690,225 690,210 C690,195 680,180 660,180 Z" className="group-hover:scale-105" />
              <path d="M730,160 H750 V240 H810 V260 H730 Z" className="group-hover:scale-105" />
            </g>
            
            {/* Bottom horizontal lines */}
            <g className="animate-pulse-accent">
              <line x1="100" y1="280" x2="500" y2="280" stroke="#9F9EA1" strokeWidth="12" />
              <line x1="520" y1="280" x2="700" y2="280" stroke="#9F9EA1" strokeWidth="12" />
              <circle cx="510" cy="280" r="15" fill="none" stroke="#9F9EA1" strokeWidth="3" />
              <circle cx="700" cy="280" r="10" fill="none" stroke="#9F9EA1" strokeWidth="3" />
              <circle cx="100" cy="280" r="10" fill="none" stroke="#9F9EA1" strokeWidth="3" />
            </g>
          </svg>
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
