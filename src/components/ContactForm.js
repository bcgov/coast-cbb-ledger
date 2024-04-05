// components/ContactForm.js

import React, { useState } from 'react';
import '../styles/components/ContactForm.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MOFLogo from '../assets/BC_FOR_H_RGB_pos.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your backend to handle the email sending logic
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="contact-info-card">
        <img src={MOFLogo} alt="BC Ministry of Forests Logo" className="logo-image" />
        <div className="contact-info">
            <h2>Coast Timber Pricing- Regional Office</h2>
            <p>103-2100 Labieux Road</p>
            <p>Nanaimo, BC | V9T 6E9</p>
            <p>Phone: 250 739-8258</p>
        </div>
      </div>
      <div className="contact-page">
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
