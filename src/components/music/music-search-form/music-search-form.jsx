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

  handleRadioStyling = function() {
    let radioBtnArr = document.getElementsByName('button'); 
    radioBtnArr.forEach(btn => {
      let labelIcon = btn.nextSibling.children[0];
      let parentDiv = btn.parentElement;
      btn.checked ? parentDiv.classList.remove("declined") : parentDiv.classList.add("declined");
      if(btn.checked) {
        labelIcon.classList.add("fa-check");
        labelIcon.classList.remove("fa-times");
      }
      else {
        labelIcon.classList.remove("fa-check");
        labelIcon.classList.add("fa-times");
      }
    });
  }

  render() {
    return (
      <div className="music-search-bar">
        <form action="get">
          <input type="text" placeholder="search..." />
          <RadioButton title="Artists" name="button" value="Artists" styleChangedHandler={this.handleRadioStyling} />
          <RadioButton title="Albums" name="button" value="Albums" styleChangedHandler={this.handleRadioStyling} />
          <RadioButton title="Tracks" name="button" value="Tracks" styleChangedHandler={this.handleRadioStyling} />
          <button type="submit" className="search-events-button" onClick={this.handleClick.bind(this)}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default MusicSearchForm;
