import React, { useState, useEffect } from 'react';
import PageLayout from "../Layouts/PageLayout";
import useMediaQuery from "../hooks/useMediaQuery";
import { getResearchPage } from "../lib/sanityClient";

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
          
          {/* PRESS RELEASE SECTION */}
          <div
            style={{
              width: '100%',
              backgroundColor: '#f4f8ee',
              padding: isMobile ? '25px 15px' : '40px',
              marginTop: '40px',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
              color: '#2c3e50',
              fontFamily: 'inherit',
            }}
          >
            <h2 style={{
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              fontWeight: 700,
              marginBottom: '18px',
              color: '#72b046',
              textAlign: 'center',
              letterSpacing: '1px'
            }}>
              FOR IMMEDIATE RELEASE
            </h2>
            <h3 style={{
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              fontWeight: 600,
              marginBottom: '10px',
              color: '#2c3e50',
              textAlign: 'center'
            }}>
              Getwele Natureceuticals Pioneers Novel Nutritional Supplements for Addiction Care and Improve Quality of Life
            </h3>
            <p style={{ fontStyle: 'italic', textAlign: 'left', marginBottom: '18px' }}>[Date]</p>
            <p style={{ textAlign: 'left' }}>
              Getwele Natureceuticals is pleased to announce the development of an integrative approach to addiction care through its family of three novel nutritional supplements. These supplements, developed by CEO/Inventor Ajibike Salako-Akande, MD., M.Ed (Rehab)., are designed to reduce drug-seeking behaviors, substance-associated vulnerabilities; and improve overall quality of life (QoL).
            </p>
            <ul style={{ marginLeft: '1.2em', marginBottom: '16px', textAlign: 'left' }}>
              <li><strong>SMAASH-A:</strong> Alcohol</li>
              <li><strong>SMAASH-C:</strong> Cocaine and Amphetamines</li>
              <li><strong>SMAASH-H:</strong> Heroine, Fentanyl and other opioids</li>
            </ul>
            <p style={{ textAlign: 'left' }}>
              Dr. Salako-Akande has been awarded utility patents for these innovations by the U.S. Patent &amp; Trademark Office.
            </p>
            <h4 style={{ marginTop: '18px', color: '#72b046', textAlign: 'left' }}>The Problem of Addiction</h4>
            <p style={{ textAlign: 'left' }}>
              Hallmark of addiction is persistent craving, which drives relapse and hampers recovery. This craving leads to loss of control, compulsive use, and nutritional and immune deficiencies.
            </p>
            <h4 style={{ marginTop: '18px', color: '#72b046', textAlign: 'left' }}>The Causes of Craving</h4>
            <ol style={{ marginLeft: '1.2em', marginBottom: '16px', textAlign: 'left' }}>
              <li>
                <strong>Recall of Previous Pleasure:</strong> The memory of past pleasurable experiences can trigger cravings and relapse, even when an individual is aware of the negative consequences. This cycle of recall, craving, and relapse depletes brain chemistry.
              </li>
              <li>
                <strong>Nutritional Deficiency:</strong> Insufficient nutrient intake during active substance use is a major obstacle to recovery, yet it often receives inadequate attention. Substance abusers commonly experience deficits in essential micro and macro-nutrients. These deficiencies can hinder treatment adherence and increase the likelihood of relapse.
              </li>
              <li>
                <strong>Proliferation of Metabolites:</strong> Drug breakdown products can remain active and induce craving, further contributing to the imbalance in brain chemistry and compulsive use.
              </li>
              <li>
                <strong>Free Radicals and Toxins:</strong> Drug breakdown generates free radicals, toxins, and inadequate antioxidants, which can cause hangovers and unwell feelings.
              </li>
            </ol>
            <p style={{ textAlign: 'left' }}>
              These factors contribute to the perception that drug abuse is an intractable problem and those affected are difficult to treat.
            </p>
            <h4 style={{ marginTop: '18px', color: '#72b046', textAlign: 'left' }}>Our Mission</h4>
            <p style={{ textAlign: 'left' }}>
              Getwele's mission is to support and promote wellness in addicts by:
            </p>
            <ol style={{ marginLeft: '1.2em', marginBottom: '16px', textAlign: 'left' }}>
              <li>
                <strong>Raising Community Awareness:</strong> Educating affected communities that addiction-related perpetual sickness, diminished QoL, and loss of life are preventable.
              </li>
              <li>
                <strong>Promoting Wellness and Optimal Functioning:</strong> Increasing awareness that individuals can achieve wellness, function optimally, and improve their quality of life by achieving:
                <ul>
                  <li>Physical and Mental Wellness</li>
                  <li>Adequate Sleep</li>
                  <li>Emotional Stability and Healthy Personal and Family Relationships</li>
                  <li>Feelings of Safety in Their Environments</li>
                  <li>Gainful Employment and Contributions to Society</li>
                  <li>Zero Criminal Background, Reduced Run-ins with the Law, and Arrests</li>
                </ul>
              </li>
            </ol>
            <h4 style={{ marginTop: '18px', color: '#72b046', textAlign: 'left' }}>Getwele Research Outcomes</h4>
            <p style={{ textAlign: 'left' }}><strong>Cocaine Studies</strong><br />
              Getwele collaborated with University of Virginia (UVA) School of Medicine, Neuroscience Division of Psychiatry and University of West Indies (UWIMONA) School of Medicine, Basic Sciences Department, Kingston, Jamaica. Studies focused on the effect of SMAASH-C on biochemical mechanisms, relapse vulnerability and removal of toxic by-products in cocaine addicted animals. These studies have demonstrated that animals treated with SMAASH-C had enhanced metabolite removal and plasma clearance, reduced relapse incidences and reduced drug-seeking behavior. Open patient trials conducted at Awele Treatment and Rehab Clinic demonstrated that patients treated with SMAASH-C had reduced drug-seeking behavior and enhanced quality of life.
            </p>
            <p style={{ textAlign: 'left' }}><strong>Alcohol Studies</strong><br />
              Open patient trials with patients addicted to alcohol were conducted at Awele Treatment and Rehab Clinic. Patients treated with SMAASH-A demonstrated reduced alcohol-seeking behavior and enhanced quality of life. In collaboration with Louisiana State University School of Medicine / Pennington Biomedical (a branch of NIH), Getwele will be initiating studies in 2025 on "The Impact of SMAASH-A on the Quality of Life of Alcohol Abusers" who are in partial abstinence (1-3 months) and currently employed.
            </p>
            <p style={{ textAlign: 'left' }}><strong>Fentanyl Studies</strong><br />
              In collaboration with University of Virginia (UVA) School of Medicine, Neuroscience Division of Psychiatry, Getwele conducted pilot studies in animals addicted to fentanyl. Animals treated with SMAASH-H demonstrated reduced drug-seeking behavior and reduced relapse incidences. Open patient trials at Awele Treatment and Rehab Clinic demonstrated that patients treated with SMAASH-H had reduced drug-seeking behavior and enhanced quality of life.
            </p>
            <p style={{ textAlign: 'left' }}>
              Getwele research has been presented at and published in peer-reviewed conferences and journals.
            </p>
            <h4 style={{ marginTop: '18px', color: '#72b046', textAlign: 'left' }}>Partnerships</h4>
            <p style={{ textAlign: 'left' }}>
              Getwele is actively seeking partnerships with clinics that work with alcohol, cocaine and opioid addicts to implement the wellness protocols developed by Dr. Salako-Akande. These protocols along with the accompanying nutritional supplements can reduce drug-seeking behavior and relapse in patients.
            </p>
            <h4 style={{ marginTop: '18px', color: '#72b046', textAlign: 'left' }}>About Getwele Natureceuticals</h4>
            <p style={{ textAlign: 'left' }}>
              Getwele Natureceuticals is a pioneering company dedicated to developing innovative, science-based nutritional supplements to address addiction and improve the quality of life for individuals and communities. Through rigorous research and strategic partnerships, Getwele is committed to providing effective solutions and fostering hope for those affected by substance abuse.
            </p>
            <p style={{ textAlign: 'left' }}>
              <strong>Contact:</strong><br />
              Ajibike Salako-Akande<br />
              M.D., M. Ed., R.C.<br />
              getwele@gmail.com<br />
              (443)-240-7051<br />
              <a href="https://linktr.ee/getwele" target="_blank" rel="noopener noreferrer" style={{ color: '#72b046', textDecoration: 'underline' }}>
                Links to Research
              </a>
            </p>
          </div>
          
          {/* END PRESS RELEASE SECTION */}
          
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
                  <div 
                    key={index}
                    style={{
                      padding: isMobile ? '15px' : '20px',
                      borderLeft: '4px solid #72b046',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '0 8px 8px 0'
                    }}
                  >
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
                ))
              ) : (
                <>
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