// HomePage.js
import React from 'react';
// import Home from '../components/Home'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import '../styles/components/Home.css'
import '../styles/pages/HomePage.css'
import '@bcgov/bc-sans/css/BCSans.css';
import forestPicture from '../assets/images/mossyforest.jpg'

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='carousel'>
        {/* Carousel content */}
      </div>
      <div className='image-container'>
        <img src={forestPicture} alt='A view of a rain forest' className='forest-image' />
        <div className='text-container'>
          <h1>Coast Cruise Based Billing Ledger</h1>
          <p>This application is designed to support the cruise based billing ledger functions for the Coast Area.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;