import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import '../stylesheets/navbar.css';

class Navbar extends Component {
  render () {
    const { logout } = this.props;
    return (
      <div className="navbar">
        <Link to="/profile/me"><img src={process.env.PUBLIC_URL + '/images/user.png'} alt="profile-logo"/></Link>
        <Link to="/profile/me/decks"><img src={process.env.PUBLIC_URL + '/images/note.png'} alt="notes-logo"/></Link>
        <Link to="/profile/me/groups"><img src={process.env.PUBLIC_URL + '/images/team.png'} alt="groups-logo"/></Link>
        <img onClick={logout} src={process.env.PUBLIC_URL + '/images/logout.png'} alt="logout-logo"/>
      </div>
    );
  }
}

export default withAuth(Navbar);
