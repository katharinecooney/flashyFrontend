import React, { Component } from 'react'
import profile from '../lib/profile-service';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../stylesheets/profileDecks.css';


class ProfileDecks extends Component {
  state = {
    groups: [],
    loading: true
  }

  componentDidMount(){
    const groups = [];
    profile.listDecks()
    .then(data => {
      data.forEach(group => {
        groups.push(group);
      })
      console.log(groups)
      this.setState({
        groups
      })
    }
    )
    console.log('ProfileDecks component did mount groups', groups);
    console.log(groups.length)
  }

  render() {
    const {groups} = this.state;
    console.log(this.state);
    return (
      <div className="profile-decks">
        <div className="profile-decks-banner">
          <h1>View Your Decks</h1>
        </div>
        {
          !groups.length ? <div className="no-decks-message">You have no decks yet!</div> : (
            <div className="decks-container">
        {groups.map((groupInformation => {
          const group = groupInformation.group
          return(
            <div className="single-deck">
              <div className="deck-content">
              <Link key={group._id} to={{
                pathname: '/profile/me/decks/'+group._id, 
                state: {
                  groups: groupInformation}}}>
                {`${group.subject} Notes`}
              </Link>
              </div>
              
            </div>
            
            )
        }))}
        </div>
          )
        }
        
        <Navbar />
      </div>
    )
  }
}


export default ProfileDecks;
