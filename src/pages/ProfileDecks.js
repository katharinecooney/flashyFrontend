import React, { Component } from 'react'
import profile from '../lib/profile-service';
import {Link} from 'react-router-dom';


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
  }

  render() {
    const {groups, loading} = this.state;
    return (
      <div>
        {groups.map((groupInformation => {
          const group = groupInformation.group
          return(
            <Link key={group._id} to={{
              pathname: '/profile/me/decks/'+group._id, 
              state: {
                groups: groupInformation}}}>
              {`User decks from group ${group.subject}`}
            </Link>
            )
        }))}
      </div>
    )
  }
}


export default ProfileDecks;
