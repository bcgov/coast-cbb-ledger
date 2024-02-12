// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <img src="/public/assets/images/BCID_H_rgb_rev.svg" alt="British Columbia Official Logo" className="logo" />
      <h1>Coast Cruise Based Billing Ledger</h1>
    </header>
  );
};

export default Header;
