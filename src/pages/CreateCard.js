import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/createCard.css';
import group from '../lib/group-service';

class CreateCard extends Component {
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
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {frontText, backText } = this.state;
    let groupId = this.props.match.params.id;
    group.createCard(this.state, groupId)
    .then((newCard)=> {
      console.log(newCard);
      this.setState({
        frontText: '',
        backText: ''
      })
    })    
  }

  render () {
    return (
      <div className="create-card-page">
        <div className="create-card-banner">
          <h1>Create Card</h1>
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
      

        {/* <div className='create-card-container'>
          <div className="frontCard">
            <h3>Enter Your Question</h3>
            <textarea name="frontCard" id="frontCard" cols="30" rows="10"></textarea>
          </div>
          <div className="backCard">
            <h3>Enter Your Answer</h3>
            <textarea name="backCard" id="backCard" cols="30" rows="10"></textarea>
          </div>
        </div> */}
        <Navbar />
      </div>
    );
  }
}

export default CreateCard
;