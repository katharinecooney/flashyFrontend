import React, { Component } from 'react'

class ProfileCard extends Component {
  state = {
    isFlipped: false,
  }

  handleFlip = () => {
    this.setState({isFlipped: !this.state.isFlipped}, console.log('handle flip', this.state));
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
              <button onClick={(event) => {
                this.handleSave(event, card._id);
              }}>SAVE</button>
              <button onClick={this.handleFlip}>FLIP</button>
            </div>

            <div className="single-flashcard-back">
              <h3>ANSWER</h3>
              <p>{card.backText}</p>
              <button onClick={(event) => {
                this.handleSave(event, card._id);
              }}>SAVE</button>
              <button onClick={this.handleFlip}>FLIP</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCard;