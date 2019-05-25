import React, { Component } from 'react';
import group from '../lib/group-service';


class JoinGroup extends Component {
  
  state = {
    passcode: '',
    groupId: ''
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let {passcode} = event.target;
    console.log(event.target)

    group.joinGroup(this.state)
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
    }, () => {console.log(this.state)}
    )
  }



  render () {
    return (
      <div>
        <h1>Join a Group!</h1>
        <form onSubmit={this.handleSubmit}>
        <input style={this.styles} type="text"  name="passcode" placeholder="passcode" value={this.state.passcode} onChange={(event) => this.handleChange(event)}/>
        <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default JoinGroup;
