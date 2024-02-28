// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
