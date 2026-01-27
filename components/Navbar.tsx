import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-hunter/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className={`font-heading text-2xl md:text-4xl transition-colors ${scrolled ? 'text-beige' : 'text-hunter'}`}>
          Prosperity Events Planning
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase hover:opacity-75 transition-colors ${
                scrolled ? 'text-beige' : 'text-hunter'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
             href="https://prosperityeventsplanning.hbportal.co/public/68a731ee95f12200355fc150"
             className={`ml-4 px-6 py-2 text-sm tracking-widest uppercase border transition-all hover:bg-opacity-10 ${
                scrolled 
                ? 'border-beige text-beige hover:bg-beige' 
                : 'border-hunter text-hunter hover:bg-hunter hover:text-beige'
             }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <X className={scrolled ? 'text-beige' : 'text-hunter'} size={28} />
          ) : (
            <Menu className={scrolled ? 'text-beige' : 'text-hunter'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-hunter text-beige md:hidden shadow-xl"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg tracking-widest uppercase hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://prosperityeventsplanning.hbportal.co/public/68a731ee95f12200355fc150"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 border border-beige hover:bg-beige hover:text-hunter transition-colors tracking-widest uppercase"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;