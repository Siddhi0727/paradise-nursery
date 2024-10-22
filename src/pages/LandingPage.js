import React from 'react';
import { Link } from 'react-router-dom';
 // Ensure the CSS file is linked correctly

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay"> {/* Optional: For a dimmed background */}
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your one-stop shop for a variety of beautiful houseplants. 
          We offer a wide selection of greenery to liven up your home!
        </p>
        <Link to="/products">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
