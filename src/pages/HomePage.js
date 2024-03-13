// HomePage.js
import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/HomePage.css'
import '@bcgov/bc-sans/css/BCSans.css';
import forestPicture from '../assets/images/shayd-johnson-3SYi9YfTXdU-unsplash.jpg'

const HomePage = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className='content'>
      <div className='image-container'>
        <img src={forestPicture} alt='Looking down at tall trees' />
      </div>
      <h2>This application is built to support the Coast Area Pricing team for cruise-based billing.</h2>
      <p>Please login using your IDIR</p>
      <Home />
    </div>
    </>
  );
};

export default HomePage;