// import React, { useEffect, useState } from "react";
// import { footerStyles } from "../assets/dummyStyles";
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// import { ArrowUp, Clapperboard, Film, Mail, MapPin, Phone, Popcorn, Star, Ticket } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [isVisible, setIsVisible] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const links = [
//     { label: "Home", href: "/" },
//     { label: "Movies", href: "/movies" },
//     { label: "Releases", href: "/releases" },
//     { label: "Contact", href: "/contact" },
//     { label: "Login", href: "/login" },
//   ];

//   const genreLinks = [
//     { label: "Horror", href: "/movies" },
//     { label: "Thriller", href: "/movies" },
//     { label: "Action", href: "/movies" },
//     { label: "Drama", href: "/movies" },
//     { label: "Comedy", href: "/movies" },
//   ];

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   // Array of icon components for the floating animation
//   const floatingIcons = [Clapperboard, Film, Star, Ticket, Popcorn];

//   return (
//     <footer className={footerStyles.footer}>
//       <div className={footerStyles.animatedBorder}>
//         <div className={footerStyles.bgContainer}>
//           <div className={footerStyles.bgGlow1}></div>
//           <div className={footerStyles.bgGlow2}></div>
//         </div>

//         {/* Floating icons - hidden on small devices to avoid overlap; still visible on md+ (tablet & desktop) */}
//         <div className={footerStyles.floatingIconsContainer}>
//           {[...Array(12)].map((_, i) => {
//             const IconComponent = floatingIcons[i % floatingIcons.length];
//             const left = (i * 23) % 100;
//             const top = (i * 17) % 100;
//             const dur = 6 + (i % 5);
//             const delay = (i % 4) * 0.6;
//             return (
//               <div
//                 key={i}
//                 className={footerStyles.floatingIcon}
//                 style={{
//                   left: `${left}%`,
//                   top: `${top}%`,
//                   animation: `float ${dur}s infinite ease-in-out`,
//                   animationDelay: `${delay}s`,
//                 }}
//               >
//                 <IconComponent className="w-8 h-8" />
//               </div>
//             );
//           })}
//         </div>

//         <div className={footerStyles.mainContainer}>
//           <div className={footerStyles.gridContainer}>
//             <div className={footerStyles.brandContainer}>
//               <div className={footerStyles.brandLogoContainer}>
//                 <div className="relative">
//                   <div className={footerStyles.logoGlow}></div>
//                   <div className={footerStyles.logoContainer}>
//                     <Clapperboard className={footerStyles.logoIcon} />
//                   </div>
//                 </div>
//                 <h2
//                   className={footerStyles.brandTitle}
//                   style={{ fontFamily: "Monoton, cursive" }}
//                 >
//                   Cine{" "}
//                   <span className={footerStyles.brandTitleWhite}>Verse</span>
//                 </h2>
//               </div>

//               <p className={footerStyles.brandDescription}>
//                 Experience the dark side of cinema with latest news, reviews,
//                 and exclusive content.
//               </p>
//               <div className={footerStyles.socialContainer}>
//                 {[
//                   { Icon: FaFacebook },
//                   { Icon: FaTwitter },
//                   { Icon: FaInstagram },
//                   { Icon: FaYoutube },
//                 ].map((item, index) => (
//                   <a href="#" key={index} className={footerStyles.socialLink}>
//                     <item.Icon className={footerStyles.socialIcon} />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className={footerStyles.sectionHeader}>
//                 <div className={footerStyles.sectionDot} />
//                 Explore
//               </h3>

//               <ul className={footerStyles.linksList}>
//                 {links.map((link) => (
//                   <li key={link.href}>
//                     <a href={link.href} className={footerStyles.linkItem}>
//                       <span className={footerStyles.linkDot}/>
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}

//               </ul>
//             </div>

//             <div>
//               <h3 className={footerStyles.sectionHeader}>
//                 <div className={footerStyles.sectionDot} />
//                 Genres
//               </h3>

//               <ul className={footerStyles.linksList}>
//                 {genreLinks.map((link) => (
//                   <li key={link.href}>
//                     <a href={link.href} className={footerStyles.linkItem}>
//                       <span className={footerStyles.linkDot}/>
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}

//               </ul>
//             </div>

//            {/* Contact Info */}
//           <div>
//             <h3 className={footerStyles.sectionHeader}>
//               <div className={footerStyles.sectionDot} />
//               Contact Us
//             </h3>
//             <ul className={footerStyles.contactList}>
//               <li className={footerStyles.contactItem}>
//                 <div className={footerStyles.contactIconContainer}>
//                   <Mail className={footerStyles.contactIcon} />
//                 </div>
//                 <span className={footerStyles.contactText}>contact@hexagonsservices.com</span>
//               </li>
//               <li className={footerStyles.contactItem}>
//                 <div className={footerStyles.contactIconContainer}>
//                   <Phone className={footerStyles.contactIcon} />
//                 </div>
//                 <span className={footerStyles.contactText}>+977 9841327882</span>
//               </li>
//               <li className={footerStyles.contactItem}>
//                 <div className={footerStyles.contactIconContainer}>
//                   <MapPin className={footerStyles.contactIcon} />
//                 </div>
//                 <span className={footerStyles.contactText}>Pokhara, Kaski</span>
//               </li>
//             </ul>
//           </div>
//           </div>
          
//           {/* Divider */}
//           <div className={footerStyles.divider}>
//             <div className={footerStyles.dividerIconContainer}>
//               <Film className={footerStyles.dividerIcon}/>

