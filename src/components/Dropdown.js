// Dropdown.js

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Dropdown.css';

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <form className="bc-gov-form" action="">
      <label className="bc-gov-dropdown-label" htmlFor="dropdown">{label}</label>
      <div className="bc-gov-dropdown-wrapper">
        <i className="fas fa-chevron-down"></i>
        <select
          className="bc-gov-dropdown"
          name="options"
          id="dropdown"
          value={value}
          onChange={onChange}
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
