import React, { Component } from 'react';
import profile from '../lib/profile-service';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      isDeleted: false
    }
  }
  
  handleFlip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  }

  handleDelete = () => {
    this.setState({isDeleted: true});
    let groupId = this.props.props.match.params.id;
    let cardId = this.props.card._id;
    profile.deleteCard(groupId, cardId)
      .then(() => {
        this.props.getNewDeck(groupId)
      })
  }

componentDidMount(){
  this.setState({isDeleted: true});
}

  render() {
    const {card} = this.props;
    return (
      <div>
        <div className="single-flashcard-container" key={card._id}>
          <div className={this.state.isFlipped ? 'card-flip-motion single-flashcard' : 'single-flashcard'}>

            <div className="single-flashcard-front">
              <h3>QUESTION</h3>
              <p>{card.frontText}</p>
              <div className="card-button-container">
                <button onClick={(event) => {
                this.handleDelete(event, card._id);
              }}>DELETE</button>
                <button onClick={this.handleFlip}>FLIP</button>
              </div>
              
            </div>

            <div className="single-flashcard-back">
              <h3>ANSWER</h3>
              <p>{card.backText}</p>
              <div className="card-button-container">
                <button onClick={(event) => {
                this.handleDelete(event, card._id);
              }}>DELETE</button>
                <button onClick={this.handleFlip}>FLIP</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCard;