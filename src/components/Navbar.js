import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import '../stylesheets/navbar.css';

class Navbar extends Component {
  render () {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="navbar">
        <Link to="/profile/me"><img src="./src/images/user.png" alt="profile-logo"/></Link>
        <Link to="/profile/me/decks"><img src="../images/note.png" alt="notes-logo"/></Link>
        <Link to="/profile/me/groups"><img src="../images/team.png" alt="groups-logo"/></Link>
        <img onClick={logout} src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn" alt=""/>
      </div>
    );
  }
}

export default withAuth(Navbar);
