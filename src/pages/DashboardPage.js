// src/pages/DashboardPage.js

import React from 'react';
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js';
import '../styles/DashboardPage.css'

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="dashboard">
        {/* *username function and time of day, eg Good morning? */}
        <h1>Welcome (username) to the dashboard!</h1>
      </div>
      <div className='dashboard-card'>

      </div>
      <div className='dashboard-table-preview'> 

      </div>
    </div>
  );
};

export default DashboardPage;
