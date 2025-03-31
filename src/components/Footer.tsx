
import React from "react";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-exelion-DEFAULT py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-exelion-foreground mb-4">EXELION</h3>
            <p className="text-exelion-muted mb-4">
              A pioneering, multi-division conglomerate dedicated to transforming industries through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-exelion-foreground mb-4">Divisions</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">Void Studio</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">CodeCraft Cinematics</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">CodeCraft Studio</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">Sytek</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-exelion-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-exelion-muted hover:text-exelion-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#values" className="text-exelion-muted hover:text-exelion-accent transition-colors">Values</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">Press</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-exelion-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-exelion-muted hover:text-exelion-accent transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">Resources</a>
              </li>
              <li>
                <a href="#" className="text-exelion-muted hover:text-exelion-accent transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-exelion-muted/20 pt-8 text-center">
          <p className="text-exelion-muted">
            &copy; {currentYear} Exelion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
