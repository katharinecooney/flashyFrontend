import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Homepage.css';

class Homepage extends Component {
  render () {
    return (

      <div className="homepage">
        <h1>Flashy</h1>
        <Link className="homepage-button" to="/login">LOGIN</Link>
        <Link className="homepage-button" to="/signup">SIGNUP</Link>
      </div>

    );
  }
}

export default Homepage;
