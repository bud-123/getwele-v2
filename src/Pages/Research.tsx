import React from 'react';
import PageLayout from "../Layouts/PageLayout";
import useMediaQuery from "../hooks/useMediaQuery";

const Research = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <PageLayout>
      <div className="researcher-profile" style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: isMobile ? '40px 15px' : '60px 20px'
      }}>
        <div className="researcher-content" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: '#2c3e50',
            textAlign: 'center',
            padding: '0 10px'
          }}>
            AJIBIKE SALAKO-AKANDE MD
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.8rem)',
            marginBottom: '2rem',
            color: '#3a506b',
            textAlign: 'center'
          }}>
            RESEARCHER
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            backgroundColor: '#72b046',
            padding: isMobile ? '20px' : '40px',
            marginTop: '20px',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            gap: isMobile ? '15px' : '0'
          }}>
            <div style={{
              flex: '1 1 300px',
              padding: '10px',
              minWidth: isMobile ? '100%' : '250px'
            }}>
              <img 
                src={require("../Assets/Images/research-profile-image.jpeg")} 
                alt="Dr. Ajibike Salako-Akande" 
                style={{
                  width: '100%',
                  height: isMobile ? '250px' : '300px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                }}
              />
            </div>
            
            <div style={{
              flex: '1 1 300px',
              padding: isMobile ? '10px' : '20px',
              color: 'white'
            }}>
              <p style={{ marginBottom: '15px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                <strong>Email:</strong> getwele@gmail.com
              </p>
              <p style={{ marginBottom: '15px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                <strong>Phone:</strong> 443-240-7051
              </p>
              <div style={{ marginBottom: '15px' }}>
                <p style={{ marginBottom: '5px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                  bwtech@UMBC South
                </p>
                <p style={{ marginBottom: '5px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                  1450 S Rolling Rd
                </p>
                <p style={{ marginBottom: '5px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                  Halethorpe, MD 21227
                </p>
                <p style={{ marginBottom: '5px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                  Room: XXX
                </p>
              </div>
            </div>
            
            <div style={{
              flex: '1 1 300px',
              padding: isMobile ? '10px' : '20px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                borderBottom: '2px solid rgba(255,255,255,0.3)',
                paddingBottom: '10px'
              }}>
                AREAS OF RESEARCH
              </h3>
              <p style={{ 
                marginBottom: '15px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                padding: '8px 12px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '6px',
                transition: 'all 0.3s ease'
              }}>
                Nutritional Neuroscience
              </p>
              <p style={{ 
                marginBottom: '15px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                padding: '8px 12px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '6px',
                transition: 'all 0.3s ease'
              }}>
                Addiction Research
              </p>
            </div>
          </div>
          
          <div style={{
            width: '100%',
            backgroundColor: 'white',
            padding: isMobile ? '25px 15px' : '40px',
            marginTop: '40px',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: '700',
              marginBottom: isMobile ? '20px' : '30px',
              color: '#2c3e50',
              textAlign: 'center'
            }}>
              ANNOTATED BIBLIOGRAPHY
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '20px' : '30px'
            }}>
              <div style={{
                padding: isMobile ? '15px' : '20px',
                borderLeft: '4px solid #72b046',
                backgroundColor: '#f9f9f9',
                borderRadius: '0 8px 8px 0'
              }}>
                <p style={{ 
                  fontWeight: '500', 
                  marginBottom: '10px',
                  fontSize: isMobile ? '0.95rem' : 'inherit' 
                }}>
                  Towers EB, Williams IL, Aristidou ASK, <strong style={{ color: '#72b046' }}>et al. (includes Salako-Akande A)</strong>. Impact of SMAASH-C, a novel nutritional supplement, on drug-seeking and toxicity in female and male rats. Transl Psychiatry. 2024;14.
                </p>
              </div>
              
              <div style={{
                padding: isMobile ? '15px' : '20px',
                borderLeft: '4px solid #72b046',
                backgroundColor: '#f9f9f9',
                borderRadius: '0 8px 8px 0'
              }}>
                <p style={{ 
                  fontWeight: '500', 
                  marginBottom: '10px',
                  fontSize: isMobile ? '0.95rem' : 'inherit' 
                }}>
                  Young L, Webber-Waugh A, Thaxter K. Drug-seeking behavior is significantly attenuated in nutritionally supplemented cocaine withdrawn Sprague-Dawley rats. J Behav Brain Sci. 2021;11(7).
                </p>
              </div>
              
              <div style={{
                padding: isMobile ? '15px' : '20px',
                borderLeft: '4px solid #72b046',
                backgroundColor: '#f9f9f9',
                borderRadius: '0 8px 8px 0'
              }}>
                <p style={{ 
                  fontWeight: '500', 
                  marginBottom: '10px',
                  fontSize: isMobile ? '0.95rem' : 'inherit' 
                }}>
                  Webber-Waugh A, Thaxter Nesbeth K, Anderson-Johnson P, <strong style={{ color: '#72b046' }}>Salako-Akande A</strong>, Asemota H, Young L. Drug seeking behavior of amphetamine addicted Sprague-Dawley rats is eliminated after nutritional supplementation. J Behav Brain Sci. 2017;7(12).
                </p>
              </div>
              
              <div style={{
                padding: isMobile ? '15px' : '20px',
                borderLeft: '4px solid #72b046',
                backgroundColor: '#f9f9f9',
                borderRadius: '0 8px 8px 0'
              }}>
                <p style={{ 
                  fontWeight: '500', 
                  marginBottom: '10px',
                  fontSize: isMobile ? '0.95rem' : 'inherit' 
                }}>
                  Gardner NS, Luke KJS, Wheatley AO, <strong style={{ color: '#72b046' }}>et al. (includes Salako-Akande A)</strong>. Plasma cocaine metabolite levels and liver CYP450 3A4 isoenzyme activity as indicators of cocaine metabolism in rats treated with Salako supplements. In: Strategic Applications of Measurement Technologies and Instrumentation. 2019.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Research;