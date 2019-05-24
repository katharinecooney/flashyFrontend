import React, { Component } from 'react';

class CreateGroup extends Component {
  state = {
    school: '',
    subject: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let {school, subject} = event.target;
    this.setState({
      school: '',
      subject: ''
    })
    
  }

  handleChange = (event) => {
    event.preventDefault();
    let {name, value} = event.target
    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }
  
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input name="school" type="text" placeholder="school" value={this.state.school} onChange={(event) => this.handleChange(event)} />
        <input name="subject" type="text" value={this.state.subject} placeholder="subject" onChange={(event) => this.handleChange(event)} />
        </form>
      </div>
    );
  }
}

export default CreateGroup;
