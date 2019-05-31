import React, { Component } from 'react';
import profile from '../lib/profile-service';
import {Link} from 'react-router-dom';
import '../stylesheets/profileGroups.css';
import Navbar from '../components/Navbar';


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
    return (
      <div className="profile-groups-page">
        <div className="profile-groups-banner">
          <h1>View Your Groups</h1>
        </div>
    {
    !this.state.groups.length ? 
    <div>
      <div className="no-groups-message">You are not in any groups!</div>
      <div className="profile-groups-button-container">
        <Link to="/group/add-group">Create Group</Link>
        <Link to="/group/join-group">Join Group</Link>
      </div>
    </div> 
    : 
    (<div className="profile-groups-container">
      {loading ? <p>Loading...</p> : (
        groups.map(({group}) => {
          return(
            <div className="profile-group" key={group._id}>
              <div >
                <Link to={'/group/' + group._id}>
                  <p>{group.school}</p>
                  <p>{group.subject}</p>
                </Link>
              </div>
            </div>
            )})
          )}
        <div className="profile-groups-button-container">
          <Link to="/group/add-group">Create Group</Link>
          <Link to="/group/join-group">Join Group</Link>
        </div>
        </div>
        )
      } 
        <Navbar />
      </div>
    );
  }
}

export default ProfileGroups;