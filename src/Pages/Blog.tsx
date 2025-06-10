import React, { useState, useEffect } from 'react';
import PageLayout from '../Layouts/PageLayout';
import useMediaQuery from '../hooks/useMediaQuery';

// Define types for blog data
interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  slug?: string;
}

// Sample blog data - you can replace this with data from your CMS
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Restoring Biochemical Balance Can Reduce Drug Seeking Behavior',
    date: 'Mar 16, 2020',
    category: 'Blog',
    slug: 'boost-conversion-rate'
  },
  {
    id: '2',
    title: 'MPT Presents Fighting Opioids Today: Maryland Communities',
    date: 'Mar 10, 2020',
    category: 'Blog',
    slug: 'seo-drive-sales'
  },
  {
    id: '3',
    title: 'Clinton Foundation and The Johns Hopkins Bloomberg School of Public Health present America\'s Opioid Epidemic: From Evidence to Impact',
    date: 'Feb 12, 2020',
    category: 'Blog',
    slug: 'improve-customer-experience'
  }
];

const Blog: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(sampleBlogPosts);
  const [loading, setLoading] = useState(false);

  return (
    <PageLayout>
      <div className="blog-page" style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: isMobile ? '40px 15px' : '60px 20px'
      }}>
        <div className="blog-content" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '700',
            marginBottom: '3rem',
            color: '#2c3e50',
            textAlign: 'center',
            padding: '0 10px'
          }}>
            BLOG
          </h1>
          
          {/* Blog Posts Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '1000px'
          }}>
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer',
                  border: '1px solid #e5e7eb'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                {/* Date and Category */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  <span>{post.date}</span>
                  <span style={{
                    backgroundColor: '#72b046',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {post.category}
                  </span>
                </div>
                
                {/* Title */}
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  lineHeight: '1.5',
                  margin: '0',
                  cursor: 'pointer'
                }}>
                  {post.title}
                </h2>
              </article>
            ))}
          </div>
          
          {/* Empty state if no posts */}
          {blogPosts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              color: '#6b7280'
            }}>
              <p style={{ fontSize: '1.1rem' }}>No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog; 