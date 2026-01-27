import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    // ==========================================
    // SECTION ID CONFIGURATION
    // The id="pricing" below is the target. 
    // To link TO this section from the Navbar or a Button, use href="#pricing"
    // ==========================================
    <section id="pricing" className="py-24 bg-hunter text-beige relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F5F5DC 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
        >
            <h2 className="font-heading text-6xl mb-8">Pricing</h2>
            
            {/* 
                ==========================================
                "GET A FREE QUOTE" BUTTON LINK
                Current: Scrolls to the Contact section on this page (#contact)
                To Change: Replace "#contact" with an external URL 
                           (e.g., "https://wa.me/15551234567" for WhatsApp 
                            or "mailto:concierge@prosperityevents.com")
                ==========================================
            */}
            <motion.a
              href="https://prosperityeventsplanning.hbportal.co/public/68a731ee95f12200355fc150"  /* <-- PASTE YOUR LINK HERE */
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 border border-beige text-beige text-sm tracking-[0.2em] uppercase hover:bg-beige hover:text-hunter transition-colors duration-300"
            >
              Get a free quote
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;