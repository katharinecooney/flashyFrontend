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

  handleSubmit = (event) => {
    event.preventDefault();

    group.joinGroup(this.state)
    .then((newGroup)=> {
      let id = this.state.passcode;
      this.props.history.push('/group/' + id)
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className="join-group-page">
        <div className="join-group-banner">
          <h1>Join a Group!</h1>
        </div>
        <div className="join-group-container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="passcode">Enter the passcode</label>
            <input style={this.styles} type="text" name="passcode" value={this.state.passcode} onChange={this.handleChange}/>
            <button>Submit</button>
          </form>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default JoinGroup;
