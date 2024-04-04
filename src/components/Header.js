// components/Header.js

import React, { useContext } from 'react';
import logo from '../assets/logo-banner.png';
import { AuthenticationContext } from '../App';
import { logout } from '../services/keycloak'
import '../styles/components/Header.css'

const Header = () => {
  const keycloak = useContext(AuthenticationContext);

  const nameParts = keycloak.tokenParsed.name.split(', '); 
  const lastName = nameParts[0]; 
  const firstNameMiddleInitial = nameParts[1].split(' '); 
  const firstName = firstNameMiddleInitial[0]; 

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
          {keycloak && keycloak.authenticated && (
            <>
            <p className='welcome-msg'>Welcome, {firstName} {lastName}!</p>
              <button className='BC-Gov-SecondaryButton-Dark' onClick={logout}>
                Logout
              </button>
            </>
          )}
        <button className="nav-btn">
          <i className="fas fa-bars" id="menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
