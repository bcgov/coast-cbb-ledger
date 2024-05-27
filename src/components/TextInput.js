// src/components/TextInput.js

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/TextInput.css'

const TextInput = ({ label, value, onChange, placeholder, className }) => {
  return (
    <div className="text_label">
      <label>{label}</label>
      <input
        className={`text_input ${className}`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string // Additional class name for custom styling
};

export default TextInput;


