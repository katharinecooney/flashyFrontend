import React, { Component } from 'react';
import group from '../lib/group-service';
import Navbar from '../components/Navbar';
import '../stylesheets/joinGroup.css';

class JoinGroup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      passcode: ''
    };
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let {passcode} = event.target;
  //   console.log(event.target)

  //   group.joinGroup(this.state.passcode)
  //   .then((newGroup)=> {
  //     console.log(newGroup);
  //     this.setState({
  //       passcode: ''
  //     })
  //   })
  // }

  // handleChange = (event) => {
  //   event.preventDefault();
  //   let {name, value} = event.target
  //   this.setState({
  //     [name]: value
  //   }, () => {console.log(this.state)}
  //   )
  // }

  render () {
    return (
      <div className="join-group-page">
        <div className="join-group-banner">
          <h1>Join a Group!</h1>
        </div>
        <div className="join-group-container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="passcode">Enter the passcode</label>
            <input style={this.styles} type="text" name="passcode" value={this.state.passcode} onChange={(event) => this.handleChange(event)}/>
            <button>Submit</button>
          </form>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default JoinGroup;
