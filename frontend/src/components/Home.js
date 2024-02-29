// Home.js

import React from 'react';
import "./node_modules/@bcgov/css/variables.css";
import '../styles/Home.scss';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the CBB Ledger App</h1>
      <h2>This application is built to support the Coast Area Pricing team for the BC Ministry of Forests.</h2>
      <p>Please login with you IDIR to continue.</p>
      <button
        style={{
          backgroundColor: "var(--surface-primary-default)",
          color: "var(--surface-primary-hover)",
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
