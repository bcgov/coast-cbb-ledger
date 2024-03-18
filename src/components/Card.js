// components/Card.js

import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/components/Card.css'; 
import arrowIcon from '../assets/icons/chevron-right-solid.svg'; // Import the arrow icon

const Card = ({ title, description, link, className, imageUrl }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-image">
        <img src={require(`../assets/images/${imageUrl}`)} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link} className="card-link">
          <img src={arrowIcon} alt="Go to page" className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
