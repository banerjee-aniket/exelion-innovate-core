
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-exelion-DEFAULT pt-16">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-radial from-exelion-secondary to-exelion-DEFAULT opacity-50"></div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,25,47,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(10,25,47,0.8)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-exelion-accent font-medium mb-2 animate-fade-in">Welcome to</h4>
          <h1 className="text-5xl md:text-7xl font-bold text-exelion-foreground mb-6 animate-fade-in-up animate-delay-100">
            EXELION
          </h1>
          <p className="text-xl md:text-2xl text-exelion-muted mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            A pioneering, multi-division conglomerate dedicated to transforming industries through innovative solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#divisions"
              className="bg-transparent hover:bg-exelion-accent text-exelion-accent hover:text-exelion-DEFAULT border border-exelion-accent px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2"
            >
              Explore Our Divisions <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="bg-exelion-accent hover:bg-exelion-accent/90 text-exelion-DEFAULT px-6 py-3 rounded-md transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
