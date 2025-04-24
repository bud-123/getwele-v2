import React from "react";
import LogoMarquee from "./ui/LogoMarquee";
import useMediaQuery from "../hooks/useMediaQuery";

const LogoSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Dynamic logo style based on screen size
  const logoStyle = {
    height: isMobile ? '60px' : '90px',
    margin: isMobile ? '0 20px' : '0 0 0 200px',
    opacity: 0.8,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div style={{ 
      padding: isMobile ? '10px 0' : '10px 0', 
      backgroundColor: '#fdfdfd', 
      color: 'black' 
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: isMobile ? '-20px' : '-40px', 
        marginTop: '20px', 
        fontSize: isMobile ? '1.2rem' : '1.4rem' 
      }}>
        Supported by
      </h2>
      
      <LogoMarquee speed={isMobile ? 15 : 25} pauseOnHover>
        <div style={logoStyle}>
          <img src={require("../Assets/Logos/uva-logo.png")} alt="UVA" style={{ height: '100%' }} />
        </div>
        <div style={logoStyle}>
          <img src={require("../Assets/Logos/umbc-logo.png")} alt="UMBC" style={{ height: '100%' }} />
        </div>
        <div style={logoStyle}>
          <img src={require("../Assets/Logos/bwtech-logo.png")} alt="bwtech" style={{ height: '100%' }} />
        </div>
        <div style={logoStyle}>
          <img src={require("../Assets/Logos/nih-logo.png")} alt="NIH" style={{ height: '100%' }} />
        </div>
        <div style={logoStyle}>
          <img src={require("../Assets/Logos/uowi-logo.png")} alt="UOWI" style={{ height: '100%' }} />
        </div>
        <div style={logoStyle}>
          <img src={require("../Assets/Logos/seal-of-md-logo.png")} alt="Maryland" style={{ height: '100%' }} />
        </div>
      </LogoMarquee>
    </div>
  );
};

export default LogoSection; 