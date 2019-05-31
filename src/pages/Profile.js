import React, { Component } from 'react';
// import auth from '../lib/auth-service';
// import group from '../lib/group-service';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';
import '../stylesheets/profile.css';
import Navbar from '../components/Navbar';

class Profile extends Component {
  render () {
    return (
      <div className='profile'>
        <div className='profile-banner'>
          <h1>Welcome, {this.props.user.username}</h1>
        </div>
        <div className="profile-button-container">
          <Link to="/profile/me/decks"><button className="profile-button">Saved Flashcards</button></Link>
          <Link to="/profile/me/groups"><button className="profile-button">Groups</button></Link>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Profile);
