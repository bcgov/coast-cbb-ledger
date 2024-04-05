// src/pages/DashboardPage.js

import React from 'react';
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer'
import Card from '../components/Card.js';
import '../styles/pages/DashboardPage.css'

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="dashboard">
        {/* *username function and time of day, eg Good morning? */}
        <h1>Welcome to your dashboard, (username)!</h1>
      </div>
      <div className='dashboard-cards'>
        <Card
          title="Control Ledger"
          description="Explore the main control ledger for CBB entries"
          link="/control-ledger"
          className="card1"
          imageUrl="bcforestry.jpg"
        />
        <Card
          title="Decked Cruise Based Billing"
          description="Decked cruise based billing entries and management"
          link="/decked-cruise-billing"
          className="card2"
          imageUrl="deckedtimber.jpg"
        />
        <Card
          title="MLC Oil and Gas"
          description="MLC Oil and Gas entries and management"
          link="/mlc-oil-and-gas"
          className="card3"
          imageUrl="forest_lake.jpg"
        />
        <Card
          title="Pipeline Marks"
          description="Pipeline marks entries and management"
          link="/pipeline-marks"
          className="card4"
          imageUrl="ogforesttopview.jpg"
        />
        <Card
          title="Timber Mark Report Lookup"
          description="Look up individual timber mark"
          link="/timber-mark-report-lookup"
          className="card5"
          imageUrl="babytree.jpg"
        />
        {/* Add more cards as needed */}
      </div>
      <div className='dashboard-table-preview'> 

      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
