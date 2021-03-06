import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import '../stylesheets/signup.css';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, firstName, lastName, email } = this.state;
    this.props.signup({ username, password, firstName, lastName, email });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, firstName, lastName, email } = this.state;
    return (
      <div className="signup-page">
        <div className="signup-content">
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
