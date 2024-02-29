// Index.js

import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <h1>Hello, pathfinder friend</h1>
      <Link to="/home">Proceed to login...</Link>
    </>
  );
};

export default Index;

