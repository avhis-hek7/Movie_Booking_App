import React, { useEffect, useState } from 'react'
import { footerStyles } from '../assets/dummyStyles'
import { Clapperboard, Film, Popcorn, Star, Ticket } from 'lucide-react';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);

      const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const links = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies" },
    { label: "Releases", href: "/releases" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" }
  ];
  
  const genreLinks = [
    { label: "Horror", href: "/movies" },
    { label: "Thriller", href: "/movies" },
    { label: "Action", href: "/movies" },
    { label: "Drama", href: "/movies" },
    { label: "Comedy", href: "/movies" },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Array of icon components for the floating animation
  const floatingIcons = [Clapperboard, Film, Star, Ticket, Popcorn];





  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.animatedBorder}>
            <div className={footerStyles.bgContainer}>
                <div className={footerStyles.bgGlow1}></div>
                <div className={footerStyles.bgGlow2}></div>
            </div>


             {/* Floating icons - hidden on small devices to avoid overlap; still visible on md+ (tablet & desktop) */}
      <div className={footerStyles.floatingIconsContainer}>
        {[...Array(12)].map((_, i) => {
          const IconComponent = floatingIcons[i % floatingIcons.length];
          const left = (i * 23) % 100;
          const top = (i * 17) % 100;
          const dur = 6 + (i % 5);
          const delay = (i % 4) * 0.6;
          return (
            <div
              key={i}
              className={footerStyles.floatingIcon}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${dur}s infinite ease-in-out`,
                animationDelay: `${delay}s`
              }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
          );
        })}
      </div>

      <div className={footerStyles.mainContainer}>
        

      </div>

                           


        </div>

    </footer>
  )
}

export default Footer