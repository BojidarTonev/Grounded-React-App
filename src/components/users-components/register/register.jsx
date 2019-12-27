import React, { Component } from "react";
import "../../../shared/styles/login-and-register.css";

import * as yup from "yup";
import usersService from "../../../services/users-service";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      rePassword: ""
    };
  }

  submitHandler = e => {
    e.preventDefault();

    const { username, password, rePassword, email } = this.state;

    usersService.register(username, password, rePassword, email);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { username, password, rePassword, email } = this.state;

    return (
      <div className="form-wrapper">
        <div className="form">
          <form onSubmit={this.submitHandler}>
            <fieldset>
              <legend>Register</legend>

              <label htmlFor="email">Your email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />

              <label htmlFor="username">Your username:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />

              <label htmlFor="rePassword">Confirm password:</label>
              <input
                type="password"
                name="rePassword"
                value={rePassword}
                onChange={this.handleChange}
              />

              <button type="submit" className="submit-button">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

const validators = yup.object({
  username: yup
    .string("Username should be a string")
    .required("Username is required")
    .min(4, "Username should be more than 4 characters"),

  password: yup
    .string("Password should be a string")
    .required("Password field is required!")
    .min(6, "Password should contain more than 6 symbols"),

  rePassword: yup
    .string("Re-password must be a string")
    .required("Re-password is requried!")
    .oneOf([yup.ref("password"), ""], "Password dont match!")
});

const schema = yup.object().shape(validators);

export default Register;
