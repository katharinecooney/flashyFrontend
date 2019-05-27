import React, { Component } from 'react';
import axios from 'axios';
import group from '../lib/group-service';
import {Link} from 'react-router-dom';
import '../stylesheets/singleGroup.css';
import Navbar from '../components/Navbar';

class SingleGroup extends Component {
  constructor(props){
    super(props);
      this.state = {
        groupId: '',
        school: '',
        subject: '',
        flashcards: [],
      }
  }

  handleSave = (event, cardId) => {
    
    const groupId = this.props.match.params.id;
    
    group.saveCard(groupId, cardId);
   
  }
 
  // saveCard (groupId, cardId) {
  //   return this.group
  //     .put(`/group/${groupId}/card/${cardId}/save`)
  //     .then(({ data }) => data);
  // }

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
            <div className="group-flashcard" key={card._id}>
              <p>{card.frontText}</p>
              <p>{card.backText}</p>
              <button onClick={(event) => {
                this.handleSave(event, card._id)
                }}>SAVE</button>
            </div>
          )
        })
    ) 
    : 
    (<div>No flashcards saved</div>)
    
    return (
      <div className="single-group-page">
        <div className="single-group-banner">
          <h1>{school}</h1>
          <h3>{subject}</h3>
          <Link to={{
            pathname: '/group/' + groupId + '/new-card'
          }}>
          <span>Add New Card</span>
          </Link>
        </div>
        <div className="group-flashcard-container">
          <h3>{groupDeckCards}</h3>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default SingleGroup;