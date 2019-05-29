import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import group from '../lib/group-service';

class UpdateCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frontText: '',
      backText: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    let {name, value} = event.target
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let cardId = this.props.match.params.cardId;
    let groupId = this.props.match.params.groupId;

    console.log('cardId ', cardId, 'groupId', groupId, 'card content', this.state);

    group.updateCard(cardId, groupId, this.state)
    .then((newCard)=> {
      console.log(newCard);
      this.setState({
        frontText: '',
        backText: ''
      }, this.props.history.push('/group/' + groupId))
    })    
  }    
      render () {
        return (
          <div className="create-card-page">
            <div className="create-card-banner">
              <h1>Update Card</h1>
            </div>
            <div className="create-card-container">
              <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="frontText">Enter Your Question</label>
                <textarea onChange={this.handleChange} name="frontText" id="frontText" >
                </textarea>
                <label htmlFor="backText">Enter Your Answer</label>
                <textarea onChange={this.handleChange} name="backText" id="backText">
                </textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
            <Navbar />
          </div>
        );
      };

}

export default UpdateCard;
