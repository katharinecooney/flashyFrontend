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
        isFlipped: false,
        isCodeRevealed: false
      }
  }

  handleSave = (event, cardId) => {
    const groupId = this.props.match.params.id;
    group.saveCard(groupId, cardId);
  }

  handlePassCodeReveal = () => {
    this.setState({
      isCodeRevealed: !this.state.isCodeRevealed
    })
  }

  componentDidMount(){
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
              <SingleCard props={this.props} card={card} key={card._id}/>
            )
          })
      ) 
      : 
      (<div className="empty-message">No flashcards created</div>)

      return (
        <div className="single-group-page">
          <div className="banner">
            <h1>{school}</h1>
            <h3>{subject}</h3>
                
            <div className="banner-button-container">
              <Link to={{
                pathname: '/group/' + groupId + '/new-card'
              }}>
              <p>Add New Card</p>
              </Link>
              {
                this.state.isCodeRevealed ? (<p className="passcode" onClick={this.handlePassCodeReveal}>{groupId}</p>) : (
                  <p onClick={this.handlePassCodeReveal}>Get Group Code</p>
                )
              }
            </div>
          </div>

          <div className={this.state.isFlipped ? "container card-flip-motion" : "container"}>
            <div>{groupDeckCards}</div>
          </div>

          <Navbar />
        </div>
      );
    }
}

export default SingleGroup;