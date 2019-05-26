import React, { Component } from 'react';
import axios from 'axios';
import group from '../lib/group-service';
import Navbar from '../components/Navbar';
import '../stylesheets/createGroup.css';

class CreateGroup extends Component {
  state = {
    school: '',
    subject: '',
    passcode: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let {school, subject, passcode } = event.target;

    group.createGroup(this.state)
    .then((newGroup)=> {
      console.log(newGroup);
      this.setState({
        school: '',
        subject: '',
        passcode: ''
      })
    })    
  }

  handleChange = (event) => {
    event.preventDefault();
    let {name, value} = event.target
    this.setState({
      [name]: value
    });
  }
  
  render () {
    return (
      <div>
        <div className='create-group-banner'>
          <h1>Create Group</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input name="school" type="text" placeholder="school" value={this.state.school} onChange={(event) => this.handleChange(event)} />

          <input name="subject" type="text" value={this.state.subject} placeholder="subject" onChange={(event) => this.handleChange(event)} />

          <input name="passcode" type="text" value={this.state.passcode} placeholder="passcode" onChange={(event) => this.handleChange(event)} />
          <button type="submit">Submit</button>
        </form>
        <Navbar />
      </div>
    );
  }
}

export default CreateGroup;
