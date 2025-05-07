import React, { useState, useEffect } from 'react';
import PageLayout from '../Layouts/PageLayout';
import useMediaQuery from '../hooks/useMediaQuery';

const PressRelease: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <PageLayout>
      <div className="press-release-page" style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: isMobile ? '40px 15px' : '60px 20px'
      }}>
        <div className="press-release-content" style={{
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
            PRESS RELEASE
          </h1>
          
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
            <p style={{ fontStyle: 'italic', textAlign: 'left', marginBottom: '18px' }}>May 2025</p>
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
        </div>
      </div>
    </PageLayout>
  );
};

export default PressRelease;
