import React, { Component } from 'react';

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
      <div>
        <div className="frontCard">
          <textarea name="frontCard" id="frontCard" cols="30" rows="10"></textarea>
        </div>
        <div className="backCard">
          <textarea name="backCard" id="backCard" cols="30" rows="10"></textarea>
        </div>
      </div>
    );
  }
}

export default CreateCard
;