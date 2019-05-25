import React, { Component } from 'react';
import axios from 'axios';
import group from '../lib/group-service';

class SingleGroup extends Component {
  state = {
    school: '',
    subject: '',
    flashcard: ''

  }

  componentDidMount(){
    // console.log(this.props.match)
    group.viewGroup(this.props.match.params.id)
      .then(group => this.setState({
        school: group.school,
        subject: group.subject
      }))
  }

  render () {
    const {school, subject, flashcard} = this.state;
    return (
      <div>
        <h1>{school}</h1>
        <h3>{subject}</h3>
      </div>
    );
  }
}

export default SingleGroup
;