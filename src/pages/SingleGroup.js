import React, { Component } from 'react';
import axios from 'axios';
import group from '../lib/group-service';
import {Link} from 'react-router-dom';

class SingleGroup extends Component {
  constructor(props){
    super(props);
      this.state = {
        groupId: '',
        school: '',
        subject: '',
        flashcards: []
      }
  }

  handeRouteChange = (event) => {
    event.preventDefault();
    const {groupId} = this.state;
    const {cardId} =  this.props;
    group.saveCard(groupId, cardId)
    .then(console.log('saved card!'))
    
  }
 
  componentDidMount(){
    console.log(this.state)
    group.viewGroup(this.props.match.params.id)
      .then(group => this.setState({
        school: group.school,
        subject: group.subject,
        flashcards: group.groupDeck,
        groupId: group._id
      })  
    )
  }

  

  render () {
    const {school, subject, flashcards, groupId} = this.state;
    console.log(school, subject, flashcards, groupId)
    const groupDeckCards = flashcards.length ? (
      flashcards.map(card => {
        return (
          <div style={{border: '1px solid black', marginBottom: '20px'}} key={card._id}>
            <p>{card.frontText}</p>
            <p>{card.backText}</p>
            <button>SAVE</button>
          </div>
        )
      })
    ) 
    : 
    (<div>No flashcards saved</div>)
    
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