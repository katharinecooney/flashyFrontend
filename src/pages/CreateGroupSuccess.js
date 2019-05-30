import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CreateGroupSuccess.css';

class CreateGroupSuccess extends Component {

  state = {
    text: '',
    isCopied: false
  }

  handleCopy = (event) => {
    console.log(event.target.innerHTML);
    navigator.clipboard.writeText(event.target.innerHTML);
    this.setState({
      text: event.target.innerHTML,
      isCopied: true
    })
  }

  render () {
    return (
      <div className="create-group-success-page">
        <div className="create-group-success-banner">
          <h1>A study group for {this.props.location.state.nameOfClass} has been created! </h1>
        </div>
        <div className="create-group-success-container">
          <div className="create-group-success-content">
            <h3>The passcode is <span onTouchStart={this.handleCopy} text={this.state.value}>{this.props.location.state.passcode}</span></h3>
            <Link to="/group/join-group"><button>Join the Group!</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateGroupSuccess;
