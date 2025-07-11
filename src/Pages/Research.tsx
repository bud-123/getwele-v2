import React, { useState, useEffect } from 'react';
import PageLayout from "../Layouts/PageLayout";
import useMediaQuery from "../hooks/useMediaQuery";
import { getResearchPage } from "../lib/sanityClient";
import "../App.css"; // Make sure to import the CSS

// Define types for Sanity data
interface SanityImage {
  asset?: {
    _id?: string;
    url?: string;
  }
}

interface ResearchArea {
  title: string;
  description: string;
  image?: SanityImage;
}

interface Publication {
  title: string;
  authors: string;
  publicationDate?: string;
  journal?: string;
  abstract?: string;
  link?: string;
  thumbnail?: SanityImage;
}

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: SanityImage;
  researchInterests?: string[];
}

interface ResearchPageData {
  pageTitle?: string;
  heroSection?: {
    heading?: string;
    subheading?: string;
    heroImage?: SanityImage;
  };
  introductionSection?: {
    heading?: string;
    content?: any[];
  };
  researchAreas?: ResearchArea[];
  publications?: Publication[];
  researchTeam?: TeamMember[];
}

const Research = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Sanity data state
  const [pageData, setPageData] = useState<ResearchPageData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResearchPage();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching research page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
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
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: '#2c3e50',
            textAlign: 'center',
            padding: '0 10px'
          }}>
            {pageData?.heroSection?.heading || "AJIBIKE SALAKO-AKANDE MD"}
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.8rem)',
            marginBottom: '2rem',
            color: '#3a506b',
            textAlign: 'center'
          }}>
            {pageData?.heroSection?.subheading || "PHYSICIAN | RESEARCHER | DRUG ABUSE SPECIALIST"}
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
                src={pageData?.researchTeam?.[0]?.image?.asset?.url || require("../Assets/Images/research-profile-image.jpeg")} 
                alt={pageData?.researchTeam?.[0]?.name || "Dr. Ajibike Salako-Akande"} 
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
                  Room: 2021
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
              {pageData?.researchAreas ? (
                pageData.researchAreas.map((area, index) => (
                  <p key={index} style={{ 
                    marginBottom: '15px',
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease'
                  }}>
                    {area.title}
                  </p>
                ))
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
          
          {/* Research Partners Section */}
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
              RESEARCH PARTNERS
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: isMobile ? '20px' : '30px'
            }}>
              {/* Wendy Lynch */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    width: isMobile ? '120px' : '100px',
                    height: isMobile ? '120px' : '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #72b046',
                    flexShrink: 0
                  }}>
                    <img 
                      src={require("../Assets/Partners/rp1.jpg")} 
                      alt="Wendy Lynch" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#72b046',
                      marginBottom: '5px'
                    }}>
                      Wendy Lynch, Ph.D.
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '10px'
                    }}>
                      Department of Psychiatry, University of Virginia Medical School Animal Division
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5',
                      marginBottom: '10px'
                    }}>
                      Dr. Lynch is Getwele's research partner and Principal Investigator on the joint NIH/NIDA proposal on the <strong>preclinical proof-of-concept data for the use of SMAASH-C as an effective, safe, and selective anti-cocaine seeking intervention.</strong>
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5'
                    }}>
                      She has more than 18 years of experience conducting drug self-administration studies including heroin in male and female animals, and more than 11 years of experience with designing, coordinating, and analyzing molecular data. She also has experience conducting drug self-administration studies in humans as well as collaborating on translational research efforts.
                    </p>
                  </div>
                </div>
              </div>

              {/* David J. Fink */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    width: isMobile ? '120px' : '100px',
                    height: isMobile ? '120px' : '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #72b046',
                    flexShrink: 0
                  }}>
                    <img 
                      src={require("../Assets/Partners/rp2.jpg")} 
                      alt="David J. Fink" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#72b046',
                      marginBottom: '5px'
                    }}>
                      David J. Fink, Ph.D
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '10px'
                    }}>
                      Entrepreneur in Residence
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5'
                    }}>
                      Dave has worked in biotechnology and biomedical product development for more than 40 years. He was a top officer of seven start-ups. In addition to advising life science incubator companies which include Getwele at bwtech@UMBC, he is the Site Miner for UMBC research that support Maryland Innovation Initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* KYDES Pharmaceuticals */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    width: isMobile ? '120px' : '100px',
                    height: isMobile ? '120px' : '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #72b046',
                    flexShrink: 0
                  }}>
                    <img 
                      src={require("../Assets/Partners/rp3.jpeg")} 
                      alt="KYDES Pharmaceuticals" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#72b046',
                      marginBottom: '5px'
                    }}>
                      KYDES Pharmaceuticals LLC
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5'
                    }}>
                      KYDES Pharmaceuticals LLC is a privately owned pharmaceutical company with a vision to design scientifically sound and cost-effective pharmaceutical products based on the state-of-the-art knowledge and technologies. Kydes is the manufacturer of Getwele's SMAASH-Products and its placebo for its research studies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kimberly Brown */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    width: isMobile ? '120px' : '100px',
                    height: isMobile ? '120px' : '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #72b046',
                    flexShrink: 0
                  }}>
                    <img 
                      src={require("../Assets/Partners/rp4.jpg")} 
                      alt="Kimberly Brown" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#72b046',
                      marginBottom: '5px'
                    }}>
                      Kimberly Brown, Ph.D
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '10px'
                    }}>
                      Chief Executive Officer at Amethyst Technologies, LLC and Aeon Technologies, LLC
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5',
                      marginBottom: '10px'
                    }}>
                      Kimberly Brown Ph.D founded Advent Laboratories in 2016 and provides ISO 17025 for Food and Drug Administration, United States Pharmacopeia, and Herbal Pharmacopoeia. The company also provides compliant testing services to support the pharmaceutical, water and sanitation, agriculture, biotechnology, forensic, and cosmetic industries.
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5'
                    }}>
                      <strong>Advent Lab will perform testing for Getwele's SMAASH products.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Helen N. Asemota */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    width: isMobile ? '120px' : '100px',
                    height: isMobile ? '120px' : '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #72b046',
                    flexShrink: 0
                  }}>
                    <img 
                      src={require("../Assets/Partners/rp5.jpg")} 
                      alt="Helen N. Asemota" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#72b046',
                      marginBottom: '5px'
                    }}>
                      Helen N. Asemota, Ph.D.
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '10px'
                    }}>
                      Professor Of Biochemistry and Molecular Biology<br />
                      Director Of Biotechnology Center<br />
                      At Mona, Jamaica
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5',
                      marginBottom: '10px'
                    }}>
                      Prof. Asemota has served UWI for more than two decades and has lectured for over 30 years at the undergraduate, postgraduate and postdoctoral levels collectively in different parts of the world. She also serves as an international Biotechnology Consultant to the United Nations' Food and Agriculture Organization.
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5'
                    }}>
                      Getwele did a 7-year collaboration with her laboratory to identify the biochemical mechanism of action by which SMASSH-C was able to reduce drug seeking behavior in cocaine dependent rats. Getwele also collaborated with the department of physiology to do behavioral study on the effect of SMAASH-C on amphetamine seeking rats. The study showed a reduction in seeking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Angela James - replaces Pete Estsacio */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    width: isMobile ? '120px' : '100px',
                    height: isMobile ? '120px' : '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #72b046',
                    flexShrink: 0
                  }}>
                    <img 
                      src={require("../Assets/Board/angelaJ.jpeg")} 
                      alt="Angela James" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#72b046',
                      marginBottom: '5px'
                    }}>
                      Dr. Angela James, Ph.D.
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '10px'
                    }}>
                      Founder and CEO, Diversity Health NetWoRx, and Consultant for TEQ Enterprises LLC
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5'
                    }}>
                      Dr. James is a distinguished Drug Development expert and Biopharmaceutical executive with deep expertise in Clinical Pharmacology, Translational Medicine, and Clinical Development. With a proven track record of advancing novel therapeutics from early-stage research to regulatory approval, Dr. James has played a pivotal role in bringing lifesaving treatments to patients. She will leverage her technical expertise to develop and execute a Clinical Development strategy and Data Analysis Plan to meet the FDA requirements for clinical use of the nutritional supplements as treatment of cocaine addiction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dr. Fehmida Kapadia */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    width: isMobile ? '120px' : '100px',
                    height: isMobile ? '120px' : '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #72b046',
                    flexShrink: 0
                  }}>
                    <img 
                      src={require("../Assets/Board/fehmidaK.png")} 
                      alt="Dr. Fehmida Kapadia" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#72b046',
                      marginBottom: '5px'
                    }}>
                      Dr. Fehmida Kapadia, Ph.D.
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '10px'
                    }}>
                      Bio-Life Sciences
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#495057',
                      lineHeight: '1.5'
                    }}>
                      Dr. Fehmida has over 20 years of experience in biomedical entrepreneurship, consulting, teaching and research, and has helped nearly 100 entrepreneurial projects successfully progress in their startup journey. She brings valuable expertise in bio-life sciences and will contribute to Getwele's research initiatives and product development strategies.
                    </p>
                  </div>
                </div>
              </div>
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
              {pageData?.publications ? (
                pageData.publications.map((pub, index) => (
                  <a 
                    key={index}
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="bibliography-card">
                      <p style={{ 
                        fontWeight: '500', 
                        marginBottom: '10px',
                        fontSize: isMobile ? '0.95rem' : 'inherit' 
                      }}>
                        {pub.authors && pub.authors.includes("Salako-Akande A") ? (
                          <span dangerouslySetInnerHTML={{ 
                            __html: pub.authors.replace(
                              /Salako-Akande A/g, 
                              '<strong style="color: #72b046">Salako-Akande A</strong>'
                            ) 
                          }} />
                        ) : pub.authors}
                        {pub.title && `. ${pub.title}`}
                        {pub.journal && `. ${pub.journal}`}
                        {pub.publicationDate && `. ${pub.publicationDate}`}
                      </p>
                    </div>
                  </a>
                ))
              ) : (
                <>
                  <a 
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11130171/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="bibliography-card">
                      <p style={{ 
                        fontWeight: '500', 
                        marginBottom: '10px',
                        fontSize: isMobile ? '0.95rem' : 'inherit' 
                      }}>
                        Towers EB, Williams IL, Aristidou ASK, <strong style={{ color: '#72b046' }}>Salako-Akande AO</strong>, Lynch WJ. Impact of SMAASH-C, a novel nutritional supplement, on drug-seeking and toxicity in female and male rats. Transl Psychiatry. 2024 May 27;14(1):214. doi: 10.1038/s41398-024-02940-w. PMID: 38802366; PMCID: PMC11130171.
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.scirp.org/journal/paperinformation?paperid=110405"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="bibliography-card">
                      <p style={{ 
                        fontWeight: '500', 
                        marginBottom: '10px',
                        fontSize: isMobile ? '0.95rem' : 'inherit' 
                      }}>
                        Young L, Webber-Waugh A, Thaxter K. Drug-seeking behavior is significantly attenuated in nutritionally supplemented cocaine withdrawn Sprague-Dawley rats. J Behav Brain Sci. 2021;11(7).
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.scirp.org/journal/paperinformation?paperid=80471"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="bibliography-card">
                      <p style={{ 
                        fontWeight: '500', 
                        marginBottom: '10px',
                        fontSize: isMobile ? '0.95rem' : 'inherit' 
                      }}>
                        Webber-Waugh A, Thaxter Nesbeth K, Anderson-Johnson P, <strong style={{ color: '#72b046' }}>Salako-Akande A</strong>, Asemota H, Young L. Drug seeking behavior of amphetamine addicted Sprague-Dawley rats is eliminated after nutritional supplementation. J Behav Brain Sci. 2017;7(12).
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.igi-global.com/chapter/plasma-cocaine-metabolite-levels-and-liver-cyp450-3a4-isoenzyme-activity-as-indicators-of-cocaine-metabolism-in-rats-treated-with-salako-supplements/217760"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="bibliography-card">
                      <p style={{ 
                        fontWeight: '500', 
                        marginBottom: '10px',
                        fontSize: isMobile ? '0.95rem' : 'inherit' 
                      }}>
                        Gardner NS, Luke KJS, Wheatley AO, <strong style={{ color: '#72b046' }}>et al. (includes Salako-Akande A)</strong>. Plasma cocaine metabolite levels and liver CYP450 3A4 isoenzyme activity as indicators of cocaine metabolism in rats treated with Salako supplements. In: Strategic Applications of Measurement Technologies and Instrumentation. 2019.
                      </p>
                    </div>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Research;