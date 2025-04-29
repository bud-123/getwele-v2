import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layouts/PageLayout";
import LogoSection from "../components/LogoSection";
import useMediaQuery from "../hooks/useMediaQuery";

const Home: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <PageLayout>
      <div>
        <div className="hero-section" style={{ 
          width: '100%', 
          overflow: 'hidden', 
          background: 'linear-gradient(to right, #0f4935, #72b046)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '50px 20px' : '0 50px 0 100px',
          minHeight: '575px',
          height: 'auto'
        }}>
          <div className="hero-content" style={{
            color: 'white',
            maxWidth: '550px',
            textAlign: 'left',
            margin: isMobile ? '0 auto 40px' : '0 0 0 225px'
          }}>
            <h1 style={{
              fontSize: isMobile ? '3.5rem' : '5.5rem',
              margin: '0',
              lineHeight: '1.1'
            }}>
              Smash<br />
              Your<br />
              Drug<br />
              Seeking
            </h1>
            <h3 style={{
              fontWeight: 'normal',
              fontSize: isMobile ? '1.5rem' : '2rem',
              margin: '20px 0'
            }}>
              Less desire.<br />
              Less seeking.
            </h3>
            <Link to="/products" style={{
              display: 'inline-block',
              backgroundColor: '#77C4BD',
              color: 'white',
              textDecoration: 'none',
              padding: '15px 30px',
              borderRadius: '30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginTop: '20px',
              marginBottom: '20px'
            }}>
              START YOUR JOURNEY &nbsp;<span className="material-icons" style={{ verticalAlign: 'middle', fontSize: '1.4rem' }}>chevron_right</span>
            </Link>
          </div>
          <div className="hero-image" style={{
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '100%' : 'auto'
          }}>
            <img 
              src={require("../Assets/Images/getwele-hero-im.png")} 
              alt="Smaash Products"
              style={{
                height: 'auto',
                maxHeight: '100%',
                maxWidth: '100%',
                margin: isMobile ? '0 auto' : '0 225px 0 0'
              }}
            />
          </div>
        </div>

        <LogoSection />

        <div style={{ 
          backgroundColor: '#0f0f0f', 
          padding: '80px 20px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            width: isMobile ? '85%' : '300px',
            maxWidth: '100%',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: isMobile ? '20px' : '0',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '4px', 
              background: '#FF6B6B', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0 
            }}></div>
            <h3 style={{ color: '#222', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600' }}>How Can We Make Current Recovery More Effective?</h3>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 107, 107, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <span className="material-icons" style={{ fontSize: '40px', color: '#FF6B6B' }}>error_outline</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>When we're addicted, our behaviors <strong>prolong decision-making</strong>.</p>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Existing services often focus on a short period of time (3 days in many cases).</p>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>It's <strong>not long enough</strong> to change our behavior.</p>
          </div>
            
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            width: isMobile ? '85%' : '300px',
            maxWidth: '100%',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: isMobile ? '20px' : '0',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '4px', 
              background: '#4DA6FF', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0 
            }}></div>
            <h3 style={{ color: '#222', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600' }}>The Science of Getwele's Patented Protocol</h3>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(77, 166, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <span className="material-icons" style={{ fontSize: '40px', color: '#4DA6FF' }}>science</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>When experiencing the desire to seek alcohol and other elicit substances, our <strong>brain's biochemistry</strong> is altered.</p>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Getwele focuses on the <strong>biochemistry of the individual</strong>.</p>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Getwele <strong>prolongs the detox period</strong> to help you change your behavior and <strong>medically manage cravings</strong>.</p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            width: isMobile ? '85%' : '300px',
            maxWidth: '100%',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '4px', 
              background: '#4CAF50', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0 
            }}></div>
            <h3 style={{ color: '#222', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600' }}>How Getwele Works</h3>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <span className="material-icons" style={{ fontSize: '40px', color: '#4CAF50' }}>event_available</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Instead of a few days detox, It's <strong>two weeks</strong>.</p>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>It's a <strong>long-term solution</strong> that helps you <strong>break the cycle</strong> of addiction.</p>
            <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Getwele further helps you <strong>change your behavior</strong> by <strong>medically managing cravings</strong>.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;