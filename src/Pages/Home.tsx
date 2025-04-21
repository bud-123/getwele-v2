import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layouts/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <div>
        <div className="hero-section" style={{ 
          width: '100%', 
          overflow: 'hidden', 
          background: 'linear-gradient(to right, #0f4935, #72b046)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '675px',
          padding: '0 50px 0 100px'
        }}>
          <div className="hero-content" style={{
            color: 'white',
            maxWidth: '550px',
            textAlign: 'left',
            marginLeft: '225px'
          }}>
            <h1 style={{
              fontSize: '5.5rem',
              margin: '0',
              lineHeight: '1.1'
            }}>
              Smash<br />
              Your<br />
              Cravings<br />
              Naturally
            </h1>
            <h3 style={{
              fontWeight: 'normal',
              fontSize: '2rem',
              margin: '20px 0'
            }}>
              Less desire.<br />
              Less seeking.
            </h3>
            <Link to="/products" style={{
              display: 'inline-block',
              backgroundColor: '#77C4BD',
              color: 'white',
              textDecoration: 'none',
              padding: '15px 30px',
              borderRadius: '30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginTop: '20px'

            }}>
              START YOUR JOURNEY &nbsp;<span className="material-icons" style={{ verticalAlign: 'middle', fontSize: '1.4rem' }}>chevron_right</span>
            </Link>
          </div>
          <div className="hero-image" style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
            <img 
              src={require("../Assets/Images/smaashc_hero.png")} 
              alt="SmaashC Product"
              style={{
                height: 'auto',
                maxHeight: '100%',
                maxWidth: '100%',
                marginRight: '225px'
              }}
            />
          </div>
        </div>

        <h1>Home</h1>
        <Link to="/about">About</Link>
      </div>
    </PageLayout>
  );
};

export default Home;