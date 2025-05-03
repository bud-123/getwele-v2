import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layouts/PageLayout";
import LogoSection from "../components/LogoSection";
import useMediaQuery from "../hooks/useMediaQuery";

// Card content type definition
interface CardContent {
  title: string;
  icon: string;
  color: string;
  content: React.ReactNode;
}

const Home: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<CardContent | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  // Card data
  const cardData: CardContent[] = [
    {
      title: "How Can We Make Current Recovery More Effective?",
      icon: "error_outline",
      color: "#FF6B6B",
      content: (
        <>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>When we're addicted, our behaviors <strong>prolong decision-making</strong>.</p>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Existing services often focus on a short period of time (3 days in many cases).</p>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>It's <strong>not long enough</strong> to change our behavior.</p>
        </>
      )
    },
    {
      title: "The Science of Getwele's Patented Protocol",
      icon: "science",
      color: "#4DA6FF",
      content: (
        <>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>When experiencing the desire to seek alcohol and other elicit substances, our <strong>brain's biochemistry</strong> is altered.</p>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Getwele focuses on the <strong>biochemistry of the individual</strong>.</p>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Getwele <strong>prolongs the detox period</strong> to help you change your behavior and <strong>medically manage cravings</strong>.</p>
        </>
      )
    },
    {
      title: "How Getwele Works",
      icon: "event_available",
      color: "#4CAF50",
      content: (
        <>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Instead of a few days detox, It's <strong>two weeks</strong>.</p>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>It's a <strong>long-term solution</strong> that helps you <strong>break the cycle</strong> of addiction.</p>
          <p style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>Getwele further helps you <strong>change your behavior</strong> by <strong>medically managing cravings</strong>.</p>
        </>
      )
    }
  ];

  // Handler for card click
  const handleCardClick = (card: CardContent) => {
    setActiveCard(card);
    setModalOpen(true);
  };

  // Handler for modal close
  const closeModal = () => {
    setModalOpen(false);
    setActiveCard(null);
  };
  
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
          {cardData.map((card, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '30px',
                width: isMobile ? '85%' : '300px',
                maxWidth: '100%',
                boxShadow: hoveredCardIndex === index 
                  ? '0 8px 20px rgba(0,0,0,0.2)' 
                  : '0 6px 15px rgba(0,0,0,0.15)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: isMobile ? (index !== cardData.length - 1 ? '20px' : '0') : '0',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                transform: hoveredCardIndex === index ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <div style={{ 
                height: '4px', 
                background: card.color, 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0 
              }}></div>
              <h3 style={{ color: '#222', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600' }}>{card.title}</h3>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: `rgba(${parseInt(card.color.slice(1, 3), 16)}, ${parseInt(card.color.slice(3, 5), 16)}, ${parseInt(card.color.slice(5, 7), 16)}, 0.1)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <span className="material-icons" style={{ fontSize: '40px', color: card.color }}>{card.icon}</span>
              </div>
              {card.content}
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && activeCard && (
          <div 
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '40px',
                width: isMobile ? '90%' : '600px',
                maxWidth: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}
            >
              <button 
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#555'
                }}
              >
                <span className="material-icons">close</span>
              </button>
              
              <div style={{ 
                height: '4px', 
                background: activeCard.color, 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0,
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
              }}></div>
              
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: `rgba(${parseInt(activeCard.color.slice(1, 3), 16)}, ${parseInt(activeCard.color.slice(3, 5), 16)}, ${parseInt(activeCard.color.slice(5, 7), 16)}, 0.1)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px'
              }}>
                <span className="material-icons" style={{ fontSize: '50px', color: activeCard.color }}>{activeCard.icon}</span>
              </div>
              
              <h2 style={{ 
                color: '#222', 
                fontSize: '2rem', 
                marginBottom: '25px', 
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {activeCard.title}
              </h2>
              
              <div style={{ fontSize: '1.1rem' }}>
                {activeCard.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;