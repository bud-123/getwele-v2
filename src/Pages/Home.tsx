import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layouts/PageLayout";
import LogoSection from "../components/LogoSection";
import useMediaQuery from "../hooks/useMediaQuery";
import { getHomePage } from "../lib/sanityClient";

// Define proper types for your data
interface CardParagraph {
  text: string;
  highlightedPhrases: string[];
}

interface CardContent {
  title: string;
  icon: string;
  color: string;
  content: CardParagraph[];
}

interface HomePageData {
  heroSection: {
    title: string[];
    subtitle: string[];
    buttonText: string;
    buttonLink: string;
    heroImage?: {
      asset: {
        _id: string;
        url: string;
      };
    };
  };
  cards: CardContent[];
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const Home: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<CardContent | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  
  // Properly type your state
  const [pageData, setPageData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomePage();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Default card data with proper typing
  const defaultCardData: CardContent[] = [
    {
      title: "How Can We Make Current Recovery More Effective?",
      icon: "error_outline",
      color: "#FF6B6B",
      content: [
        {
          text: "When we're addicted, our behaviors prolong decision-making.",
          highlightedPhrases: ["prolong decision-making"]
        },
        {
          text: "Existing services often focus on a short period of time (3 days in many cases).",
          highlightedPhrases: []
        },
        {
          text: "It's not long enough to change our behavior.",
          highlightedPhrases: ["not long enough"]
        }
      ]
    },
    {
      title: "The Science of Getwele's Patented Protocol",
      icon: "science",
      color: "#4DA6FF",
      content: [
        {
          text: "When experiencing the desire to seek alcohol and other elicit substances, our brain's biochemistry is altered.",
          highlightedPhrases: ["brain's biochemistry"]
        },
        {
          text: "Getwele focuses on the biochemistry of the individual.",
          highlightedPhrases: ["biochemistry"]
        },
        {
          text: "Getwele prolongs the detox period to help you change your behavior and medically manage cravings.",
          highlightedPhrases: ["prolongs the detox period", "medically manage cravings"]
        }
      ]
    },
    {
      title: "How Getwele Works",
      icon: "event_available",
      color: "#4CAF50",
      content: [
        {
          text: "Instead of a few days detox, It's two weeks.",
          highlightedPhrases: ["two weeks"]
        },
        {
          text: "It's a long-term solution that helps you break the cycle of addiction.",
          highlightedPhrases: ["long-term solution", "break the cycle"]
        },
        {
          text: "Getwele further helps you change your behavior by medically managing cravings.",
          highlightedPhrases: ["change your behavior", "medically manage cravings"]
        }
      ]
    }
  ];

  // Use pageData if available, otherwise fall back to defaultCardData
  const cardData = pageData?.cards || defaultCardData;

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
  
  // Helper function to render text with highlighted phrases
  const renderHighlightedText = (text: string, highlightedPhrases: string[] = []) => {
    if (!highlightedPhrases || highlightedPhrases.length === 0) {
      return text;
    }

    let result = text;
    highlightedPhrases.forEach(phrase => {
      result = result.replace(
        new RegExp(`(${phrase})`, 'gi'),
        '<strong>$1</strong>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };
  
  if (loading) {
    return (
      <PageLayout>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          Loading...
        </div>
      </PageLayout>
    );
  }
  
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
              {pageData?.heroSection.title ? (
                pageData.heroSection.title.map((line: string, i: number) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))
              ) : (
                <>
                  Smash<br />
                  Your<br />
                  Drug<br />
                  Seeking
                </>
              )}
            </h1>
            <h3 style={{
              fontWeight: 'normal',
              fontSize: isMobile ? '1.5rem' : '2rem',
              margin: '20px 0'
            }}>
              {pageData?.heroSection.subtitle ? (
                pageData.heroSection.subtitle.map((line: string, i: number) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))
              ) : (
                <>
                  Less desire.<br />
                  Less seeking.
                </>
              )}
            </h3>
            <Link to={pageData?.heroSection.buttonLink || "/products"} style={{
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
              {pageData?.heroSection.buttonText || "START YOUR JOURNEY"} &nbsp;<span className="material-icons" style={{ verticalAlign: 'middle', fontSize: '1.4rem' }}>chevron_right</span>
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
              src={pageData?.heroSection.heroImage?.asset.url || require("../Assets/Images/getwele-hero-im.png")} 
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
          {cardData.map((card: CardContent, index: number) => (
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
              {card.content.map((paragraph: CardParagraph, idx: number) => (
                <p key={idx} style={{ color: '#444', lineHeight: '1.5', textAlign: 'left' }}>
                  {renderHighlightedText(paragraph.text, paragraph.highlightedPhrases)}
                </p>
              ))}
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
              <h2 style={{ 
                color: '#333', 
                marginBottom: '20px',
                fontSize: '2rem'
              }}>
                {activeCard.title}
              </h2>
              <div style={{ marginTop: '30px' }}>
                {activeCard.content.map((paragraph: CardParagraph, idx: number) => (
                  <p key={idx} style={{ 
                    color: '#444', 
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    marginBottom: '15px'
                  }}>
                    {renderHighlightedText(paragraph.text, paragraph.highlightedPhrases)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;