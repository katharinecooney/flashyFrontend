import React, { Component } from 'react';
// import axios from 'axios';
import group from '../lib/group-service';
import {Link} from 'react-router-dom';
import '../stylesheets/singleGroup.css';
import Navbar from '../components/Navbar';
import SingleCard from '../components/SingleCard';

class SingleGroup extends Component {
  constructor(props){
    super(props);
      this.state = {
        groupId: '',
        school: '',
        subject: '',
        flashcards: [],
        isFlipped: false
      }
  }

  handleSave = (event, cardId) => {
    const groupId = this.props.match.params.id;
    group.saveCard(groupId, cardId);
  
  }

  componentDidMount(){
    console.log('component did mount', this.state)
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
      const groupDeckCards = flashcards.length ? (
        flashcards.map(card => {
          return (
              <SingleCard card={card}/>
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
            <p>Add New Card</p>
            </Link>
          </div>
          <div className={this.state.isFlipped ? "group-container card-flip-motion" : "group-container"}>
            <div>{groupDeckCards}</div>
          </div>
          <Navbar />
        </div>
      );
    }
}

export default SingleGroup;