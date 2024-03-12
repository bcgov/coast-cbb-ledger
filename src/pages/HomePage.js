// HomePage.js
import React from 'react';
import Home from '../components/Home';
import HeaderComponent from '../components/Header';

const HomePage = () => {
  return (
    <>
    <HeaderComponent />
    <div>
      <h1>Coast Area Cruise Based Billing Ledger Application</h1>
      <h2>This application is built to support the Coast Area Pricing team for cruise-based billing.</h2>
      <p>Please login using your IDIR</p>
      <Home />
    </div>
    </>
  );
};

export default HomePage;