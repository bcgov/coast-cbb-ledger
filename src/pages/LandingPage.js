// src/components/LandingPage.js
import React from 'react';
import Header from '../components/Header';
import '../styles/LandingPage.css'; // Correct path

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
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
