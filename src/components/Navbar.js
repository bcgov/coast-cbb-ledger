import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '@bcgov/bc-sans/css/BCSans.css';

const Navbar = () => {
  return (
    <nav className="navigation-main" id="navbar">
      <div className="container">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/control-ledger">Control Ledger</Link></li>
          <li><Link to="/decked-cruise-billing">Decked Cruise Billing</Link></li>
          <li><Link to="/pipeline-marks">Pipeline Marks</Link></li>
          <li><Link to="/mlc-oil-and-gas">MLC Oil and Gas</Link></li>
          <li><Link to="/timber-mark-report-lookup">Timber Mark Report Lookup</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

