// styles/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a></li>
          <li><a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a></li>
          <li><a href="https://www2.gov.bc.ca/gov/content/home/accessible-government">Accessibility</a></li>
          <li><a href="https://www2.gov.bc.ca/gov/content/home/copyright">Copyright</a></li>
          <li><Link to="/contactform">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

