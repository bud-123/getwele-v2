import React, { useState, useEffect } from 'react';
import PageLayout from '../Layouts/PageLayout';
import { getProductPage } from '../lib/sanityClient';

// Define types for Sanity data
interface SanityImage {
  asset?: {
    _id?: string;
    url?: string;
  }
}

interface Product {
  title: string;
  description: string;
  benefit: string;
  buttonText: string;
  buttonLink?: string;
  color: string;
  image?: SanityImage;
}

interface ProductPageData {
  pageTitle?: string;
  products?: Product[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

const Products: React.FC = () => {
  // State for storing the fetched data
  const [pageData, setPageData] = useState<ProductPageData | null>(null);
  const [loading, setLoading] = useState(true);

  // Default products data
  const defaultProducts: Product[] = [
    {
      title: "SMAASH-C",
      description: "SMAASH-C is a proprietary blend of nutritional supplements, which will be provided under qualified supervision. These combined bio-available balanced supplements are source of nutrients that are deficient in Substance Use Disorder (SUD) Individuals of cocaine, nicotine and marijuana.",
      benefit: "Helps the brain replenish Dopamine, Serotonin, Nor-Epinephrine and Epinephrine.",
      buttonText: "Learn More",
      color: "#4CAF50"
    },
    {
      title: "SMAASH-A",
      description: "SMAASH-A Is a proprietary blend of nutritional supplement which will be provided under qualified supervision. These combined bio-available balanced supplements are source of nutrients that the brain needs to replenish its chemicals which may have been disrupted by alcohol abuse.",
      benefit: "Specific Benefit: Help the brain replenish Glutamic Acid, the neurotransmitter reported to be deficient in alcoholics",
      buttonText: "Learn More",
      color: "#FF6B6B"
    },
    {
      title: "SMAASH-H",
      description: "SMAASH-H is a propriety blend of nutritional supplements which will be provided under qualified supervision.",
      benefit: "Specific Benefit: Help the body to synthesize and block the break down of endorphines and enkephalines which are natural pain killers.",
      buttonText: "Learn More",
      color: "#3B82F6"
    }
  ];

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductPage();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching product page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Use pageData if available, otherwise fall back to defaultProducts
  const products = pageData?.products || defaultProducts;

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
      <div className="container">
        <h1 className="products-title">{pageData?.pageTitle || "Our Products"}</h1>
        
        <div className="product-cards">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card" 
              style={{ backgroundColor: product.color, position: 'relative' }}
            >
              <div className="product-content">
                <div className="product-info">
                  <h2 className="product-name">{product.title}</h2>
                  <p className="product-description">{product.description}</p>
                  <p className="product-benefit">{product.benefit}</p>
                  <button className="learn-more-btn">{product.buttonText}</button>
                </div>
                <div className="product-image-container">
                  <img 
                    src={product.image?.asset?.url || require(`../Assets/Products/${product.title.toLowerCase().replace(/\s+/g, '-')}-image.png`)} 
                    alt={`${product.title} Product`} 
                    className="product-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;

