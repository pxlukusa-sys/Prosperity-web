import React from 'react';

export const BirdLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Olive Branch - Hanging from beak */}
    <path d="M88,38 C88,38 92,55 85,75" /> {/* Main stem curve */}
    <path d="M87,45 Q92,42 95,46" /> {/* Top Leaf Right */}
    <path d="M86,55 Q82,58 78,54" /> {/* Leaf Left */}
    <path d="M85,62 Q90,65 93,60" /> {/* Leaf Right */}
    <path d="M84,70 Q80,73 78,68" /> {/* Bottom Leaf Left */}
    
    {/* Bird Head & Beak */}
    <path d="M88,38 Q80,30 72,32" /> {/* Beak to Forehead */}
    <path d="M72,32 Q65,35 62,42" /> {/* Back of head/Neck */}
    
    {/* Far Wing (Background) */}
    <path d="M65,36 Q60,20 48,18 Q42,18 45,28" /> 
    
    {/* Near Wing (Foreground - Large swooping) */}
    <path d="M62,42 Q50,15 25,15 Q12,18 15,35 Q18,45 35,48" /> {/* Wing Outline */}
    <path d="M15,35 Q20,38 28,35" opacity="0.6" /> {/* Wing Detail */}
    <path d="M25,15 Q28,25 35,32" opacity="0.6" /> {/* Wing Detail */}

    {/* Body & Tail */}
    <path d="M35,48 Q45,52 50,55" /> {/* Wing connection to body */}
    <path d="M50,55 Q40,65 25,68" /> {/* Top of Tail */}
    <path d="M25,68 Q30,78 45,72" /> {/* Bottom of Tail */}
    <path d="M45,72 Q60,65 70,55" /> {/* Belly */}
    <path d="M70,55 Q75,50 88,38" /> {/* Throat/Chest to Beak */}
  </svg>
);

export default BirdLogo;