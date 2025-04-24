import React from 'react';
import PageLayout from '../Layouts/PageLayout';
import useMediaQuery from '../hooks/useMediaQuery';

const Contact: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <PageLayout>
      <div className="contact-page" style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: isMobile ? '40px 15px' : '60px 20px'
      }}>
        <div className="contact-content" style={{
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
            CONTACT DR. SALAKO-AKANDE
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.8rem)',
            marginBottom: '2rem',
            color: '#3a506b',
            textAlign: 'center'
          }}>
            GET IN TOUCH WITH US
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
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
              <h3 style={{
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                borderBottom: '2px solid rgba(255,255,255,0.3)',
                paddingBottom: '10px'
              }}>
                CONTACT INFORMATION
              </h3>
              <p style={{ marginBottom: '15px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:getwele@gmail.com" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'underline',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  getwele@gmail.com
                </a>
              </p>
              <p style={{ marginBottom: '15px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                <strong>Phone:</strong>{' '}
                <a 
                  href="tel:4432407051" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'underline',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  443-240-7051
                </a>
              </p>
              <div style={{ marginBottom: '15px' }}>
                <p style={{ marginBottom: '5px', fontSize: isMobile ? '1rem' : '1.1rem' }}>
                  <strong>Address:</strong>
                </p>
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
                BUSINESS HOURS
              </h3>
              <p style={{ 
                marginBottom: '15px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                padding: '8px 12px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '6px'
              }}>
                <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
              </p>
              <p style={{ 
                marginBottom: '15px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                padding: '8px 12px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '6px'
              }}>
                <strong>Saturday - Sunday:</strong> Closed
              </p>
              <p style={{ 
                marginTop: '25px',
                fontSize: isMobile ? '1rem' : '1.1rem'
              }}>
                For urgent inquiries, please email us directly at{' '}
                <a 
                  href="mailto:getwele@gmail.com" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'underline',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  getwele@gmail.com
                </a>
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
              SEND A MESSAGE TO DR. SALAKO-AKANDE
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label 
                    htmlFor="name" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '5px', 
                      color: '#555',
                      fontSize: '0.9rem'
                    }}
                  >
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label 
                    htmlFor="email" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '5px', 
                      color: '#555',
                      fontSize: '0.9rem'
                    }}
                  >
                    Your Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '5px', 
                    color: '#555',
                    fontSize: '0.9rem'
                  }}
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '5px', 
                    color: '#555',
                    fontSize: '0.9rem'
                  }}
                >
                  Your Message *
                </label>
                <textarea 
                  id="message" 
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button 
                onClick={() => {
                  const email = document.getElementById('email') as HTMLInputElement;
                  const name = document.getElementById('name') as HTMLInputElement;
                  const subject = document.getElementById('subject') as HTMLInputElement;
                  const message = document.getElementById('message') as HTMLTextAreaElement;
                  
                  if (email && name && message && email.value && name.value && message.value) {
                    const mailtoLink = `mailto:getwele@gmail.com?subject=${encodeURIComponent(subject?.value || 'Message for Dr. Salako-Akande')}&body=${encodeURIComponent(`Name: ${name.value}\n\n${message.value}`)}`;
                    window.location.href = mailtoLink;
                  } else {
                    alert('Please fill in all required fields.');
                  }
                }}
                style={{
                  backgroundColor: '#72b046',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  marginTop: '10px',
                  alignSelf: 'flex-start'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5e9737'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#72b046'}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
