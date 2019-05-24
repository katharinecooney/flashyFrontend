import React, {Component} from 'react';
import auth from '../lib/auth-service';
import group from '../lib/group-service';
import {withAuth} from '../lib/AuthProvider';
import {Link} from 'react-router-dom';

class Profile extends Component {
  state = {

  }

  componentDidMount(){

    
    group.viewGroup("5ce6b65b381f624f3f44d286")
      .then((data) => console.log(data))
  };

  render() {
    console.log(this.props);
    return (
      <div>
      <h1>Welcome, {this.props.user.username}</h1>
      <Link to="/profile/me/decks"><p>YOUR DECKS</p></Link>
      <Link to="/profile/me/groups"><p>YOUR GROUPS</p></Link>
      </div>
    )
  }
}

export default withAuth(Profile);