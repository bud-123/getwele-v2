import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Banner } from "../components/ui/Banner";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <Banner 
        id="promo-banner"
        variant="rainbow"
        message={<a href="https://www.nature.com/articles/s41398-024-02940-w" target="_blank" rel="noopener noreferrer">Published in Nature – Read the latest full article here.</a>}
        height="2rem"
      />
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={require("../Assets/Images/getwele-logo.jpg")} alt="GetWele Logo" style={{ height: "100px", maxWidth: "100%" }} />
          </Link>
          <div className="navbar-menu">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/research" className="navbar-item">Research</Link>
            <Link to="/products" className="navbar-item">Products</Link>
            <Link to="/contact" className="navbar-item">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
