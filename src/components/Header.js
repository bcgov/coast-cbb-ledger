import React from 'react';
import logo from '../assets/logo-banner.png'
import '../styles/components/Header.css'
import '@bcgov/bc-sans/css/BCSans.css';

const Header = () => {
  return (
    <header>
      <div className="banner">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="https://gov.bc.ca" alt="Go to the Government of British Columbia website">
          <img src={logo} alt="Go to the Government of British Columbia website" />
        </a>
        <h1>Coast Cruise Based Billing Ledger</h1>
      </div>
      <div className="other">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="nav-btn">
          <i className="fas fa-bars" id="menu"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