//             </div>

//           </div>

//           <div className={footerStyles.bottomBar}>
//             <div className={footerStyles.designedBy}>
//               <span className={footerStyles.designedByText}>Designed by </span>
//               <a href="https://my-portfolio-phi-sandy-53.vercel.app/" target="_blank" className={footerStyles.designedByLink} rel='noopener noreferrer'>Avhishek Sharma</a>

//             </div>

//             <div className={footerStyles.policyLinks}>
//             {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
//               <a 
//                 key={index}
//                 href="#" 
//                 className={footerStyles.policyLink}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           </div>

//         </div>
//       </div>

//       {isVisible && (
//         <button onClick={scrollToTop} className={footerStyles.scrollTopButton}>
//           <ArrowUp className={footerStyles.scrollTopButton} />

//         </button>
//       )}

//       <style>{footerStyles.customCSS}</style>
//     </footer>
//   );
// };

// export default Footer;



import React, { useEffect, useState } from "react";
import { footerStyles } from "../assets/dummyStyles";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  ArrowUp,
  Clapperboard,
  Film,
  Mail,
  MapPin,
  Phone,
  Popcorn,
  Star,
  Ticket,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies" },
    { label: "Releases", href: "/releases" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
  ];

  const genreLinks = [
    { label: "Horror", href: "/movies/horror" },
    { label: "Thriller", href: "/movies/thriller" },
    { label: "Action", href: "/movies/action" },
    { label: "Drama", href: "/movies/drama" },
    { label: "Comedy", href: "/movies/comedy" },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const floatingIcons = [Clapperboard, Film, Star, Ticket, Popcorn];

  return (
    <footer className={footerStyles.footer}>

      {/* Decorative animated top border — self-closing, NOT a wrapper */}
      <div className={footerStyles.animatedBorder} />

      {/* Background glows */}
      <div className={footerStyles.bgContainer}>
        <div className={footerStyles.bgGlow1} />
        <div className={footerStyles.bgGlow2} />
      </div>

      {/* Floating icons */}
      <div className={footerStyles.floatingIconsContainer}>
        {[...Array(12)].map((_, i) => {
          const IconComponent = floatingIcons[i % floatingIcons.length];
          return (
            <div
              key={i}
              className={footerStyles.floatingIcon}
              style={{
                left: `${(i * 23) % 100}%`,
                top: `${(i * 17) % 100}%`,
                animation: `float ${6 + (i % 5)}s infinite ease-in-out`,
                animationDelay: `${(i % 4) * 0.6}s`,
              }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div className={footerStyles.mainContainer}>

        {/* Grid */}
        <div className={footerStyles.gridContainer}>

          {/* Brand */}
          <div className={footerStyles.brandContainer}>
            <div className={footerStyles.brandLogoContainer}>
              <div className="relative">
                <div className={footerStyles.logoGlow} />
                <div className={footerStyles.logoContainer}>
                  <Clapperboard className={footerStyles.logoIcon} />
                </div>
              </div>
              <h2
                className={footerStyles.brandTitle}
                style={{ fontFamily: "Monoton, cursive" }}
              >
                Cine <span className={footerStyles.brandTitleWhite}>Verse</span>
              </h2>
            </div>

            <p className={footerStyles.brandDescription}>
              Experience the dark side of cinema with latest news, reviews, and
              exclusive content.
            </p>

            <div className={footerStyles.socialContainer}>
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a href="#" key={index} className={footerStyles.socialLink}>
                  <Icon className={footerStyles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={footerStyles.sectionHeader}>
              <div className={footerStyles.sectionDot} />
              Explore
            </h3>
            <ul className={footerStyles.linksList}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={footerStyles.linkItem}>
                    <span className={footerStyles.linkDot} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className={footerStyles.sectionHeader}>
              <div className={footerStyles.sectionDot} />
              Genres
            </h3>
            <ul className={footerStyles.linksList}>
              {genreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={footerStyles.linkItem}>
                    <span className={footerStyles.linkDot} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={footerStyles.sectionHeader}>
              <div className={footerStyles.sectionDot} />
              Contact Us
            </h3>
            <ul className={footerStyles.contactList}>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <Mail className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>
                  contact@hexagonsservices.com
                </span>
              </li>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <Phone className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>+977 9841327882</span>
              </li>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <MapPin className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>Pokhara, Kaski</span>
              </li>
            </ul>
          </div>

        </div>{/* end gridContainer */}

        {/* Divider */}
        <div className={footerStyles.divider}>
          <div className={footerStyles.dividerIconContainer}>
            <Film className={footerStyles.dividerIcon} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className={footerStyles.bottomBar}>
          <div className={footerStyles.designedBy}>
            <span className={footerStyles.designedByText}>
              © {currentYear} CineVerse. Developed by
            </span>
            <a
              href="https://my-portfolio-phi-sandy-53.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={footerStyles.designedByLink}
            >
              &nbsp;Avhishek Sharma
            </a>
          </div>

          <div className={footerStyles.policyLinks}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, index) => (
                <a key={index} href="#" className={footerStyles.policyLink}>
                  {item}
                </a>
              )
            )}
          </div>
        </div>

      </div>{/* end mainContainer */}

      {/* Scroll to top */}
      {isVisible && (
        <button onClick={scrollToTop} className={footerStyles.scrollTopButton}>
          <ArrowUp className={footerStyles.scrollTopIcon} />
        </button>
      )}

      <style>{footerStyles.customCSS}</style>
    </footer>
  );
};

export default Footer;
