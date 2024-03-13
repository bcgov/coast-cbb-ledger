import React from 'react';
import '../styles/Navbar.css'
import '@bcgov/bc-sans/css/BCSans.css';

const Navbar = () => {
  return (
    <nav className="navigation-main" id="navbar">
      <div className="container">
        <ul>
          <li><a href="../pages/DashboardPage.js">Dashboard</a></li>
          <li><a href="../pages/ConrtolLedgerPage.js">Control Ledger</a></li>
          <li><a href="../pages/DeckedCruiseBillingPage.js">Decked Cruise Billing</a></li>
          <li><a href="../pages/PipelineMarksPage.js">Pipeline Marks</a></li>
          <li><a href="../pages/MLCOilandGasPage.js">MLC Oil and Gas</a></li>
          <li><a href="../pages/TimberMarkReportLookupPage.js">Timber Mark Report Lookup</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
