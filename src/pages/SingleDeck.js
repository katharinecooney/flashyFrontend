import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/singleDeck.css';
import ProfileCard from '../components/ProfileCard';
import profile from '../lib/profile-service';
import {withAuth} from '../lib/AuthProvider';
import auth from '../lib/auth-service'

class SingleDeck extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cardContent: '',
      groups: null,
      loading: true,
    };
  }

  handleFlip = () => {
    this.setState({isFlipped: !this.state.isFlipped}, console.log('handle flip', this.state));
  }

  componentDidMount () {
    const {groups} = 
    this.props.location.state;
    auth.me()
    .then((user) => {
      console.log(user)
      user.groups.forEach((eachGroup) => {
        if(groups.group._id === eachGroup.group._id) {
          this.props.location.state.groups = eachGroup;
          this.setState({
            groups: eachGroup,
            loading: false,
          })
        }
      })
    })
    
  }

  getNewDeck = (groupId) => {
    auth.me()
    .then((user) => {
      console.log(user)
      user.groups.forEach((eachGroup) => {
        if(groupId === eachGroup.group._id) {
          this.props.location.state.groups = eachGroup;
          this.setState({
            groups: eachGroup,
            loading: false,
          })
        }
      })
    })
  }

  

  render () {
    const {loading} = this.state;
    if (!loading) {
      const { userDeck } = this.state.groups;
      const { subject } = this.state.groups.group;
      return (
        <div className="single-deck-page">
          <div className="single-deck-banner">
            <h1>View Your Notes for {subject}</h1>
          </div>
  
          <div className={this.state.isFlipped ? 'single-container card-flip-motion' : 'single-container'}>
  
            {userDeck.map(card => {
              return (
                <ProfileCard props={this.props} getNewDeck={this.getNewDeck} card={card} />
              );
            })}
  
          </div>
          <Navbar />
        </div>
      );
    } else {
      return null
    }
  }
}

export default withAuth(SingleDeck);
