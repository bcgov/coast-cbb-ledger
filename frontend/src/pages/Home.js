import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  const handleLoginClick = () => {
    window.location.href = '/';
  };
  return (
    <div>
      <h1>Welcome to the CBB Ledger App</h1>
      <h2>This application is built to support the Coast Area Pricing team for the BC Ministry of Forests.</h2>
      <p>Please login with you IDIR to continue.</p>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Home;
