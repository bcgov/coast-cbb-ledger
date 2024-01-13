// src/components/Navigation.js
// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
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
