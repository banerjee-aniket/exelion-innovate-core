
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Exelion - Transforming Industries";
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DivisionsSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
