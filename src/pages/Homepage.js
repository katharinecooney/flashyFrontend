import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';

class Homepage extends Component {
  render () {
    return (

      <div className="homepage">
        <div className="homepage-content">
          <h1>Flashy</h1>
          <p>Who says studying can't be social? Login or signup to start collaborating with classmates!</p>
          <div className="homepage-button-container">
            <Link className="homepage-button" to="/login"><button>LOGIN</button></Link>
            <Link className="homepage-button" to="/signup"><button>SIGNUP</button></Link>
          </div>
        </div>

      </div>

    );
  }
}

export default Homepage;
