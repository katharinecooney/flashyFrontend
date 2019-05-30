import React, { Component } from 'react';
import group from '../lib/group-service';
import { withAuth } from '../lib/AuthProvider';
import {Link} from 'react-router-dom';

class Card extends Component {
  state = {
    isFlipped: false,
    isCardSaved: false

  }

  componentDidMount(){
    console.log('PROPS', this.props)
  }

  handleFlip = () => {
    this.setState({isFlipped: !this.state.isFlipped}, console.log('handle flip', this.state));
  }

  handleSave = (event, cardId) => {
    const groupId = this.props.props.match.params.id;
    group.saveCard(groupId, cardId)
      .then((response)=>{
        console.log(response);
      })
  }

  render () {
    
    const {card} = this.props;
    return (
      <div className="group-flashcard-container" key={card._id}>
        <div className={this.state.isFlipped ? "card-flip-motion group-flashcard" : "group-flashcard"}>
          
          <div className="group-flashcard-front">
            <h3>QUESTION</h3>
            <p>{card.frontText}</p>
            <div className="card-button-container">

              <button onClick={(event) => {
                this.handleSave(event, card._id)
                }}>SAVE</button>

              <button onClick={this.handleFlip}>FLIP</button>
              <Link to={{pathname: `/group/${this.props.props.match.params.id}/card/${this.props.card._id}/update`, state:{card}}}><button>EDIT</button></Link>
            </div>
            
          </div>

          <div className="group-flashcard-back">
            <h3>ANSWER</h3>
            <p>{card.backText}</p>
            <div className="card-button-container">
              
              <button onClick={(event) => {
                this.handleSave(event, card._id)
                }}>SAVE</button>

              <button onClick={this.handleFlip}>FLIP</button>
              <Link to={{pathname: `/group/${this.props.props.match.params.id}/card/${this.props.card._id}/update`, state:{card}}}><button>EDIT</button></Link>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Card);
