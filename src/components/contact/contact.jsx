import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      selectOptions: [
        {key: "become-part", value: "I want to become part of Grounded"},
        {key: "information-incorrect", value: "Information about event is incorrect"},
        {key: "buying", value: "I am interested in buying smth from you"},
        {key: "bug-report", value: "I want to report a bug"},
        {key: "other", value: "Other"}
      ]
    };
  }

  submitHandler = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    var { name, email, message, selectOptions } = this.state;
    return (
      <div className="contact-form">
        <form action="post" onSubmit={this.submitHandler}>
          <h2>Keep in touch</h2>
          <i className="fas fa-mail-bulk"></i>
          <div className="form-first-inputs">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              placeholder="My name is.."
              value={name}
              onChange={this.handleChange}
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="My email is.."
            />
          </div>
          <div className="form-second-inputs">
            <select name="selectMenu" id="">
              {
                selectOptions ? selectOptions.map(so => (
                  <option value={so.key}>{so.value}</option>   
                ))
                : ""
              }
            </select>
            <textarea name="messageArea" cols="30" rows="10" onChange={this.handleChange} value={message} placeholder="My message.."></textarea>
          </div>
          <button type="submit">Send meesage</button>
        </form>
        <div className="second-contact-part">
              <div className="become-part-contact">
                <div className="become-part-info-wrapper">
                  <p>FEEL LIKE TALENTED DJ?</p>
                  <a href="">JOIN US</a>
                </div>
              </div>
              <div className="find-us-online">
                <ul>
                  <li>
                    <i class="fas fa-phone"></i>
                    <div className="side-info">
                      <p>Call us now</p>
                      <small>08976652875</small>
                    </div>
                  </li>
                  <li>
                    <i class="fab fa-facebook"></i>
                    <div className="side-info">
                      <p>Visit our Facebook</p>
                      <a href=""><small>link to page</small></a>
                    </div>
                  </li>
                  <li>
                    <i class="fab fa-spotify"></i>
                    <div className="side-info">
                      <p>Find us on Spotify</p>
                      <a href=""><small>link to page</small></a>
                    </div>
                  </li>
                </ul>
              </div>
        </div>
      </div>
    );
  }
}

export default Contact;
