import React, { useState, useEffect } from 'react';
import FooterDesktop from '../footer/FooterDesktop.jsx';
import FooterMobile from '../footer/FooterMobile.jsx';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Check initial screen size
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className="app-container">
        {/* Ваш контент */}
        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </div>
    );
};

export default Footer;
