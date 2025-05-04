import React, { useState, useEffect } from 'react';
import PageLayout from "../Layouts/PageLayout";
import useMediaQuery from "../hooks/useMediaQuery";
import { getAboutPage } from "../lib/sanityClient";

// Simple types for Sanity data
interface SanityImage {
  asset?: {
    _id?: string;
    url?: string;
  }
}

interface AboutPageData {
  pageTitle?: string;
  introText?: string;
  heroSection?: {
    heading?: string;
    subheading?: string;
    heroImage?: SanityImage;
  };
  missionStatement?: {
    heading?: string;
    content?: string;
    image?: SanityImage;
  };
  visionStatement?: {
    heading?: string;
    content?: string;
    image?: SanityImage;
  };
  studies?: {
    heading?: string;
    content?: string;
    image?: SanityImage;
  };
}

const About = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  
  // Carousel state
  const heroImages = [
    require("../Assets/Images/about-hero.jpg"),
    require("../Assets/Images/about-mission-image2.png"),
    require("../Assets/Images/about-mission-image3.png"),
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  // Sanity data state
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);

  // Auto-scroll effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        setFade(true); // Fade in new image
      }, 400); // Duration matches CSS transition
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual navigation
  const goToPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setFade(true);
    }, 400);
  };
  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      setFade(true);
    }, 400);
  };

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutPage();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about page data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      <div>
        {/* HERO CAROUSEL */}
        <div className="hero-section" style={{
          width: '100%',
          height: isMobile ? '400px' : '600px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              transition: 'opacity 0.4s ease',
              opacity: fade ? 1 : 0,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <img
              src={heroImages[currentIndex]}
              alt="About Getwele"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}>
            <h1 style={{
              color: 'white',
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '2px',
              padding: '0 20px'
            }}>
              {aboutData?.heroSection?.heading || "WHO WE ARE"}
            </h1>
          </div>
          {/* Chevron Buttons */}
          <button
            onClick={goToPrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              fontSize: '2rem',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 3,
              display: isMobile ? 'none' : 'block'
            }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              fontSize: '2rem',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 3,
              display: isMobile ? 'none' : 'block'
            }}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
        
        <div className="about-content" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: isMobile ? '40px 20px' : '60px 20px' 
        }}>
          
          {/* Bold intro paragraph */}
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '40px' : '60px'
          }}>
            <p style={{
              fontSize: isMobile ? '1.1rem' : '1.4rem',
              fontWeight: 'bold',
              lineHeight: '1.8',
              color: '#2c3e50',
              textAlign: 'left'
            }}>
              {aboutData?.introText || `Getwele is an offshoot of Awele Foundation International (AFI), Inc., a Non-Profit organization which worked for many years to develop Complementary & Alternative Therapies for Alcohol/Drug Abuse through its sister clinic, Awele Treatment & Rehab Clinic, Inc.
              <br />
              <br />
              Through AFI's Executive Director, 3 different formulations were developed for each category of stimulants, opiates, downers, and hallucinogens.  All products are in the commercialization stage as Nutraceuticals.  They will be used for nutritional support to lessen the desire for alcohol/drug and their seeking behavior. 
              <br />
              <br />
              The result is that Alcohol/Drug abusers can stay abstinent, improve their nutritional status and general well-being. AFI has done studies in different countries – pilot observational study (Awele Clinic in the US), animal studies (UWIMONA University Jamaica), case studies (Federal Neuro-Psychiatric Hospital, Nigeria) and currently a preliminary study at University of Virginia (UVA) School of Medicine, Animal Division, USA.`}
            </p>
          </div>
            
          {/* Mission Section with responsive layout */}
          <div className="about-section" style={{ 
            marginBottom: isMobile ? '60px' : '100px',
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-end',
          }}>
            {/* Image Card */}
            <div style={{
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '250px' : '400px',
              position: isMobile ? 'relative' : 'absolute',
              left: 0,
              top: 0,
              zIndex: 1,
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              marginBottom: isMobile ? '20px' : 0
            }}>
              <img 
                src={aboutData?.missionStatement?.image?.asset?.url || require("../Assets/Images/about-mission-image.jpg")} 
                alt="Our Mission" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Content Card */}
            <div style={{ 
              width: isMobile ? '100%' : '60%',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              background: '#fff',
              position: 'relative',
              zIndex: 2,
              marginTop: isMobile ? '0' : '100px'
            }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.6rem' : '2rem', 
                marginBottom: '20px',
                borderBottom: '2px solid #72b046',
                paddingBottom: '10px',
                color: '#2c3e50'
              }}>{aboutData?.missionStatement?.heading || "Our Mission"}</h2>
              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                lineHeight: '1.6',
                color: '#555'
              }}>{aboutData?.missionStatement?.content || "To become a leading company that provides high-quality products that will give comfort and stability to its customers. To be a company that helps its customers move to Health and General Wellness."}</p>
            </div>
          </div>
          
          {/* Vision Section with responsive layout */}
          <div className="about-section" style={{ 
            marginBottom: isMobile ? '60px' : '100px',
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-start',
          }}>
            {/* Image Card */}
            <div style={{
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '250px' : '400px',
              position: isMobile ? 'relative' : 'absolute',
              right: isMobile ? 'auto' : 0,
              left: isMobile ? 'auto' : 'auto',
              top: 0,
              zIndex: 1,
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              marginBottom: isMobile ? '20px' : 0,
              order: isMobile ? 1 : 2
            }}>
              <img 
                src={aboutData?.visionStatement?.image?.asset?.url || require("../Assets/Images/about-vision-image.jpg")} 
                alt="Our Vision" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Content Card */}
            <div style={{ 
              width: isMobile ? '100%' : '60%',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              background: '#fff',
              position: 'relative',
              zIndex: 2,
              marginTop: isMobile ? '0' : '100px',
              order: isMobile ? 2 : 1
            }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.6rem' : '2rem', 
                marginBottom: '20px',
                borderBottom: '2px solid #72b046',
                paddingBottom: '10px',
                color: '#2c3e50'
              }}>{aboutData?.visionStatement?.heading || "Our Vision"}</h2>
              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                lineHeight: '1.6',
                color: '#555'
              }}>{aboutData?.visionStatement?.content || "Our goal is to show that a dietary supplement protocol (The Awele Protocol) of adjunct nutritional support and nutritional management is an evidence-based practice that can provide an efficacious and cost-effective approach to management of nutritional deficiencies associated with chronic drug and alcohol abuse."}</p>
            </div>
          </div>
          
          {/* Studies Section with responsive layout */}
          <div className="about-section" style={{ 
            marginBottom: isMobile ? '40px' : '40px',
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-end',
          }}>
            {/* Image Card */}
            <div style={{
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '250px' : '350px',
              position: isMobile ? 'relative' : 'absolute',
              left: 0,
              top: 0,
              zIndex: 1,
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              marginBottom: isMobile ? '20px' : 0
            }}>
              <img 
                src={aboutData?.studies?.image?.asset?.url || require("../Assets/Images/about-studies-image.jpg")} 
                alt="Our Studies" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Content Card */}
            <div style={{ 
              width: isMobile ? '100%' : '60%',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              background: '#fff',
              position: 'relative',
              zIndex: 2,
              marginTop: isMobile ? '0' : '100px'
            }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.6rem' : '2rem', 
                marginBottom: '20px',
                borderBottom: '2px solid #72b046',
                paddingBottom: '10px',
                color: '#2c3e50'
              }}>{aboutData?.studies?.heading || "Our Studies"}</h2>
              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                lineHeight: '1.6',
                color: '#555'
              }}>{aboutData?.studies?.content || "Our studies have shown similar findings to others in the literature that show that there is a relationship between biochemical depletions and nutritional deficiencies and heightened drug desire/seeking behavior."}</p>
              
              <div style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <a href="/getwele-v2/#/research" style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  border: '2px solid #72b046',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  color: '#000',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  Explore Our Research
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;