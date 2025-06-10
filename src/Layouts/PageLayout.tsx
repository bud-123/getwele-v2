import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Banner } from "../components/ui/Banner";
import useMediaQuery from "../hooks/useMediaQuery";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="page-layout">
      <Banner 
        id="promo-banner"
        variant="rainbow"
        message={<a href="https://www.nature.com/articles/s41398-024-02940-w" target="_blank" rel="noopener noreferrer">Published in Nature – Read the latest full article here.</a>}
        height="2rem"
      />
      <nav className="navbar">
        <div className="navbar-container" style={{ 
          position: 'relative',
          padding: isMobile ? '0 15px' : '0'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}>
            <Link to="/" className="navbar-logo">
              <img src={require("../Assets/Images/getwele-logo.jpg")} alt="GetWele Logo" style={{ 
                height: isMobile ? "80px" : "100px", 
                maxWidth: "100%" 
              }} />
            </Link>
          
          <div style={{ 
            textAlign: 'center', 
            fontStyle: 'italic',
            margin: isMobile ? '10px 0' : '0 auto',
            color: '#555',
            flex: 1,
            maxWidth: '50%',
            padding: '0 20px'
          }}>
            When there's no desire, there's no seeking.
          </div>
          
          <button 
              className="mobile-menu-button" 
              onClick={toggleMobileMenu}
              style={{ 
                position: 'relative',
                top: 'auto',
                right: 'auto',
                display: isMobile ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                padding: '10px',
                cursor: 'pointer'
              }}
            >
              <span className="material-icons" style={{ fontSize: '28px' }}>
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
          
          <div className={`navbar-menu ${mobileMenuOpen ? 'show' : ''}`}>
            <Link to="/" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/research" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Research</Link>
            <Link to="/products" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/blog" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/press-release" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Press Release</Link>
            <Link to="/contact" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          Copyright © 2025 Getwele Natureceuticals. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
