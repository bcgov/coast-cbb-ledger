import React from 'react';
import '../styles/Navbar.css'
import '@bcgov/bc-sans/css/BCSans.css';

const Navbar = () => {
  return (
    <nav className="navigation-main" id="navbar">
      <div className="container">
        <ul>
          <li><a href=".">Dashboard</a></li>
          <li><a href=".">Control Ledger</a></li>
          <li><a href=".">Decked Cruise Billing</a></li>
          <li><a href=".">Pipeline Marks</a></li>
          <li><a href=".">MLC Oil and Gas</a></li>
          <li><a href=".">Timber Mark Report Lookup</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
