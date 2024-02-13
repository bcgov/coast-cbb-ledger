// Navigation.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your CSS file for styling

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navigation">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/control-ledger">Control Ledger</Link></li>
        <li><Link to="/decked-cruise-billing">Decked Cruise Billing</Link></li>
        <li><Link to="/pipeline-marks">Pipeline Marks</Link></li>
        <li><Link to="/mlc-oil-and-gas">MLC Oil and Gas</Link></li>
        <li><Link to="/timber-mark-report-lookup">Timber Mark Report Lookup</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;

