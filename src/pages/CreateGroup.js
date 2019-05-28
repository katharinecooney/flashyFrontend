import React, { Component } from 'react';
import group from '../lib/group-service';
import Navbar from '../components/Navbar';
import '../stylesheets/createGroup.css';

class CreateGroup extends Component {
  state = {
    school: '',
    subject: '',
    infoMessage: '',
    idMessage: '',
    hasCreatedGroup: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // let {school, subject, passcode } = event.target;

    group.createGroup(this.state)
    .then((newGroup)=> {
      console.log(newGroup);
      this.setState({
        school: '',
        subject: '',
        infoMessage: `A study group for ${newGroup.subject} has been created!`,
        idMessage: `The passcode is ${newGroup._id}.`,
        hasCreatedGroup: true
      }, 
      this.props.history.push({
        pathname: '/group/add-group-success',
        state: { nameOfClass: newGroup.subject, passcode: newGroup._id }
      })
      )
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
      <div className="create-group-page">
        <div className='create-group-banner'>
          <h1>Create Group</h1>
        </div>
        <div className="create-group-container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="school">School</label>
            <input name="school" type="text" value={this.state.school} onChange={(event) => this.handleChange(event)} />
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text" value={this.state.subject} onChange={(event) => this.handleChange(event)} />
            <span>{this.state.infoMessage}</span>
            <span>{this.state.idMessage}</span>
            <button type="submit">Submit</button>
            


          </form>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default CreateGroup;
