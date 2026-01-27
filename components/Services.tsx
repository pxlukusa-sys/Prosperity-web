import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

// ==========================================
// IMAGE CONFIGURATION
// Paste your Imgur links inside the quotes below
// ==========================================
const SERVICE_IMAGES = {
  weddings: "https://i.imgur.com/8rYr1VY.jpeg",       // <-- REPLACE THIS LINK for Weddings
  corporate: "https://i.imgur.com/Tc276ZY.jpeg",      // <-- REPLACE THIS LINK for Corporate
  privateParties: "https://i.imgur.com/HqK4PG6.jpeg"    // <-- REPLACE THIS LINK for Private Parties
};

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl text-hunter mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-hunter/20 mx-auto"></div>
        </div>

        {/* Planning Tiers */}
        <div className="grid md:grid-cols-2 gap-12 mb-32 max-w-5xl mx-auto">
            {/* Full Planning */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-beige/30 p-10 border border-hunter/10 hover:shadow-xl transition-all duration-300 relative group"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-hunter transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h3 className="font-body text-2xl uppercase tracking-widest text-hunter mb-6 font-semibold flex items-center gap-2">
                    <Star className="w-5 h-5 fill-hunter text-hunter" /> Full Planning
                </h3>
                <p className="text-hunter/70 mb-8 leading-relaxed">
                    Be present. Celebrate. Leave the details to us. You have enough responsibilities to manage. Allow us to orchestrate your event from conception to completion: venue selection, vendor coordination, budget management, and comprehensive logistics.
                    Focus on experiencing your special day while we ensure smooth execution of every detail.
                </p>
                <ul className="space-y-4">
                    {[
                        'Find and manage your venue', 
                        'Keep your budget tight (no surprises)', 
                        'Vendor coordination', 
                        'Design and style your space', 
                        'Run the show on the big day (so you don\'t have to)'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-hunter/80">
                            <Check className="w-4 h-4 mr-3 mt-1 text-hunter shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Partial Planning */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-beige/30 p-10 border border-hunter/10 hover:shadow-xl transition-all duration-300 relative group"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-hunter/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h3 className="font-body text-2xl uppercase tracking-widest text-hunter mb-6 font-semibold">
                    Partial Planning
                </h3>
                <p className="text-hunter/70 mb-8 leading-relaxed">
                    Perhaps you've already secured a few vendors or compiled an extensive vision board. What you need now is someone to bring it all together. We step in exactly where you need us, to provide reliable support and expert coordination to bring your vision to life, without the stress.
                </p>
                <ul className="space-y-4">
                    {[
                        'Polish your design vision', 
                        'Connect you with trusted vendors', 
                        'Build a timeline that actually makes sense', 
                        'Handle the logistics nightmare', 
                        'Month of coordination'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-hunter/80">
                            <Check className="w-4 h-4 mr-3 mt-1 text-hunter shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>

        {/* Event Categories */}
        <div className="text-center mb-16">
            <h3 className="font-body text-xl uppercase tracking-[0.2em] text-hunter mb-10">Services Offered</h3>
        </div>
        
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
        >
            {[
                { 
                  title: 'Weddings', 
                  desc: 'From intimate ceremonies to grand celebrations, we handle every detail so you can focus on enjoying your special day.', 
                  img: SERVICE_IMAGES.weddings
                }, 
                { 
                  title: 'Corporate Events', 
                  desc: "Whether it's a conference, gala, or product launch, we create seamless experiences that impress clients and guests.", 
                  img: SERVICE_IMAGES.corporate
                },
                { 
                  title: 'Private Parties', 
                  desc: 'Celebrate birthdays, showers, and milestones with stunning decor and stress-free planning that lets you enjoy the moment.', 
                  img: SERVICE_IMAGES.privateParties
                }
            ].map((cat, idx) => (
                <motion.div key={idx} variants={itemVariants} className="group relative h-[450px] overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                    <img 
                        src={cat.img} 
                        alt={cat.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
                        <div className="bg-beige/95 px-6 py-8 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full max-w-xs shadow-lg">
                            <h4 className="font-heading text-3xl text-hunter mb-2">{cat.title}</h4>
                            <p className="text-sm text-hunter/90 leading-relaxed font-light">{cat.desc}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;