import React, { Component } from 'react';
import profile from '../lib/profile-service';
import {Link} from 'react-router-dom';

class ProfileGroups extends Component {

  state = {
    groups: [],
    loading: true,
  }

  componentDidMount() {
    profile.listGroups()
    .then(data => {
      this.setState({
      groups: data.groups,
      loading: false
    })
  })
  }

  render () {
    const {loading, groups} = this.state
    return (
      <div>
      {loading ? <p>Loading...</p> : (
        groups.map(({group}) => {
          return(
            <div key={group._id}>
              <p>{group.school}</p>
              <p>{group.subject}</p>
            </div>)})
      )}
      <Link to="/group/add-group">Create Group</Link>
      <Link to="/group/join-group">Join Group</Link>
      </div>
    );
  }
}

export default ProfileGroups
;