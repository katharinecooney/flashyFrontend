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
        isFlipped: false
      }
  }

  handleSave = (event, cardId) => {
    const groupId = this.props.match.params.id;
    group.saveCard(groupId, cardId);
  
  }

  handleFlip = () => {
    this.setState({isFlipped: !this.state.isFlipped}, console.log('handle flip', this.state));
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

  // render(){
  //   return(
      
  //    <div className={this"flip-card"}>
  //     <div className="flip-card-inner">
  //       <div className="flip-card-front">
  //         <h1>hi</h1>
  //         <button onClick={this.handleFlip}>flip</button>
  //       </div>
  //       <div className="flip-card-back">
  //         <h1>bye</h1>
  //         <button onClick={this.handleFlip}>flip</button>
  //       </div>
  //     </div>
  //   </div>
  //   )
  // }

  render () {
      const {school, subject, flashcards, groupId, isFlipped} = this.state;
      const groupDeckCards = flashcards.length ? (
        flashcards.map(card => {
          return (
            <div className="group-flashcard-container" key={card._id}>
              <div className={this.state.isFlipped ? "card-flip-motion group-flashcard" : "group-flashcard"}>
                
                <div className="group-flashcard-front">
                  <h3>QUESTION</h3>
                  <p>{card.frontText}</p>
                  <button onClick={(event) => {
                    this.handleSave(event, card._id)
                    }}>SAVE</button>
                  <button onClick={this.handleFlip}>FLIP</button>
                </div>
  
                <div className="group-flashcard-back">
                  <h3>ANSWER</h3>
                  <p>{card.backText}</p>
                  <button onClick={(event) => {
                    this.handleSave(event, card._id)
                    }}>SAVE</button>
                  <button onClick={this.handleFlip}>FLIP</button>
                </div>
              </div>
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
          <div className={this.state.isFlipped ? "group-container card-flip-motion" : "group-container"}>
            <div>{groupDeckCards}</div>
          </div>
          <Navbar />
        </div>
      );
    }
}

export default SingleGroup;