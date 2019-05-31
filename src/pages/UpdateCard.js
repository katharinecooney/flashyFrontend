import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import group from '../lib/group-service';

class UpdateCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frontText: this.props.location.state.card.frontText,
      backText: this.props.location.state.card.backText,
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
    group.updateCard(groupId, cardId, this.state)
    .then((newCard)=> {
      this.setState({
        frontText: '',
        backText: ''
      }, this.props.history.push('/group/' + groupId))
    })    
  }    
      render () {
        const {frontText, backText} = this.state
        return (
          <div className="create-card-page">
            <div className="create-card-banner">
              <h1>Update Card</h1>
            </div>
            <div className="create-card-container">
              <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="frontText">Enter Your Question</label>
                <textarea value={frontText} onChange={this.handleChange} name="frontText" id="frontText" >
                </textarea>
                <label htmlFor="backText">Enter Your Answer</label>
                <textarea value={backText} onChange={this.handleChange} name="backText" id="backText">
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
