// src/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
      <div className="landing-page">
        <header>
          <img src="/path/to/your/image.jpg" alt="Logo" className="logo" />
          <h1>Coast Cruise Based Billing Ledger</h1>
        </header>
  
        <div className="login-options">
          <h2>Login Options</h2>
          <div className="login-option">
            <h2>Please login here:</h2>
            {/* Add Pathfinder SSO login options here */}
            <p>IDIR: </p>
            <p>AZURE IDIR:</p>
          </div>
        </div>
      </div>
    );
  };
export default LandingPage;
