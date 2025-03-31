
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-exelion-DEFAULT">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-exelion-foreground mb-6">
                About <span className="text-exelion-accent">Exelion</span>
              </h2>
              <p className="text-exelion-muted mb-6">
                Exelion is a pioneering, multi-division conglomerate dedicated to transforming industries 
                through innovative solutions across technology, entertainment, software, and hardware. 
                Founded with a vision of excellence and versatility, Exelion encompasses four divisions, 
                each focused on a specific domain to ensure specialized, high-quality outputs.
              </p>
              <p className="text-exelion-muted">
                Our diverse business model ensures sustained growth across all divisions, 
                generating revenue through distinct channels that are tailored to each sector's unique market dynamics.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-exelion-secondary p-6 rounded-lg shadow-xl">
                  <h3 className="text-xl font-bold text-exelion-accent mb-4">Our Business Model</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-exelion-accent mt-1">•</span>
                      <span className="text-exelion-muted">
                        <strong className="text-exelion-foreground">Void Studio:</strong> In-game purchases, premium content sales, esports monetization
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-exelion-accent mt-1">•</span>
                      <span className="text-exelion-muted">
                        <strong className="text-exelion-foreground">CodeCraft Cinematics:</strong> Paid partnerships, content subscriptions, influencer marketing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-exelion-accent mt-1">•</span>
                      <span className="text-exelion-muted">
                        <strong className="text-exelion-foreground">CodeCraft Studio:</strong> Software licensing, enterprise contracts, SaaS models
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-exelion-accent mt-1">•</span>
                      <span className="text-exelion-muted">
                        <strong className="text-exelion-foreground">Sytek:</strong> Hardware sales, licensing agreements, OEM partnerships
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-exelion-accent rounded-lg z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
