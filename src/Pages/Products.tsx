import React from 'react';
import PageLayout from '../Layouts/PageLayout';



const Products: React.FC = () => {
  return (
    <PageLayout>
      <div className="container">
        <h1 className="products-title">Our Products</h1>
        
        <div className="product-cards">
          {/* SMAASH-C Product Card */}
          <div className="product-card" style={{ backgroundColor: '#4CAF50', position: 'relative' }}>
            {/* Pending Badge */}
            <span
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#000',
                color: '#fff',
                borderRadius: '999px',
                padding: '4px 16px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                zIndex: 2,
              }}
            >
              Pending
            </span>
            <div className="product-content">
              <div className="product-info">
                <h2 className="product-name">SMAASH-C</h2>
                <p className="product-description">
                  SMAASH-C is a proprietary blend of nutritional supplements, which will be provided under qualified supervision. These combined bio-available balanced supplements are source of nutrients that are deficient in Substance Use Disorder (SUD) Individuals of cocaine, nicotine and marijuana.
                </p>
                <p className="product-benefit">
                  Helps the brain replenish Dopamine, Serotonin, Nor-Epinephrine and Epinephrine.
                </p>
                <button className="learn-more-btn">Learn More</button>
              </div>
              <div className="product-image-container">
                <img 
                  src={require("../Assets/Products/smaash-c-image.png")} 
                  alt="SMAASH-C Product" 
                  className="product-image"
                />
              </div>
            </div>
          </div>
          
          {/* SMAASH-A Product Card */}
          <div className="product-card" style={{ backgroundColor: '#FF6B6B', position: 'relative' }}>
            {/* Pending Badge */}
            <span
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#000',
                color: '#fff',
                borderRadius: '999px',
                padding: '4px 16px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                zIndex: 2,
              }}
            >
              Pending
            </span>
            <div className="product-content">
              <div className="product-info">
                <h2 className="product-name">SMAASH-A</h2>
                <p className="product-description">
                  SMAASH-A Is a proprietary blend of nutritional supplement which will be provided under qualified supervision. These combined bio-available balanced supplements are source of nutrients that the brain needs to replenish its chemicals which may have been disrupted by alcohol abuse.
                </p>
                <p className="product-benefit">
                  Specific Benefit: Help the brain replenish Glutamic Acid, the neurotransmitter reported to be deficient in alcoholics
                </p>
                <button className="learn-more-btn">Learn More</button>
              </div>
              <div className="product-image-container">
                <img 
                  src={require("../Assets/Products/smaash-a-image.png")} 
                  alt="SMAASH-A Product" 
                  className="product-image"
                />
              </div>
            </div>
          </div>
          
          {/* SMAASH-H Product Card */}
          <div className="product-card" style={{ backgroundColor: '#3B82F6', position: 'relative' }}>
            {/* Pending Badge */}
            <span
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#000',
                color: '#fff',
                borderRadius: '999px',
                padding: '4px 16px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                zIndex: 2,
              }}
            >
              Pending
            </span>
            <div className="product-content">
              <div className="product-info">
                <h2 className="product-name">SMAASH-H</h2>
                <p className="product-description">
                  SMAASH-H is a propriety blend of nutritional supplements which will be provided under qualified supervision.
                </p>
                <p className="product-benefit">
                  Specific Benefit: Help the body to synthesize and block the break down of endorphines and enkephalines which are natural pain killers.
                </p>
                <button className="learn-more-btn">Learn More</button>
              </div>
              <div className="product-image-container">
                <img 
                  src={require("../Assets/Products/Smaash-H-image.png")} 
                  alt="SMAASH-H Product" 
                  className="product-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;

