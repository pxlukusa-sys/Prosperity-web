import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Overlay with subtle texture */}
        <div className="absolute inset-0 bg-beige bg-opacity-80 -z-10"></div>
        {/* Abstract shapes for luxury feel */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-hunter opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-hunter opacity-5 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
      >
        <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl text-hunter mb-8 leading-tight">
          Prosperity Events<br/> Planning
        </h1>

        <p className="font-body text-hunter/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          We provide a serene state of planning for your event to prosper.
        </p>
        
        {/* 
            ==========================================
            BUTTON LINK CONFIGURATION
            ==========================================
        */}
        <motion.a
          href="https://prosperityeventsplanning.hbportal.co/public/68a731ee95f12200355fc150"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-hunter text-lg tracking-widest uppercase border-b border-hunter pb-1 hover:text-hunter-light hover:border-hunter-light transition-all"
        >
          Book a consultation
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-hunter animate-bounce opacity-50" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;