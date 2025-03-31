
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-exelion-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-exelion-foreground mb-4">
            Get In <span className="text-exelion-accent">Touch</span>
          </h2>
          <p className="text-exelion-muted max-w-2xl mx-auto">
            Interested in learning more about Exelion or any of our divisions? 
            Contact us today to discuss potential collaborations or opportunities.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-exelion-DEFAULT rounded-lg p-8">
            <h3 className="text-2xl font-bold text-exelion-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-exelion-accent/10 p-3 rounded-full text-exelion-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-exelion-foreground mb-1">Address</h4>
                  <p className="text-exelion-muted">
                    123 Tech Boulevard <br />
                    Innovation District <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-exelion-accent/10 p-3 rounded-full text-exelion-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-exelion-foreground mb-1">Email</h4>
                  <p className="text-exelion-muted">contact@exelion.com</p>
                  <p className="text-exelion-muted">support@exelion.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-exelion-accent/10 p-3 rounded-full text-exelion-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-exelion-foreground mb-1">Phone</h4>
                  <p className="text-exelion-muted">+1 (555) 123-4567</p>
                  <p className="text-exelion-muted">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-exelion-DEFAULT rounded-lg p-8">
            <h3 className="text-2xl font-bold text-exelion-foreground mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-exelion-muted mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-exelion-secondary text-exelion-foreground border border-exelion-muted/30 rounded-md p-3 focus:outline-none focus:border-exelion-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-exelion-muted mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-exelion-secondary text-exelion-foreground border border-exelion-muted/30 rounded-md p-3 focus:outline-none focus:border-exelion-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-exelion-muted mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-exelion-secondary text-exelion-foreground border border-exelion-muted/30 rounded-md p-3 focus:outline-none focus:border-exelion-accent"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-exelion-accent hover:bg-exelion-accent/90 text-exelion-DEFAULT px-6 py-3 rounded-md transition-colors duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
