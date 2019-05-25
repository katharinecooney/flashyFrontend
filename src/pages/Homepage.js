import React from 'react';
import { Link } from 'react-router-dom';

function Homepage () {
  return (
    <div>
      <h1>Flashy</h1>
      <Link to="/login">LOGIN</Link>
      <Link to="/signup">SIGNUP</Link>
    </div>
  );
}

export default Homepage;
