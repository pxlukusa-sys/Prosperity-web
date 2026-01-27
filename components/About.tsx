import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-beige relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 relative"
            >
                <div className="relative z-10 p-2 border border-hunter/20">
                    <img 
                        src="https://i.imgur.com/su2AWIG.jpeg" 
                        alt="Elegant table setting" 
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                {/* Decorative background box */}
                <div className="absolute top-6 -right-6 w-full h-full border-2 border-hunter/30 z-0 hidden md:block"></div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
            >
                <h2 className="font-heading text-5xl md:text-6xl text-hunter mb-8">How We Work</h2>
                <h3 className="font-body text-sm uppercase tracking-widest text-hunter/60 mb-6">Attention to Detail</h3>
                
                <p className="text-hunter/80 mb-6 leading-relaxed">
                    Planning an event can feel like juggling fire while riding a unicycle. We get it. That's why we exist. We take the weight off your shoulders to provide a serene state of planning for your event to prosper.
                </p>
                <p className="text-hunter/80 mb-6 leading-relaxed">
                    Prosperity Events Planning manages the details that demand your attention: vendor communication, timeline coordination, and ensuring nothing is overlooked. This allows you to focus on what matters, celebrating the moment.
                </p>
                <p className="text-hunter/80 mb-8 leading-relaxed">
                    We work with clients who value precision and thoughtful planning. Our approach is straightforward and organized, providing a serene state of planning for your event to prosper. Whether your guest list is ten or three hundred, we give every detail the care it deserves.
                </p>

                <div className="flex justify-center w-full">
                    <div className="text-center">
                        <span className="font-heading text-4xl text-hunter block">8+</span>
                        <span className="text-xs uppercase tracking-widest text-hunter/60">Years Experience</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;