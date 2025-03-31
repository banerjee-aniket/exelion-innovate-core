
import React from "react";
import DivisionCard from "./DivisionCard";
import { Gamepad2, Film, Code, Cpu } from "lucide-react";

const DivisionsSection = () => {
  const divisions = [
    {
      title: "Void Studio",
      industry: "Gaming & Entertainment",
      description: "Developing premium-quality games with captivating storytelling, advanced mechanics, and immersive experiences.",
      purpose: "To revolutionize gaming through cutting-edge technology, community engagement, and high-performance gameplay.",
      icon: <Gamepad2 size={24} />,
      delay: "animate-delay-100"
    },
    {
      title: "CodeCraft Cinematics",
      industry: "Media & Entertainment",
      description: "Producing and managing content across various platforms, including movies, music, anime, and influencer-driven entertainment.",
      purpose: "To create a comprehensive entertainment ecosystem that blends creativity with technological advancements.",
      icon: <Film size={24} />,
      delay: "animate-delay-200"
    },
    {
      title: "CodeCraft Studio",
      industry: "Software Solutions & Innovation",
      description: "Providing custom software solutions for businesses, including web development, mobile applications, AI systems, and enterprise solutions.",
      purpose: "To offer robust, scalable, and efficient software solutions tailored to diverse business needs.",
      icon: <Code size={24} />,
      delay: "animate-delay-300"
    },
    {
      title: "Sytek",
      industry: "Hardware Manufacturing & Technology",
      description: "Designing and manufacturing advanced hardware, including AI chips, gaming peripherals, VR devices, and futuristic technologies.",
      purpose: "To lead innovation in the hardware sector by developing state-of-the-art devices that enhance user experience and performance.",
      icon: <Cpu size={24} />,
      delay: "animate-delay-400"
    }
  ];

  return (
    <section id="divisions" className="py-24 bg-exelion-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-exelion-foreground mb-4">
            Our <span className="text-exelion-accent">Divisions</span>
          </h2>
          <p className="text-exelion-muted max-w-2xl mx-auto">
            Each division is focused on a specific domain to ensure specialized, high-quality outputs
            that meet the evolving demands of various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.title}
              title={division.title}
              industry={division.industry}
              description={division.description}
              purpose={division.purpose}
              iconName={division.icon}
              delay={division.delay}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
