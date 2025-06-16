import React, { useState, useEffect } from 'react';
import PageLayout from '../Layouts/PageLayout';
import useMediaQuery from '../hooks/useMediaQuery';
import getweleLogo from '../Assets/Images/getwele-logo.jpg';
import biksImage from '../Assets/Blog/biks-blog.jpeg';
import bwtechImage from '../Assets/Blog/bwtech-blog.png';
import congratsImage from '../Assets/Blog/congrats-blog.png';

// Define types for blog data
interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  slug?: string;
  url?: string;
}

// Sample blog data - you can replace this with data from your CMS
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Restoring Biochemical Balance Can Reduce Drug Seeking Behavior',
    date: 'Mar 16, 2020',
    category: 'Blog',
    slug: 'boost-conversion-rate',
    url: 'https://olive-actual-beaver-41.mypinata.cloud/ipfs/bafybeic7l3cntnzahjewb4pufz3yqx3h6pkskxnvlh6zvsjwqeoacwafdm'
  },
  {
    id: '2',
    title: 'MPT Presents Fighting Opioids Today: Maryland Communities',
    date: 'Mar 10, 2020',
    category: 'Video',
    slug: 'seo-drive-sales',
    url: 'https://video.mpt.tv/video/fighting-opioids-today-maryland-communities-a1k93m/'
  },
  {
    id: '3',
    title: 'Clinton Foundation and The Johns Hopkins Bloomberg School of Public Health present America\'s Opioid Epidemic: From Evidence to Impact',
    date: 'Feb 12, 2020',
    category: 'Event',
    slug: 'improve-customer-experience',
    url: 'https://publichealth.jhu.edu/events/americas-opioid-epidemic'
  }
];

const Blog: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(sampleBlogPosts);
  const [loading, setLoading] = useState(false);

  // For local development and production
  const pdfUrl = process.env.NODE_ENV === 'development' 
    ? '/blog/BlogConcept.pdf'  // Local development
    : process.env.PUBLIC_URL + '/blog/BlogConcept.pdf';  // Production

  return (
    <PageLayout>
      <div style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '40px 20px' : '60px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Blog Layout with Featured, BWTech, and Spotlight sections */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr 1fr',
            gap: '20px',
            width: '100%',
            marginBottom: '40px'
          }}>
            {/* Featured Section - Improved UI */}
            <div style={{
              borderRight: !isMobile ? '1px solid #e0e0e0' : 'none',
              padding: '20px',
              paddingRight: !isMobile ? '30px' : '20px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '25px',
                textAlign: 'center',
                color: '#2c3e50',
                borderBottom: '2px solid #72b046',
                paddingBottom: '10px',
              }}>
                Featured
              </h2>
              
              {sampleBlogPosts.map((post, index) => (
                <a 
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  style={{ 
                    textDecoration: 'none',
                    display: 'block'
                  }}
                >
                  <div 
                    style={{ 
                      marginBottom: index < sampleBlogPosts.length - 1 ? '25px' : '0',
                      cursor: 'pointer',
                      padding: '15px',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      backgroundColor: '#f9f9f9',
                      borderLeft: '3px solid #72b046',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f7eb';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9f9f9';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      fontSize: '0.8rem',
                      color: '#72b046',
                      fontWeight: '600'
                    }}>
                      <span>{post.date}</span>
                      <span style={{
                        backgroundColor: '#72b046',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                      }}>
                        {post.category}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0',
                      color: '#333',
                      lineHeight: '1.4',
                    }}>{post.title}</h3>
                    <div style={{
                      marginTop: '10px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#72b046',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        See More 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginLeft: '5px' }}>
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* BWTech Center Section */}
            <div style={{
              textAlign: 'center',
              padding: '0 20px'
            }}>
              {/* BWTech Logo */}
              <img 
                src={bwtechImage}
                alt="BWTech at UMBC" 
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              
              {/* Congrats Section */}
              <div style={{ marginTop: '40px' }}>
                <img 
                  src={congratsImage}
                  alt="Getwele Products" 
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                />
              </div>
            </div>

            {/* Spotlight Section */}
            <div style={{
              borderLeft: !isMobile ? '1px solid #e0e0e0' : 'none',
              padding: '20px',
              paddingLeft: !isMobile ? '30px' : '20px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '25px',
                textAlign: 'center',
                color: '#2c3e50',
                borderBottom: '2px solid #72b046',
                paddingBottom: '10px',
              }}>
                Spotlight
              </h2>
              
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={biksImage}
                  alt="Dr. Biks Salako-Akande" 
                  style={{
                    width: '100%',
                    maxWidth: '250px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    border: '4px solid white',
                  }}
                />
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginTop: '15px',
                  color: '#333',
                  lineHeight: '1.4',
                }}>
                  Ajibike Salako-Akande
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#555',
                  marginTop: '5px',
                }}>
                  (Dr. Biks) MBBS, M.Ed, BCPC,RPS
                </p>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#72b046',
                  marginTop: '5px',
                }}>
                  Owner and CEO.
                </p>
              </div>
            </div>
          </div>
          
          {/* PDF Presentation Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '3rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            width: '100%',
            maxWidth: '800px', // Increased width for better viewing
            textAlign: 'center'
          }}>
            <div style={{
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img 
                src={getweleLogo}
                alt="Getwele Logo"
                style={{
                  width: '120px',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Blog Concept Presentation
            </h2>
            <p style={{
              color: '#6b7280',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              View our comprehensive presentation covering key concepts and insights.
            </p>
            
            {/* Iframe for PDF Viewing */}
            <div style={{
              width: '100%',
              height: '500px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <iframe 
                src="https://olive-actual-beaver-41.mypinata.cloud/ipfs/bafybeic7l3cntnzahjewb4pufz3yqx3h6pkskxnvlh6zvsjwqeoacwafdm"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                title="Getwele Blog Concept Presentation"
                allowFullScreen
              />
            </div>
            
            {/* External Link Button */}
            <a 
              href="https://olive-actual-beaver-41.mypinata.cloud/ipfs/bafybeic7l3cntnzahjewb4pufz3yqx3h6pkskxnvlh6zvsjwqeoacwafdm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#72b046',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'background-color 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5a8c37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#72b046';
              }}
            >
              🔗 Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog; 