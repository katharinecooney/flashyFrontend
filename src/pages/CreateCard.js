import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/createCard.css';

class CreateCard extends Component {
  state = {
    frontText: '',
    backText: ''
  }


  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let {school, subject, passcode } = event.target;

  //   group.createGroup(this.state)
  //   .then((newGroup)=> {
  //     console.log(newGroup);
  //     this.setState({
  //       school: '',
  //       subject: '',
  //       passcode: ''
  //     })
  //   })    
  // }

  // handleChange = (event) => {
  //   event.preventDefault();
  //   let {name, value} = event.target
  //   this.setState({
  //     [name]: value
  //   });
  // }

  render () {
    return (
      <div className="create-card-page">
        <div className="create-card-banner">
          <h1>Create Card</h1>
        </div>

      <div className="create-card-container">
        <form>
          <label htmlFor="frontText">Enter Your Question</label>
          <textarea name="frontText" id="frontText" >
          </textarea>
          <label htmlFor="backText">Enter Your Answer</label>
          <textarea name="backText" id="backText">
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