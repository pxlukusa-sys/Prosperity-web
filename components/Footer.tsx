import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hunter text-beige py-12 border-t border-beige/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="font-heading text-3xl mb-2">Prosperity Events Planning</h2>
          <p className="text-xs uppercase tracking-widest opacity-60">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        <div className="flex space-x-6">
            {/* 
                ==========================================
                SOCIAL MEDIA LINKS CONFIGURATION 
                ==========================================
            */}
            <a 
                href="https://linkedin.com/company/prosperityeventsplanning" 
                className="hover:text-gold transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Linkedin size={20} />
            </a>
            
            <a 
                href="https://www.instagram.com/theprosperityevents/" 
                className="hover:text-gold transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Instagram size={20} />
            </a>
            
            <a 
                href="https://www.facebook.com/profile.php?id=61586568428255" 
                className="hover:text-gold transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Facebook size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;