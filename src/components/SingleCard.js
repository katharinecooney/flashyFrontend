import React, { Component } from 'react';
import group from '../lib/group-service';

class Card extends Component {
  state = {
    isFlipped: false,
  }

  componentDidMount(){
    console.log(this.props.props.match.params.id)
  }

  handleFlip = () => {
    this.setState({isFlipped: !this.state.isFlipped}, console.log('handle flip', this.state));
  }

  handleSave = (event, cardId) => {
    const groupId = this.props.props.match.params.id;
    group.saveCard(groupId, cardId);
  
  }
  
  render () {
    const {card} = this.props;
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
    );
  }
}

export default Card;
