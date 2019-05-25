import React, { Component } from 'react';
import axios from 'axios';
import group from '../lib/group-service';

class SingleGroup extends Component {
  state = {
    school: '',
    subject: '',
    flashcards: []
  }

  componentDidMount(){
    group.viewGroup(this.props.match.params.id)
      .then(group => this.setState({
        school: group.school,
        subject: group.subject,
        flashcards: group.groupDeck
      })  
    )
  }

  render () {
    const {school, subject, flashcards} = this.state;
    const groupDeckCards = flashcards.length ? (
      flashcards.map(card => {
        return (
          <div>
            <p>{card.frontText}</p>
            <p>{card.backText}</p>
          </div>
        )
      })
    ) : (<div>No flashcards saved</div>)
    return (
      <div>
        <h1>{school}</h1>
        <h3>{subject}</h3>
        <h3>{groupDeckCards}</h3>
      </div>
    );
  }
}

export default SingleGroup;