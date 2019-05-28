import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/singleDeck.css';
import ProfileCard from '../components/ProfileCard';

class SingleDeck extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cardContent: ''
    };
  }

  handleFlip = () => {
    this.setState({isFlipped: !this.state.isFlipped}, console.log('handle flip', this.state));
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

        <div className={this.state.isFlipped ? 'single-container card-flip-motion' : 'single-container'}>

          {userDeck.map(card => {
            return (
              <ProfileCard card={card} />
            );
          })}

        </div>
        <Navbar />
      </div>
    );
  }
}

export default SingleDeck;
