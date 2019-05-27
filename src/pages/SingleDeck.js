import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/singleDeck.css';

class SingleDeck extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cardContent: ''
    };
  }

  componentDidMount () {
    console.log(this.props.location.state);
  }

  render () {
    const { userDeck } = this.props.location.state.groups;
    const { subject } = this.props.location.state.groups.group;
    return (
      <div className="single-deck-page">
        <div className="single-deck-banner">
          <h1>View Your Notes for {subject}</h1>
        </div>
        <div className="personal-card-container">
          {userDeck.map(deck => {
            return (
              <div className="personal-flashcard">
                <h3>QUESTION</h3>
                <p key={deck._id}>{deck.frontText}</p>
              </div>
            );
          })}
        </div>

        <Navbar />
      </div>
    );
  }
}

// import React from 'react';
// import Navbar from '../components/Navbar';

// function SingleDeck (props) {
//   state = {
//     cardContent: ''
//   };

//   const { userDeck } = props.location.state.groups;
//   console.log(props.location.state);
//   return (
//     <div>
//       <h1>View Your Notes for {props.location.state.groups.group.subject}</h1>
//       {userDeck.map(deck => {
//         return (<p key={deck._id}>{deck.frontText}</p>);
//       })}
//       <Navbar />
//     </div>
//   );
// }

export default SingleDeck;
