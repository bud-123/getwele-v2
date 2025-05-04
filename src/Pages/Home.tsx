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
  researchSection?: {
    title: string;
    introText: string;
    conclusionText: string;
    factors: {
      title: string;
      description: string;
      color: string;
    }[];
  };
  assamLevelsSection?: {
    title: string;
    introText: string;
    subIntroText: string;
    levels: {
      levelName: string;
      description: string;
      color: string;
    }[];
  };
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
          text: "When we have Substance Use Disorder problems, our addictive behaviors prolong decision-making.",
          highlightedPhrases: ["prolong decision-making"]
        },
        {
          text: "Existing services often focus on a short period of intervention time and do not address depletion of micro and macronutrients that are lost in the brain during drug use. This can lead to perpetual unwellness feelings in Substance Use Disorder Individuals (SUDIs).",
          highlightedPhrases: ["depletion of micro and macronutrients", "perpetual unwellness feelings"]
        },
        {
          text: "This can make their recovery decisions unachievable.",
          highlightedPhrases: ["unachievable"]
        }
      ]
    },
    {
      title: "The Science of Getwele's Patented Protocol",
      icon: "science",
      color: "#4DA6FF",
      content: [
        {
          text: "When experiencing the desire to seek alcohol and other illicit substances, our brain's biochemistry is altered. This can lead to persistent craving that drives relapse leading to compulsive use with consequences in nutritional deficiencies and sometimes immune deficiencies.",
          highlightedPhrases: ["brain's biochemistry", "persistent craving", "nutritional deficiencies", "immune deficiencies"]
        },
        {
          text: "Persistent craving is the Hallmark of addiction, which drives relapse and hampers recovery. This craving leads to loss of control, compulsive use, and nutritional and immune deficiencies.",
          highlightedPhrases: ["Persistent craving", "Hallmark of addiction", "drives relapse", "loss of control", "compulsive use"]
        }
      ]
    },
    {
      title: "How Getwele Works",
      icon: "event_available",
      color: "#4CAF50",
      content: [
        {
          text: "Getwele adds achieving biochemical balance to intervention time through replenishment of SUDI's lost micro and macro-nutrients which then replaces, replenishes, and repairs their brain cells.",
          highlightedPhrases: ["biochemical balance", "replenishment", "replaces, replenishes, and repairs"]
        },
        {
          text: "They are able to then function and develop proper decision making on seeking for illicit substances.",
          highlightedPhrases: ["function", "proper decision making"]
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
  
  // Default research section data
  const defaultResearchSection = {
    title: "Factors Contributing to Craving and Relapse",
    introText: "Researchers including those at NIDA have identified several factors contributing to craving and relapse which are:",
    conclusionText: "These factors contribute to the perception that drug abuse is an intractable problem and those affected are difficult to treat.",
    factors: [
      {
        title: "1. Recall of Previous Pleasure",
        description: "The memory of past pleasurable experiences can trigger cravings and relapse, even when an individual is aware of the negative consequences. This cycle of recall, craving, and relapse depletes brain chemistry.",
        color: "#4DA6FF"
      },
      {
        title: "2. Nutritional Deficiency",
        description: "Insufficient nutrient intake during active substance use is a major obstacle to recovery, yet it often receives inadequate attention. Substance abusers commonly experience deficits in essential micro and macro-nutrients. These deficiencies can hinder treatment adherence and increase the likelihood of relapse.",
        color: "#4DA6FF"
      },
      {
        title: "3. Proliferation of Metabolites",
        description: "Drug breakdown products can remain active and induce craving, further contributing to the imbalance in brain chemistry and compulsive use.",
        color: "#4DA6FF"
      },
      {
        title: "4. Free Radicals and Toxins",
        description: "Drug breakdown generates free radicals, toxins, and inadequate antioxidants, which can cause hangovers and unwell feelings.",
        color: "#4DA6FF"
      }
    ]
  };

  // Default ASSAM levels section data
  const defaultAssamLevelsSection = {
    title: "How Getwele Works",
    introText: "Intervention time is prolonged through our focus on recovery.",
    subIntroText: "Recovery is needed in each intervention process i.e during detoxification, Intensive Counseling, Aftercare and which should be incorporated in all American Society of Addiction Medicine's levels of care listed below:",
    levels: [
      {
        levelName: "Level 0.5: Early Intervention Services",
        description: "This level focuses on preventing the progression of substance use disorders and involves early intervention, such as motivational interviewing and brief interventions.",
        color: "#4CAF50"
      },
      {
        levelName: "Level 1: Outpatient Services",
        description: "Outpatient services involve less frequent and intensive treatment, typically focusing on education, counseling, and support groups.",
        color: "#4CAF50"
      },
      {
        levelName: "Level 2: Intensive Outpatient/Partial Hospitalization Services",
        description: "This level provides more intensive outpatient care, including structured programming and therapy, with a focus on addressing co-occurring mental health conditions.",
        color: "#4CAF50"
      },
      {
        levelName: "Level 3: Residential/Inpatient Services",
        description: "This level involves residential treatment, where individuals reside at the facility and receive intensive care, including medical monitoring and therapy.",
        color: "#4CAF50"
      },
      {
        levelName: "Level 4: Medically Managed Intensive Inpatient Services",
        description: "This is the highest level of care, designed for individuals with severe medical or psychiatric conditions, such as acute withdrawal or detoxification.",
        color: "#4CAF50"
      }
    ]
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
            <Link 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cards-section')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              to="#cards-section" 
              style={{
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

        <div id="cards-section" style={{ 
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

        {/* Research and Factors Section */}
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '80px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              textAlign: 'center', 
              marginBottom: '40px',
              color: '#0f4935'
            }}>
              {pageData?.researchSection?.title || defaultResearchSection.title}
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: '#333' }}>
              {pageData?.researchSection?.introText || defaultResearchSection.introText}
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '30px',
              marginBottom: '60px'
            }}>
              {(pageData?.researchSection?.factors || defaultResearchSection.factors).map((factor, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white', 
                  padding: '30px', 
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ color: factor.color || "#4DA6FF", marginBottom: '15px' }}>{factor.title}</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
            
            <p style={{ textAlign: 'center', marginBottom: '60px', fontSize: '1.1rem', color: '#333', fontStyle: 'italic' }}>
              {pageData?.researchSection?.conclusionText || defaultResearchSection.conclusionText}
            </p>

            <h2 style={{ 
              fontSize: '2.5rem', 
              textAlign: 'center', 
              marginBottom: '40px',
              color: '#0f4935'
            }}>
              {pageData?.assamLevelsSection?.title || defaultAssamLevelsSection.title}
            </h2>
            
            <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: '#333' }}>
              {pageData?.assamLevelsSection?.introText || defaultAssamLevelsSection.introText}
            </p>
            
            <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem', color: '#333' }}>
              {pageData?.assamLevelsSection?.subIntroText || defaultAssamLevelsSection.subIntroText}
            </p>

            {(pageData?.assamLevelsSection?.levels || defaultAssamLevelsSection.levels).map((level, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                padding: '30px', 
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: index !== (pageData?.assamLevelsSection?.levels || defaultAssamLevelsSection.levels).length - 1 ? '20px' : '0'
              }}>
                <h3 style={{ color: level.color || "#4CAF50", marginBottom: '15px' }}>{level.levelName}</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
                  {level.description}
                </p>
              </div>
            ))}
          </div>
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