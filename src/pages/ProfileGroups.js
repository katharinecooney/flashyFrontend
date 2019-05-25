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
    const {loading, groups} = this.state;
    console.log(groups);
    return (
      <div>
      {loading ? <p>Loading...</p> : (
        groups.map(({group}) => {
          return(
            <div key={group._id}>
            <Link to={'/group/' + group._id}>
              <p>{group.school}</p>
              <p>{group.subject}</p>
            </Link>

              
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