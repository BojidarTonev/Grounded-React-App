import React, { Component } from "react";
import RadioButton from "../radio-button-component/radio-button";
import axios from "axios";
import "./music-search-form.css";

class MusicSearchForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchValue: ""
        }
    }

  onDataGot = function(data) {
    this.props.onDataGot(data)
  };

  handleClick(e) {
    e.preventDefault();
    this.props.onSearchClick(e);

    let _this = this;
    axios.get(`http://localhost:9000/tracks/all`).then(function(res) {

      _this.onDataGot(res.data)
    });
  }

  render() {
    return (
      <div className="music-search-bar">
        <form action="get">
          <input type="text" placeholder="search..." />
          <RadioButton title="Artists"/>
          <RadioButton title="Albums" />
          <RadioButton title="Tracks" />
          <button type="submit" className="search-events-button" onClick={this.handleClick.bind(this)}>
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default MusicSearchForm;
