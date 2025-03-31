
import React from "react";
import { Lightbulb, Star, Shield, RefreshCw } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      name: "Innovation",
      description: "Continuously pushing the boundaries of creativity and technology.",
      icon: <Lightbulb className="w-12 h-12 text-exelion-accent group-hover:text-exelion-DEFAULT transition-colors duration-300" />
    },
    {
      name: "Excellence",
      description: "Delivering high-quality solutions across all sectors.",
      icon: <Star className="w-12 h-12 text-exelion-accent group-hover:text-exelion-DEFAULT transition-colors duration-300" />
    },
    {
      name: "Integrity",
      description: "Maintaining transparency, reliability, and ethical practices.",
      icon: <Shield className="w-12 h-12 text-exelion-accent group-hover:text-exelion-DEFAULT transition-colors duration-300" />
    },
    {
      name: "Adaptability",
      description: "Embracing change and evolving to meet market demands.",
      icon: <RefreshCw className="w-12 h-12 text-exelion-accent group-hover:text-exelion-DEFAULT transition-colors duration-300" />
    }
  ];

  return (
    <section id="values" className="py-24 bg-exelion-DEFAULT">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-exelion-foreground mb-4">
            Our <span className="text-exelion-accent">Core Values</span>
          </h2>
          <p className="text-exelion-muted max-w-2xl mx-auto">
            At Exelion, our values guide everything we do, from product development to customer relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.name} 
              className="group bg-exelion-secondary rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-bold text-exelion-foreground mb-3">{value.name}</h3>
              <p className="text-exelion-muted">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-exelion-secondary rounded-lg p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-exelion-foreground mb-2">Our Vision & Mission</h3>
            <div className="h-1 w-20 bg-exelion-accent mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-exelion-accent mb-3">Mission Statement</h4>
              <p className="text-exelion-muted">
                To become a global leader in technology, entertainment, and hardware innovation by creating unique, 
                high-quality products and services that cater to a wide range of industries.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-exelion-accent mb-3">Vision Statement</h4>
              <p className="text-exelion-muted">
                To achieve a revenue of $5 million by the end of the first year and $1-2 billion by the end of the second year, 
                positioning Exelion as a world-renowned conglomerate with strong, profitable divisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
