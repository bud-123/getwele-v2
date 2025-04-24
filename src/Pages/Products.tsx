import React from 'react';
import PageLayout from '../Layouts/PageLayout';



const Products: React.FC = () => {
  return (
    <PageLayout>
      <div className="container">
        <h1 className="products-title">Our Products</h1>
        
        <div className="product-cards">
          {/* SMAASH-C Product Card */}
          <div className="product-card" style={{ backgroundColor: '#4CAF50' }}>
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
          <div className="product-card" style={{ backgroundColor: '#FF6B6B' }}>
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
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;

